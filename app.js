const express = require('express');
const Photo = require('./models/Photo');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();
const port = 3000;

// middleware 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    const photos = await Photo.find({});
    for (let photo of photos) {
        res.write(`
        <div>
            <h2>${photo.title}</h2>
            <p>${photo.description}</p>
            <img src="${photo.url}" alt="${photo.title}" />
        </div>
        `);
    }
    res.end();
})

app.post('/photos', async (req, res) => {
    await Photo.create(req.body);
    res.status(200).send('Photo created successfully');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});