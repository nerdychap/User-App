const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/build'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/build/' + 'index.html')
    console.log(__dirname);
})

app.listen(3040, () => {
    console.log('server listening on port 3040');
})