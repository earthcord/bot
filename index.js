const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const loadCommands = require('./commands/command-loader')

client.on('ready', async () => {
    console.log('[✓] Ready!')  

    loadCommands(client)
})

client.login(config.token)