const dotenv = require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        headless: true
    });
    const page = await browser.newPage();
    await page.goto(process.env.PAGE_URL);
    await page.setViewport({
        width: 1366,
        height: 768
    })
    await page.screenshot({
        path: 'capture.png'
    });

    await browser.close();
})();
