import { Client } from 'discord.js';
const botToken = require('./token.json');

const botClient = new Client();

botClient.on('ready', () => {
    console.log('Ready');
});

botClient.on('message', msg => {
    console.log('OK');
});

botClient.login(botToken.token);