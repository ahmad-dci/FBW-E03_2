export const getData = async (searchWord) => {
    const numInPage = 20;
    const pageNum = 1;
    let url = 'https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency'
    let obj = {
        "requests": [{
            "indexName": "ikea",
            "params": "query=" + searchWord + "&hitsPerPage=" + numInPage + "&page=" + pageNum
        }]
    };
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj)
    });
    const data = await response.json();
    return data;

}