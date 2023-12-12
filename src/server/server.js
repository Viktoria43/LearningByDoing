const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const morgan = require("morgan");
const Schema = mongoose.Schema;
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

const app = express();
const PORT = 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

console.log('MONGODB_URI:', process.env.MONGODB_URI);
const db = process.env.MONGODB_URI;
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

// Define your routes
app.get("/login", (req, res) => {


});

app.post('/register', (req,res)=>{
    const newUser = new userData({
    });
    newUser.save()
        .then((res)=>{
            res.redirect('/')
        })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const userData = new Schema({
    username: {
        type: String,
    },
    password:{
        type:String
    }
})
const Register = mongoose.model('Register', userData);
module.exports= Register;


