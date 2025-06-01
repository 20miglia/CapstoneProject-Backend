import express from 'express';
const app = express();
import "dotenv/config";
import cors from 'cors';
import startDatabase from './db.js';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js'
import eventsRoute from './routes/events.route.js';



// Middleware
app.use(express.json()) //Per trasformare tutto in JSON nella req e ritrasformare tutto in oggetti/array nella res evitando così il json.stringify nella risposta res.json(JSON.stringify(obj))
app.use(cors())
app.use('/auth', authRoute) //Per la registrazione e login
app.use('/users', usersRoute)
app.use('/events', eventsRoute) //Per gli eventi


// Connessione al DB
startDatabase();


app.get("/", (req, res) =>{                                                                      
    res.send("App Connessa: Benvenuto!");
})



//Per startare il server
app.listen(process.env.PORT, () => {
    console.log(`node app listening on port ${process.env.PORT}`)})