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

## Lesson #5 Models & Schemas

1. Create schema and model for the project data, so every document saved to the collection will be following the same structure.
2. Created backend/models/Workout.js schema file
3. inside Workout.js file we require mongoose package
4. Define an Schema object from mongoose.Schema
5. Create a new Schema object workoutSchema, which get's object as reference for schema

```Javascript
const workoutSchema = new Schema({
   title: {
   type: String,
   required: true
   },
   reps: {
   type: Number,
   required: true,
   },
   load: {
   type: Number,
   require: true
   }
   });

```

6. Add timestamps for Schema as a second argument, so the Schema object automatically adds created and modified times to the data files.
7. Making model based on the Schema to import for the project later.
8. Get in model data from POST request and put it inside try-catch block.

```Javascript
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.json({ mssg: "POST a new workout" });
});
```

9. On postman on POST request fill the body.json post request and test the app

## Lesson # 6 Controllers (part.1 )

1. Create a controller file for controller functions for each of the routes
2. Write down all the controller functions for each route
   2.1 Move the post functionality from workouts.js to workoutCountroller to createWorkout controller function
   2.2 Create getWorkouts controller function and function for getting a single workout

3. test the controller function on postman

## Lesson #7 Controllers (part. 2)

1. Create controller function for deleteWorkout
2. Create controller funtion for updateWorkout
3. Make a test of the backend API that they are working well

## Lesson #8 Making a React App

1. Creating a React App by npx-create-react-app frontend
2. Installed react-router (npm i react-router-dom)
3. Create a Home component inside pages folder
