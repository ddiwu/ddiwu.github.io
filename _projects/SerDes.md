---
layout: page
title: SerDes
description: Testing and analysis of a SerDes prototype chip
img: assets/img/SerDes.png
importance: 1
category: past
---

## Overview

This project involves the testing and analysis of a **SerDes prototype chip** based on the 180 nm CMOS process. The primary focus is to evaluate the chip's performance under different configurations and ensure optimal functionality.

<div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/SerDes.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>

---

## SerDes Structure

- **Transmitter (Tx):**  
  - Encoder, PLL, Serializer  
- **Receiver (Rx):**  
  - Clock Data Recovery (CDR), Deserializer, Decoder  
- **Equalizer:**  
  - Ensures signal integrity  
- **Clock Data Recovery (CDR):**  
  - Recovers clock from data flow  

---

## Methodology

1. Configure and verify the normal operation of the chip.
2. Adjust changeable parameters to achieve the best performance.
3. Send **Pseudo-Random Binary Sequence (PRBS)** codes.
4. Measure relevant performance metrics using test platforms and analysis tools.

### Test Platform Components:
- **Logic Control:** Configure via serial machine codes.
- **DAC:** Controls voltage of the VCO for CDR functionality.
- **ASIC Equalizer Configuration:** Adjust signal integrity parameters.
- **AD9522 PLL:** Configures the reference clock.
- **PRBS Code Generator:** Built-in generator to send parallel pseudo-random codes.

### Software Analysis:
Analyze the resulting data, including error rates and signal quality.

---

## Results

### Eye Diagram Analysis:
- Evaluates signal quality.
- Reflects interference and jitter.
- Helps determine the optimal sampling time.

---

## Images and Captions

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/SerDes_test_setup.png" title="Test setup for SerDes prototype chip" class="img-fluid rounded z-depth-1" width="300px" height="200px" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/SerDes_eye_diagram.png" title="Eye diagram measurement" class="img-fluid rounded z-depth-1" width="600px" height="500px" %}
    </div>
</div>

<div class="caption">
    Left: Test platform setup showcasing equipment and connections.  
    Right: Measured eye diagram highlighting signal quality and interference.
</div>

---

## Takeaway

The test results provide insights into the signal quality and overall performance of the SerDes chip. The findings help improve the prototype for future iterations and refine the design for better efficiency and signal integrity.