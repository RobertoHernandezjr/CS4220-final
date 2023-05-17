const superagent = require('superagent');

const superhero = `https://superheroapi.com/api/6113504278737850`;


const chooseHero = async (todoName) => {
    try {
        //https://superheroapi.com/api.php/6113504278737850/search/name
        const heroURL = `${superhero}/search/${todoName}`;
        const res = await superagent.get(heroURL);

        console.log(res.body);
        return res.body;
    } catch (error) {
        console.log(error);
    }
};


//Getting hero by random id
const randomHero = async (randomHero) => {
    try {
        //https://superheroapi.com/api/6113504278737850/id
        const randomURL = `${superhero}/${randomHero}`;
        const res = await superagent.get(randomURL);

        console.log(res.body)
        return res.body;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    chooseHero,
    randomHero
};

