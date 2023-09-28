const express = require('express');

const app = express();
const port = 3000;

// middleware 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('PCAT')
})

app.post('/photos', (req, res) => {
    res.send(
        `Title: ${req.body.title}\nDescription: ${req.body.description}\nURL: ${req.body.url}`
    );
    console.log(req.body);
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});