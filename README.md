## POLL APP

A poll application focusing on managing internal state of the app in front end without any backend interactions. 

### User Stories
- User can change poll question.
- User can add, edit or remove the options.
- User can reset the whole form adn poll results.
- User can submit multiple votes
- User can see the changes in UI realtime.

## Proposed Solution

A data service is created to store app state in a centralized single source. The components can consume the data through data service.

### [Click here to see the Live Demo](https://625d4062e52ef63106ae4fad--cosmic-pie-68b768.netlify.app/)

## Libraries / Tools Used

- Angular
- Chart.js

## Setup

To install dependencies run:

`npm install`

To run the app run:

`ng serve`

To execute the unit tests via [Karma](https://karma-runner.github.io) run:

`ng test`

