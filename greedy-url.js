const getURL = dataSet => {
    const urlRegEx = /https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/g;

    const text = 'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq http://example.com/hello?you=something&something=you';
    const matches = text.match(urlRegEx);
    
    console.log(matches); // [ 'http://something.com/hello', 'https://something.com/hello', 'http://example.com/hello?you=something&something=you' ]
    
    let url = urlRegEx.exec(dataSet)
    return url
}
const data = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq http://example.com/hello?you=something&something=you"

console.log(getURL(data))
const urlRegEx = /https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/g;
const urlRegEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g