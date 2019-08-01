const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const runAsync = async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  const articleNumber = 1;
  const url = `https://philosophy.stackexchange.com/questions/${articleNumber}`;
  await page.goto(url);
  const source = await page.content();
  const document = cheerio.load(source);
  const questionHead = document('div#question-header a.question-hyperlink').text().trim();
  const questionBody = document('div#question div.post-text').text().trim();
  const acceptedAnswer = document('div.accepted-answer div.post-text').text().trim();
  console.log(acceptedAnswer)
//   await page.screenshot({ path: 'screenshot.jpg' });
//   await browser.close();
};

runAsync();