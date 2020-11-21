let mailer = require('nodemailer')
let transporter = nodemailer.createTransport({
	service : 'gmail',
	auth : {
		user : 'akejucaleb@gmail.com',
		pass : 'mypassword'
	}
})

let mailOptions = {
	from : 'fromEmail',
	to : 'akejucaleb@gmail.com',
	subject : '',
	text : ''
};

transporter.sendMail(mailOptions)

function(error, info) {
	if (error) {
		//handle error
	} else {
		console.log('Email sent:' +  info.response);
	}
}