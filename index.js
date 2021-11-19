const fetchData = async serchTerm => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '31337c71',
            s:  serchTerm
        }
    })
    console.log(response.data);
}

const input = document.querySelector('input');

let timeoutId;

const onInput = event => {
    if (timeoutId) {
        clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 1500);
};


input.addEventListener('input', onInput);