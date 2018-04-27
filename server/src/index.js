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

var id = 5;
router.route('/bears')
    .get(function(req,res) {
        res.json(bears);
    })
    
    .post(function(req, res) {
        var bear = {};
        console.log(req.body.name)
        bear.name = req.body.name;
        bear.id = id++;
        bears.push(bear);
        res.json({ message: 'Bear created!' });
    });

router.route('/bears/:id')
    .delete(function(req,res) {
        bears = bears.filter((data) => {
            return data.id != req.params.id
        })
        res.json(bears)
    })
// all of our routes will be prefixed with /api
app.use(cors());
app.use('/api', bodyParser.json(), router);

app.listen(8000);