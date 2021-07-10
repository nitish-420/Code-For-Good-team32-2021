const mongoose = require('mongoose');
const User=require('./models/users')
const Event=require('./models/events')
mongoose.connect('mongodb+srv://team32:VdBP.-n_9WAzQ-G@cfg-team32.zcu3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connected');
});

d=new Date()
const seedDB=async()=>{
    
    let e=new Event({
        // date=d.toDateString(),
        description:'lfsd fjkadsfnkasjfn paisjf ndskaf asdsibfbew',
        coordinator:'60e9e63a7731ee1083bd6a03',
        duration:6,
        location:'xyz',
        title:'This is title place',
        images:['https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmdvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60']
    })
    await e.save();

    let a=new Event({
        // date=new Date.toDateString(),
        description:'lfsd fjkadsfnkasjfn paisjf ndskaf asdsibfbew',
        coordinator:'60e9e63a7731ee1083bd6a03',
        duration:4,
        location:'dsfsadf',
        title:'This is title place',
        images:['https://images.unsplash.com/photo-1571039904131-0239647d05f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80']
    })
    await a.save();
    let b=new Event({
        // date=new Date.toDateString(),
        description:'lfsd fjkadsfnkasjfn paisjf ndskaf asdsibfbew',
        coordinator:'60e9e63a7731ee1083bd6a03',
        duration:2,
        location:'sdfasf',
        title:'This is title place',
        images:['https://images.unsplash.com/photo-1622027508445-d41a7bdf20ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80']
    })
    await b.save();
    

    
}

// pending to add veg nonveg section

seedDB().then(()=>{
    mongoose.connection.close();
})
