const api = require('./api.js');

const history = require('./history.js');


const chooseHero = async (args) => {
    try {
        const hero = await api.chooseHero(args);
        const writeSuperhero = JSON.stringify(hero);
        console.log(writeSuperhero);

        //history.writeHistory();

        return writeSuperhero;
    } catch (error) {
        console.log(error);
    }
};
//console.log(chooseHero('Batman'));

//random hero id
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const randomSuperhero = async () => {
    const id = getRandomInt(731) + 1;
    try {
        const randHero = await api.randomHero(id);
        const writeHero = JSON.stringify(randHero);
        console.log(writeHero);

        //history.writeHistory();

        return writeHero;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    chooseHero,
    randomSuperhero
};