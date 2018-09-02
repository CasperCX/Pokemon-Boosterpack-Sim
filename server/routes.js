const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/getpack', async (req, res) => {
    try {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/2/`);
        console.log("response", result)
        res.send({results: result.data});
    } catch(err) {
        console.log(err);
        res.send({message: "error getting pack"});
    }
});

router.get('/test', (req, res) => {
    res.json({"message": "from server"});
});


module.exports = router;