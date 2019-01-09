// api server swapi.co
/*
fetch('https://swapi.co/api/people/1/')
    .then((response) => {
        console.log('resp', response);
        return response.json()
    })
    .then((data) => {
        console.log('data', data)
    });


const getResponse = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
};


getResponse('https://swapi.co/api/people/1/')
    .then((data) => {
        console.log('data', data)
    })
    .catch((error)=> {
        console.log('Error:', error)
    })
*/

class SwapiService {
    _apiBase = 'https://swapi.co/';
    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        const data = response.json();
        return data;
    };

    async getAllPeople() {
        const result = await this.getResource(`api/people/`)
        return result.results
    }

    getPerson(id) {
        return this.getResource(`api/people/${id}/`)
    }
}



const swapi = new SwapiService()

swapi.getAllPeople().then((data)=>{
   console.log('data', data)
});

swapi.getPerson(2).then((data)=>{
   console.log('data', data)
});
