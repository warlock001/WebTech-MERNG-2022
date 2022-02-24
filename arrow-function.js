function doLog() {
    console.log('This is traditional function');
}
doLog();

(function(){
    console.log('This is anonymous function');
})();

let doArrow = ()=>{
    console.log('This is arrow function');
}
doArrow();
