const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const url = process.argv[2] || 'http://localhost:8081/';
  const outDir = 'screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  await page.waitForTimeout(1000);

  const targets = [
    { name: 'hero', selector: 'section:not([id])' },
    { name: 'about', selector: '#about' },
    { name: 'projects', selector: '#projects' },
    { name: 'services', selector: '#services' },
    { name: 'contact', selector: '#contact' },
    { name: 'footer', selector: 'footer' },
  ];

  for (const t of targets) {
    try {
      const el = await page.$(t.selector);
      if (!el) {
        console.warn('Selector not found:', t.selector);
        continue;
      }
      const file = `${outDir}/${t.name}.png`;
      await el.screenshot({ path: file });
      console.log('Saved', file);
    } catch (err) {
      console.error('Error capturing', t.name, err.message);
    }
  }

  await browser.close();
  console.log('Done');
})();
