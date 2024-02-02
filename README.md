# Registration UI

A simple registation form built with Material UI and Formik.


<img alt="image" src="https://github.com/galoberlyn/formik-mui-poc/blob/master/src/assets/screenshots/app.png">

## Getting Started

Follow these steps to clone, install dependencies, and run the application:

```bash
git clone https://github.com/galoberlyn/formik-mui-poc.git
cd formik-mui-poc
npm install
npm run client   # Run the app
npm run server   # Run the server
```
## Testing
To run tests, use the following commands:

Headless Mode: `npm run test`
Visualize in Electron Browser: `npm run test:e2e`


<img width="569" alt="image" src="https://github.com/galoberlyn/formik-mui-poc/blob/master/src/assets/screenshots/test.png">

## Folder structure
<img width="569" alt="image" src="https://github.com/galoberlyn/formik-mui-poc/blob/master/src/assets/screenshots/project_structure.png">

## Overview

Create a simplified wizard that goes through some basic account registration steps.

The wizard steps should be structured/organized in a way to collect the necessary information but maintain a good user experience.

## Requirements

- Account Information to collect:
    - First and Last Name
    - Email
    - Business Name
    - Business Size (integer)
    - Business Type (choose from list)
        - SMB
        - Midmarket
        - Enterprise
    - Point of Sale used by business (choose from list)
        - Use `/pos` route (See info under Server section below)
        - Note the payload in this route is an example but assume there can be more than 200
    - Delivery Channel used by business (choose from list)
        - Use `/channel` route (See info under Server section below)
        - Note the payload in this route is an example but assume there can be more than 200
- Must save the state of the registration in localstorage so you can pick up where you left off
- Once the information is collected, save the information using api call
    - Use `/account` route (See info under Server section below)
    - Note payload can be any structure, and it will be saved in disk as a json file with the current timestamp
        - `account_{timestamp}.json` file

## Setup

#### NPM
- Version used for repo:
    - `9.2.0`

#### Node
- Version used for repo:
    - `19.3.0`

#### Express
- Version used for repo:
    - `4.18.2`
- Run command:
    - `npm install`

