var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var bears = [
    {id:'1', name:"JJ"},
    {id:'2', name:"Chatarin"},
    {id:'3', name:"Eiei"},
    {id:'4', name:"Oat"}
];
router.route('/bears')
    .get(function(req,res) {
        res.json(bears);
    })
    .delete(function(req,res) {
        console.log(req.body.id)
        bears = bears.filter((data) => {
            console.log(data.id)
            console.log(data.id != req.body.id)
            return data.id != req.body.id
        })
        res.json(bears)
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