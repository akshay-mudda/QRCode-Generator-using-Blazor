function saveAs(content, filename) {
    // Create a Blob from the byte array
    const blob = new Blob([content], { type: 'application/octet-stream' });

    // Create an object URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    a.click();

    // Revoke the object URL
    window.URL.revokeObjectURL(url);
}
