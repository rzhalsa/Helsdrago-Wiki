function fetchText(file) {
    fetch(file) 
    .then(response => response.text())
    .then(text => {
        const sanitizedText = DOMPurify.sanitize(text);
        document.getElementById('intro').textContent = sanitizedText;
    })
    .catch(error => {
        console.error(error);
    });
}
