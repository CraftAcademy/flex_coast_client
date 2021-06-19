# Flex Coast

Welcome to the main repo of March 2021 cohort's final project.
We have built a fullstack platform for new office leasing startup in Gothenburg that spans 3 different applications:

1. A client for customers that are seeking to rent a new office in Gothenburg. It is a single page application that contains cosy inteface with general information about the company, and a wizard, with which customer can create an inquiry to broker to search for a new office.

2. An admin interface for brokers where they have access to all inquiries, can administer them and have access to statistics

3. A backend engine that stores all of our data and provides end-points to access it

## The code

Flex Coast is the new startup in Gothenburg that targets market of short-term / flexible condition office rentals. It is a sigle page application the most important part of which is the wizard / questionneir in hero section that customer should fill to submit inquiry to Flex Cost staff. After submit the record is made in database, email is sent to broker and customer, broker also recieves a Slack notification.  

The rest of the application consists of Social proof sections with reviews of Flex Coast customers, incredible offer section with bullet points about why you should choose Flex Coast and the google map that displays clickable map markers of offices located in center of Gothenburg. In the bottom of the page there is a footer with social links and more info on Flex Coast.

The Admin site for Flex coast provides a simple Customer Relationship Managment system or CRM. Here the Brokers are able to see an overview of all inquiries split in to individual rows. Each row is expandable and contains more detailed information, options to update the current status, a log book containing notes and important events in an inquiry's life cycle and the ability to export the inquiry to a more fully fledged CRM on Hubspot. The analytics page provides an overview of site statistics and analytics. All this is built with React JS to provide smooth interaction and seamless interactivity.  

The backend of Flex Coast is built with Ruby on Rails as a dedicated API. It serves our database that holds information related to the Inquiries, Notes, Brokers, and provides mailing services, slack notifications, and HubSpot integration.  

### Authors

[Seva Deriushkin](https://github.com/SevaDer14)  
[Luke Perrin](https://github.com/lukeperrin10)    
[Lucas Knudsen](https://github.com/LucasKnudsen)  
[Kim Haaga](https://github.com/1CIM)    
[Arun Singh](https://github.com/arunbhalli)    
[Christer Forsgren](https://github.com/christerforsgren91)  
[Davit Danielyan](https://github.com/DavDan1)
[Thomas Ochman](https://github.com/tochman)
[Oliver Ochman](https://github.com/oliverochman)

## Overview

### Frontend Broker Client

**Github link:** [Broker admin](https://github.com/CraftAcademy/flex_coast_providers)    
**Deployed on Netlify at:** [Flex Coast Admin](?)   
**Built with:** React, Material UI, Recharts, SASS  
**Contineous integration with:** Semaphore  
**Testing framework:** Cypress  

### Frontend Public Client

**Github link:** [Public](https://github.com/CraftAcademy/flex_coast_client)  
**Deployed on live domain:** [Flex Coast](https://flexcoast.se/)  
**Built with:** React, Material UI, SASS  
**Contineous integration with:** Semaphore  
**Testing framework:** Cypress

### Backend API  

**Github link:** [API](https://github.com/CraftAcademy/flex_coast_api)  
**Deployed on Heroku at:** [API_Dev Server](https://flex-coast-api-development.herokuapp.com/)   
**Built with:** Ruby on Rails  
**Contineous integration with:** Semaphore  
**Testing framework:** Rspec

## Dependencies & packages used

### Frontend

* Yarn
* React
* React-redux
* Redux
* React Scroll
* React Responsive Select
* React Google Maps
* Cypress
* Axios
* Material UI
* SASS
* Framer Motion
* Recharts
* I18Next
* Ahoy.js
* Swiper  
* Framer-motion

### Backend

* Devise_token_auth
* Active model serializer
* Webmock
* RestClient
* HubSpot
* Ahoy
* AASM
* Pundit
* Slack Notify
* Coveralls

### Login credentials

- **Broker:** </br> email: johndoe@flexcoast.se, </br> password: password

## Updates/Improvements  

## License  

[MIT-license](https://en.wikipedia.org/wiki/MIT_License)

### Acknowledgement  

- Material provided by [Craft Academy](https://craftacademy.se)
