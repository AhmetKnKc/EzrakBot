const Discord = require('discord.js');
const client = new Discord.Client();
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  
  let args = message.content.split(' ').slice(1);
  let sonuc = args.join(' ');
  
  client.user.setUsername(sonuc);
  
  const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .addField('Yeni isim başarıyla ayarlandı. Yeni isim:\n\n', sonuc)
  
  message.channel.sendEmbed(embed);
 };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rename',
  description: 'Botun ismini değiştirir.',
  usage: 'rename <isim>'
};
