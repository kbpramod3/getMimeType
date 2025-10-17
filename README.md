
# get-mimetype

[![npm version](https://img.shields.io/npm/v/get-mimetype.svg?style=flat-square)](https://www.npmjs.com/package/get-mimetype)
[![License](https://img.shields.io/npm/l/get-mimetype.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A tiny utility to get the MIME type from a file extension.
This package helps detect the MIME type of a file quickly based on its name or extension.

---

## Installation

Using npm:

```
npm install get-mimetype
```

Using Yarn:

```
yarn add get-mimetype-pramod
```

---

## Usage

```js
// CommonJS
const getMimeType = require('get-mimetype-pramod');

console.log(getMimeType('photo.jpg'));      // image/jpeg
console.log(getMimeType('video.avi'));      // video/x-msvideo
console.log(getMimeType('document.pdf'));   // application/pdf
console.log(getMimeType('unknown.xyz'));    // application/octet-stream
```

```js
// ES Modules
import getMimeType from 'get-mimetype';

console.log(getMimeType('audio.mp3'));      // audio/mpeg
```

> Returns `application/octet-stream` if the extension is not in the supported list.

---

## Supported Extensions

### Images
.jpg, .jpeg, .png, .gif, .bmp, .svg, .webp, .ico, .tiff

### Videos
.mp4, .mkv, .mov, .avi, .webm

### Audio
.mp3, .wav, .ogg, .m4a, .flac

### Documents
.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt, .csv, .json, .xml, .html, .css, .js

### Archives
.zip, .rar, .7z, .tar, .gz

### Fonts
.ttf, .otf, .woff, .woff2

> For the full list, see `src/index.js`.

---

## License

MIT License © 2025 Pramod
