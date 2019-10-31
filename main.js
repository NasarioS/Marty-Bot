const Discord = require('discord.js');
const bot = new Discord.Client();
var auth = require('./auth.json');
//files
var fs = require('fs');
var myFile;
//emotes embed
var emotesEmbed = new Discord.RichEmbed();
emotesEmbed.setColor('GOLD');
bot.once('ready', () => {
	console.log('Marty Running');
});
bot.login(auth.token);
function Emotion(str1, str2) { 
   this.name = str1; 
   this.emotions = str2; 
} 
var vex = fs.readFileSync('vexid.txt','utf8'); 

//preload emotion.txt for later use into an object named emotions
myFile = fs.readFileSync('emotions.txt','utf8');
var names = myFile.toString().split(';');
var myEmotions = new Array();
var listName, list;
for(var i = 0; i < names.length; i++){
	list = names[i].split('\n');
	listName = list.shift();
	myEmotions.push(new Emotion(listName,list));
}
//preload reaction-list.txt
myFile = fs.readFileSync('reaction-list.txt','utf8');
var reactionlist = myFile.toString().split(',');

//preload jokes.txt
myFile = fs.readFileSync('jokes.txt','utf8');
var myjokes = myFile.toString().split(";");

bot.on('message', message => {
    // It will listen for messages that will start with `m!`
	
if (message.content.substring(0, 2) == 'm!') {
        var args = message.content.substring(2).split(' ');
	var cmd = args[0];
	args = args.splice(1);
		
	switch(cmd.toLocaleLowerCase()) {
            // m!help
		case 'help':
            		message.channel.send(help());
		break;
		case 'gone':
			message.channel.send('Why did you kill me Alexis?');
		break;	
		case 'joker':
	                message.channel.send('My Master');
            
		break;
		case 'vex':
			message.channel.send('Quack');

		break;
		case 'alexis':
			message.channel.send('Burn it all');
		break;
		case 'ghost':
			message.channel.send('I DON\'T SAY MOOOO!!!!');
		break;
		case 'sadboi':
			message.channel.send('Sad Boi Hours: **8 PM to 7 AM**');
		break;
		case 'joke':
			message.channel.send(joke());
		break;
		case 'wyvern':
			message.channel.send('I dont know at all');
		break;
		case 'pet':
			message.channel.send(pet(message.author.id));
		break;
		case 'quack':
			message.channel.send(vex.toString().concat(' Someone is Summoning you'));			
		break;
		case 'userid':
			message.channel.send(message.author.id);
		break;
		case 'goodnight':
			message.channel.send(goodnight(message.author.id));		
		break;
		case 'pie':
			message.channel.send('Everyone wants Freedom')
		break;
		
	}
	if(reactionlist.includes(cmd)){
		message.channel.send(Emote(cmd));
	}
     }
});
function joke(){
	return myjokes[Math.floor(Math.random() * (myjokes.length - 1))];
	
}
function Emote(em){
	for (var i = 0; i < myEmotions.length; i++){
		if(em == myEmotions[i].name.toString()){
			return emotesEmbed.setImage(myEmotions[i].emotions[Math.floor(Math.random() * (myEmotions[i].emotions.length - 1))]);
		}
	}
	return emotesEmbed.setTitle('No reactions for that yet');
}
function pet(user){
	var uwu = 'uwu';
	return uwu.concat(' <@',user, '>');
}
function goodnight(user){
	var temp = 'Awwwwww, Okay goodnight ';
	return temp.concat('<@',user,'> Rest well buddy!');
}
function help(){
var str = 'Activate Me: \"m!\"\nCommands: **Alexis, Joker, Vex,\nGhost,';
var str1 = 'Wyvern, SadBoi, Joke, Pet, Gone, Goodnight, Pie**\n\n';
var str2 = 'Reactions: **Happy, Slap, Smirk, Teehee, Pout, Cry, Punch, Cheer, Dance\n';
var str3 = 'Thinking, Laugh, Wheeze, Eyeroll, What, Why, Pissed, Flirt, Fingerguns\n';
var str4 =  'Applaud, Slowclap, Nervous, Hide, Wink, Wiggle, Beg, Later\n';
var str5 = 'Facepalm, Shock, Fear, Rock, Kazookid, Stare, Dab, Gotem, Sips, Sad, Awkward, \nTableflip, Objection**';
return str.concat(str1,str2, str3, str4,str5);
}
