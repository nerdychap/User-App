const express = require('express');
const app = express();
const router = express.Router();
const serverless = require('serverless-http');


app.use(express.static(__dirname + '/build'))

router.get('/', (req, res) => {
    // console.log(__dirname + 'public' + 'index.html');
    res.sendFile(__dirname + '/build/' + 'index.html')
})
// router.get('/', (req, res) => {
//     res.json({ "name": "Siya" })
// });

app.use('/.netlify/functions/express', router)
module.exports.handler = serverless(app);

app.listen(3040, () => {
    console.log('server listening on port 3040');
})