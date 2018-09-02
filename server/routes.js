const express = require('express');
const axios = require('axios');
const router = express.Router();


//TODO GET 10 RANDOM POKEMONS AND SEND RESPONSE
router.get('/getone', async (req, res) => {
    try {
        // const result = await axios.get(`https://api.pokemontcg.io/v1/cards/?nationalPokedexNumber=3`);
        // const result = await axios.get(`https://api.pokemontcg.io/v1/cards/?series=base`);
        const result = await axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=rare`)
        res.send({ results: result.data });
    } catch(err) {
        console.log(err);
        res.send({ message: "error getting pack" });
    }
});


//TOTAL NUMBER CARDS: 11
//SUBTYPES: Trainer, Pokemon, Energy
//RARE: (rare || holofoil rare || super rare )
//rare: 1, uncommon: 3, 7: common, 
//TODO GET random number for amount pokemons
//TODO GET random number for amount of items/spells
router.get('/getpack', async (req, res) => {
    try {
        const [rare, common1, common2, common3, common4, common5, common6, trainer1, trainer2, energy1, energy2] = await Promise.all([
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=rare`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=common`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=common`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=common`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=common`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=common`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=common`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=trainer`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=trainer`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=energy`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=energy`)
        ]);

        
        res.send({  
            rare: rare.data,
            common1: common1.data,
            common2: common2.data,
            common3: common3.data,
            common4: common4.data,
            common5: common5.data,
            common6: common6.data,
            trainer1: trainer1.data,
            trainer2: trainer2.data,
            energy1: energy1.data,
            energy2: energy2.data
        });
    } catch(err) {
        res.send({ message: "error doing requests" });
    }
});




router.get('/getnumbers', async (req, res) => {
    try {
        const result = await axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=energy`); //change supertypes querystring
        loopNestedObj(result.data.cards);
        console.log(numbers.length)
        console.log(numbers);
    } catch(err) {
        console.log(err);
        res.send({ message: "error getting numbers" });
    }
});

    let numbers = [];
    const loopNestedObj = (obj) => {
        Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') loopNestedObj(obj[key]);  // recurse.
        
        //Change keys to filter out results
        if (key === 'supertype' && obj[key] === 'Energy') {
            numbers.push(obj['id']);
                } 
            }
        );

        return numbers;
    };
   



module.exports = router;