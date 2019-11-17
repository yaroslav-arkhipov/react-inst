export default class InstService {
    constructor(){
        this._baseURL = 'http://localhost:3000';
    }
    getResource = async (url) =>{
        const res = await fetch(`${this._baseURL}${url}`);
        if (!res.ok) {
            throw new Error(`Не могу получить данные с ${url}; ответ: ${res.status}`);
        }
        return await res.json();
    }
    getAllPosts = async () =>{
        const res = await this.getResource('/posts/');
        return res;
    }
}