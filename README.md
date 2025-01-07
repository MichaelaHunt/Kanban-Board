# Kanban Board
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description

  This program allows the user to create and manage a Kanban board. The board consists of a ToDo column, In Process column, and Done column. Users can see and interact with tickets created by other users as well.

  ## Table of Contents

  - [Installation](#installation)
  - [Screenshot](#screenshot)
  - [Usage](#usage)
  - [Credits](#credits)  
  - [License](#license)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Tests](#tests)

  ## Screenshot

  ![alt text](<Screenshot 2025-01-07 at 3.41.57 PM.png>)

  ## Installation

  Download the project, then run "npm i && npm run seed && npm run build"

  ## Usage

  Using this website requires authentication - there is currently no way to add a user except through adding to the user-seeds.ts file, and running "npm run seed" again.
  To run the website, type "npm start" into the terminal.
  Login using one of the sets of credentials found in user-seeds.ts.

  ## Credits

  Packages:
  - bcrypt
  - dotenv
  - express
  - jsonwebtoken
  - pg
  - sequelize
  - typescript
  - jwt-decode
  - react
  - react-dom
  - react-router-dom
  
  Dev packages not already mentioned:
  - Concurrently
  - Nodemon
  - Wait-on
  - Vite
  - eslint

  ## License

  This project is protected under the MIT license.

  ## Features

  Secure Login - Only certified users can view the Kanban Board. 
  Manage Tickets - Add, Edit, and Delete tickets. 

  ## Still have questions? 

  My profile: https://github.com/MichaelaHunt  
  Please direct any questions to micapplehunt@gmail.com!
