const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {  
  let prefix = ayarlar.prefix
    message.channel.sendCode("asciidoc",`= Ezrak Bot Bilgi Menüsü =
${prefix}ip             :: Sunucumuzun ip adresini gösterir.
${prefix}şikayet <mesaj>:: Şikayetlerinizi kurucuya iletir. Gereksiz kullananlar cezalandırılır.

`);
 
    
  }
  


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Sunucu bilgilerini gösterir.',
  usage: 'bilgi'
};