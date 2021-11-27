

const fetchData = async searchTerm => {
    const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
            apikey: '31337c71',
            s: searchTerm
        }
    });

    if(response.data.Error){
        return [];
    }
    
    return response.data.Search;
}

const input = document.querySelector('input');



const onInput = async event => {
    const movies = await fetchData(event.target.value);
    for(let movie of movies){
        const div = document.createElement('div');
        div.classList.add('mb-3')
        div.innerHTML = `
        <img src="${movie.Poster}" width=300 height=300 />
        <h1>${movie.Title}</h1>`
        document.querySelector('.data').appendChild(div);
    }
};


input.addEventListener('input', debounce(onInput));