# CMPE 202 Fall 2022 Airport Management Application by Team Project Data Structures Deadheads
Implementing an end2end Airport Management system that can be configured for a given airport (Web interface or Mobile app interface with supporting Backend APIs), that integrates Airline Flight Schedules, Gate Assignments, Baggage Claim assignment for arriving flights.
# Team
* Chirag Arora - 016726567
* Sai Prashanth Guthula - 016063060
* Santosh Sai Gowtham Pasala - 016075813
* Lokesh Reddy Gangasani - 016655951
# Team Contributions
* Chirag Arora - Frontend: Create pages for Airport Component - Arrival Details, Baggage Details, Assign Belt Carousel Randomly without clash, Enable or disable one or more Arrival and Departure Gates to Terminal 1, Terminal 2 and Terminal 3 Backend: API Implementation, AWS EC2 Deployment, Load Balancing, Crontab Job Configuration Extra Feature: Delete Belt Carousel manually if not in use.
* Sai Prashanth Gunthala - Create pages for Airline component, Create Enable/Disable Arrival and Departure Schedule and Random Gate Assignment Backend: API Implementation, AWS configurations, RDS Configuration, Testing Endpoints.
* Santosh Sai Gowtham Pasala - Create Passenger pages, Retrive Enable/Disable Arrival and Departure Schedule Backend - API Implementation for view Schedule and Handle DB.
* Lokesh Reddy Gangasani - Frontend: Create Login, Registration pages for Passengers, Airline Employees. Backend: Handle DB, mockdata into DB.
# Git repo
https://github.com/gopinathsjsu/team-project-data-structure-deadheads
# Sprint Task Sheet
* https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Sprint%20Sheet%20Team.xlsx
* https://docs.google.com/spreadsheets/d/1uZi71LPjdIcSyliLDj__dUhBypxoDETK/edit?usp=share_link&ouid=100152913542243882297&rtpof=true&sd=true
# Project journal
https://github.com/gopinathsjsu/team-project-data-structure-deadheads/tree/main/Sprint%20Journal
# XP Core Values
* Communication - We consider that communication is important in software development because it allows information to be exchanged among team members. Our team met in scrums every Saturday, and we used Project Dashboard to manage the project and monitor our user stories. We established open and effective communication to keep everyone up to date on our responsibilities and timeframes.
* Feedback - We had a meeting after each sprint cycle only to provide comments. We displayed our components to each other and inquired input to the components of others on how they may be improved.
* Simplicity - The team was able to avoid include unneeded components and stick to the project requirements to do just what was really essential, such as keeping the system design as basic as possible to make it easier to maintain, support, and change. This aided in keeping our code clean and organized. We took a similar approach to documenting progress and managing the repository.
# Tech Stack
* Frontend: React JS, HTML5, CSS
* Backend: Node JS Express JS
* Database: MySQL (hosted on Amazon RDS)
* Deployment : Amazon EC2 Autoscaled cluster with Load balancing
# Feature Set
* Airport Employee login
* Airline Employee login
* Passenger view
* Airport Employee view
* Airline Employee view
* Random Gate Assignment
* Baggage Belt Assignment
* Retrive Arrival/Departure Information
* Manage Arrivals and Departures 

# Design Decisions
* We wanted to emphasize on the functionality by going with a clean and minimalistic design for the UI. 
* MYSQL was hosted on AWS RDS. We chose mySQL because we wanted to enforce entity relationships and because the majority of the data was structured.
* For frontend, we used react for faster page load and reload due to virtual DOM.
* Node JS for backend for its ability of asynchronous calls and eventloop.

# Diagrams
## Use Case Diagram
![alt text](https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Diagrams/Airport%20Management%20System%20UML%20Diagram.drawio%20(1).png "Logo Title Text 1")
## Architecture Diagram
![alt text](https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Diagrams/Architecture%20Diagram.drawio.png "Logo Title Text 1")
## Deployment Diagram
![alt text](https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Diagrams/Deployment%20diagram.png "Logo Title Text 1")
## Component Diagram
![alt text](https://github.com/gopinathsjsu/team-project-data-structure-deadheads/blob/main/Diagrams/Component%20Diagram%20(1).png)
# How to run the web-app
* git clone https://github.com/gopinathsjsu/team-project-data-structure-deadheads
* Install dependencies for both frontend and backend npm install
* Run backend - npm run start
* Run frontend - npm run start

Screens
-------------------------------------------------------------------
Login Screen
------------------------
<img width="1270" alt="Screen Shot 2022-12-04 at 10 51 15 PM" src="https://user-images.githubusercontent.com/16273021/205567931-a67c3010-5a1a-419d-8cda-208b922be885.png">

Airline Employee Screen
-------------------------
<img width="1208" alt="Screen Shot 2022-12-04 at 10 52 18 PM" src="https://user-images.githubusercontent.com/16273021/205568124-138d960e-0dbf-4568-9db2-80239dc41350.png">

Airport Employee Screen
---------------------------
<img width="1277" alt="Screen Shot 2022-12-04 at 11 13 07 PM" src="https://user-images.githubusercontent.com/16273021/205574138-4b5c939e-77ab-49f4-a9b6-0c0eee18933a.png">


Passenger Screen
----------------------------
<img width="1262" alt="Screen Shot 2022-12-04 at 11 20 39 PM" src="https://user-images.githubusercontent.com/16273021/205576628-a846146d-8c17-4e4c-ae27-455ca8a7cfd3.png">

Features Common for all users
-----------------------------
Baggage Details
----------------
<img width="1270" alt="Screen Shot 2022-12-04 at 11 25 23 PM" src="https://user-images.githubusercontent.com/16273021/205578954-dd1d603f-ad0f-41bd-8650-8b14e6086374.png">

Arrival and Departure Tables
-----------------
<img width="1269" alt="Screen Shot 2022-12-04 at 11 36 09 PM" src="https://user-images.githubusercontent.com/16273021/205581191-516bd4c6-9c45-46a6-9a1e-6da1ac395e0d.png">

AirLine Employee Features
---------------
Update the  Arrival and Add the Arrival Data of Flights
-------------------------
<img width="1275" alt="Screen Shot 2022-12-04 at 11 46 17 PM" src="https://user-images.githubusercontent.com/16273021/205581943-e0bad114-bdc1-4063-9649-9455afef7591.png">

Update the Departure Data of Flights, Delete the Data of Flights
--------------------------------
<img width="1268" alt="Screen Shot 2022-12-04 at 11 49 10 PM" src="https://user-images.githubusercontent.com/16273021/205582258-ce9f5fe7-51c6-468a-b3a7-fdd679cead6b.png">

Random Gate Assigned After added the Data of Flights
-------------------------------------
<img width="1241" alt="Screen Shot 2022-12-05 at 12 02 18 AM" src="https://user-images.githubusercontent.com/16273021/205584897-fad3f40e-87dc-4ccd-b123-e13e0bd6de13.png">


Airport Employee Features
-------------------------------
Assign Belt for Flights
-----------------------------------
<img width="1269" alt="Screen Shot 2022-12-04 at 11 50 41 PM" src="https://user-images.githubusercontent.com/16273021/205582996-30c4745b-daac-467b-8056-0ff6e28217af.png">

Enable or Disable Gates(Arrival and Departure Flights)

----------------------------------------------------
<img width="1231" alt="Screen Shot 2022-12-04 at 11 56 36 PM" src="https://user-images.githubusercontent.com/16273021/205583662-ec0eff32-cfbf-44ba-8bd5-eec5c4d1c522.png">

<img width="1273" alt="Screen Shot 2022-12-04 at 11 55 25 PM" src="https://user-images.githubusercontent.com/16273021/205583543-a20a9f29-2ccf-4129-a67c-67649827292b.png">

-------------------------------------
AWS EC2 Instance Deployment for project
-------------------------------------

<img width="1276" alt="Screen Shot 2022-12-05 at 3 16 39 PM" src="https://user-images.githubusercontent.com/16273021/205764093-393fcca4-a2d0-43bd-818f-7a73c2700a56.png">

Load Balancer 
-------------------------
<img width="1280" alt="Screen Shot 2022-12-05 at 3 17 02 PM" src="https://user-images.githubusercontent.com/16273021/205764197-dd836f42-dacf-4bbe-8ea6-563768cf89c0.png">

Target Group
-------------------------------------
<img width="1273" alt="Screen Shot 2022-12-05 at 3 16 50 PM" src="https://user-images.githubusercontent.com/16273021/205764258-2a9857b3-ee30-44cd-8e9c-379ab5aece96.png">



