const express = require('express');
const app = express();
app.use(express.static(__dirname + '/build'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/' + 'index.html')
})

app.listen(3040, () => {
    console.log('server listening on port 3040');
})