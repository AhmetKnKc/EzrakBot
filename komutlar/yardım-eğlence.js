const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= Ezrak bot Eğlence Menüsü =
${prefix}1vs1 <etiket>         :: kişiyle 1vs1 atarsınız.
${prefix}ascii <mesaj>         :: AScii yazı yazarsınız.
${prefix}banned                :: dene ve gör :x
${prefix}aşk <kişi>            :: Kişiye olan aşkınızı ölçer.
${prefix}avatar <kişi>         :: Avatarı gösterir.
${prefix}balıktut              :: Balık tutarsınız.
${prefix}inek <mesaj>          :: İnek resminin üstüne yazı yazarsınız.                          
${prefix}csgo <STEAMID64>      :: cs:go rekorlarınızı gösterir.
${prefix}herkesebendençay      :: Herkese çay ısmarlarsınız.
${prefix}çayaşakerat           :: Çaya şeker atar.
${prefix}çayiç                 :: Çayınızdan bir yudum alırsınız.
${prefix}çekiç                 :: Birine çekiç fırlatırsınız.
${prefix}8ball <soru>          :: Sorularınızı cevaplar.
${prefix}efkarölçer            :: Efkarınızı ölçer.
${prefix}fakemesaj @<kişi> msj :: Kişinin ismiyle mesaj yazarsınız.
${prefix}hesapla <işlem>       :: Matematik sorusu çözdürürsünüz.
${prefix}ping                  :: Botun pingini gösterir.
${prefix}taş-kağıt-makas       :: Botla Taş kağıt makas oynarsınız.
${prefix}tersavatar            :: Avatarınızdaki renklerin tersini gösterir.
${prefix}troll                 :: Troll çıkarır.
${prefix}emojiyazı <yazı>      :: Emoji şeklinde yazı yazarsınız.
${prefix}gif <aranıcak gif>    :: gif atar.
${prefix}sigara                :: Sigara yakarsınız.    
`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};