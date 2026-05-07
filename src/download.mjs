import https from 'https';
import fs from 'fs';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirect
        download(res.headers.location, dest).then(resolve).catch(reject);
      } else if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => reject(new Error(`Failed with status ${res.statusCode}`)));
        });
      }
    }).on('error', reject);
  });
}

async function main() {
  try {
    await download('https://drive.google.com/uc?export=download&id=1Ff6FfJ0ncE8qTTs-_v1Z_dzoXvS6mlJS', 'public/visual-menus-bg.jpg');
    console.log('Downloaded visual-menus-bg.jpg');
  } catch(e) {
    console.error(e);
  }
}
main();
