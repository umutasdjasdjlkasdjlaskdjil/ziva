const ayarlar = require('../ayarlar.json');
module.exports = async message => {
  let client = message.client;
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  //
  if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
      if(command == '') return;
    message.reply("<a:bilmem:825005927593279498> Selamlar sunucuda " + command + ' adında bir komut bulunamadı. \n Komutlara bakmak için z!!yardım yazmalısın!')
  }
  }
//
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
//komut log


const Discord = require("discord.js")
     const embed22 = new Discord.MessageEmbed()
     
  .setColor('GREEN')
  .setDescription(`<a:bughunter:825417160905982033> **${message.guild.name}** Adlı sunucuda **${message.author}** adlı kullanıcı **${cmd.help.name}** komutunu başarıyla kullandı. <:evettt:825417394633048094>`)
 client.guilds.cache.get('781791262344216626').channels.cache.get('825400321878130709').send(embed22)
    
//komut log

    if (perms < cmd.conf.permLevel) return;
    
    cmd.run(client, message, params, perms);
  }

};