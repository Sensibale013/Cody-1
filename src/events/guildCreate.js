const client = require("../index");
const { Discord, MessageEmbed, Guild } = require("discord.js");

try {


 client.on('guildCreate', async (guild) => {

  const adminchannel = await client.channels.fetch("901571515244482570");
  const bots = guild.members.cache.filter((m) => m.user.bot).size;
  const owner = guild.owner.user.tag

  const newserver = new MessageEmbed()
  .setTitle("New Server")
  .setDescription(`${owner} - \`${guild.id}\` - **${guild.name}** - \`${guild.memberCount}\` members - \`${bots}\` bots`)
  .setColor("GREEN")
  .setTimestamp()

  const embed = new MessageEmbed()                              
  .setThumbnail("https://cdn.discordapp.com/attachments/876477209186017340/876820442562822184/Rd0c07cb2486f8c6aa515c4f9fc608357.png", {size: 1024})
  .setColor("BLURPLE")
  .setDescription([
    '**Hey there, Cody here! Thanks for inviting me to your Server!** 👋',
    '',
    `Standard Prefix: **\`$\`**`,
    `Commands: **\`$help\`**`,
    '',
    '    🌐 **Help & Support**',
    '• **[Status](https://cody-bot.xyz/status)**',
    '• **[Support Server](https://discord.gg/wQ9cKHwZ86)**',
    '• **[Contact us](https://cody-bot.xyz/contact)**',
    '',
    '',
    '    💠 **Other Links**',
    '• **[Dashboard](https://cody-bot.xyz/panel)**',
    '• **[Invite Cody](https://cody-bot.xyz)**',
    '',
    '',
    '    🔎 **Information**',
    '•  I am here to teach you Programming, I have many languages you can choose from',
    '•  From the Basic/Beginner Level to the advanced World of **JavaScript** - **Python** and more!',
    '•  You can configurate me trough my [Dashboard](https://cody-bot.xyz/panel)',
    '',
    '',
    '**Have a great day! 😎**',
    ]);

    // Send the Embed the Guild Owner, send a log notification to the Bot Admins.
    guild.owner.send(embed).catch(() => {})
    adminchannel.send({ content: "<@578678204890349594>"});
    adminchannel.send({ embeds: [newserver]})
  });
} catch(error) {
    console.log(error)
}