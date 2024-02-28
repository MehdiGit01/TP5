const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Connection to MongoDB failed', err);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;
