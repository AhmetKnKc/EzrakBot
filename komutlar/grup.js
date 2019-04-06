const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {
var embed = new Discord.RichEmbed()
.setColor('GREEN')
.addField('Sunucu steam grubumuz:', 'https://steamcommunity.com/groups/ezrakfunsunucu')
.addField('­','­')
.addField('Discord sunucu davet linki:', 'https://discord.gg/GYfB9Bn')
.addField('­','­')
.addField('Sunucu ip adresimiz:', '185.184.27.106:27015')
.setThumbnail('https://cdn.discordapp.com/attachments/559993963122262036/561215788875513886/EZRAK001.png')

message.channel.sendEmbed(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'grup',
  description: '',
  usage: 'grup'
};
