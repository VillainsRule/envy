console.clear();

import chalk from 'chalk';

import botLogin from './bot/main.js';
import selfLogin from './self/main.js';

import Handler from './handler.js';
const handler = new Handler('Login', 'login');

(async () => {
    let isSelfbot = handler.config().SELFBOT || await handler.rawQuestion(chalk.red('\n\n    [Login] Is this a selfbot (or a normal Discord bot) (y/n)? '));
    let token = handler.config().TOKEN || await handler.rawQuestion(chalk.red(`    [Login] ${isSelfbot === 'y' ? 'SelfBot' : 'Bot'} Token: `));

    console.clear();
    console.log(chalk.red('\n\n    [Login] Logging in...'));

    if (isSelfbot === 'y') return selfLogin(token);
    else if (isSelfbot === 'n') return botLogin(token);

    console.log(chalk.red('    [Login] Invalid input!'));
    rl.close();
})();