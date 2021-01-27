const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./data/config.json')

client.on('ready', async () => {
    console.log('[✓] Ready!')  

})

client.login(config.token)