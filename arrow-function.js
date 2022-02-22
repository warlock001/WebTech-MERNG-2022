function msg(){
    console.log('This is a traditional function')
}
msg();

(function(){
    console.log('This is a anonymous function')
})()

msg = ()=>{console.log('This is a arrow function')}
msg();