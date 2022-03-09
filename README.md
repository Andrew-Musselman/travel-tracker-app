# Travel Tracker - Fly Me to the Moon

Developed by [Andrew Musselman](https://github.com/Andrew-Musselman)

Travel Tracker is the final Mod 2 project for Turing School of Software and Design with the goal of solidifying my understanding of:

- Using OOP to drive the design of the application and the code
- Working with an API to send and receive data
- The code review process
- Creating robust test suites that thoroughly tests all functionality of a client-side application



## Setup

1. Clone down this repo and the [local server repo](https://github.com/turingschool-examples/travel-tracker-api) to your local machine
1. Then to install the library dependencies for both repo's run: `npm install`
1. Run `npm start` in both repos to start the server and run the site
1. Open up `http://localhost:8080/` to view the page


## Login

<img width="1437" alt="Fly me to the moon login page" src="https://user-images.githubusercontent.com/92277979/157338665-d59f2599-2999-4407-8368-9af70e1ca638.png">

 Once the page is running you will see a log in button in the top right corner of the screen

 Clicking the log in button will open the log in form

 Once the log in form is open enter a username and password and click the submit button

 The username will be the word `traveler` followed by a number between `01` and `50`, this number will be the user ID and all the data will be associated with that user

 The password will be the word `traveler`

## Navigating the page

<img width="1420" alt="Fly me to the moon main page" src="https://user-images.githubusercontent.com/92277979/157342169-4340b9da-f10f-4b4e-88d3-7ea29fefac8f.png">


 Once logged in there is a section on the side that greets you by name and shows how much you have spent on travel this year

 There will also be a button to plan a new trip that opens up a new trip form

 On the right there is a section displaying the user's trips

 You can toggle between `All` `Past` `Upcoming` and `Pending` trips

 <img width="323" alt="New trip form" src="https://user-images.githubusercontent.com/92277979/157342305-265722a2-a4c1-4c9f-a734-2ac600dc3f42.png">


 Request a new trip from the new trip form by selecting a destination, how many travelers, a start date, and how long you want to go

 Once you submit the request form a trip card shows up on the screen where the form was

 The trip card shows the trip details as well as the estimated cost

 After a few moments the trip card will disappear but the requested trip will be in the trips section with a status of pending

## Technologies

- JavaScript
- Day.js
- Css/SCSS
- HTML
- Mocha/Chai
- Fetch API

## Testing

All the JavaScript classes were written utilizing test driven development

A thorough test suite was written for each class and then implementation code was written to pass the tests

All JavaScript classes were written and tested before any other part of the code was written

## Future Steps

- Utilize micromodal.js and glide.js packages to improve the UX of the page
- Create an `Agent` log in with admin privileges to add new trips, new destinations, and to see all User details 

## Wins & Challenges

#### Wins
 - Utilizing Day.js to easily format and manipulate dates
 - Writing thoughtful test suites before any implementation code
 - Creating dynamic fetch requests that could be used for multiple endpoints
 - Utilizing some variables and mixins in SCSS

#### Challenges
 - Staying organized
  - There were many edits to my issues and project board after I realized the scope of a task was larger than I expected
  - I went down many rabbit holes trying to learn new packages or technologies that I never ended up implementation in my project
