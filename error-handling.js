console.log('Statement 1')
console.log('Statement 2')
try{
    throw new Error('You have an error!')
}
catch(e){
    console.log(e.stack)
}
console.log('Statement 3')