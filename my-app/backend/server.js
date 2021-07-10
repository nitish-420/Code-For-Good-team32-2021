const http = require('http');
const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const User = require('./models/users');
const Event = require('./models/events');

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connected');
});

const { Schema } = mongoose;

app.post('/signup', async (req, res) => {
    const user = new User(req.body);
    await user.save();
})



// ------------------- HOME -------------
app.get('/home/events/upcoming', (req, res) => {

})


// ----------------profile-----------------------------
app.get('/profile/dashboard', (req, res) => {

})

app.post('/profile/personalInfo', (req, res) => {
    
})

app.post('/profile/reportSubmission', (req, res) => {
    // report
})

// ------------- Events ---------------
app.get('/event/events/upcoming', (req, res) => {

})

app.get('/event/events/past', (req, res) => {

})

app.post('/event/new', upload.array('image') ,async (req, res, next) => {

    const event = new Event(req.body.event);
    event.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    await event.save();
    // console.log(campground);
    // req.flash('success', 'Successfully made a new campground!');
})

app.post('/event/show', (req, res) => {

})

app.get('/event/index', (req, res) => {

})

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log('server running..'));