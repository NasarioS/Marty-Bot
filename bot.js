const Discord = require('discord.js');
const bot = new Discord.Client();
var auth = require('./auth.json');
bot.once('ready', () => {
	console.log('Marty Running');
});
bot.login(auth.token);
var fs = require('fs');
//for finding @'s
var person = '';
// Initialize Discord Bot


bot.on('message', message => {
    // Our bot needs to know if it will execute a command
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
		case 'sad':
			message.channel.send('Sad Boi Hours: 8 PM to 7 AM');
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
			var temp = fs.readFileSync('vexid.txt','utf8');
			message.channel.send(temp.toString().concat(' Someone is Summoning you'));			
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
		case 'slap':
		case 'happy':
			message.channel.send(Emote(cmd));			
		break;
         }
     }
});
function joke(){
	var jokes = fs.readFileSync('jokes.txt','utf8');
	var myjokes = jokes.toString().split(";");
	return myjokes[Math.floor(Math.random() * (myjokes.length - 1))];
	
}
function Emote(em){
	var emote = fs.readFileSync(em.concat('.txt'),'utf8');
	var myEmotes = emote.toString().split(';');
	return myEmotes[Math.floor(Math.random() * (myEmotes.length - 1))];
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
var str = 'Activate Me: \"m!\"\nCommands: Alexis, Joker, Vex,\nGhost,';
var str1 = 'Wyvern, Sad, Joke, Pet, Gone, Goodnight, Pie\n';
var str2 = 'reactions: Happy, Slap, ';
return str.concat(str1,str2);
}