var childProcess = require('child_process');
var path = require('path');
var flexSdk = require('flex-sdk');
var binPath = flexSdk.bin.compc;

var DEBUG_ARGS = [
  '-use-network=false',
  '-compiler.debug',
  '-library-path+=' + path.join(__dirname, '../lib/blooddy_crypto.swc'),
  '-define=CONFIG::LOGGING,true',
  '-include-sources',
  path.join(__dirname, '../src/org/mangui/hls'),
  '-output',
  path.join(__dirname, '../bin/debug/flashls.swc'),
  '-target-player=10.1'
];

var RELEASE_ARGS = [
  '-use-network=false',
  '-optimize=true',
  '-library-path+=' + path.join(__dirname, '../lib/blooddy_crypto.swc'),
  '-define=CONFIG::LOGGING,false',
  '-include-sources',
  path.join(__dirname, '../src/org/mangui/hls'),
  '-output',
  path.join(__dirname, '../bin/release/flashls.swc'),
  '-target-player=10.1'
];

console.log('Compiling bin/debug/flashls.swc');

childProcess.execFileSync(binPath, DEBUG_ARGS);

console.log('Compiling bin/release/flashls.swc');

childProcess.execFileSync(binPath, RELEASE_ARGS);

console.log('Complete!');
