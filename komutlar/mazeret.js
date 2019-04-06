const Discord = require('discord.js');


exports.run = function (client, message, args) {
    let members = message.channel.members;
    let ben = members.find('id', '295503660903825408');
    let aliabi = members.find('id', '452871151794782209');
    


    let arg = message.content.split(' ').slice(1);
    let sonuc = arg.join(' ');
    var embed = new Discord.RichEmbed()

        .setColor('GREEN')
        .setDescription(`**Nick:** ${message.member.displayName}\n**Mazereti:** ${sonuc}`)

    aliabi.send(embed);
    ben.send(embed);

    

    message.channel.send('Başarıyla yöneticilere ulaştı. Yöneticiye giden mesaj böyle gözükecektir;\n');
    message.channel.sendEmbed(embed);

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'mazeret',
    description: 'Toplantıya gelemiyenler burdan mazeretini yaza bilir.',
    usage: 'mazeret <mazeretiniz>'
};
