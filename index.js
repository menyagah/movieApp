const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '31337c71',
            s: 'Avengers'
        }
    })
    console.log(response.data);
}

fetchData()