1) Overview

This repository contains my submission for the Node.js Intern assignment.
The task was divided into two parts.
The first task was to create an API based on given documentation.
The second task was to write API documentation based on a given feature.

Since no actual documentation or feature was provided, I made reasonable assumptions and implemented forum related features similar to NodeBB.

----------------------------------------------------------------------------------------------------------

2) Tech Stack Used

->  Node.js
->  Express.js
->  MongoDB
->  Mongoose

----------------------------------------------------------------------------------------------------------

3) Task 1 API Creation

For Task 1, I created a Like Post API.
First, I wrote the API documentation and then implemented the API using Node.js and MongoDB.

Feature implemented

->  Like or up-vote a forum post
->  One user can like a post only once

Files related to Task 1

->  API documentation is inside task1-api/docs
->  API code is inside task1-api folder

----------------------------------------------------------------------------------------------------------

4) Task 2 API Documentation

For Task 2, I created documentation for a Report Post feature.
This API allows users to report a post with a reason such as spam or abuse.
Only documentation was required, so the API is not implemented.

Files related to Task 2

->  task2-documentation/post-report-api.md

----------------------------------------------------------------------------------------------------------

5) How to Run Task 1 API

-> Move to task1-api folder
-> Install dependencies using npm install
-> Create a .env file and add MongoDB connection string
-> Start the server using npm run dev

The server will start on port 3000.

----------------------------------------------------------------------------------------------------------

6) Assumptions Made

-> Authentication is not implemented
-> User id is passed directly in the request body
-> The project is created for task demonstration purpose
