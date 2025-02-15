// TODO: Warn against images in originals/ folder that are too small
// TODO: Warn on images with non title case titles
// TODO: Warn on images with _ or - in titles
const { parse } = require("yaml");
const { readFileSync } = require("fs");
const { exit } = require("process");
const { whiteBright } = require("chalk");
const sizeOf = require("image-size");
const terminalLink = require("terminal-link");
const path = require("path");

const rawData = readFileSync("./_data/stories.yml").toString();
const data = parse(rawData);

const isTitleCase = (str) => {
  return str[0] === str[0].toUpperCase() && str[1] === str[1].toLowerCase();
};

let isError = false;

data.forEach((datum) => {
  if (datum.images.length === 0) {
    isError = true;
    console.log(`⚠️  ${whiteBright(datum.title)} is missing images`);
    return;
  }

  const link = terminalLink(
    `link`,
    `file://${path.join(__dirname, "../images/originals/" + datum.images[0])}`,
  );

  if (!isTitleCase(datum.title)) {
    isError = true;
    console.log(`⚠️  ${whiteBright(datum.title)} (${link}) is not title case`);
    return;
  }

  if (datum.title.indexOf("-") >= 0 || datum.title.indexOf("_") >= 0) {
    isError = true;
    console.log(`⚠️  ${whiteBright(datum.title)} (${link}) looks like a draft`);
    return;
  }

  datum.images.forEach((img) => {
    const { width, height } = sizeOf(`images/originals/${img}`);

    const isTooSmall = width < 800 || height < 800;

    if (isTooSmall) {
      isError = true;
      console.log(`⚠️  ${whiteBright(img)} (${link}) is smaller than 800px`);
      return;
    }
  });
});

if (isError) {
  // For now, just warn
  exit(0);
}
