#! /usr/bin/env node

var os = require('os'),
    ifaces=os.networkInterfaces();

  for (var dev in ifaces) {
    var alias = 0;
    ifaces[dev].forEach(function(details){
      if (details.family == 'IPv4' && !details.internal) {
        console.log(dev + (alias ? ':' + alias : ''), details.address);
        ++alias;
      }
    });
  }
