const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const rand = Math.random();
            if(rand<0.3){
                reject();
            }
            else {
                resolve();
            }
        },3000);
    })
}

fakeRequest()
    .then(()=>{console.log('Request worked')})
    .catch(()=>{console.log('Request failed')});























// const makeDogPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const result = Math.random();
//             if(result < 0.5) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 3000)
//     });
// };

// makeDogPromise()
//     .then(() => {
//         console.log('Entro por el then.');
//     })
//     .catch(() => {
//         console.log('Entro por el catch.');
//     });

