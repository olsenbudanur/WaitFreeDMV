# BisonHacks2022
## What it does

Have you ever had to get a DMV appointment ASAP, only to realize the soonest time slot is 3 months away? Well, WaitFree DMV! is here to help you out! 

Just send us the latest time you’d like your appointment and your phone number. We will constantly scrape your DMV’s website for you, and send you an SMS reminder if any appointments become available within your desired time frame!

## Inspiration

As an immigrant, Musa (Oguzhan/Olsen) and his parents have to physically go to the DMV roughly every 8 months to renew his license. Given how slow the DMV is, this is a major inconvenience for Musa’s family. They are not alone. 

The DMV is notorious for being incredibly inefficient, and their online appointment process is no exception. It is almost impossible to get a DMV appointment without waiting for a month (or two) without constantly checking their website.  

There are certain times when people cancel their appointments or there are new spots open at the last minute. However, the DMV has no system set up to send notifications if this happens. This is where we come in!

WaitFree DMV! is the product of our team’s frustration with the DMV’s (lack of) notification system. 

## How we built it

We divided our project into 2 major parts, the frontend and the backend. 

Musa (Oguzhan/Olsen) worked on the backend of our project. 

Musa connected the Firebase Firestore database to our frontend and our backend. He also used the Python module Selenium, Chrome Developer Tools, Chromium, and bash to create our always-running DMV scraping bot. Lastly, he used the Twilio API to send SMS messages to notify our users if there is a DMV appointment available within their constraints!

Niya and Meng worked on our frontend. 

Niya set up the React app with navigation, created our “Make an Appointment” tab, and integrated Google’s Map API to display a fully functional Google Map. She also used the Material UI library to create our submission form that is fully functional. Lastly, she helped Meng with the homepage.

Meng helped Niya with our home page and styled it using the Typewriter Effect javascript framework. Lastly, she added effects like parallax to make our home page more aesthetically pleasing. 

## Accomplishments that we're proud of

The number of technologies we were able to integrate into our tech stack is definitely impressive for 3 college students with less than 24 hours.

We are proud of the amount of work we were able to accomplish in under 24 hours. Our react website is production-ready and fully functional. Our database, although not as secure as it can be, has a great schema to store the user data, and is functional. Lastly, our backend is capable of scraping 1 DMV website for multiple users which is a lot more than we expected we can do within 24 hours.


## Truth & Service

Our goal with WaitFree DMV! is to ease the process of getting DMV appointments for everyone without charging them a single penny. We believe that everyone deserves to know real-time accurate information about the DMV locations that have open appointments.

## Business Model
Our potential user base is massive. Our product is initially aimed towards people living in the DC/MD/VA area who need to get a DMV appointment; however, our idea is quite scalable. 

We will be acquiring users through free means since we are a non-profit. This will include word-of-mouth, our website, and (most importantly) blogs such as Reddit. 

## Impact

Our project is not just an idea. We have a working prototype that has the potential to help millions. How? We can shave off hours from our users’ schedules by looking for a DMV appointment on our users’ behalf, not to mention the stress we remove from their lives.

Also, our project is quite scalable. Our application will start off local, helping people around the DMV area. Then, we can easily expand outwards towards Virginia and Maryland. 

## Technical

Our MVP is quite functional. It is not just a slideshow or a mock-up. We have the ability to allow users to sign up, and check DMV availability on their behalf! We are really proud of the technologies we were able to integrate within such a small period of time, and we hope you are as excited as we are with the technical side of this project! 

## Design and User Experience

Our website could not be simpler! Our user's experience begins with our homepage, which is short and concise. After clicking the only button on our page, our users are prompted to type the minimum amount of information we’d need to find them an appointment. We spent a great deal of time to make sure that our website is accessible for people of different backgrounds

## Presentation
Please take a look at our presentation video! :)

## Tech Stack

**Backend Tools**
* Python
* Selenium
* Twilio 
* Chromium
* Bash

![](https://cdn.iconscout.com/icon/free/png-256/python-2752092-2284909.png)
![](https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1418704490/slylroweseuyop7vtwgg.png)
![](https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zy6ttel4bwjtojwcf3cu)


**Frontend**
* React JS (JavaScript, HTML, and CSS Implied :) )
* Material UI
* Google Maps API
* Typewriter Effect 
* React Parallax

![](https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-256.png)
![](https://www.iamrohit.tech/logo/material-ui.png)
![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUvV6C6yae1pXvElCvWXMc655MbQnQvMsjq36-ERAcFpYhpZ-_ZYOzBDSFgTFh2_VPt0&usqp=CAU)

**Version Control & Package Manager**
* GitHub
* npm

![](https://b.thumbs.redditmedia.com/AltCa25flSy96k0VDTcXUseNPu25FWaInEl1LOvkbqs.png)
