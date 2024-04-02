const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');
const morgan = require("morgan");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });
console.log(path.resolve(__dirname, '..', '..', '.env'))
const app = express();
const PORT = process.env.PORT || 4000;

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


const userData = new Schema({
    username: {
        type: String,
    },
    password:{
        type:String
    },
    1:{
        type:Boolean,
        default:true,
    },
    2:{
        type:Boolean,
        default:false,
    },
  3:{
        type:Boolean,
        default:false,
    },
    4:{
        type:Boolean,
        default:false,
    },
    5:{
        type:Boolean,
        default:false,
    },
    6:{
        type:Boolean,
        default:false,
    },
    7:{
        type:Boolean,
        default:true,
    },
    8:{
        type:Boolean,
        default:false,
    },
    9:{
        type:Boolean,
        default:false,
    },

    10:{
        type:Boolean,
        default:false,
    },
    11:{
        type:Boolean,
        default:false,
    },

  12:{
        type:Boolean,
        default:false,
    },
})

const Register = mongoose.model('Register', userData);

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;


    const newUser = new Register({
        username: username,
        password: password,

    });

    Register.findOne({ username: username })
        .then(oldName => {
            if (!oldName) {
                newUser.save()
                    .then(savedUser => {
                        res.json({ success: true });
                        console.log('User registered successfully:', savedUser);

                    })
                    .catch(error => {
                        console.error('Error registering user:', error);
                        res.status(500).send('Internal Server Error');
                    });
            } else {
                console.log("BUSY")
                res.json({ success: false });
            }

        })
        .catch(error => {
            console.error('Error checking existing user:', error);
            res.status(500).send('Internal Server Error');
        });

});



app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }

    Register.findOne({ username: username })
        .then(user => {
            if (user && user.password === password) {
                const token = jwt.sign({ id: user._id }, process.env.AUTH_SECRET, {
                    algorithm: 'HS256',
                    allowInsecureKeySizes: true,
                    expiresIn: 86400,
                });

                res.json({ success: true, token: token });
            } else {
                res.json({ success: false, message: 'Invalid username or password' });
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        });
});

app.post('/api/update-level', (req, res) => {
    const token = req.body.token;
    const newLevel = req.body.newLevel;

    jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err);
            return res.status(401).json({ success: false, error: 'Unauthorized' });
        }

        const userId = decoded.id;

        Register.findByIdAndUpdate(userId, { $set: { [newLevel]: true } }, { new: true })
            .then(updatedUser => {
                if (updatedUser) {
                    console.log(`User ${updatedUser._id} updated to level ${newLevel}`);
                    res.json({ success: true, newLevel:newLevel });
                } else {
                    res.status(404).json({ success: false, message: 'User not found' });
                }
            })
            .catch(error => {
                console.error('Error updating user level:', error);
                res.status(500).json({ success: false, error: 'Internal Server Error' });
            });
    });
});
app.post('/api/get-level-intro', async (req, res) => {
    const token = req.body.token;

    jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err);
            return res.status(401).json({ success: false, error: 'Unauthorized' });
        }

        const userId = decoded.id;

        const findLastTrueKey = (user) => {
            const keys = Object.keys(user)
                .filter(key => key !== 'password' && /^[1-6]$/.test(key))
                .reverse();

            return keys.find(key => user[key]);
        };

   Register.findOne({ _id: userId })
            .select('-_id -password')
            .lean()
            .then(user => {
                if (user) {
                    const lastLevel = findLastTrueKey(user);

                    res.json({ success: true, lastLevel:lastLevel });
                } else {
                    res.status(404).json({ success: false, message: 'User not found' });
                }
            })
            .catch(error => {
                console.error('Error retrieving user data:', error);
                res.status(500).json({ success: false, error: 'Internal Server Error' });
            });
    });
});
app.post('/api/get-level-data', async (req, res) => {
    const token = req.body.token;

    jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err);
            return res.status(401).json({ success: false, error: 'Unauthorized' });
        }

        const userId = decoded.id;

        const findLastTrueKey = (user) => {
            const keys = Object.keys(user)
                .filter(key => key !== 'password' && /^(?:[7-9]|1[0-2])$/.test(key))
                .reverse();

            return keys.find(key => user[key]);
        };

        Register.findOne({ _id: userId })
            .select('-_id -password')
            .lean()
            .then(user => {
                if (user) {
                    const lastLevel2 = findLastTrueKey(user);

                    res.json({ success: true, lastLevel2:lastLevel2 });
                } else {
                    res.status(404).json({ success: false, message: 'User not found' });
                }
            })
            .catch(error => {
                console.error('Error retrieving user data:', error);
                res.status(500).json({ success: false, error: 'Internal Server Error' });
            });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/api/update-module', (req, res) => {
    const { username, moduleNumber } = req.body;

    Register.findOne({ username: username })
        .then(user => {
            if (user) {
                // Update the status of the module
                user[moduleNumber] = true;

                // Save the updated user data
                user.save()
                    .then(() => {
                        res.json({ success: true });
                    })
                    .catch(error => {
                        console.error('Error updating module status:', error);
                        res.status(500).send('Internal Server Error');
                    });
            } else {
                res.json({ success: false, message: 'User not found' });
            }
        })
        .catch(error => {
            console.error('Error finding user:', error);
            res.status(500).send('Internal Server Error');
        });
});

module.exports = app;