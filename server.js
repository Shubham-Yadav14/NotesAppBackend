const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI) // Remove useNewUrlParser and useUnifiedTopology
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const noteRoutes = require('./routes/notes');
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
