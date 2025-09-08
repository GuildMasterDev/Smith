#!/bin/bash

# Icon generation script using ImageMagick
# Creates all required icons for The Smith app

echo "Generating icons for The Smith app..."

# Create icons directory
mkdir -p src/renderer/assets/icons
mkdir -p build

# App icon - Hammer and Anvil
convert -size 512x512 xc:transparent \
  -fill '#2C3E50' -draw "roundrectangle 100,250 412,350 10,10" \
  -fill '#7F8C8D' -draw "polygon 206,150 306,150 280,250 232,250" \
  -fill '#E67E22' -draw "rectangle 240,50 272,150" \
  -fill '#D35400' -draw "circle 256,70 256,50" \
  src/renderer/assets/icons/app-icon.png

# Create different sizes for Electron
for size in 16 32 48 64 128 256 512 1024; do
  convert src/renderer/assets/icons/app-icon.png -resize ${size}x${size} \
    build/icon-${size}.png
done

# Convert to ico for Windows
convert build/icon-16.png build/icon-32.png build/icon-48.png build/icon-256.png \
  build/icon.ico

# Convert to icns for macOS
mkdir -p build/icon.iconset
for size in 16 32 128 256 512; do
  cp build/icon-${size}.png build/icon.iconset/icon_${size}x${size}.png
  cp build/icon-$((size*2)).png build/icon.iconset/icon_${size}x${size}@2x.png 2>/dev/null || true
done
iconutil -c icns build/icon.iconset -o build/icon.icns 2>/dev/null || \
  echo "iconutil not available - skipping .icns generation"

# Chapter icons
echo "Generating chapter icons..."

# 1. Finding Ore - Mountain with ore veins
convert -size 128x128 xc:transparent \
  -fill '#8B7355' -draw "polygon 20,100 64,30 108,100" \
  -fill '#696969' -draw "polygon 50,100 64,70 78,100" \
  -fill '#FFD700' -draw "circle 60,85 62,85" \
  -fill '#FFD700' -draw "circle 68,90 70,90" \
  src/renderer/assets/icons/chapter-ore.png

# 2. Building Kilns - Brick kiln structure
convert -size 128x128 xc:transparent \
  -fill '#8B4513' -draw "rectangle 30,60 98,100" \
  -fill '#D2691E' -draw "rectangle 35,65 93,95" \
  -fill '#FF4500' -draw "rectangle 50,75 78,85" \
  -fill '#000000' -draw "rectangle 30,50 98,60" \
  src/renderer/assets/icons/chapter-kiln.png

# 3. Smelting - Crucible with molten metal
convert -size 128x128 xc:transparent \
  -fill '#696969' -draw "polygon 40,40 88,40 78,90 50,90" \
  -fill '#FF6347' -draw "polygon 45,45 83,45 75,85 53,85" \
  -fill '#FFD700' -draw "ellipse 64,50 15,8 0,360" \
  src/renderer/assets/icons/chapter-smelting.png

# 4. Forging - Hammer striking anvil
convert -size 128x128 xc:transparent \
  -fill '#2C3E50' -draw "rectangle 30,70 98,90" \
  -fill '#8B4513' -draw "rectangle 55,30 73,70" \
  -fill '#696969' -draw "rectangle 45,20 83,35" \
  -fill '#FFA500' -draw "circle 64,75 66,75" \
  src/renderer/assets/icons/chapter-forging.png

# 5. Blade Making - Sword blade
convert -size 128x128 xc:transparent \
  -fill '#C0C0C0' -draw "polygon 64,20 70,90 64,100 58,90" \
  -fill '#808080' -draw "polygon 64,20 67,85 64,95 61,85" \
  -fill '#8B4513' -draw "rectangle 58,90 70,110" \
  -fill '#654321' -draw "rectangle 60,92 68,108" \
  src/renderer/assets/icons/chapter-blade.png

# 6. Tool Creation - Various tools
convert -size 128x128 xc:transparent \
  -fill '#696969' -draw "rectangle 20,60 40,100" \
  -fill '#8B4513' -draw "rectangle 25,90 35,110" \
  -fill '#696969' -draw "polygon 50,60 70,60 65,100 55,100" \
  -fill '#8B4513' -draw "rectangle 57,95 63,110" \
  -fill '#696969' -draw "circle 90,70 95,70" \
  -fill '#8B4513' -draw "rectangle 87,80 93,110" \
  src/renderer/assets/icons/chapter-tools.png

# 7. Advanced Techniques - Damascus pattern
convert -size 128x128 xc:transparent \
  -fill '#696969' -draw "rectangle 54,20 74,100" \
  -fill '#C0C0C0' -draw "path 'M 54,20 Q 64,40 74,20 T 74,60'" \
  -fill '#C0C0C0' -draw "path 'M 54,60 Q 64,80 74,60 T 74,100'" \
  src/renderer/assets/icons/chapter-advanced.png

# 8. Safety - Shield with cross
convert -size 128x128 xc:transparent \
  -fill '#FF0000' -draw "path 'M 64,30 L 40,50 40,80 64,100 88,80 88,50 Z'" \
  -fill '#FFFFFF' -draw "rectangle 58,50 70,80" \
  -fill '#FFFFFF' -draw "rectangle 50,60 78,70" \
  src/renderer/assets/icons/chapter-safety.png

# Navigation icons
echo "Generating navigation icons..."

# Menu/Hamburger icon
convert -size 32x32 xc:transparent \
  -fill '#333333' -draw "rectangle 6,8 26,10" \
  -fill '#333333' -draw "rectangle 6,15 26,17" \
  -fill '#333333' -draw "rectangle 6,22 26,24" \
  src/renderer/assets/icons/menu.png

# Search icon
convert -size 32x32 xc:transparent \
  -fill 'none' -stroke '#333333' -strokewidth 2 \
  -draw "circle 13,13 20,13" \
  -fill '#333333' -draw "rectangle 18,18 24,20" \
  src/renderer/assets/icons/search.png

# Bookmark icon
convert -size 32x32 xc:transparent \
  -fill '#333333' -draw "polygon 16,6 10,26 16,22 22,26" \
  src/renderer/assets/icons/bookmark.png

# Home icon
convert -size 32x32 xc:transparent \
  -fill '#333333' -draw "polygon 16,6 8,14 8,26 24,26 24,14" \
  -fill '#FFFFFF' -draw "rectangle 13,16 19,26" \
  src/renderer/assets/icons/home.png

# Back arrow
convert -size 32x32 xc:transparent \
  -fill '#333333' -draw "polygon 14,16 22,10 22,14 18,16 22,18 22,22" \
  src/renderer/assets/icons/back.png

# Directory icon
convert -size 32x32 xc:transparent \
  -fill '#333333' -draw "path 'M 6,10 L 6,24 26,24 26,12 16,12 14,10 Z'" \
  src/renderer/assets/icons/directory.png

echo "Icon generation complete!"
echo "Icons saved to src/renderer/assets/icons/"