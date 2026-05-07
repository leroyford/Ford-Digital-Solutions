#!/bin/bash
ids=(
    "1qgLfV9Yqyb-5HVVDkC38-nDmXiT4DwDw pricing-addons.png"
    "1O49XsHdh-7c8GgDHcAfqJ75827uL5cUV outdated-menu.jpg"
    "1TF_GIaDo959CAuedoQNahLe5dvzu_MHm problem1.jpg"
    "18aN_CkKj3fB6RybYVHcjcOusTCBRgZwC problem2.jpg"
    "1HztqGoJvn2bb2hO0fFUhCQ95GnNU50yq problem3.jpg"
    "1RMmWJLP67FWIxQ5bsB4LRY74SzxxjRRC process1.jpg"
    "1VRqHGGLeh38Ia1OQUcfmBtcGTqFi48-C portfolio1.jpg"
    "1RTMlpZ1d-8lvY3C8okyPx0lCI36yrrXq portfolio2.jpg"
    "1FHAS1zFrBSqT4Hbsje4_T1cNq381bwbc portfolio3.jpg"
    "1CLohSSLoTY3PK04ZmHgswXAtXZ_y_3PB portfolio4.jpg"
    "1ijmpYqsV2jiR102Aun2T1e6-eFbf25e_ portfolio5.jpg"
    "12BPjul0FmTSDJLL-c37tVyPTbzS06pP6 happy-owner.png"
)

for entry in "${ids[@]}"; do
    id=$(echo $entry | awk '{print $1}')
    filename=$(echo $entry | awk '{print $2}')
    echo "Downloading $filename ($id)..."
    curl -L -o "public/$filename" "https://drive.google.com/uc?export=download&id=$id"
done
