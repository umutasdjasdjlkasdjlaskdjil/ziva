const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "z!!";

    const embed = new Discord.MessageEmbed()
        
        .setColor('GREEN')
        .setTitle(`Ziva Bot Yardım Menüsü`)
        .setDescription(`
<a:moderasyon:825661575355695125> \`${prefix}moderasyon\` | Moderasyon Menüsünü Açar.
<:evettt:825417394633048094> \`${prefix}sistemler\` | Sistem Menüsünü Açar.
\`${prefix}\`
\`${prefix}\`
\`${prefix}\`
`)
    .setThumbnail('https://cdn.discordapp.com/attachments/781812382095507506/825088263483162685/static.png')

        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
        message.react(':kalprainbow2:');
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsü',
    usage: 'yardım'
};