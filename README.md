# TRAVL App

![App Screenshot](https://github.com/ryanjgani/travel-app/blob/master/demo/destinations.gif?raw=true)

## Project Goals

This project aims to create a platform where people can explore amazing destinations from around the world.  
The web app is a full stack application using the **MERN stack** (MongoDB, Express, React, Node). For deployment, we use Netlify for the frontend (React) and Heroku for the backend (Node.js)

This website has **several functionalities** such as:

-   Google Authentication
-   Browse destinations with search filter and pagination
-   Add/remove destination to favorites
-   Mapbox API integration which allows users to explore destinations on an interactive map with clickable clusters
-   OpenWeatherAPI integration

## Tech Stack Used

**Client** : React, Chakra UI  
**Server** : Node.js, Express  
**Database** : MongoDB

## App Demo & Screenshots

| ![](https://github.com/ryanjgani/travel-app/blob/master/demo/destinations.gif?raw=true) **Destinations** | ![](https://github.com/ryanjgani/travel-app/blob/master/demo/googleauth.gif?raw=true) **User Authentication** |
| :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|      ![](https://github.com/ryanjgani/travel-app/blob/master/demo/maps.gif?raw=true) **Mapbox API**      |       ![](https://github.com/ryanjgani/travel-app/blob/master/demo/homepage.jpg?raw=true) **Home Page**       |
|    ![](https://github.com/ryanjgani/travel-app/blob/master/demo/favorites.jpg?raw=true) **Favorites**    |            ![](https://github.com/ryanjgani/travel-app/blob/master/demo/map.jpg?raw=true) **Map**             |
|        ![](https://github.com/ryanjgani/travel-app/blob/master/demo/login.jpg?raw=true) **Login**        |       ![](https://github.com/ryanjgani/travel-app/blob/master/demo/register.jpg?raw=true) **Register**        |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`

`CLIENT_URL`

`JWT_SECRET`

## Installation

Clone the project

```bash
  git clone https://github.com/ryanjgani/travel-app.git
```

Go to the project directory

```bash
  cd travel-app
```

Install dependencies

```bash
  # Backend dependencies
  npm install

  # Frontend dependencies
  cd frontend
  npm install
```

Start the server and client **concurrently**

```bash
  npm run dev
```

**Or start the client and server separately**

Start the server

```bash
  npm run server
```

Start the client

```bash
  npm run client
```
