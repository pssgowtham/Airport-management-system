# Airport Management System Using ReactJS, CSS, MYSQL and AWS

Implementing an end2end Airport Management system that can be configured for a given airport (Web interface or Mobile app interface with supporting Backend APIs), that integrates Airline Flight Schedules, Gate Assignments, Baggage Claim assignment for arriving flights.

# Tech Stack

- Frontend: React JS, HTML5, CSS
- Backend: Node JS Express JS
- Database: MySQL (hosted on Amazon RDS)
- Deployment : Amazon EC2 Autoscaled cluster with Load balancing

# Feature Set

- Airport Employee login
- Airline Employee login
- Passenger view
- Airport Employee view
- Airline Employee view
- Random Gate Assignment
- Baggage Belt Assignment
- Retrive Arrival/Departure Information
- Manage Arrivals and Departures

# Design Decisions

- We wanted to emphasize on the functionality by going with a clean and minimalistic design for the UI.
- MYSQL was hosted on AWS RDS. We chose mySQL because we wanted to enforce entity relationships and because the majority of the data was structured.
- For frontend, we used react for faster page load and reload due to virtual DOM.
- Node JS for backend for its ability of asynchronous calls and eventloop.
