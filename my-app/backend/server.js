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
const ReviewReport = require('./models/reviewreports');
const Event = require('./models/events');
const UpComingEvent = require('./models/upcomingevents');
const PastEvent = require('./models/pastevents');



const Admin_id = '60e9cc0464e7993a2c944cf1';
const Coordinate_id = '60e9e63a7731ee1083bd6a03';



app.use(express.urlencoded({ extended: true }));
console.log(process.env.ATLAS_URI);
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


let upcomingEventArray = ['60ea0c31e75e4739bc8a3163', '60ea0c36e75e4739bc8a3166', '60ea0c37e75e4739bc8a3168']

// ----------- SignUp ----------------
app.post('/signup', async (req, res) => {
    // email , mobile , username
    const user = new User(req.body);
    await user.save();
})

// ------------------- HOME -------------
app.get('/home/events/upcoming', async (req, res) => {
    const events = await Event.find({ _id: { $in: upcomingEventArray } })
    res.send(events);
    //   [{},{},{}] 
})

// ----------------profile-----------------------------
app.post('/profile/dashboard', async (req, res) => {
    const { email } = req.body;

    let user = await User.findOne({ email: email });
    console.log(user, email);
    res.send(user);
})

app.post('/profile/personalInfo', async (req, res) => {
    const { email, dob, address: location, mobile } = req.body;
    // const user = await User.findOneAndUpdate({ email: email }, { ...req.body });    
    let user = await User.updateOne({ email: email }, { ...req.body });
    console.log(user);
    res.send(user);
})

app.post('/profile/personalInfo1', async (req, res) => {
    const { email } = req.body;
    console.log(email);
    let user = await User.find({ email: email });
    console.log(user);
    res.send(user);
})


app.post('/profile/reportSubmission', async (req, res) => {
    // email
    // reportObj
    // imageArray
    const { email, title,hours,images } = req.body;
    const user = await User.find({ email: email });
    const event = await Event.find({ title: title });

    const report=new Report({
        user:user,
        event:event,
        minutes:hours*60,
        images:[...images]
    })
    await report.save()

    res.send(report)
})

// app.post('/profile/personalInfo', async (req, res) => {
//     const {email}=req.params;
//     const report=await Report.findOneAndUpdate({email:email},{...req.body});
// })

// // ------------- Events ------------------------------------------------

app.get('/events/upcoming', async (req, res) => {
    const events = await UpComingEvent.find({});
    res.send(events)
})

app.get('/events/past', async (req, res) => {
    const events = await PastEvent.find({});
    res.send(events)
})

//, upload.array('image')
app.post('/event/new', async (req, res, next) => {
    // eventObj

    console.log(req.body);
    // const event = new Event(req.body.event);
    // event.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    // await event.save();
    // upcomingEventArray.shift();
    // upcomingEventArray.push(event._id);

    // console.log(campground);
    // req.flash('success', 'Successfully made a new campground!');
})

// app.post('/event/show', async (req, res) => {
//     const { id } = req.body;
//     const event = await Event.findById(id);
//     res.send(event);
// })

app.get('/event/register', async (req, res) => {
    console.log(req.body);

    const { email, eventId, joined } = req.body;
    const user = await User.find({ email: email });
    const event = await Event.findById(eventId);
    await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })

    if (parserInt(joined) === 1) {
        await user.updateOne({ $pull: { pendingEvents: { event } } })
    }
    else {
        user.pendingEvents.push(event);
        await user.save();
    }
})

app.post('/review/reports', async (req, res) => {
    const reviews = await ReviewReport.findById(Coordinate_id);
    res.send(reviews);
})

server.listen(4000, () => console.log('server running..'));