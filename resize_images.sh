#!/bin/bash

for filename in ./images/originals/*.jpg; do
  thumb=`echo $filename | sed -e "s/original/thumb/"`
  gm convert $filename -thumbnail 300x150 $thumb
done

for filename in ./images/originals/*.jpg; do
  hires=`echo $filename | sed -e "s/originals/hi-res/"`
  gm convert $filename -size 1600x1600 -resize 1600x1600 $hires
done
