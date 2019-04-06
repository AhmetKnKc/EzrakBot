const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let channel = message.mentions.channels.first()
    if (!channel) {
        return message.channel.send("Gelen-Giden kanalı olarak ayarlamak istediğin kanalı etiketlemelisin. `>resimlihoşgeldin <kanal>`")
    }
    db.set(`giriscikisKanal_${message.guild.id}`, channel.name)
    message.channel.send(`Gelen-Giden kanalı ${channel} olarak ayarlandı <a:oke:533358941632069652>`)
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hoşgeldin-ayarla', 'welcome-set','gelen-giden'],
    permLevel: 3
}

exports.help = {
    name: 'resimlihoşgeldin',
    description: 'Log kanalını belirler.',
    usage: 'resimlihoşgeldin <#kanal>'
} 
