const promiseDice = new Dice((resolve, reject) => {
 return new rolldice((err, noErr) => {
    if(err){
        reject(err)
    } else{
        resolve(noErr)
    }
    
 })

promiseDice.then((noErr) => {
    console.log(`good ${noErr}`);
    promiseDice().then((noErr) => {
        console.log(`great ${noErr}`);
        return promiseDice()
    }).then((noErr) => {
        console.log(`perfect ${noErr}`)
        return promiseDice();
    })
.catch(() => {
    console.log(`oops ${err}`)
})
})
})