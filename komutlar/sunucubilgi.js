const Discord = require('discord.js');
const client = new Discord.Client();
const https = require('https');

exports.run = (client, message) => {
  var embed = new Discord.RichEmbed()
  .setImage("https://cache.gametracker.com/server_info/185.184.27.106:27015/b_560_95_1.png")
  .setColor("GREEN")
  message.channel.sendEmbed(embed);
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Türk bayrağı Gôsterir',
  usage: 'sunucubilgi'
};
