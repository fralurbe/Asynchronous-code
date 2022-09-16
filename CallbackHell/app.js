const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const rand = Math.random();
            if(rand < 0.4){
                reject({status : 404});
            }
            else {                
                resolve({status : 200});
            }
        },1000);
    })
}

fakeRequest('/users')
    .then((res)=>{     
        console.log('Request worked ', res.status)})
    .catch((res)=>{        
        console.log('Request failed ', res.status);
    });























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

