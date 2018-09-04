const express = require('express');
const axios = require('axios');
const router = express.Router();
const { RarePokemonCards, CommonPokemonCards, TrainerCards, EnergyCards } = require('./types');



router.get('/getone', async (req, res) => {
    try {
        const result = await axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=rare`)
        res.send({ results: result.data.cards });
    } catch(err) {
        console.log(err);
        res.send({ message: "error getting pack" });
    }
});


//TOTAL NUMBER CARDS: 11
router.get('/getpack', async (req, res) => {
    try {
        const [rare, common1, common2, common3, common4, common5, common6, trainer1, trainer2, energy1, energy2] = await Promise.all([
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${RarePokemonCards[Math.floor((Math.random() * RarePokemonCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${CommonPokemonCards[Math.floor((Math.random() * CommonPokemonCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${CommonPokemonCards[Math.floor((Math.random() * CommonPokemonCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${CommonPokemonCards[Math.floor((Math.random() * CommonPokemonCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${CommonPokemonCards[Math.floor((Math.random() * CommonPokemonCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${CommonPokemonCards[Math.floor((Math.random() * CommonPokemonCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${CommonPokemonCards[Math.floor((Math.random() * CommonPokemonCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${TrainerCards[Math.floor((Math.random() * TrainerCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${TrainerCards[Math.floor((Math.random() * TrainerCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${EnergyCards[Math.floor((Math.random() * EnergyCards.length) + 1 )]}`),
            axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&id=${EnergyCards[Math.floor((Math.random() * EnergyCards.length) + 1 )]}`)
        ]);

        // res.send({  
        //     rare:     arrayToObject(rare.data.cards),
        //     common1:  arrayToObject(common1.data.cards),
        //     common2:  arrayToObject(common2.data.cards),
        //     common3:  arrayToObject(common3.data.cards),
        //     common4:  arrayToObject(common4.data.cards),
        //     common5:  arrayToObject(common5.data.cards),
        //     common6:  arrayToObject(common6.data.cards),
        //     trainer1: arrayToObject(trainer1.data.cards),
        //     trainer2: arrayToObject(trainer2.data.cards),
        //     energy1:  arrayToObject(energy1.data.cards),
        //     energy2:  arrayToObject(energy2.data.cards)
        // });

        res.send({  
            ...arrayToObject(rare.data.cards),
            ...arrayToObject(common1.data.cards),
            ...arrayToObject(common2.data.cards),
            ...arrayToObject(common3.data.cards),
            ...arrayToObject(common4.data.cards),
            ...arrayToObject(common5.data.cards),
            ...arrayToObject(common6.data.cards),
            ...arrayToObject(trainer1.data.cards),
            ...arrayToObject(trainer2.data.cards),
            ...arrayToObject(energy1.data.cards),
            ...arrayToObject(energy2.data.cards)
        });

        // res.send({  
        //     rare: rare.data.cards,
        //     common1: common1.data.cards,
        //     common2: common2.data.cards,
        //     common3: common3.data.cards,
        //     common4: common4.data.cards,
        //     common5: common5.data.cards,
        //     common6: common6.data.cards,
        //     trainer1: trainer1.data.cards,
        //     trainer2: trainer2.data.cards,
        //     energy1: energy1.data.cards,
        //     energy2: energy2.data.cards
        // });

    
    } catch(err) {
        res.send({ message: "error doing requests" });
    }
});


const arrayToObject = (array) =>
   array.reduce((obj, item) => {
     obj[item.id] = item
     return obj
   }, {})





module.exports = router;