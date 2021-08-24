const express = require('express');
const app = require('express')();
const PORT = 8081;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);


// request = incoming data
// response = outgoing data


app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const {id} = req.params;
    const {logo} = req.body;

    if (!logo) {
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    })
});

