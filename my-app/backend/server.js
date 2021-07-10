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
const Report = require('./models/reports');
const Event = require('./models/events');
const UpComingEvent = require('./models/upcomingevents');
const PastEvent = require('./models/pastevents');



const Admin_id='60e9cc0464e7993a2c944cf1';
const Coordinate_id=''



app.use(express.urlencoded({ extended: true }));

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
    console.log(req.body)
    const user = new User(req.body);
    await user.save();
})

let upcomingEventArray = ['', '', '']


// ------------------- HOME -------------
app.get('/home/events/upcoming', async (req, res) => {
    const events = await Event.find({_id:{$in:upcomingEventArray}})
    res.send(events);
//   [{},{},{}] 
})

// ----------------profile-----------------------------
app.get('/profile/dashboard', async (req, res) => {
    const {userId}=req.params;
    const user=await user.findById(userId);
    res.send(user);
})

app.post('/profile/personalInfo', async (req, res) => {
    const {id} = req.params;
    const user=await User.findById(id);
    res.send(user);

})

app.post('/profile/reportSubmission', async (req, res) => {
    const {reportId}=req.params;
    const report=await Report.findById(reportId);
    res.send(report)
})
app.post('/profile/personalInfo', async (req, res) => {
    const {email}=req.params;
    const report=await Report.findOneAndUpdate({email:email},{...req.body});
    
})

// ------------- Events ------------------------------------------------
app.get('/events/upcoming', async (req, res) => {
    const events = await UpComingEvent.find({});
    res.send(events)
})

app.get('/events/past', async (req, res) => {
    const events = await PastEvent.find({});
    res.send(events)
})

app.post('/event/new', upload.array('image'), async (req, res, next) => {

    const event = new Event(req.body.event);
    event.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    await event.save();
    // console.log(campground);
    // req.flash('success', 'Successfully made a new campground!');
})

app.post('/event/show', async (req, res) => {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.send(event);
})

app.get('/events/index', async (req, res) => {
    const events = await Event.find({});
    res.send(events)
})

app.get('/event/register',async (req,res)=>{
    const {email,eventId,joined}=req.params;
    const user=await User.find({email:email});
    const event=await Event.findById(eventId);
    await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })

    if(parserInt(joined)===1){
        await user.updateOne({$pull:{pendingEvents:{event}}})
    }
    else{
        user.pendingEvents.push(event);
        await user.save();
    }
})


// here starts server work
server.listen(4000, () => console.log('server running..'));