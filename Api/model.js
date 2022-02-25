const footballCatsData = require('./data');

class FootballCat{
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.position = data.position
        this.team = data.team
    }
    
    static get all() {
        const footballCats = footballCatsData.map((footballCat) => new FootballCat(footballCat));
        return footballCats;
    }

    static findById(id) {
        try {
            const footballCatData = footballCatsData.filter((footballCat) => footballCat.id === id)[0];
            const footballCat = new FootballCat(footballCatData);
            return footballCat;
        } catch (err) {
            throw new Error('Jedi Football Cat not found!');
        }
    }

    static create(footballCat) {
        const newFootballCatId = footballCatsData.length + 1;
        const newFootballCat = new FootballCat({ id: newFootballCatId, ...footballCat });
        footballCatsData.push(newFootballCat);
        return newFootballCat;
    }

    destroy() {
        const footballCat = footballCatsData.filter((footballCat) => footballCat.id === this.id)[0];
        footballCatsData.splice(footballCatsData.indexOf(footballCat), 1);
    }

}

module.exports = {
    FootballCat
}
