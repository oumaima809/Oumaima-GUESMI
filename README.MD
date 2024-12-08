# Part 1
## Description 
This is a function  that takes a taskdescription as input and checks if it is palindrom or not .
The checking is done with a simple iteration through all the caracters in the task description string, if the caracter is not a letter it continues to  the next caracter.
before checking, it lowercase the caracters.
## Installation
Install gcc for compilation
## compilation
gcc isPalindrom.cpp -o output

## Execution
./output 

#Part 3
## Description
This is a CRUD application designed with RESTful APIs.
This application is dockerized.

## Installation 
Install xampp for using Mysql database management system
Install Node for the Backend
Install Postman for testing the REST APIs


## Execution 
npm install ---to install all third libraries

nodemon app.js 

use Postman to create CRUD operations :

GET all tasks : localhost:5000/api/tasks

GET one task using a filter : localhost:5000/api/tasks/due_date/2024-12-03

UPDATE a task :localhost:5000/api/tasks/1

DELETE a task : localhost:5000/api/tasks/1





