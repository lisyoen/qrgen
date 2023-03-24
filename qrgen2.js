function qrgen(filename, content) {
    let data = {
        filename: filename,
        content: content
    };

    let qr = qrcode(0, 'H');
    qr.addData(JSON.stringify(data));
    qr.make();

    let container = document.getElementById('qrcode-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'qrcode-container';
        document.body.appendChild(container);
    }

    container.innerHTML = '';
    container.innerHTML = qr.createImgTag();
}