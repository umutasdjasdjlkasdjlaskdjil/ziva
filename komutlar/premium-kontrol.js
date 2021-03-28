const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let nemesis = await db.fetch(`premod_${message.guild.id}`)
  let nemesisYazi;
  if (nemesis == null) nemesisYazi = 'Malesef Bu Server (Sunucu) İçin Premium Sistemi Aktif Değil...'
  if (nemesis == 'aktif') nemesisYazi = 'Yaşasın! Bu Sunucu İçin Premium Sistemi Aktif. '
  if (nemesis == 'deaktif') nemesisYazi = 'Malesef Bu Server (Sunucu) İçin Premium Sistemi Aktif Değil...'
  const embed = new Discord.MessageEmbed()
  .setTitle('ZivaBot Premium Kontrol')
  .setColor("GREEN")
  .setDescription(nemesisYazi)
  message.channel.send(embed)
  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["premiumkontrol"],
    permLevel: 0,
}

exports.help = {
    name: 'premium-kontrol',
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontorol'
}