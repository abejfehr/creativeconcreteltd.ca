#!/bin/bash

echo "Creating thumbnails..."

for filename in ./images/originals/*.jpg; do
  thumb=`echo $filename | sed -e "s/original/thumb/"`
  gm convert $filename -thumbnail 300x-1 $thumb
done

echo "Creating hi-res images..."

for filename in ./images/originals/*.jpg; do
  hires=`echo $filename | sed -e "s/originals/hi-res/"`
  gm convert $filename -size 1600x-1 -resize 1600x-1 $hires
done

echo "Done resizing images 🎉"