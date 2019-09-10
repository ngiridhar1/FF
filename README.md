# Friend Finder
FriendFinder - node.js and express server exercise

This app allows user to take a survey, answering 10 psychological questions with a 1-5 scale of agree to disagree. 
Upon submit, the survey answers will be compared to the other people who filled out the survey to see who is the closest match.  
He will also be added to the existing friends database.

The matching is done by computing the difference between each survey response and accumulating these differences.  
Which ever member on the database has the smallest difference will be presented as the closest match.  

node.js Dependencies:
- express
- body-parser
- path

Starting point - home.html

Backend modules:
- server.js - sets up and starts server
- apiRoutes.js - specifies routes for API services
- htmlRoutes.js - specifies routes for HTML services

