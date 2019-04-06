const Discord = require('discord.js');
const loglar = require('../loglar.json');

exports.run = (client, message, args) => {
  if(message.author.id == "452871151794782209" || message.author.id == "295503660903825408")
  {  
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Özel DM den göndermek İstediğiniz Mesajı Yazınız.');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('**' + mesaj + '**')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})}};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm'],
  permLevel: 0
};

exports.help = {
  name: 'herkesedm',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'herkesedm [duyurmak istediğiniz şey]'
};
