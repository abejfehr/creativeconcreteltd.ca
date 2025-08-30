# [Creative Concrete](https://www.creativeconcreteltd.ca/)

A Single-page HTML website for my brother's concrete business.

## How to add images

1. place the raw image files in the `images/originals` folder
2. add references to the images in `_data/stories.yml`
3. build the site using `jekyll serve`

## Image checks

You can run `bun run preflight-check` to ensure that the images are big enough and have non-draft titles (titles with hyphens are a false positive for now)
