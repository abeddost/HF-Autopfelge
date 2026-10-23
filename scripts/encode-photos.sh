#!/usr/bin/env bash
# Encodes the original (KI-generierten) Vorher/Nachher-Fotos in source-images/vorher-nachher/
# into web-optimized JPEGs in public/vorher-nachher/ for the Preisrechner (components/CarVisual.tsx).
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=source-images/vorher-nachher
OUT=public/vorher-nachher
mkdir -p "$OUT"

# Außen- und Innenansicht: alle Paare exakt gleich groß, damit die Bereiche deckungsgleich sind.
for name in aussen-schmutzig aussen-gewaschen aussen-sauber innen-schmutzig innen-sauber; do
  echo "→ $name"
  ffmpeg -v error -y -i "$SRC/$name.png" -vf "scale=1400:600:flags=lanczos" -q:v 3 "$OUT/$name.jpg"
done

# Motorraum: quadratischer Ausschnitt für die runde Lupe.
for name in motorraum-schmutzig motorraum-sauber; do
  echo "→ $name"
  ffmpeg -v error -y -i "$SRC/$name.png" -vf "crop=1000:1000:127:60,scale=320:320:flags=lanczos" -q:v 3 "$OUT/$name.jpg"
done
ls -lh "$OUT"
