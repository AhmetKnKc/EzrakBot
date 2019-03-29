const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {  
  let prefix = ayarlar.prefix
    message.channel.sendCode("asciidoc",`= Ezrak Müzik komutları bilgi Menüsü =

${prefix}oynat <müzik ismi>  :: Çalma listesi boşsa müzik çalar doluysa sıraya ekler.
${prefix}kapat               :: Kapatır.
${prefix}geç                 :: Çalan şarkıdan bir sonraki şarkıya geçer.
${prefix}durdur              :: Çalan müziği durdurur.
${prefix}sürdür              :: Durdurulan müziği sürdürür.
${prefix}ses                 :: Müziğin sesini ayarlar. Varsayılan değer 10' dur.
${prefix}liste               :: Çalma listesini gösterir.
`);
    
  }
  


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Sunucu bilgilerini gösterir.',
  usage: 'müzik'
};