/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var auth = require('../services/UserService');
var transport = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    sendmail: true,
    auth: {
        user: "dsvvian.rishabh@gmail.com",
        pass: "9001938408"
    }
}));
var rand,host,link;
module.exports = {

    register: function(req,res){
        var email = req.body.email;
        //var mailOptions = {};
        var password = req.body.password;
        //console.log("body",req.body);
         /*rand=Math.floor((Math.random() * 100) + 54);
        link="http://localhost:1337/user/verify?id="+rand;
       
        mailOptions={
            from:"dsvvian.rishabh@gmail.com",
            to : email,
            subject : "Please confirm your Email account",
            html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
        }*/
        if(!email || typeof email == undefined)
        {
            console.log("email is required");
            res.send("email is required")
        }
        else if(!password || typeof password == undefined)
        {
            console.log("password is required");
            res.send("password is required")
        }
         
       
        else
        { 
            //transport.sendMail(mailOptions, function (err, info) {
               // console.log("errro is ",err, info);
                /*if(err)
                {
                    console.log("server error");
                }*/
               // else
                //{
                    User.find({email:email}, function(err , result){
                    console.log("email",email);
                    if(err)
                    {
                        res.send("email already registerd");

                    }
                    
                    else
                    {
                        User.create({username:email,email:email,password:password,code:rand}).exec(function(err,data)
                        {
                            console.log("data",data);
                            if(err)
                            {
                                res.send("err");
                            }
                            else
                            {
                                res.ok('success');
                            }
                        })
                    }
                })
                //}
            //});
        }
       
        
    },

    'verify': function(req,res){
        console.log("inside verification verification");
        code = req.param('id')
        User.findOne({code:code}).exec(function(err,data)
        {
            if(err)
            {
                res.send("error")
            }
            else
            {
                User.update({code:code},{isVerified:'Y'}).then(function(data)
                {
                    delete data.code;
                    res.send("successfully verified");
                }).fail(function(err)
                {
                    console.log("some error");
                });
            }
        })
        
    },
	
};

