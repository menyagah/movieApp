

const fetchData = async searchTerm => {
    const response = await axios.get(`https://torre.bio/api/bios/${searchTerm}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
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