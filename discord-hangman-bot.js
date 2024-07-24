var client_token='' // get a token from discord app creation 
require('discord-reply');
const Discord = require('discord.js'); //imports discord.js
const channelID=''; // channel id of where you want the bot  active on 
var takenLetters; 
var tries; 
const fetch = require("node-fetch");
var answer=null; 
var stuff=[];
var life =10; 
var winningCheck="";
var wordDisplay = [];
var guessWord;

var finished=false; 
getRandomWord(10);
const client = new Discord.Client({ intents: [
  Discord.GatewayIntentBits.Guilds,
  Discord.GatewayIntentBits.GuildMessages,Discord.GatewayIntentBits.MessageContent
]}); //creates new client

client.on('ready', () => {
	
  console.log(`Logged in as ${client.user.tag}!`);
   client.channels.cache.get(channelID).send("hi");
});
  const sendMessage = (message) => {
    client.channels.cache.get(channelID).send(message);
  };
 
 
client.on('messageCreate', async msg => {

	


 if (msg.content.includes('!g')) {
   var fullMsg = msg.content; 
   var letter = fullMsg.split("!g"); 
   guess(letter[1]);
   msg.reply(`Thus far ${winningCheck}`);
   if(finished!=false){
	   msg.reply(`You've won`);
   }
 }
 else if(msg.content==='!new'){
	 
	 getRandomWord(10);
	 
 }
 else if(msg.content==='!show'){
	 msg.reply(`Answer is ${answer}`); 
	 
	 
	 
 }
});


client.login(client_token); //signs the bot in with token

async function getWord(){
	
	
}

function checkWord(letter){
	
	
}


async function getRandomWord(len)
{
winningCheck="";
wordDisplay = [];
guessWord;

finished=false; 	
	
var wordurl= "https://random-word-api.herokuapp.com/word?lang=en&length="+len ; 

//var wordurl ="https://random-word.ryanrk.com/api/en/word/random/?minlength=10&maxlength=11"
let response = await fetch(wordurl);

let text = await response.text(); // read response body as text
text=text.toLowerCase();

let clean =String(text).substring(2,text.length-2);

answer=clean;
generateAnswerDisplay(answer);
}
function guess(rettel) {

const answerArray= answer.split("");
var counter = 0;
var guessWord=rettel.trim();; 


if(life >0)	
	{
	
	
	 for (var j = 0; j < answer.length; j++) {
        if (guessWord === answerArray[j]) {
          wordDisplay[j] = guessWord;
          winningCheck = wordDisplay.join("");
          counter += 1;
		
		  
        }
      }
	
	}
	  if (counter === 0) {
        life -= 1;
        counter = 0;

      } else {
        counter = 0;
      }
	   if (answer === winningCheck) {
		   
		   finished=true; 
		   
	   }
}

function generateAnswerDisplay(word) {
  var wordArray = word.split("");
  
  for (var i = 0; i < answer.length; i++) {
    if (wordArray[i] !== "-") {
      wordDisplay.push("?");
    } else {
      wordDisplay.push("?");
    }
  }
  return wordDisplay.join(" ");
}

