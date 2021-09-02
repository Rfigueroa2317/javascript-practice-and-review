const express = require('express');
const app = require ('express')();
const PORT = 8082;
app.use()

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log("inside first then method")
        console.log(response.json())
    })
    .then(data => {
        console.log(data)
    .
        then(response => response.json())
            .then(data => {
                console.log(data);
                $("div").append(`<p>${data.title}</p>`);
            })
    })

app.listen(
    PORT,
    ()
)