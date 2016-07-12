var mongoose = require('mongoose'),
    express = require('express'),
    bodyParser = require('body-parser'),
    random = require('../modules/random'),
    Url = require('../models/url');

var route = express.Router();

route.get('/', function(req, res){
    Url.find({}, function(err, docs){
        if(err){
            throw err;
        }
        if(!docs){
            res.status(404).send({
                success: false,
                message: 'No content found in database.'
            });
        }else{
            res.json(docs);
        }
    });
});

route.get('/:short', function(req, res){
    Url.findOne({short: req.params.short}, 'url', function(err, docs){
        if(err){
            throw err;
        }
        if(!docs){
            res.status(404).send({
                success: false,
                message: 'No such URL found in database.'
            });
        }else{
            res.redirect(docs.url);
        }
    })
});

route.post('/', function(req, res){
    if(!req.body.url){
        res.status(400).send({
            success: false,
            message: 'Please provide a valid URL.'
        });
    }else{
        var url = req.body.url;
        Url.findOne({url: url}, function(err, docs){
            if(err){
                throw err;
            }
            if(docs){
                res.status(400).send({
                    success: false,
                    message: 'URL already exists.',
                    short: docs.short
                });
            }else{
                var short = random(6);
                Url.findOne({
                    short: short
                }, function(err, docs){
                    if(err){
                        throw err;
                    }
                    if(docs){
                        res.status(400).send({
                            success: false,
                            message: 'Failed to save URL to database.'
                        });
                    }else{
                        var newUrl = new Url({
                            url: url,
                            short: short
                        });
                        newUrl.save(function(err, doc){
                            if(err){
                                console.log(err);
                                res.status(400).send({
                                    success: false,
                                    message: 'Failed to save URL to database.'
                                });
                            }else if(!doc){
                                res.status(400).send({
                                    success: false,
                                    message: 'Failed request.'
                                });
                            }else{
                                res.json(doc);
                            }
                        });
                    }
                });
            }
        });
    }
});

module.exports = route;

var randomCheck = function(l, url){

}
