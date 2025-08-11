const express = require('express');
const mongoose = require('mongoose');
const dotenv = require ('dotenv');

dotenv.config();

const tasksRoutes = require('./routes/tasksRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('MongoDB connected');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})

app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to your Task Management App'});
});