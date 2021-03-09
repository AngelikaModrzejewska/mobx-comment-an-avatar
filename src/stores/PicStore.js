import { action, makeObservable, observable } from 'mobx';

export default class PicStore {

    @observable picUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`

    constructor() {
        makeObservable(this);
    }

    @action
    getPic = async () => {
        let picId = Math.floor(Math.random() * 15) + 1;
        const response = await fetch(`https://rickandmortyapi.com/api/character/${picId}`);
        const data = await response.json();
        this.picUrl = data.image;
    }
}
