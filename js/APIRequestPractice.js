const express = require('express');
const app = require('express')();
const PORT1 = 8082;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT1}`)
);


// request = incoming data
// response = outgoing data


app.get('https://gitlab.example.com/api/v4/projects?access_token=OAUTH-TOKEN', (req, res) => {
    res.status(200).send({
        project: 'IT WORKS!'
    })
});

app.post('/gitlab.example.com/api/v4/projects?access_token=OAUTH-TOKEN', (req, res) => {
    const {id} = req.params;
    const {logo} = req.body;

    if (!logo) {
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
        project: `testing ID of ${id}`,
    })
});
