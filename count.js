let url = new URL('https://xjyydqhmvc.execute-api.us-east-1.amazonaws.com/Prod/count/');

async function fetchTest() {
    let response = await fetch(url);
    let responseText = await response.text();

    document.getElementById('count').innerHTML = responseText;
}

(async() => {
    await fetchTest();
})();