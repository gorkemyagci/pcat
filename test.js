const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect db

mongoose.connect('mongodb://localhost/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// create schema

const PhotoSchema = new Schema({
    title: String,
    description: String,
    url: String
});

// create model

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo

// Photo.create({
//     title: 'Photo 3',
//     description: 'Photo 1 description',
//     url: 'https://unsplash.com/photos/5fNmWej4tAA'
// });

// read a photo

async function readPhotos() {
    try {
        const data = await Photo.find({});
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

//readPhotos();

// update photo

async function updatePhoto(id) {
    try {
        const result = await Photo.findByIdAndUpdate(id, {
            title: 'Photo 1 updated'
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

//updatePhoto('6514ed0df7d24ab09b702e22');

// delete photo

async function deletePhoto(id) {
    try {
        const result = await Photo.findByIdAndRemove(id);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

//deletePhoto('6514ed0df7d24ab09b702e22');