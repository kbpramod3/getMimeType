import { getMimeType } from '../src/index.js';

console.log(getMimeType('photo.jpg')); // image/jpeg
console.log(getMimeType('video.mp4')); // video/mp4
console.log(getMimeType('document.pdf')); // application/pdf
console.log(getMimeType('archive.zip')); // application/zip
console.log(getMimeType('unknownfile.xyz')); // application/octet-stream
