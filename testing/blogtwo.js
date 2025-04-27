function readFileFake(callback) {
    setTimeout(() => {
        const error = null;
        const content = "Sadržaj fajla: Zdravo Svete!";
        callback(error, content);
    }, 1500);
}

readFileFake((err, content) => {
    if (err) {
        console.error("Greška pri čitanju fajla:", err);
    } else {
        console.log(content);
    }
});


