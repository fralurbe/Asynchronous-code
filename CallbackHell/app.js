const willYouGetDog = new Promise((resolve, reject) => {
    const result = Math.random();
    if(result < 0.5){
        resolve();
    }
    else {
        reject();
    }
});

willYouGetDog.then(() => {
    'Entro por el then.';
})

willYouGetDog.catch(()=>{
    'Entro por el catch.'
})