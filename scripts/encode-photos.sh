#!/usr/bin/env bash
# Encodes the original (KI-generierten) Vorher/Nachher-Fotos in source-images/vorher-nachher/
# into web-optimized JPEGs in public/vorher-nachher/ (verwendet über lib/beforeAfter.ts).
# Fehlende Originale werden übersprungen – so lassen sich neue Paare nach und nach ergänzen.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=source-images/vorher-nachher
OUT=public/vorher-nachher
mkdir -p "$OUT"

encode() { # name filter
  if [[ ! -f "$SRC/$1.png" ]]; then echo "– $1 (Original fehlt, übersprungen)"; return; fi
  echo "→ $1"
  ffmpeg -v error -y -i "$SRC/$1.png" -vf "$2" -q:v 3 "$OUT/$1.jpg"
}

# Breite Seiten- und Innenansicht (2,33 : 1) – Paare exakt gleich groß, damit sie deckungsgleich sind.
for name in aussen-schmutzig aussen-gewaschen aussen-sauber innen-schmutzig innen-sauber; do
  encode "$name" "scale=1400:600:flags=lanczos"
done

# Detailaufnahmen (16:9): mittig auf 16:9 zuschneiden, dann auf 1600 × 900 skalieren.
crop169="crop='min(iw,ih*16/9)':'min(ih,iw*9/16)',scale=1600:900:flags=lanczos"
for pair in motorraum-schmutzig motorraum-sauber \
  politur-vorher politur-nachher keramik-vorher keramik-nachher leasing-vorher leasing-nachher \
  scheinwerfer-vorher scheinwerfer-nachher polster-vorher polster-nachher \
  smart-kratzer-vorher smart-kratzer-nachher smart-delle-vorher smart-delle-nachher \
  smart-felge-vorher smart-felge-nachher; do
  encode "$pair" "$crop169"
done

# Startseiten-Hero (components/ScrollHero): drei deckungsgleiche Bilder, je 1920 und 1280 px breit.
mkdir -p public/hero
for name in hero-schmutzig hero-schaum hero-sauber; do
  if [[ ! -f "$SRC/$name.png" ]]; then echo "– $name (Original fehlt, übersprungen)"; continue; fi
  echo "→ $name"
  for w in 1920 1280; do
    h=$((w * 9 / 16))
    ffmpeg -v error -y -i "$SRC/$name.png" -vf "crop='min(iw,ih*16/9)':'min(ih,iw*9/16)',scale=$w:$h:flags=lanczos" -q:v 4 "public/hero/$name-$w.jpg"
  done
done
ls -lh "$OUT" public/hero
