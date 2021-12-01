
//Express & PORT setup 
let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 9000;

app.listen(PORT, function() {
    console.log(`Server is running on ${PORT}`);
});


//Grab info from the env file 
let dotenv = require('dotenv')
dotenv.config();

//Mongo db connection 
const connectDB = require('./db')
connectDB();

const userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)


app.get("/", function(req, res) {
    res.send("API is Running...");
});

