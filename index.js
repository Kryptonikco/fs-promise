const fs = require('fs');

const stat = (path) => new Promise((resolve, reject) => {
  fs.stat(path, (err, stat) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(stat);
  });
});

const readFile = (path, opts = {
  encoding: 'utf8'
}) => new Promise((resolve, reject) => {
  fs.readFile(path, opts, (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(data);
  });
});

const writeFile = (path, data, opts) => new Promise((resolve, reject) => {
  fs.writeFile(path, data, opts, (err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve();
  });
});

module.exports = {
  readFile,
  stat,
  writeFile,
  createReadStream: fs.createReadStream,
  createWriteStream: fs.createWriteStream,
};
