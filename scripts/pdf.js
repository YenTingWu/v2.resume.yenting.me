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
    const sectionContainer = document.getElementById("section-container");
    const footer = document.querySelector("footer");
    const projects = document.querySelector(".projects");
    const hi = document.querySelector(".hi");

    if (footer) {
      container?.removeChild?.(footer);
      sectionContainer?.removeChild?.(projects);
      sectionContainer?.removeChild?.(hi);
    }
  });

  await page.pdf({
    path: "./static/resume.pdf",
    format: "A4",
    displayHeaderFooter: false,
    printBackground: true,
    // To cut the blank page, if the content is over one page, should remove this property
    pageRanges: "1",
    margin: {
      top: "0.05in",
      bottom: "0.05in",
      left: "0.05in",
      right: "0.05in",
    },
  });

  await browser.close();
})();
