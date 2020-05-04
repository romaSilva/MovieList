export default class Omdb {
    constructor(){
        this.key = '2744f713';
    }

    searchOnOmdb = async searchInput => {
        const searchResponse = await fetch(`http://www.omdbapi.com/?apikey=${this.key}&s=${searchInput}`)
        const parsedResponse = await searchResponse.json();
        
        return parsedResponse;
    };


}