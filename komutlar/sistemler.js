const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    
     .setTitle(`ZivaBot Sistemler Yardım`)
.setDescription(` <a:hype:825006047919603757> Otorol <a:hype:825006047919603757> 
\`z!!otorol-ayarla <ROL> <KANAL>\`, \`z!!otorol-kapat\`, \`z!!otorol-mesaj <MESAJ>\`, \`z!!otorol-mesaj-sıfırla\` 
 <a:hype:825006047919603757> Sayaç <a:hype:825006047919603757> 
\`z!!sayaç <KANAL> <SAYI>\` \`z!!sayaç-sıfırla\` 
<a:hype:825006047919603757> Prefix <a:hype:825006047919603757> 
\`z!!prefix-ayarla\`,\`z!!prefix-sıfırla\`
**NOT!**
Prefixi unutursanız botu suncudan atıp geri getirin...`) 
    
.setThumbnail('https://cdn.discordapp.com/attachments/781812382095507506/825088263483162685/static.png')
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['sistemler']



};
exports.help = {
name: "sistemler"
};