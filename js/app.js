document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file.type === 'application/pdf') {
        const fileReader = new FileReader();
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);
            pdfjsLib.getDocument(typedarray).promise.then(pdf => {
                console.log('PDF loaded');
                // Implement PDF rendering here
            });
        };
        fileReader.readAsArrayBuffer(file);
    } else {
        alert('Please upload a PDF file.');
    }
});
