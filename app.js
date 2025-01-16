
const containerQR = document.getElementById('containerQR');
const form = document.getElementById('form');


const btnDownload = document.createElement('button');
btnDownload.innerHTML = "Descargar QR";
btnDownload.setAttribute("id", "btnDownload");
btnDownload.setAttribute("class", "btnDownload");

const QR = new QRCode(containerQR);


form.addEventListener('submit', (e) => {

    e.preventDefault();
    QR.makeCode(form.link.value);
    document.getElementById("downloadQR").appendChild(btnDownload);

});



btnDownload.addEventListener('click', (e) => {
    html2canvas(document.getElementById('containerQR'), {
        onrendered: function (canvas) {
            var imgData = canvas.toDataURL("image/png");
            var link = document.createElement("a");
            link.href = imgData;
            link.download = "QR Code.png";
            link.click();
        }
    });
    // console.log('Download QR');
});
