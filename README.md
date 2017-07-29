# Chatbotasnip
Hcl_Hack_Erath_chatbot
# chatbot
to setup this chatbot following software is require
//code in JSON parsing 
Download software :
step 1st download 
1.Node.js 
https://nodejs.org/dist/v6.11.1/node-v6.11.1-x64.msi
2.Sublime Text
https://download.sublimetext.com/Sublime%20Text%20Build%203126%20x64%20Setup.exe
3.github
https://git-scm.com/downloads
4.Heroku
https://cli-assets.heroku.com/branches/v6/heroku-windows-amd64.exe

after downloading all this sofware 

Windows user guide 
:
clone git or download the source file 
from this link
https://github.com/akjhaa007/chatbot

or clone git link 
https://github.com/akjhaa007/chatbot.git

/*-------------------------------development of chatbot-----------------------------------------------------------
1.set directory or put the directory  by clinking on open in Desktop below green button of github page
2.open gitbash
3.set directore by the command cd /destination of git folde
4.type git init 
5.to check node install type on npm init into git bash
and press enter while all version directory is end in bash comand
6.
$nmp install express request body-parser --save
directory will be generated 
7.after that type 
$git init 
$git add .
$git commit -m "Inting directory"
8.open sublime text Editor 
9.check index.js and and Parcfile bothe
10.save to the directory when ever you want to set your dstination of repositry 
11.open heroku through git cmd (windows file choose git command to loginto heroku gitbash is not working in heroku log in)
12.create heroku account 
13. log in heroku
type
$heroku create press enter 
will get hostig url
type $git init
$git add .
$git commit -m "Initing heroku"
$git push heroku master    /*it will take time to generate the link below */
$ click on the same link what ever heroku provide you when you are genereting the weblink
$typing heroku create 
copy this link and  past it to the browser
press enter you will get 
I am chatbot something in the browesr
"congratulation  will get the JSON parsing" 

//Focebook setting  
/***********set up the JSON file with facebook*********************/
step 1 open developer facebook page 
2.create new apps 
3.select APP name category 
4. choose messnge option
5.generate token
6.setup with webhook
7.select option messange delevering what ever you want
8. copy tocken
put into the tocken  inside index.js file (change this tocken)
type 
$ git add .
$ git commit -m "adding last data"
$ git push heroku master
type
curl -X POST https://graph.facebook.com/v2.6/me/subscribed_apps?access_token="_put_the_token_of your facebook_id"
/*****************************************************************************************************************************/

Enjoy the convesation with your own chatbot
you  can also add fileter and library into the index.Json to conversation with multiple features
