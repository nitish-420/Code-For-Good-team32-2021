const mongoose = require('mongoose');
const User=require('./models/users')

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connected');
});

const user=new User({
    username:'Admin',
    email:'admin32@gmail.com'

})


// image1 :'https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmdvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
// image2 :'https://images.unsplash.com/photo-1571039904131-0239647d05f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80'
// image3 :'https://images.unsplash.com/photo-1622027508445-d41a7bdf20ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'