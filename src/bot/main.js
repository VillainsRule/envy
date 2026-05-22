import { Client, GatewayIntentBits } from 'discord.js';
import chalk from 'chalk';
import readline from 'readline';

import resetPrompt from './resetPrompt.js';

const nuker = new Client({
    intents: Object.keys(GatewayIntentBits).filter(a => isNaN(a)).map(a => GatewayIntentBits[a])
});

const rl = readline.createInterface(process.stdin, process.stdout);

global.rl = rl;
global.client = nuker;

nuker.on('clientReady', () => {
    global.client = nuker;

    console.clear();
    console.log(chalk.red(`\n\n                                               
        ▓█████  ▄████▄   ██▓     ██▓ ██▓███    ██████ ▓█████     ███▄    █  █    ██  ██ ▄█▀▓█████  ██▀███  
        ▓█   ▀ ▒██▀ ▀█  ▓██▒    ▓██▒▓██░  ██▒▒██    ▒ ▓█   ▀     ██ ▀█   █  ██  ▓██▒ ██▄█▒ ▓█   ▀ ▓██ ▒ ██▒
        ▒███   ▒▓█    ▄ ▒██░    ▒██▒▓██░ ██▓▒░ ▓██▄   ▒███      ▓██  ▀█ ██▒▓██  ▒██░▓███▄░ ▒███   ▓██ ░▄█ ▒
        ▒▓█  ▄ ▒▓▓▄ ▄██▒▒██░    ░██░▒██▄█▓▒ ▒  ▒   ██▒▒▓█  ▄    ▓██▒  ▐▌██▒▓▓█  ░██░▓██ █▄ ▒▓█  ▄ ▒██▀▀█▄  
        ░▒████▒▒ ▓███▀ ░░██████▒░██░▒██▒ ░  ░▒██████▒▒░▒████▒   ▒██░   ▓██░▒▒█████▓ ▒██▒ █▄░▒████▒░██▓ ▒██▒
        ░░ ▒░ ░░ ░▒ ▒  ░░ ▒░▓  ░░▓  ▒▓▒░ ░  ░▒ ▒▓▒ ▒ ░░░ ▒░ ░   ░ ▒░   ▒ ▒ ░▒▓▒ ▒ ▒ ▒ ▒▒ ▓▒░░ ▒░ ░░ ▒▓ ░▒▓░
         ░ ░  ░  ░  ▒   ░ ░ ▒  ░ ▒ ░░▒ ░     ░ ░▒  ░ ░ ░ ░  ░   ░ ░░   ░ ▒░░░▒░ ░ ░ ░ ░▒ ▒░ ░ ░  ░  ░▒ ░ ▒░
           ░   ░          ░ ░    ▒ ░░░       ░  ░  ░     ░         ░   ░ ░  ░░░ ░ ░ ░ ░░ ░    ░     ░░   ░ 
           ░  ░░ ░          ░  ░ ░                 ░     ░  ░            ░    ░     ░  ░      ░  ░   ░     
               ░                                                                                           



                    Nuke Bot: ${nuker.user.tag}\n\n`) + chalk.yellow(`
    ╔══════════════════════════════════════════════════════════╗
    ║ > Nuke a Server                                          ║
    ╠════╦═══════════════════════╦═════════════════════════════╣
    ║ 00 ║ Mass Create Roles     ║ 09 ║ Delete All Webhooks    ║
    ║ 01 ║ Delete All Roles      ║ 10 ║ Grant @everyone Admin  ║
    ║ 02 ║ Mass Create Channels  ║ 11 ║ Remove Automod Rules   ║
    ║ 03 ║ Delete All Channels   ║ 12 ║ Nickname Everyone      ║
    ║ 04 ║ Delete All Emojis     ║ 13 ║ Change Guild Info      ║
    ║ 05 ║ Delete All Invites    ║ 14 ║ Mass Send (webhooks)   ║
    ║ 06 ║ Ban Everyone          ║ 15 ║ Mass Send (bot)        ║
    ║ 07 ║ Unban Everyone        ║ 16 ║ Set Bot Activity       ║
    ║ 08 ║ Kick Everyone         ║ 17 ║ Leave Guild            ║
    ╚════╩═════════════════════════════════════════════════════╝\n\n`));

    resetPrompt();
});

export default (token) => {
    try {
        nuker.login(token);
    } catch (err) {
        console.log(chalk.red('    [Login] Failed to login with error: ' + err));
    };
}