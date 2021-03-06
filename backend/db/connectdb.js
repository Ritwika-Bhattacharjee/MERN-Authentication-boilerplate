const mongoose = require('mongoose');

//connect to db

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('Database connection established successfully'))
.catch((err) => console.log(err));