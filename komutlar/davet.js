const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    
     .setTitle(`ZivaBot Davet :)`)
.setDescription(`<:evettt:825417394633048094>  Selamlar, geliba botu sunucunuza ekliyeceksiniz? [**Eklemek İçin Tıkla**](https://discord.com/api/oauth2/authorize?client_id=825002527598313482&permissions=8&scope=bot)
Botumuzda her hangi bi sıkıntı varsa [**destek sunucusuna**](https://discord.gg/eRzPcyHFrF) gelirek söyliye bilirsiniz.`) 
    
.setThumbnail('https://cdn.discordapp.com/attachments/781812382095507506/825088263483162685/static.png')
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['davet']



};
exports.help = {
name: "davet"
};