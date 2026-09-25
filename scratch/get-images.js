const https = require('https');

https.get('https://raw.githubusercontent.com/AvixLabs-Official/Restaurant-Olive/main/index.html', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const regex = /<img[^>]+src=["'](https:\/\/images\.unsplash\.com\/[^"']+)["'][^>]*alt=["']([^"']*)["']/g;
    let m;
    while ((m = regex.exec(data)) !== null) {
      console.log(m[2], '=>', m[1]);
    }
  });
});
