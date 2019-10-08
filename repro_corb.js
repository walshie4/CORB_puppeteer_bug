const puppet = require('puppeteer');
const extPath = './';

(async () => {
  const browser = await puppet.launch({
    args: [
      '--disable-features=CrossSiteDocumentBlockingAlways,CrossSiteDocumentBlockingIfIsolating',
      `--disable-extensions-except=${extPath}`,
      `--load-extension=${extPath}`,
    ],
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto('https://example.com/');

  await new Promise (() => {});
})();
