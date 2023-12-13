const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');
const morgan = require("morgan");
const Schema = mongoose.Schema;
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

const app = express();
const PORT = 4000;

app.use(cors())
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
        console.log(err)
    });

// Define your routes
app.get("/login", (req, res) => {


});

app.get("/register", (req, res) => {


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


app.post('/register', (req, res) => {
    const { username, password } = req.body;

console.log('test');
    const newUser = new Register({
        username: username,
        password: password,
    });


    newUser.save()
        .then(savedUser => {
            console.log('User registered successfully:', savedUser);

        })
        .catch(error => {
            console.error('Error registering user:', error);
            res.status(500).send('Internal Server Error');
        });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    Register.findOne({ username: username })
        .then(user => {
            if (user && user.password === password) {
                res.json({ success: true });
            } else {
                res.json({ success: false, message: 'Invalid username or password' });
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



