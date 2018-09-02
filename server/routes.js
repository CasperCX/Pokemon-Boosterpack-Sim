const express = require('express');
const axios = require('axios');
const router = express.Router();


//TODO GET 10 RANDOM POKEMONS AND SEND RESPONSE
router.get('/getone', async (req, res) => {
    try {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/2/`);
        res.send({ results: result.data });
    } catch(err) {
        console.log(err);
        res.send({ message: "error getting pack" });
    }
});


//TOTAL NUMBER CARDS: 11
//RARE: (rare || holofoil rare || super rare )
//rare: 1, uncommon: 3, 7: common, 
//TODO GET random number for amount pokemons
//TODO GET random number for amount of items/spells
router.get('/getpack', async (req, res) => {
    try {
        const [data1, data2, data3, data4, data5] = await Promise.all([
          axios.get('https://pokeapi.co/api/v2/pokemon/6/'),
          axios.get('https://pokeapi.co/api/v2/pokemon/33/'),
          axios.get('https://pokeapi.co/api/v2/pokemon/20/'),
          axios.get('https://pokeapi.co/api/v2/pokemon/31/'),
          axios.get('https://pokeapi.co/api/v2/pokemon/12/'),

        ]);

        res.send({  
            card1: data1.data,
            card2: data2.data,
            card3: data3.data,
            card4: data4.data,
            card5: data5.data
        });
    } catch(err) {
        res.send({ message: "error doing requests" });
    }
});


module.exports = router;