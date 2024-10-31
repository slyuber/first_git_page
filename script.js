// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
  });
  
  // Initialize Swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          if (this.getAttribute('href') !== '#') {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Sticky Navigation Bar
  window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if(window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
  
  // Initialize TimelineJS
  window.addEventListener('load', function() {
      var additionalOptions = {
          initial_zoom: 2,
          height: 600
      };
      var timelineData = {
        "title": {
          "text": {
            "headline": "My Professional Journey",
            "text": "<p>An overview of my career, projects, and achievements.</p>"
          }
        },
        "events": [
          {
            "start_date": {
              "year": "2017",
              "month": "4"
            },
            "text": {
              "headline": "Graduated from University of Calgary",
              "text": "<p>Bachelor of Science in Electrical Engineering.</p>"
            },
            "media": {
              "url": "https://source.unsplash.com/800x600/?graduation,university",
              "caption": "University of Calgary Graduation"
            }
          },
          {
            "start_date": {
              "year": "2017",
              "month": "9"
            },
            "end_date": {
              "year": "2021",
              "month": "4"
            },
            "text": {
              "headline": "Junior Controls System | Electrical Engineer",
              "text": "<ul><li>Collaborated with stakeholders to ensure compliance with safety and efficiency standards.</li><li>Programmed control PLCs, RTUs, and SCADA systems.</li><li>Participated in onsite electrical construction supervision and system commissioning.</li></ul>"
            },
            "media": {
              "url": "https://source.unsplash.com/800x600/?engineering,controls",
              "caption": "HTA Services & Tundra Eng. Inc."
            }
          },
          {
            "start_date": {
              "year": "2019",
              "month": "12"
            },
            "end_date": {
              "year": "2022"
            },
            "text": {
              "headline": "Director of Data Analytics & Governance at PALcares",
              "text": "<ul><li>Established relationships with non-profits and industry partners.</li><li>Designed and implemented data policies and security protocols.</li><li>Led workshops, translating technical concepts for non-technical audiences.</li><li>Worked with cloud computing, pipeline design, and predictive modeling.</li></ul>"
            },
            "media": {
              "url": "https://source.unsplash.com/800x600/?nonprofit,data",
              "caption": "PALcares Non-Profit Organization"
            }
          },
          {
            "start_date": {
              "year": "2021",
              "month": "10"
            },
            "end_date": {
              "year": "2023",
              "month": "2"
            },
            "text": {
              "headline": "Machine Learning Team Lead & Developer at AltaML Applied AI Lab",
              "text": "<ul><li>Built strong relationships with clients in various industries.</li><li>Managed sprints and resolved technical challenges.</li><li>Developed learning plans and mentored associate ML developers.</li><li>Defined and scoped use cases with project managers.</li><li>Leveraged skills in Python, BigQuery, SQL, Docker, and Kubernetes.</li><li>Promoted responsible AI practices.</li></ul>"
            },
            "media": {
              "url": "https://source.unsplash.com/800x600/?machinelearning,team",
              "caption": "AltaML Applied AI Lab"
            }
          },
          {
            "start_date": {
              "year": "2022",
              "month": "5"
            },
            "text": {
              "headline": "Project Proposal with C5 Collective",
              "text": "<p>Developed a comprehensive proposal for a data integration project with the C5 North East Hub, focusing on enhancing data accessibility and reporting capabilities for social services.</p>"
            },
            "media": {
              "url": "https://source.unsplash.com/800x600/?collaboration,data",
              "caption": "C5 Collective Collaboration"
            }
          },
          {
            "start_date": {
              "year": "2023",
              "month": "3"
            },
            "text": {
              "headline": "Current Endeavors",
              "text": "<p>Focusing on data science projects that empower social services through technology. Engaging with communities to create immediate impact.</p>"
            },
            "media": {
              "url": "https://source.unsplash.com/800x600/?community,impact",
              "caption": "Empowering Social Services"
            }
          }
        ]
      };
      timeline = new TL.Timeline('timeline-embed', timelineData, additionalOptions);
  });
  