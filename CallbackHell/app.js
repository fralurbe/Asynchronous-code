const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = 'translateX(100px)';
//     setTimeout(() => {
//         btn.style.transform = 'translateX(200px)';
//         setTimeout(() => {
//             btn.style.transform = 'translateX(300px)';
//             setTimeout(() => {
//                 btn.style.transform = 'translateX(400px)';
//             },1000)
//         },1000)
//     },1000)
// },1000)

const moveX = (element, amount, delay, onSuccess, onFailure) => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if(elRight + amount > bodyBoundary) {
        onFailure();
    }
    else{
        setTimeout(() => {
            element.style.transform = `translateX(${currLeft +  amount}px)`;
            onSuccess();
        }, delay);
    }
};

// moveX(btn, 50, 500, ()=> {
//     moveX(btn, 50, 500, ()=> {
//         moveX(btn, 50, 500, ()=> {
//             moveX(btn, 50, 500, ()=> {
//                 moveX(btn, 50, 500, ()=> {
//                 });
//             });
//         });
//     });
// });

moveX(
        btn, 
        50, 
        500,
        () => {
            moveX(
                btn,
                50,
                500,
                ()=>{console.log('Seguimos moviendo')},
                ()=>{console.log('Hemos llegado al final')}
            )
        },
        () => {        
            alert('He llegado al final')
        }
    )