function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    return element;
  }
  
  /**
   * 
   * @param {string} filename 
   * @param {number} offset 
   * @param {number} size 
   * @param {string} content 
   */
  function qrgen(data) {
    QRCode.toDataURL(data, { errorCorrectionLevel: 'H', margin: 1, scale: 8 })
      .then((url) => {
        const qrCodeContainer = document.getElementById('qrCodeContainer');
        if (qrCodeContainer) {
          qrCodeContainer.innerHTML = '';
        } else {
          const container = createElement('div', { id: 'qrCodeContainer', style: 'text-align: center; margin-top: 30px;' });
          document.querySelector('.container').appendChild(container);
        }
  
        const img = createElement('img', { src: url, alt: 'QR Code', style: 'display: inline-block; margin: 0 auto;' });
        document.getElementById('qrCodeContainer').appendChild(img);
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred while generating the QR Code.');
      });
  }
  