"use strict";

var Program = require('../lib/program');

var drawLine = function() {
  let str = '';
  for(let i=0; i<25; i++) {
    str += '-';
  }
  console.log(str);
}

describe('visual check of help', function(){
  var prg = new Program('mycmd', 'usage of mycmd.');
  prg.addOpt('a', null, 'all option.');
  prg.addOpt('b', 'back', 'back description.');
  var cmd = prg.addCmd('cmd', 'cmd description.');
  cmd.addOpt('t', 'trace', 'trace description.');
  prg.addHelp();

  var res = prg.parseSync(['-h']);
  prg.printHelp(res, console.log);
  drawLine();
});

describe('visual check of help with command', function(){
  var prg = new Program('mycmd', '[global-options] [command] [command-options]');
  var cmd = prg.addCmd('dummy', 'dummy cmd desc.');
  cmd.addOpt('a', 'all', 'description of all option.');
  prg.addHelp();

  var res = prg.parseSync(['help', 'dummy']);
  prg.printHelp(res);
  drawLine();
});
