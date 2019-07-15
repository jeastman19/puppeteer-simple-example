const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        headless: false,
        executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage();
    await page.goto('https://formulario08digital.com');
    await page.setViewport({
        width: 1366,
        height: 768
    })
    await page.screenshot({
        path: 'example.png'
    });

    await browser.close();
})();
