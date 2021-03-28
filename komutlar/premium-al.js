const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => { 

  if(message.author.id !== '733176349895819315') if(message.author.id !== '791010995916505138') if(message.author.id !== '694205176352997416')
    
      return;

 const args0 = args[0];
  if(!args0) {
    message.channel.send("Hey Sahip! Premium'u Alınıcak Sunucunun **İD** Sini Yaz!")
  } else {
  
 
db.delete(`premod_${args0}`,"deaktif")
message.channel.send("Premium Başarıyla Alındı!")
 
}
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-al'],
    permLevel: 0,
      
}

exports.help = {
    name: 'premiumal',
    description: 'premiumal',
    usage: 'premiumal',

}