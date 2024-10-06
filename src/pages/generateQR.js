const QRCode = require('qrcode');

const data = 'This is some local text or information'; // Replace with your data

QRCode.toFile('localQR.png', data, {
  color: {
    dark: '#000',  // Dark color
    light: '#FFF'  // Light color
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code saved as localQR.png');
});