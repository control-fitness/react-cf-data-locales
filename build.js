const fs = require('fs');

// locales
const es = require('./src/locales/es');
const en = require('./src/locales/en');

// object with locales
const locales = {
  es: es,
  en: en
}

// content
const content = `var locales = ${JSON.stringify(locales)};`;

// create file
fs.writeFile('./dist/all.js', content, function(err) {
  if (err) {
    return console.log(err);
  }
});