import fs from 'fs';
import chalk from 'chalk';
import path from 'path';

class Handler {
    #utility;
    #type;

    constructor(util, type) {
        this.#utility = util;
        this.#type = type;
    }

    log = (s) => console.log(chalk.blue(`    [${this.#utility}] ` + s));
    error = (s) => console.log(chalk.magenta(`    [${this.#utility}] ` + s));

    endLog = (s) => {
        this.log(s);
        this.resetPrompt();
    };

    endError = (s) => {
        this.error(s);
        this.resetPrompt();
    };

    question = (q) => new Promise((resolve) => rl.question(chalk.blue(`    [${this.#utility}] ` + q), resolve));
    rawQuestion = (q) => new Promise((resolve) => rl.question(q, resolve));

    resetPrompt = async () => {
        let reset = await import(`./${this.#type}/resetPrompt.js`);
        reset.default();
    };

    config = () => {
        const configPath = path.join(import.meta.dirname, '..', 'config.txt');
        if (!fs.existsSync(configPath)) return {};

        const config = fs.readFileSync(configPath, 'utf-8');
        return Object.fromEntries(config.split('\n').map(a => [a.split('=')[0], a.split('=')[1]]));
    };
};

export default Handler;