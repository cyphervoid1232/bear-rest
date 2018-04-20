var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var bears = [
    {id:'1', name:"JJ"},
    {id:'2', name:"Chatarin"},
    {id:'3', name:"Eiei"}
];
router.route('/bears')
    .get(function(req,res) {
        res.json(bears);
    })
    .post(function(req, res) {
        var bear = {};
        bear.name = req.body.name;
        bears.push(bear);
        res.json({ message: 'Bear created!' });
    });
// all of our routes will be prefixed with /api
app.use(cors());
app.use('/api', bodyParser.json(), router);

app.listen(8000);