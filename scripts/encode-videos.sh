#!/usr/bin/env bash
# Encodes the original stock clips in source-videos/ into web-optimized loops in public/videos/.
# Muted, H.264, faststart, plus a JPEG poster per clip.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=source-videos
OUT=public/videos
mkdir -p "$OUT"

# slug | source file | start (s) | duration (s)
CLIPS=(
  "detailing|Car, Man, Detailing, Service by Felbaba Volodymyr – Stock Footage.mp4|0|14"
  "innenraum|Vacuum, Cleaning, Skills, Garage by Felbaba Volodymyr – Stock Footage.mp4|0|12"
  "politur|Repair, Man, Shop, Service by Denys Hrishyn – Stock Footage.mp4|2|14"
  "scheinwerfer|Service, Headlights, Car, Man by Felbaba Volodymyr – Stock Footage.mp4|0|12"
  "werkstatt|Painting, Vehicle, Working, Man by Felbaba Volodymyr – Stock Footage.mp4|0|14"
)

encode () { # in start dur width out crf
  ffmpeg -v error -y -err_detect ignore_err -ss "$2" -i "$1" -t "$3" \
    -vf "scale=$4:-2:flags=lanczos,fps=25,format=yuv420p" \
    -c:v libx264 -preset slow -crf "$6" -profile:v high -an -movflags +faststart "$5"
}

for entry in "${CLIPS[@]}"; do
  IFS='|' read -r slug file start dur <<< "$entry"
  echo "→ $slug"
  encode "$SRC/$file" "$start" "$dur" 1280 "$OUT/$slug.mp4" 27
  encode "$SRC/$file" "$start" "$dur" 720  "$OUT/$slug-720.mp4" 28
  ffmpeg -v error -y -ss 1 -i "$OUT/$slug.mp4" -frames:v 1 -vf "scale=1280:-2" -q:v 5 "$OUT/$slug.jpg"
done
ls -lh "$OUT"
