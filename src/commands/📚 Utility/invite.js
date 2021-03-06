const Discord = require('discord.js')

module.exports = {
  name: 'invite',
  category: '📚 Utility',
  description: "Sends you Cody's bot invite link.",

  run: async (client, message, args, user, guild) => {
    if (!message.guild.me.permissions.has('SEND_MESSAGES')) return
    if (
      !message.guild.me.permissions.has([
        'EMBED_LINKS',
        'ADD_REACTIONS',
        'SEND_MESSAGES',
        'READ_MESSAGE_HISTORY',
        'VIEW_CHANNEL',
      ])
    ) {
      return message.channel.send(`
        ❌ I require some Permissions!
  
        **I need the following Permissions to work on your Server:**
        EMBED_LINKS,
        ADD_REACTIONS, 
        SEND_MESSAGES, 
        READ_MESSAGE_HISTORY,
        VIEW_CHANNEL
  
        ⚠️ Please add me the right Permissions and re-run this Command!
    
        `)
    }
    message.channel.send({
      embeds: [new Discord.MessageEmbed()
        .setTitle('Invite Cody')
        .setColor('GREEN')
        .setFooter(`Thanks ${message.author.username} for supporting me!`)
        .setTimestamp()
        .setDescription(
          '[Click this to invite me](https://discord.com/oauth2/authorize?client_id=858311918447099925&scope=bot&permissions=388160)',
        ),
      ]})
  },
}
