const url = 'https://rickandmortyapi.com/api/character/';
const parentElemnt = document.getElementById('container');

const fetchApi = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        data.results.forEach(element => {
            const newElement = document.createElement('p');
            const img = document.createElement('img');
            newElement.textContent = `nombre: ${element.name}`
            img.src = element.image;
            parentElemnt.appendChild(img);
            parentElemnt.appendChild(newElement);
        });
    }catch (error){
        const errorMsg = document.createElement('p');
        errorMsg.textContent =`error : ${error.message}`
        parentElemnt.appendChild(errorMsg);
    }
}

fetchApi(url);