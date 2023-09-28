const express = require('express');

const app = express();
const port = 3001;

// middleware 
// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.type('text/plain');
    const photo = {
        id: 1,
        url: 'https://unsplash.com/photos/5fNmWej4tAA',
        description: 'Photo of a doggo'
    }
    res.status(200).send(photo);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});