import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import "./index.css"

const QRCodeDisplay = () => {
  const link = window.location.href;

  return (
    <div className='qrCode'>
      <h2>Scan the QR Code to Join!</h2>
      <QRCodeSVG value={link} size={256} />
    </div>
  );
};

export default QRCodeDisplay;
