/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var transport = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    auth: {
        user: "dsvvian.rishabh@gmail.com",
        pass: "9001938408"
    }
}));
var rand,mailOptions,host,link;
module.exports = {
	 /*add: function(req, res) {
	 	console.log(req.body);
        API(UserService.save, req, res);
    },*/

    register: function(req,res)
    {
        var email = req.body.email;
        //var password = req.body.password;
        rand=Math.floor((Math.random() * 100) + 54);
        link="http://localhost:1337/verify?id="+rand;
        mailOptions={
            to : req.body.email,
            subject : "Please confirm your Email account",
            html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
        }
         //console.log(req.protocol+":/"+req.get('host'));
        //console.log(mailOptions);
        transport.sendMail(mailOptions, function(error, data){
           console.log("data",data,"mail",mailOptions);
             if(error){
                    console.log(error);
                res.end("error");
             }else{
            console.log("response", data);
            //res.end("sent");
            }
             /*host ="http://localhost:1337"; 
            console.log(host) 
            if((req.protocol+"://"+req.get('host'))==(host))
            {
                console.log(host);
                console.log("Domain is matched. Information is from Authentic email");
                console.log(rand);
                console.log("rand",rand);
                if(rand==rand)
                {
                    console.log("email is verified");
                    res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
                }
                else
                {
                    console.log("email is not verified");
                    res.end("<h1>Bad Request</h1>");
                }
            }
            else
            {
                res.end("<h1>Request is from unknown source");
            }*/
       
        console.log("req",req.body);
    	
    	if(!email || typeof email == undefined)
    	{
    		console.log("email is required");
    	}
    	if(!password || typeof password == undefined)
    	{
    		console.log("password is required");
    	}
    	else
    	{

    
    			User.find({email:email}, function(err , result)
    			{
                    console.log("email",email);
    				if(err)
    				{
    					res.serverError(err);

    				}
                    
    				else
    				{
    					User.create({username:email,email:email,password:password}).exec(function(err,data)
    					{
                            console.log("data",data);
    						if(err)
    						{
    							res.serverError(err);
    						}
    						else
    						{
    							res.ok('success');
    						}
    					})
    				}
    			})
    		}
            });
    	},

        verify : function(req,res)
        {
            console.log("verify");
            console.log(req.protocol+":/"+req.get('host'));
            
            host ="http://localhost:1337"; 
            console.log(host) 
            if((req.protocol+"://"+req.get('host'))==(host))
            {
                console.log(host);
                console.log("Domain is matched. Information is from Authentic email");
                console.log("id",req.query.id);
                console.log("rand",rand);
                if(req.query.id==rand)
                {
                    console.log("email is verified");
                    res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
                }
                else
                {
                    console.log("email is not verified");
                    res.end("<h1>Bad Request</h1>");
                }
            }
            else
            {
                res.end("<h1>Request is from unknown source");
            }
        }
    
	
};

