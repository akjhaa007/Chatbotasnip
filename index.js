'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

// Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES

app.get('/', function(req, res) {

	res.send("Hi I am a chatbot")

})
/* Developer : Abhishek Kumar Jha 
   Address Madhubani Bihar*/

let token = "EAADCF2ZA4LpMBABW7rvCXu5MGnVoQfECU0ZCPNwv0lLvWaZCCjPecJF2BqNpNDKThXlPhccFMfL69y8ZCmDC9VFt2nvddW6Ghk9AsXS1kCqqSIHrk7ZCCWwHZBzvZAex2SHvYRFUbcEi2DZC4WyuyyBUlzvZBn46dovq0Vjoo5S6qxXZAFtzZCRMYIbbZCcqZCTumP5cZD"

// Facebook 

app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "senorit") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})

app.post('/webhook/', function(req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id

		if (event.message && event.message.text) {

			let text = event.message.text
		//	sendText(sender, "Text echo: " + text.substring(0, 100))
             
            if((text === 'Hello')||(text === 'Hi')||(text === 'hello')||(text === 'HELLO')||(text === 'hi'))
			
			{
				sendText(sender, " Sir, I am beta Version Of chatbot so I can only reply you  in following command:\n 1.HCL\n2.HCL_full_form\n3.Hello\n4.Address\n5.Headquartered\n6.Software\n7.Noida\n8.Product\n9.Founder\n10.CEO\n11.CFO\n12.Established", + text.substring(0, 100))
				
			}
			if(text === 'HCL_full_form')
			{
				sendText(sender, " Full form of of HCL is Hindustan Computers Limited", + text.substring(0, 100))
				
			}


			if(text === 'HCL')
			{
				sendText(sender, " HCL Technologies Limited is an Indian multinational IT services company, headquartered in Noida, Uttar Pradesh, India. It is a subsidiary of HCL Enterprise " + text.substring(0, 100))
				
			}
            
             if(text === 'hcl')
			{
				sendText(sender, " HCL Technologies Limited is an Indian multinational IT services company, headquartered in Noida, Uttar Pradesh, India. It is a subsidiary of HCL Enterprise " + text.substring(0, 100))
				
			}
			 if(text === 'Hcl')
			{
				sendText(sender, " HCL Technologies Limited is an Indian multinational IT services company, headquartered in Noida, Uttar Pradesh, India. It is a subsidiary of HCL Enterprise " + text.substring(0, 100))
				
			}


			else if(text === 'Address')
			{
				sendText(sender, "There is lots of address of our company for IT service. send me your location that  We can suggest you our nearest service center , Product show room etc. '\n" + text.substring(0, 100))
				
			}


          else if(text === 'address')
			{
				sendText(sender, "There is lots of address of our company for IT service. send me your location that  We can suggest you our nearest service center , Product show room etc. '\n" + text.substring(0, 100))
				
			}


            else if(text === 'Headquartered')

			{
				sendText(sender, " Sir, Headquartered of our compay is in Noida, Uttar Pradesh, India'\n" + text.substring(0, 100))
				
			}

            else if(text === 'headquartered')

			{
				sendText(sender, " Sir, Headquartered of our compay is in Noida, Uttar Pradesh, India'\n" + text.substring(0, 100))
				
			}

           else if(text==='noida')    
                
            {
				sendText(sender, " It is part of National Capital Region of India. Noida is located in Gautam Buddh Nagar district of Uttar Pradesh state." + text.substring(0, 100))
			}
            
           else if(text==='Noida')    
                
            {
				sendText(sender, " It is part of National Capital Region of India. Noida is located in Gautam Buddh Nagar district of Uttar Pradesh state." + text.substring(0, 100))
			}


            else if(text==='software')    
                
            {
				sendText(sender, "Software industry of our company is in Greated Noida which most popular IT industry area of North India " + text.substring(0, 100))
			}


			 else if(text==='Software')    
                
            {
				sendText(sender, "Our IT engineer help  users to solve the device bug and users software problem in warranty service ,Product specification." + text.substring(0, 100))
			}

			else if(text==='Product')    
                
            {
				sendText(sender, "We are building Electronics Device  CPU , Mouse, Keyboard ,Tablet, Moniter, Laptop  for users to get experirience with Computaion Skill in Easiest way  " + text.substring(0, 100))
			}

             
            else if(text==='product')    
                
            {
				sendText(sender, "1.WORKLOAD AUTOMATION \n2.DATA\n3.CHANGE AND CONFIGURATION MANAGEMENT\n4.TESTING\n5.TERMINAL EMULATION\n6.MODELING AND CONSTRUCTION" + text.substring(0, 100))
			}


              else if(text==='Founder')    
                
            {
				sendText(sender, "Founders of our company are Shiv Nadar and Arjun Malhotra.\nMr Nadar was Fonder and Chairman of our company," + text.substring(0, 100))
			}

            else if(text==='founder')    
                
            {
				sendText(sender, "Founders of our company are Shiv Nadar and Arjun Malhotra.\nMr Nadar was Fonder and Chairman of our company," + text.substring(0, 100))
			}


            else if(text==='CEO')    
                
            {
				sendText(sender, "C Vijayakumar is the President & Chief Executive Officer of our Company" + text.substring(0, 100))
			}

            else if(text==='ceo')    
                
            {
				sendText(sender, "C Vijayakumar is the President & Chief Executive Officer of HCL Technologies" + text.substring(0, 100))
			}
			else if(text==='Ceo')    
                
            {
				sendText(sender, "C Vijayakumar is the President & Chief Executive Officer of HCL Technologies" + text.substring(0, 100))
			}

			else if(text==='cfo')    
                
            {
				sendText(sender, "Anil Chanana is CFO of our company" + text.substring(0, 100))
			}

			else if(text==='CFO')    
                
            {
				sendText(sender, "Anil Chanana is CFO of our company" + text.substring(0, 100))
			}


            
			else if(text==='CFO')    
                
            {
				sendText(sender, "Anil Chanana is CFO of our company" + text.substring(0, 100))
			}


            else if(text==='Established')    
                
            {
				sendText(sender, "Our Company Established in 11 August 1976 in Delhi India for Global IT Service " + text.substring(0, 100))
			}

			else if((text==='established')||(text==='establisheD'))    
                
            {
				sendText(sender, "Our Company Established in 11 August 1976 in Delhi India for Global IT Service " + text.substring(0, 100))
			}

             
                        
			
		}
		if(event.postback)
		{
			text = JSON.stringify(event.postback)
			sendTextMessage(sender,"Post back Recieved:" +text.substring(0, 200) ,token)
			continue
		}
	}
	res.sendStatus(200)
})

function sendText(sender, text) {
	let messageData = {text: text}
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: token},
		method: "POST",
		json: {
			recipient: {id: sender},
			message : messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}


function receieveText(reciev, text) {
	let messageData = {text: text}
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: token},
		method: "POST",
		json: {
			recipient: {id: sender},
			message : messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}




app.listen(app.get('port'), function() {
	console.log("running: port")
})
