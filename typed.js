var ele=document.querySelector('#typed');
var qualified_link = document.querySelector('#qualified_link');
qualified_link.addEventListener('click',function(){
    console.log('Quafication link clicked');
})

var end = "Sai Sampath Avala";
var start = "";

var idx = 1
var pointer = 0

setInterval(function(){
    if(pointer == 17 || pointer == -1){
        idx = idx * -1
    }
    start = end.substring(0,pointer)
    ele.textContent = start;
    pointer = pointer + idx
},100);