const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.whatismybrowser.com/detect/what-version-of-chrome-do-i-have');
  await page.screenshot({path: 'version.png'});

  await browser.close();
})();
