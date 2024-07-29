var client_token=''
require('discord-reply');
const Discord = require('discord.js');
var ComfyJS = require("comfy.js");
const channelID='';
const fetch = require("node-fetch");

if(process.argv[2] !=null ){
	username = process.argv[2];
	
}
else{
	
	username = '';    
}

ComfyJS.Init(username);

Disc("I am online "); 

ComfyJS.onReSub=( user, message, streamMonths, cumulativeMonths, subTierInfo, extra ) =>{
	
		//console.log( user+" has subbed for " + cumulativeMonths + subTierInfo ); 
		Disc(user+" has subbed for " + cumulativeMonths + " at Tier  " +_ subTierInfo)
	
}
ComfyJS.onSubGift=( gifterUser, streakMonths, recipientUser, senderCount, subTierInfo, extra ) =>{
	Disc(  gifterUser + " has gifted  "  + recipientUser + " " ) 
		
}


ComfyJS.onSubMysteryGift =( gifterUser, numbOfSubs, senderCount, subTierInfo, extra ) =>{
	console.log( gifterUser + " has gifted  " +numbOfSubs + " subs " + senderCount )
	Disc(gifterUser + " has gifted  " +numbOfSubs + " subs " + senderCount ); 
}

function Disc(msg){
	
const client = new Discord.Client({ intents: [
  Discord.GatewayIntentBits.Guilds,
  Discord.GatewayIntentBits.GuildMessages,Discord.GatewayIntentBits.MessageContent
]}); //creates new client

client.on('ready', () => {
	
  console.log(`Logged in as ${client.user.tag}!`);
   client.channels.cache.get(channelID).send(msg);
   
   
});
client.login(client_token); //signs the bot in with token

}
