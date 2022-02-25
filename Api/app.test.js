// import data
const footballCatsData = require('./data');
// import model
const FootballCat = require('./model');

describe('Football Cat model', () => {
    const testFootballCat = {
        name: 'Albus',
        position: 'Midfield',
        team: 'Juventus',
    };

    it('should make an instance of a cat', () => {
        const footballCat = new FootballCat.FootballCat({
            id: 10,
            ...testFootballCat
        });


        expect(footballCat.name).toBe('Albus');
        expect(footballCat.position).toBe("Midfield");
        expect(footballCat.team).toBe("Juventus");
    });

    it('should return a football cat by id', () => {
        const footballCat = FootballCat.FootballCat.findById(1);

        expect(footballCat).toEqual(footballCatsData[0]);
    });

    it('should throw an error if no football cat', () => {
        function testError() {
            FootballCat.FootballCat.findById(50);
        }

        expect(testError).toThrowError('Jedi Football Cat not found!');
    });

});
