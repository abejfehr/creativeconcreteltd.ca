const { parse, stringify } = require("yaml");
const { readFileSync, writeFileSync, renameSync } = require("fs");
const { join } = require("path");

// Read in the YAML file
const rawData = readFileSync("./_data/stories.yml").toString();
const data = parse(rawData);

// Function to create safe filenames
const convertToFilename = (title) => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

// Process each story and rename images
data.forEach((datum, i) => {
  const filenamePrefix = convertToFilename(datum.title);

  // If the description is blank, make it the same as the title
  if (datum.description.length === 0) {
    datum.description = datum.title;
  }

  datum.images = datum.images.map((oldImageFilename, j) => {
    const newImageFilename = `${filenamePrefix}-${i}-${j}.jpg`;
    renameSync(
      join("./images/originals", oldImageFilename),
      join("./images/originals", newImageFilename),
    );
    return newImageFilename;
  });
});

// Write the updated YAML file
writeFileSync("./_data/stories.yml", stringify(data));

console.log("Image files renamed and YAML file updated.");
