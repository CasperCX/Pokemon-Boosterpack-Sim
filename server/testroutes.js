const express = require('express');
const axios = require('axios');
const router = express.Router();


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