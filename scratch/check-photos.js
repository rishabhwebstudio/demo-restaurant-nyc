const https = require('https');

const ids = [
  'photo-1551183053-bf91a1d81141',
  'photo-1621996346565-e3d5d628165b',
  'photo-1519708227418-c8fd9a32b7a2',
  'photo-1555396273-367ea4eb4db5',
  'photo-1514933651103-005eec06c04b',
];

async function check() {
  for (const id of ids) {
    const url = `https://unsplash.com/photos/${id.replace('photo-', '')}`;
    await new Promise((resolve) => {
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        console.log(id, '=> redirect to:', res.headers.location);
        resolve();
      }).on('error', resolve);
    });
  }
}
check();
