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
        pass: "*********"
    }
}));
var rand,host,link;
module.exports = {

    register: function(req,res){
        var email = req.body.email;
        //var mailOptions = {};
        var password = req.body.password;
        var data = req.body;
        //console.log("data1",data);
        //console.log("body",req.body);
         /*rand=Math.floor((Math.random() * 100) + 54);
        link="http://localhost:1337/user/verify?id="+rand;
       
        mailOptions={
            from:"dsvvian.rishabh@gmail.com",
            to : email,
            subject : "Please confirm your Email account",
            html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
        }*/
        if(!data.email || typeof data.email == undefined)
        {
            //console.log("email is required");
            res.send("email is required")
        }
        else if(!data.password || typeof data.password == undefined)
        {
            //console.log("password is required");
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
                    User.findOne({email:data.email}, function(err , result){
                    //console.log("email",email);
                    if(result)
                    {
                        return res.jsonx({
                            code:404,
                            success: false,
                            message: "Email is already registerd"                                        
                        });

                    }
                    
                    else
                    {
                        data.code = rand;
                        User.create(data).exec(function(err,result)
                        {
                            //console.log("data",data);
                            if(err)
                            {
                                return res.jsonx({
                                    code :404,
                                    success: false,
                                    error: err                                       
                                });
                            }
                            else
                            {
                                return res.jsonx({
                                        success: true,
                                        message: "Successfully Registeration",                                        
                                        data: {
                                            success: result
                                        }
                                    });
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

