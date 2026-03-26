async function shortenURL() {
    const longUrl = document.getElementById("longUrl").value;
    const resultDiv = document.getElementById("result");

    if (!longUrl) {
        resultDiv.innerHTML = "Please enter a URL!";
        return;
    }

    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
        const shortUrl = await response.text();

        resultDiv.innerHTML = `
            Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>
        `;
    } catch (error) {
        resultDiv.innerHTML = "Error shortening URL!";
        console.error(error);
    }
}