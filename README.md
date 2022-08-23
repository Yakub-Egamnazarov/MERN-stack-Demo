# MERN-Stack-tutorial

[The Nen Ninja Youtube tutorial](https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=1&ab_channel=TheNetNinja)

---

## Lesson #2 Express App Setup

1. create a backend folder with server file inside for Express node app.
2. Express package installed
3. Setting up the express app in server.js
4. add dev script to package.json file, so it is easier to run command npm run dev
5. .env package added to the project, so to hid a port number and other sensitive information in the future from repo files.
6. Inside of .env file add port number and in server.js modufied to listin to process.env.PORT
7. Added middleware for logging the req information on the console everytime server.js receiving request.

## Lesson #3 Express Router & API Routes

1. create a different file to keep all the routes in
2. use express route to use separate files for each route with its method, instead of just in server.js
3. set-up router in export it in routes module.
4. on server required workouts routing and used it in middleware
5. in workouts.js file create a routes for all requests on /

## Lesson #4 MongoDB Atlas & Mongoose

1. Created new cluster and database in MongoDB
2. Copy the Mongo connect application string to .env file under MONGO_URI variable
3. Added Mongose ODM (Object Data Modeling) library to backend folder. (npm i mongoose).
4. make a connection to the Mongo DB through mongoose in server.js, then connect to the port 4000.
