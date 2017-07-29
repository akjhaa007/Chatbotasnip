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
	res.send("Hi I am a chatbot and who you are?")
})
//facebook token to integrate with facbook server
//let token = "EAABbYB9UzZAIBANkGtZCfudDLpLF4qkyBf0cTbpZC5soo1AhN1sxpRY5g23zaZCZBU48IsHBWxcHZBAQu0J2Ed6hXg5z87rGf43GjXMCrlqhZAxrMF4ZBKrTczGyikXGtvR3p9FsihOhnYp5sp0dMhErrY5a8Yx6RHRIEMS9PmOad82VUZBwF6mWs"
let token ="EAADCF2ZA4LpMBABW7rvCXu5MGnVoQfECU0ZCPNwv0lLvWaZCCjPecJF2BqNpNDKThXlPhccFMfL69y8ZCmDC9VFt2nvddW6Ghk9AsXS1kCqqSIHrk7ZCCWwHZBzvZAex2SHvYRFUbcEi2DZC4WyuyyBUlzvZBn46dovq0Vjoo5S6qxXZAFtzZCRMYIbbZCcqZCTumP5cZD"
// Facebook 

app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "senorit" || req.query['hub'.mode]==='subscribe') {
		res.send(req.query['hub.challenge'])
	}
	if (req.query['hub.verify_token'] === "p") {
		res.send(req.query['hub.challenge'])
	}
	else
	{
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})
//--------------------------------------------------------------------------------
app.post('/webhook/', function(req, res) {

	let messaging_events = req.body.entry[0].messaging

	for (let i = 0; i < messaging_events.length; i++) 
	{
		let event = messaging_events[i]
		let sender = event.sender.id
		
		if (event.message && event.message.text) {
			let text = event.message.text
		   	 decideMessage(sender, text)
			 sendText(sender, "Text echo: " + text.substring(0, 100))
		}
		if(event.postback){
			let text = JSON.stringify(event.postback)
			decideMessage(sender,text)
			continue

		}
	}
	 res.sendStatus(200)
})

 



function decideMessage(sender, text1){
	let text = text1.toLowerCase()

	if(text.includes("summer")){ 
		sendImageMessage(sender)
		//sendText(sender,"I like fall")

	} 
	else if(text.includes("winter") ) {
		    sendGenereicMessage(sender)
            //sendText(sender, I like fall")
         	//sendButtonMessage(sender,Wha )

	} else{
		sendText(sender,"I like fall")
		sendButtonMessage(sender, "What is your faveroute season?")
	}

}

 function sendText(sender, text) {
	let messageData = {text: text}
	sendRequest(sender, messageData)


}

function sendButtonMessage(sender ,text){
	let messageData={
		"attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Hello sir How may I help you?",
        "buttons":[
          {
            "type":"postback",
            "title":"Summer",//name of button
            "payload":"summer"
          }, 
          {
            "type":"postback",
            "title":"Winter",
            "payload":"winter"
          }
        ]
      } 
    }
	}
	sendRequest(sender,messageData)
}
 
function sendImageMessage(sender){
	let messageData= {
    "attachment":{
      "type":"image", 
      "payload":{
        "url":"https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg"
      }
    }
  }

sendRequest(sender, messageData)
}

function sendGenereicMessage(sender){

	let messageData = {"attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
           {
            "title":"Hello I am Assiss chatbot\'s Hats",
            "item_url":"https://petersfancybrownhats.com"
            "image_url":"https://www.skillbyte.de/wp-content/uploads/2016/05/chatbot.jpg",
            "subtitle":"Welcome of HCL asistant chatbot system.",
           

             "buttons":[
              {
                "type":"web_url", 
                 "url":"https://en.wikipedia.org/wiki/HCL_Technologies",
                "title":"More about HCl Technologies"
              }
                       
            ]      
          }
        ]
      }
    }
    }
    sendRequest(sender,messageData)
}
 



function sendRequest(sender, messageData){
	//let messageData = {text: text}
	// sendRequest(sender, messageData)

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
