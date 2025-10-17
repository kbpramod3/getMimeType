import { mimeMap } from './mimeMap.js';

function getMimeType(filename) {
  const ext = filename.includes('.') 
    ? filename.slice(filename.lastIndexOf('.')).toLowerCase()
    : '';
  return mimeMap[ext] || 'application/octet-stream';
}

export { getMimeType };
