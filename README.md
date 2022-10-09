# TRAVL App - Full stack app / DevOps project

![](https://github.com/ryanjgani/travel-app/blob/master/demo/travelapp-workflow.jpg?raw=true)

![](https://github.com/ryanjgani/travel-app/blob/master/demo/travelapp-workflow.jpg?raw=true)

## Project Goals

This project aims to create a full stack web application using the **MERN stack** (MongoDB, Express, React, Node), dockerize the application, and deploy the image through a simple CI/CD pipeline using Github Actions.

For deployment, we use Netlify for the frontend (React) and deployed the Node.js application with an Nginx reverse proxy using Docker Compose on a DigitalOcean droplet.

Bonus: configure a Kubernetes manifest and run the docker image on Kubernetes using minikube. ([README file](https://github.com/ryanjgani/travel-app/tree/master/frontend#readme))

Project Summary:

-   Develop full stack MERN application
-   Setup unit testing using Jest
-   Dockerize both client and server application separately and push to Docker Hub
-   Deploy client app on Netlify and create a build hook to trigger deployment
-   Setup Ubuntu virtual machine with Docker installed on DigitalOcean
-   Inside the VM, pull node image from Docker Hub
-   Secure the node application image with Nginx, Let's Encrypt, and Docker Compose (because the client Netlify can only communicate through HTTPS)
-   Setup CI/CD pipeline through Github Actions
-   Bonus: for the client application, create a Kubernetes manifest and run the image on Kubernetes using Minikube

![App Screenshot](https://github.com/ryanjgani/travel-app/blob/master/demo/destinations.gif?raw=true)

## App Goals

This app aims to create a platform where people can explore amazing destinations from around the world.

The app has **several functionalities** such as:

-   Google Authentication
-   Browse destinations with search filter and pagination
-   Add/remove destination to favorites
-   Mapbox API integration which allows users to explore destinations on an interactive map with clickable clusters
-   OpenWeatherAPI integration

(`project` = the whole Github project, `app` = the MERN full stack application)

## Tech Stack Used

**Client** : React, Chakra UI on Netlify  
**Server** : Node.js, Express on DigitalOcean  
**Database** : MongoDB Atlas  
**Technologies**: Docker, Kubernetes

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

## Room for Improvements

-   Client is deployed on Netlify. Can be deployed with Nginx on Ubuntu through DigitalOcean and configure the CI/CD pipeline.
-   When the Github actions workflow/pipeline is running, it stops the backend server, pulls the new image, then run the new server. In this period, the user cannot access the backend server.
-   Deploy images on a Kubernetes cluster in DigitalOcean.

## Useful links

-   CI/CD pipeline inspired from [here](https://www.youtube.com/watch?v=MbXbmQdkImA&ab_channel=SebastianKargl)
-   [Secure the node application image with Nginx, Let's Encrypt, and Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose#step-4-obtaining-ssl-certificates-and-credentials)
-   [Deploy node app to a DigitalOcean droplet using Docker](https://stackabuse.com/deploying-a-node-js-app-to-a-digitalocean-droplet-with-docker/)
