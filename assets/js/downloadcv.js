function downloadCV() {

    var pdfFilePath = 'assets/cv/MalinduLiyanage_CV.pdf';
    var link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'test.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
