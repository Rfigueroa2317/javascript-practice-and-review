// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

const myPromise = fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));

const githubPromise = fetch('https://api.github.com/repositories');
const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');

Promise.all([githubPromise, bitbucketPromise, myPromise])
    .then(function(data){

    })
    .catch(function (error){
    })

Promise.resolve('one').then((one) => {
    console.log(one);
    return 'two';
}).then((two) => {
    console.log(two);
    return 'three';
}).then ((three) => {
    console.log(three);
})

// Exercises \\

// 2.

const newToken = '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';

fetch('https://github.com/settings/tokens', {headers: {'Authorization': newToken}}).then(response => response.json()).catch(error => console.log(error)) //needs to be fixed \\