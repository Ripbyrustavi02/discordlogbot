const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

var prefix = config.prefix;


client.on('ready', () => {
  console.log(`Loglar yukleniyor lutfen bekleyin...`);
});


  
  client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} A: ${msg.author.tag}`);
  if (msg.author.id === config.id) return;
  if (msg.author.bot) return;
  });
  
  
  

  

client.login(config.token);
        
