const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
connectDB();

app.use(cors({
        origin: ['http://localhost:3000'] // Allow requests from localhost for development
    }));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

module.exports = app;
