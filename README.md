# flashcards
The Flashcards App

Harley Tran 
ntran27
B94A1F

## Detailed instruction on how to run the app locally: ##
(This app was not deployed, so I have included the .env file on my repo even though this might not be best practice.)

Run the following command in Terminal, I recommend to split terminal, one for Backend and one for Frontend

1. Backend 
cd server/ (move to the backend file)
yarn (install necessary yarn denpendencies)
yarn start (start the localhost for MongoDB)

2. Front End 
cd client/  (move to the frontend file)
yarn    (install necessary yarn dependencies)
yarn dev    (start the local web app)
Click on the link generated to view the webapp 

There might be some issue with if you dont have the same dependencies, so feel free to run yarn install/ npm install 
In case Gradescope does not have receive all the files (for some reason), please download from gitHub: 
https://github.com/cs421sp23-homework/flashcards-nharleytran.git

## Infromation about the Flashcard App: ##

### Functionality
 
**Functional Requirements**
Users can create deck
Users can delete deck
Users can view deck to see what are the flashcards included 
Users can add card to the deck 
Users can delete card inside the deck
Users can update(edit) Front and Back of the card 
Users can view card (using Study mode)
Users can study by flipping back and forth of a card to see front and back
Users can go to the next or the previous flashcard within a deck to study 

**Nice-to-have**
As a user, I want to be able to use utilize proven learning strategies-Pomodoro Clock- 
to optimize my studying, so that I can make the most of my time. 
Pomodoro Clock is a clock implemented to start right when users start studying, the 
Clock will run for 25 minutes of Working Time, and then run for 5 minutes of Break Time.
This stategy has been proven to maximize attention and help studying more efficient. 

**Non-functional Requirements**
The web app has a very presentful UI that is easy to use. With added pallete of gradient color,
this app aims to help users engage more in their studying.

**Feature not implemented**
I haven't been able to implmented authentication successfully. I was trying to use google, however,
I have some prolonging bugs. I decided to build a different nice-to-have.

### Tech Stack - MERN
Database: MongoDB
Web Framework: Express.js
Client-side Javascript Framework: React.js
Web Server: Node.js

### Process of building the app
I actually really enjoy building this app. One of the biggest challenge is to review on what I learned in Javascripts. 
Another challenge come up when I tried to build authentication with Google. I tried to follow some youtube tutorials,
however, the challenge comes from how my code has different organization than youtubers' code, which makes it easy
to bump into bugs. 
Other than that, I enjoy the process!
