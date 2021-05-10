
const { menubar } = require('menubar');
const { app } = require('electron');
const ioHook = require('iohook');


// ioHook.on('mousemove', event => {
//   console.log(event); // { type: 'mousemove', x: 700, y: 400 }
// });

// Register and start hook
// ioHook.start();
const mb = menubar();

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here
});
function eventHandler(event) {
  console.log(event);
}

app.on('ready', () => {
  console.log("node1: " + process.versions.node + ", chromium: " + process.versions.chrome + ", electron: " + process.versions.electron);
  ioHook.start();
  // ioHook.on('mouseclick', eventHandler);
  ioHook.on('keydown', eventHandler);
  // ioHook.on('mousewheel', eventHandler);
  // ioHook.on('mousemove', eventHandler);
  console.log('Try move your mouse or press any key');
});

app.on('before-quit', () => {
  ioHook.unload();
  ioHook.stop();
});
