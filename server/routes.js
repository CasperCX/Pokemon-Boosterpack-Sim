const express = require('express');
const axios = require('axios');
const router = express.Router();
const { RarePokemonCards, CommonPokemonCards, TrainerCards, EnergyCards } = require('./types');



router.get('/getone', async (req, res) => {
    try {
        const result = await axios.get(`https://api.pokemontcg.io/v1/cards/?series=base&supertype=pokemon&rarity=rare`)
        res.send({ results: result.data });
    } catch(err) {
        console.log(err);
        res.send({ message: "error getting pack" });
    }
});


//TOTAL NUMBER CARDS: 11
router.get('/getpack', async (req, res) => {
    try {
        const [rare, common1, common2, common3, common4, common5, common6, trainer1, trainer2, energy1, energy2] = await Promise.all([
            //1x Rare
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





module.exports = router;