const puppeteer = require("puppeteer");

const MY_SERVER = "http://localhost:8000";
const FILE = "/";

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto(`${MY_SERVER}${FILE}`, {
    waitUntil: "networkidle2",
  });

  await page.evaluate(async () => {
    const container = document.getElementById("container");
    const footer = document.querySelector("footer");

    if (footer) {
      container?.removeChild?.(footer);
    }
  });

  await page.pdf({
    path: "./static/resume.pdf",
    format: "A4",
    displayHeaderFooter: false,
    printBackground: true,
    // To cut the blank page, if the content is over one page, should remove this property
    pageRanges: "1-2",
    margin: {
      top: "0.15in",
      bottom: "0.15in",
      left: "0.15in",
      right: "0.15in",
    },
  });

  await browser.close();
})();
