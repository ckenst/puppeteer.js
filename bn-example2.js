const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.bloomnation.com/');
  await page.setViewport({width: 1200, height: 2000});
  await page.screenshot({path: 'bnexample2.png'});
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await browser.close();
})();
