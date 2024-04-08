const express = require('express');
const mongoose = require('mongoose');
const submissionRoutes = require('./routes/submissionRoutes');

const app = express();
const PORT = process.env.PORT || 8800;

mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use(express.json());

app.use('/api', submissionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
