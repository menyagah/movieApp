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

input.addEventListener('input', event => {
    fetchData(event.target.value);
});