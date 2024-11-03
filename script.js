import puppeteer from 'puppeteer-core';

async function main() {
    const browser = await puppeteer.launch({
         executablePath: '/usr/bin/brave-browser',
         headless: false
        });
    const page = await browser.newPage();

    await page.goto('https://developer.chrome.com/');
    await page.setViewport({ width: 1080, height: 1024 });

    //await browser.close();
}

main();
