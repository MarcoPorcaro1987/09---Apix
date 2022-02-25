const request = require('supertest')
const appCore = require('./server')
const footballCatsData = require('./data');
const FootballCat = require('./model')

describe ('server testing', () => {
    let testapp
    
        beforeAll(() => {
            testapp = appCore.listen(5000, () => {
                console.log(`running the test server`)
            })
        })
    
        afterAll(function(done) {
            console.log("stopping test server")
            testapp.close(done)
        })
    
        it('domain GET responds 200', (done) => {
            request(testapp)
                .get ('/footballCats')
                .expect(200, done)
            });
            
        it('GET /footballCats returns our object', (done) => {
            request(testapp)
                .get ('/footballCats')
                .expect(footballCatsData, done)
        })

        const testFootballCat = {
            name: 'Albus',
            position: 'Midfield',
            team: 'Rebel Scum',
        };



        it('should create a football cat', () => {
            const newFootballCatId = footballCatsData.length + 1;
            const footballNewCat = FootballCat.FootballCat.create(testFootballCat);
    
            expect(footballNewCat).toEqual({ id: newFootballCatId, ...testFootballCat });
        });

        it('should delete a footballcat', () => {
            const footballCatToDestroyId = footballCatsData.length;
            const footballCatToDestroy = footballCatsData[footballCatToDestroyId - 1];
            footballCatToDestroy.destroy();
    
            expect(footballCatToDestroy).toEqual({ id: footballCatToDestroyId, ...testFootballCat });
            expect(footballCatsData).not.toContain(footballCatToDestroy);
        });

})
