// jshint esversion: 6

const request = require('request');
const fs = require('fs');

setInterval(function() {
  request('http://localhost.nytimes.com:3000/projects/1/embed/teaser', function(err, d) {
    // console.dir(d, { colors: true });
    fs.writeFile(`${__dirname}/../src/index.html`, d.body, function() {
      console.log('update');
    });
  });
}, 1e3);
