const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    
     .setTitle(`ZivaBot İstitastik Menüsü`)
.setDescription(`**Genel İstitastikler**
<a:evet:825320408307073044> Toplam Sunucu Sayısı : **${client.guilds.cache.size}**
<:kanal:825320393296052264> Toplam Kanal Sayıısı : **${client.channels.cache.size}**
<a:yazyor:825320413092511785> Toplam Kullanıcı Sayısı : **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**
<a:hype:825006047919603757> Prefix : **z!!**
**Diğer Bilgiler**
<a:hawli:825309553837998090> Sahip <a:hawli:825309553837998090> 
<@733176349895819315>
<a:hype2:825309214162681867> Geliştirici <a:hype2:825309214162681867>
<@694205176352997416> | <@733176349895819315> | <@791010995916505138>
**Sürümler**
<:jsjs:825371725415972864> Discord.js Sürüm : **${discord.version}**
<:jsjs:825371725415972864> Node.js Sürüm : **${process.version}**

`) 
    .addField("**Gecikmeler**", `<:bekleniyor:820752198665109504> Ping : **${client.ws.ping}** MS`,true)
    
.setThumbnail('https://cdn.discordapp.com/attachments/781812382095507506/825088263483162685/static.png')
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['i']



};
exports.help = {
name: "i"
};