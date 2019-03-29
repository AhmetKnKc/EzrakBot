const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {  
  let prefix = ayarlar.prefix
    message.channel.sendCode("asciidoc",`= Erzak Yetkili Yardım Menüsü =

${prefix}ban <kişi> <sebep>         :: Kullanıcıyı sunucudan banlar.
${prefix}kick <kişi> <sebep>        :: Kullanıcıyı sunucudan atar.
${prefix}çekiliş <ödül>             :: Çekiliş yapar.
${prefix}duyuru <duyuru>            :: Yazılan kanalda duyuru yapar.
${prefix}herkesedm <mesaj>          :: Herkese dm atar.
${prefix}oylama <mesaj>             :: Oylama yapar.
${prefix}setprefix                  :: Botun prefixini değiştirir.
${prefix}rename <isim>              :: Botun ismini değiştirir.
${prefix}yazı-kanal-aç <isim>       :: Yazı kanalı açar.
${prefix}ses-kanal-aç <isim>        :: Ses kanalı açar.
`);
 
    
  }
  


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Sunucu bilgilerini gösterir.',
  usage: 'yetkili'
};