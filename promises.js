const tacoPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
        //reject();
        //reject("no taco");
    }, 1000)  
})
console.log(tacoPromise) //"taco"

tacoPromise.then((response) => {
console.log(response);
})
.catch((err) => {
    console.log(err);
})