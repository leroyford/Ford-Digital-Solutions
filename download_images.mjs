import https from 'https';
import fs from 'fs';

const ids = [
    { id: "1qgLfV9Yqyb-5HVVDkC38-nDmXiT4DwDw", file: "pricing-addons.png" },
    { id: "1O49XsHdh-7c8GgDHcAfqJ75827uL5cUV", file: "outdated-menu.jpg" },
    { id: "1TF_GIaDo959CAuedoQNahLe5dvzu_MHm", file: "problem1.jpg" },
    { id: "18aN_CkKj3fB6RybYVHcjcOusTCBRgZwC", file: "problem2.jpg" },
    { id: "1HztqGoJvn2bb2hO0fFUhCQ95GnNU50yq", file: "problem3.jpg" },
    { id: "1RMmWJLP67FWIxQ5bsB4LRY74SzxxjRRC", file: "process1.jpg" },
    { id: "1VRqHGGLeh38Ia1OQUcfmBtcGTqFi48-C", file: "portfolio1.jpg" },
    { id: "1RTMlpZ1d-8lvY3C8okyPx0lCI36yrrXq", file: "portfolio2.jpg" },
    { id: "1FHAS1zFrBSqT4Hbsje4_T1cNq381bwbc", file: "portfolio3.jpg" },
    { id: "1CLohSSLoTY3PK04ZmHgswXAtXZ_y_3PB", file: "portfolio4.jpg" },
    { id: "1ijmpYqsV2jiR102Aun2T1e6-eFbf25e_", file: "portfolio5.jpg" },
    { id: "12BPjul0FmTSDJLL-c37tVyPTbzS06pP6", file: "happy-owner.png" }
];

const download = (id, filename) => {
  return new Promise((resolve, reject) => {
    https.get(`https://drive.google.com/uc?export=download&id=${id}`, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          const file = fs.createWriteStream(`public/${filename}`);
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(`public/${filename}`);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', reject);
  });
};

async function main() {
  for (const item of ids) {
    console.log(`Downloading ${item.file}...`);
    try {
      await download(item.id, item.file);
      console.log(`Downloaded ${item.file}`);
    } catch (e) {
      console.error(`Failed ${item.file}:`, e);
    }
  }
}

main();
