// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "My pubs",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "My past and on-going projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is my resume.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-the-introduction-to-pdf",
        
          title: "The Introduction to PDF",
        
        description: "Why we cannot copy words in pdf so easily?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pdf_principal/";
          
        },
      },{id: "post-automatically-report-ip",
        
          title: "Automatically report ip",
        
        description: "automatically report the ip in ubuntu rsp-pi",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code/";
          
        },
      },{id: "post-vega-lite",
        
          title: "Vega Lite",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-code-diff",
        
          title: "Code Diff",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-advanced-images",
        
          title: "Advanced Images",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-geojson-map",
        
          title: "Geojson Map",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-echarts",
        
          title: "Echarts",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-chartjs",
        
          title: "Chartjs",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-tikzjax",
        
          title: "Tikzjax",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/photo-gallery/";
          
        },
      },{id: "post-post-bibliography",
        
          title: "Post Bibliography",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-jupyter-notebook",
        
          title: "Jupyter Notebook",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tabs/";
          
        },
      },{id: "post-sidebar-table-of-contents",
        
          title: "Sidebar Table Of Contents",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-audios",
        
          title: "Audios",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-videos",
        
          title: "Videos",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-table-of-contents",
        
          title: "Table Of Contents",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-giscus-comments",
        
          title: "Giscus Comments",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-redirect",
        
          title: "Redirect",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/redirect/";
          
        },
      },{id: "post-diagrams",
        
          title: "Diagrams",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-twitter",
        
          title: "Twitter",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-github-metadata",
        
          title: "Github Metadata",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/github-metadata/";
          
        },
      },{id: "post-distill",
        
          title: "Distill",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/distill/";
          
        },
      },{id: "post-math",
        
          title: "Math",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-disqus-comments",
        
          title: "Disqus Comments",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-code",
        
          title: "Code",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-images",
        
          title: "Images",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-formatting-and-links",
        
          title: "Formatting And Links",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-build-my-own-website-well-sparkles",
          title: 'I build my own website well! :sparkles:',
          description: "",
          section: "News",},{id: "news-my-paper-configurable-dsp-based-cam-architecture-for-data-intensive-application-fpgas-has-been-accepted-by-dac-25",
          title: 'My paper “Configurable DSP-Based CAM Architecture for Data-Intensive Application FPGAs” has been accepted...',
          description: "",
          section: "News",},{id: "news-i-arrived-at-toronto",
          title: 'I arrived at Toronto!',
          description: "",
          section: "News",},{id: "projects-cam",
          title: 'CAM',
          description: "Content Addressing Memory on FPGA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CAM/";
            },},{id: "projects-mlir",
          title: 'MLIR',
          description: "Research on GPU Operator Optimization Based on MLIR",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MLIR/";
            },},{id: "projects-magi",
          title: 'Magi',
          description: "Communication Framework for Data Processing in Massive GPU Infrastructures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Magi/";
            },},{id: "projects-serdes",
          title: 'SerDes',
          description: "Testing and analysis of a SerDes prototype chip",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SerDes/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%69%77%75@%63%73.%74%6F%72%6F%6E%74%6F.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ddiwu", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=osU1fQ4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
