const getRandomQuote = async () => {
    const randomNumber = Math.random();
    let url;
    let content;
    let response;
    let data;
    if (randomNumber > 0.5) {
        url = 'https://api.api-ninjas.com/v1/facts?limit=1';
        response = await fetch(url, {
            headers: { 'X-Api-Key': 'yMsppa/RG1FYedUCX8XNLQ==TQ2N043K90BFqBRO', 'Content-Type': 'application/json'},
        });
        data = await response.json()
        content = data[0].fact
    } else {
        url = "https://api.quotable.io/random";
        response = await fetch(url);
        data = await response.json()
        console.log(data);
        content = data.content
    }
    return `${content}`
}

const functions = {
    getRandomQuote,
}

module.exports = (functionName) => {
    return functions[functionName]
}