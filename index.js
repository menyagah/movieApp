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

const debounce = (func, delay=1500) => {
    let timeoutId;
    return (...args)=> {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

const onInput = event => {
    fetchData(event.target.value);
};


input.addEventListener('input', debounce(onInput));