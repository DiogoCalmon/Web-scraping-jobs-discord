import puppeteer from 'puppeteer-core';
import readLine from "readline";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function main() {

    const login = r.

    const browser = await puppeteer.launch({
         executablePath: '/usr/bin/brave-browser',
         headless: false
        });
    const page = await browser.newPage();
    await page.goto('https://discord.com/login');

    const login = readLineSync
    
    
    //await browser.close();
}

main();
