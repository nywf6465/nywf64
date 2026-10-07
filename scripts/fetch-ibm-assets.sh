#!/usr/bin/env bash
set -euo pipefail
BASE="http://nywf64.com"
ROOT="/tmp/ibm-work/public"
dl() {
  local url="$1" dest="$2"
  mkdir -p "$(dirname "$dest")"
  if [[ -f "$dest" && -s "$dest" ]]; then return 0; fi
  curl -fsSL "$url" -o "$dest"
}

# ibm01
dl "$BASE/Image/1964_Guide_Book.JPG" "$ROOT/images/ibm01/guide1964.jpg"
dl "$BASE/Image/1965_Guide_Book.JPG" "$ROOT/images/ibm01/guide1965.jpg"
dl "$BASE/Image/Souvenir_Map.jpg" "$ROOT/images/ibm01/souvenir-map.jpg"
dl "$BASE/Image/ibm/ibmlogo64.gif" "$ROOT/images/ibm01/ibmlogo64.gif"
dl "$BASE/Image/ibm/ibmlogo.gif" "$ROOT/images/ibm01/ibmlogo.gif"
dl "$BASE/DropDownImg/indsmlmap.gif" "$ROOT/images/ibm01/industrial-map.gif"

# ibm02
dl "$BASE/Image/ibm/ibm44.jpg" "$ROOT/images/ibm02/ibm44.jpg"
dl "$BASE/Image/ibm/ibm45.jpg" "$ROOT/images/ibm02/ibm45.jpg"

# ibm03
dl "$BASE/Image/pcards/80197-B.jpg" "$ROOT/images/ibm03/80197-B.jpg"
dl "$BASE/Image/pcards/80197-Breverse.jpg" "$ROOT/images/ibm03/80197-Breverse.jpg"
dl "$BASE/Image/pcards/None(14).jpg" "$ROOT/images/ibm03/none-14.jpg"
dl "$BASE/Image/pcards/None(14reverse.jpg" "$ROOT/images/ibm03/none-14reverse.jpg"
dl "$BASE/Image/pcards/None(16).jpg" "$ROOT/images/ibm03/none-16.jpg"

# brochure covers
for pair in \
  "ibm118.jpg:ibm04/ibm118.jpg" \
  "ibm122.jpg:ibm06/ibm122.jpg" \
  "ibm114.jpg:ibm08/ibm114.jpg" \
  "ibm117.jpg:ibm09/ibm117.jpg" \
  "ibm115.jpg:ibm10/ibm115.jpg" \
  "ibm116.jpg:ibm11/ibm116.jpg" \
  "ibm119.jpg:ibm12/ibm119.jpg" \
  "ibm120.jpg:ibm14/ibm120.jpg" \
  "ibm121.jpg:ibm15/ibm121.jpg" \
  "ibm123.jpg:ibm16/ibm123.jpg"; do
  file="${pair%%:*}"
  dest="${pair##*:}"
  dl "$BASE/Image/ibm/$file" "$ROOT/images/$dest"
done

# PDFs
dl "$BASE/Image/ibm/Advertising.pdf" "$ROOT/pdf/ibm/advertising.pdf"
dl "$BASE/Image/ibm/From%20IBM.pdf" "$ROOT/pdf/ibm/from-ibm.pdf"
dl "$BASE/Image/ibm/IBM%20Fair%20Booklet.pdf" "$ROOT/pdf/ibm/ibm-fair-booklet.pdf"
dl "$BASE/Image/ibm/Brochure%20Version%201.pdf" "$ROOT/pdf/ibm/brochure-version-1.pdf"
dl "$BASE/Image/ibm/Brochure%20Version%202.pdf" "$ROOT/pdf/ibm/brochure-version-2.pdf"
dl "$BASE/Image/ibm/Brochure%20Version%203.pdf" "$ROOT/pdf/ibm/brochure-version-3.pdf"
dl "$BASE/Image/ibm/Language%20Translation.pdf" "$ROOT/pdf/ibm/language-translation.pdf"
dl "$BASE/Image/ibm/Character%20Recognition.pdf" "$ROOT/pdf/ibm/character-recognition.pdf"
dl "$BASE/Image/ibm/Article%20One.pdf" "$ROOT/pdf/ibm/article-one.pdf"
dl "$BASE/Image/ibm/Article%20Two.pdf" "$ROOT/pdf/ibm/article-two.pdf"

# ibm05 photos
ibm05_imgs=(
  "arch/5459Large.jpg:ibm05/5459Large.jpg"
  "ibm/ibm104.jpg:ibm05/ibm104.jpg"
  "ibm/ibm113.jpg:ibm05/ibm113.jpg"
  "ibm/ibm112.jpg:ibm05/ibm112.jpg"
  "photolab/5485.jpg:ibm05/5485.jpg"
  "mainliner/555-24.jpg:ibm05/555-24.jpg"
  "mainliner/633-77.jpg:ibm05/633-77.jpg"
  "ibm/ibm108.jpg:ibm05/ibm108.jpg"
  "ibm/ibm111.jpg:ibm05/ibm111.jpg"
  "ibm/ibm109.jpg:ibm05/ibm109.jpg"
  "ibm/ibm110.jpg:ibm05/ibm110.jpg"
  "ibm/ibm105.jpg:ibm05/ibm105.jpg"
  "ibm/ibm106.jpg:ibm05/ibm106.jpg"
  "ibm/ibm107.jpg:ibm05/ibm107.jpg"
  "ibm/ibm32.jpg:ibm05/ibm32.jpg"
  "ibm/ibm38.jpg:ibm05/ibm38.jpg"
  "ibm/ibm124.jpg:ibm05/ibm124.jpg"
  "ibm/ibm94.jpg:ibm05/ibm94.jpg"
  "ibm/ibm103.jpg:ibm05/ibm103.jpg"
  "ibm/ibm99.jpg:ibm05/ibm99.jpg"
  "ibm/ibm101.jpg:ibm05/ibm101.jpg"
  "ibm/ibm98.jpg:ibm05/ibm98.jpg"
  "ibm/ibm102.jpg:ibm05/ibm102.jpg"
  "ibm/ibm100.jpg:ibm05/ibm100.jpg"
  "ibm/ibm97.jpg:ibm05/ibm97.jpg"
  "ibm/ibm95.jpg:ibm05/ibm95.jpg"
  "ibm/ibm96.jpg:ibm05/ibm96.jpg"
)
for pair in "${ibm05_imgs[@]}"; do
  src="${pair%%:*}"
  dest="${pair##*:}"
  dl "$BASE/Image/$src" "$ROOT/images/$dest"
done

# ibm07
for f in ibm36 ibm33 ibm34 ibm35 ibm39; do
  dl "$BASE/Image/ibm/$f.jpg" "$ROOT/images/ibm07/$f.jpg"
done

# ibm13
dl "$BASE/Image/ibm/ibm03.jpg" "$ROOT/images/ibm13/ibm03.jpg"
dl "$BASE/Image/sound.gif" "$ROOT/images/ibm13/sound.gif"

# ibm17
for f in ibm01 ibm05 ibm40 ibm04; do
  dl "$BASE/Image/ibm/$f.jpg" "$ROOT/images/ibm17/$f.jpg"
done

# ibm18
for i in 01 02 03 04 05 06 07 08 09; do
  dl "$BASE/Image/ibm/ibm70.$i.jpg" "$ROOT/images/ibm18/ibm70.$i.jpg"
done

# audio
dl "$BASE/mp3files/Dashner_IBM.mp3" "$ROOT/audio/ibm/Dashner_IBM.mp3"

# map overlay
dl "$BASE/Image/ibm/ibmmap.gif" "/tmp/ibm-ibmmap.gif"

echo "Downloads complete."
