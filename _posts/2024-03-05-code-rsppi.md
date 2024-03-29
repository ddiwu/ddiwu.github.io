---
layout: post
title: a post with automatic report ip
date: 2024-03-05 15:09:00
description: automatically report the ip in ubuntu rsp-pi
tags: formatting code
categories: sample-posts
---

# Code
First, you should write some code including .py, .json and .sh. 
You should put two py and json files in the same dir.

## easyjson.py

```python
#!/usr/bin/env python3
#-*-coding: utf-8-*-
import json
import time

class easyJson():
    """Class that loads hyperparameters from a json file.
        Example:
        ```
        params = easyjson(json_path)
        print(params.learning_rate)
        params.learning_rate = 0.5  # change the value of learning_rate in params
        ```
        """
    def __init__(self, json_path):
        with open(json_path) as f:
            params = json.load(f) 
            self.__dict__.update(params)

    def save(self, json_path):
        with open(json_path, 'w') as f:
            json.dump(self.__dict__, f, indent=4)

    def update(self, json_path):
        """Loads parameters from json file"""
        with open(json_path) as f:
            params = json.load(f)
            self.__dict__.update(params)

    @property 
    def dict(self):
        """Gives dict-like access to Params instance by `params.dict['learning_rate']"""
        return self.__dict__
class DictObj(object):
    def __init__(self,map):
        self.map = map

    def __setattr__(self, name, value):
        if name == 'map':
             object.__setattr__(self, name, value)
             return
        print('set attr called ' + name + value)
        self.map[name] = value

    def __getattr__(self,name):
        v = self.map[name]
        if isinstance(v,(dict)):
            return DictObj(v)
        if isinstance(v, (list)):
            r = []
            for i in v:
                r.append(DictObj(i))
            return r
        else:
            return self.map[name];

    def __getitem__(self,name):
        return self.map[name]


if __name__ == '__main__':
    parameters = {"SEED": 1,
                  "dataset": "Omniglot",
                  "meta_lr": 1e-3,
                  "num_episodes": 5000,
                  "num_classes": 5,
                  "num_samples": 1,
                  "num_query": 10,
                  "num_steps": 100,
                  "num_inner_tasks": 8,
                  "num_train_updates": 1,
                  "num_eval_updates": 1,
                  "save_summary_steps": 100,
                  "num_workers": 1
                  }
    json_str = json.dumps(parameters, indent=4)

    with open('params.json', 'w') as f:  
        f.write(json_str)

    params = easyJson('params.json')
    params.SEED = 2   
    params.save('params.json')  
```

## getwlanip.py
```python
#! /usr/bin/env python3
# -*- coding: utf-8 -*-
import socket
import time
import datetime
import smtplib
import urllib.request
import importlib
from easyjson import *
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.utils import formataddr
import sys
#import requests
#reload(sys)
importlib.reload(sys)
#sys.setdefaultencoding('utf-8')
def check_network():
    while True:
#        result=urllib.request.urlopen('http://baidu.com').read()
#        print(result)
        try:
            result=urllib.request.urlopen('https://www.baidu.com').read()
#            print(result)
            print("Network is Ready!")
            break
        except Exception as e:
            print(e)
            print("Network is not ready,Sleep 5s...")
            time.sleep(5)
    return True
def get_ip_address():
    s =socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
    s.connect(("1.1.1.1",80))
    ipaddr=s.getsockname()[0]
    s.close()
    return ipaddr

def sendEmail():
    ret=True
    ipaddr=str(get_ip_address());
    configJsons=easyJson(configpath)
    if ipaddr==configJsons.oldip:
        msgbody='%s%s%s%s%s%s%s' % ('\n\n', piname, 'ip is the same,with ', ipaddr , ' ,history: ' , configJsons.date ,'\nadding new wifi info. you should\"cd /etc/wpa_supplicant # vi wpa_supplicant.conf\"')
        subjectPrefix=piname +' WLAN IP no change'
    else:
        msgbody='%s%s%s%s%s%s%s%s%s' % (' \n\n', piname ,'new ip is ', ipaddr ,' .\n old ip is' , configJsons.oldip , ',history:' , configJsons.date , '\n\napaty from SSH ip, you should change DNS\'vi /etc/dnsmasq.conf\' listen-address=\nadding new wifi info. you should\"cd /etc/wpa_supplicant# vi wpa_supplicant.conf\"')
        subjectPrefix='!!!'+ piname +' WLAN IP change'
    cur=datetime.datetime.now()
    configJsons.date='%s%s%s%s%s%s%s%s%s' % (cur.year , '/' , cur.month , '/' , cur.day , ' ' , cur.hour , ':' , cur.minute    )
    configJsons.oldip=ipaddr
    configJsons.save(configpath)
#    configJsons.save("/home/ubuntu/pythonScripts/wlanIPconfig.json")
    try:
        print('sending')
        msg=MIMEText(msgbody,'plain','utf-8')
        msg['From']=formataddr(["usr",sender_name])
        msg['To']=formataddr(["reciever",receiver])
        cur=datetime.datetime.now()
        msg['Subject']='%s%s%s%s%s%s%s%s%s%s%s' % ( subjectPrefix , '-' , cur.year , '/' , cur.month , '/' , cur.day , ' ' , cur.hour , ':' , cur.minute)
        server=smtplib.SMTP_SSL(sender_server,sender_port)
        server.login(sender_name,sender_passwd)
        server.sendmail(sender_name,[receiver,],msg.as_string())
        server.quit()
        print('finish')
######optional tg
#        print('send tg')
#        pushform={'text':msgbody}
#        params = json.dumps(pushform)
#        params = bytes(params, 'utf8')
#        headers={'Accept-Charset': 'utf-8', 'Content-Type': 'application/json','User-Agent':'Mozilla/5.0 3578.98 Safari/537.36'}
#        resp=urllib.request.Request(url=tgpushurl,data=params,headers=headers,method='POST')
#        response = urllib.request.urlopen(resp).read()
#        ret=True
#        print('finish')
######
    except Exception as e:
        print(e)
        ret=False

if  __name__ == '__main__' :
    piname="wd-pi"
    configpath="/usr/local/report_py/wlanIPconfig.json"
    sender_name='3271391891@qq.com'
    sender_passwd="################" # SMTP pass number
    sender_server="smtp.qq.com"
    sender_port=465
    receiver='wd3271391891@mail.ustc.edu.cn'
#    tgpushurl='optional'
    check_network()
    time.sleep(5)
    sendEmail()
```

## wlanIPconfig.json
```json
{
    "date": "2024/3/5 13:20",
    "oldip": "100.65.9.3"
}
```
This is a file about the last update data.

##  getwlanip.sh
```bash
#!/bin/sh -e
cd /usr/local/report_py/
sudo python3 getwlanip.py
```

# Privilige
You'd better write a **rc-local.service** in /etcsystemd/system/

```
[Unit]
Description=/etc/rc.local Compatibility
ConditionPathExists=/etc/rc.local

[Service]
Type=forking
ExecStart=/etc/rc.local start
TimeoutSec=0
StandardOutput=tty
RemainAfterExit=yes
SysVStartPriority=99

[Install]
WantedBy=multi-user.target
```

And write them in terminal.
```
sudo chmod 777 .py
sudo chmod 777 getwlanip.sh
sudo chmod +x /etc/rc.local
sudo systemctl start rc-local.service
sudo systemctl enable rc-local.service
```
