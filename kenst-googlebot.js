const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.kenst.com/');
  await page.setViewport({width: 1200, height: 2000});
  await page.screenshot({path: 'kenst-googlebot.png'});

  await browser.close();
})();
