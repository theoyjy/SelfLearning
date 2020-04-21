//1：：：convert local var to get global var's life span
// function add(){
//     var c=0; //local variable

//     plus= function (){
//         c++;    //undefined variable
//         console.log(c);
//     }
// }
// add();//initializing c
// plus();
// plus();

// 2：：：convert local var to get global var's life span
// function add(){
//     var c=0; //local variable

//     return function (){ /* ***the difference is here!!!!!*** */
//         c++;    //undefined variable
//         console.log(c);
//     }
// }
// var plus=add();
// plus();
// plus();


//immediately run functions, put declaration and run together

// (function add(){
//     var c=0; //local variable

//     return  function (){
//         c++;    //undefined variable
//         console.log(c);
//     }
// })


// var plus= (function (){
//     var c=0; //local variable
//     return function (){
//         c++;    //undefined variable
//         console.log(c);
//     }
// }) ();//initialize variable c

// plus();
// plus();



// console.time("时间-");
// for(var i = 0; i<100000;i++){   
// }
// console.timeEnd("时间-");

// var n = document.getElementById("Sed");
// console.log(n);///this will print null, because parser havn't parse body part

/*Jump out Windows */
// alert("halo!!!!!!!!!!");//comment

// var btn=confirm("Do you want to go to baidu??");
// console.log("confirm? "+btn);
// if(btn){
//     location.replace("http://www.baidu.com");
// }
// else{
//     location.reload();
// }

// var strpt = prompt("Input here:");
// console.log("user's input: "+ strpt);

var x=0;
function seconds(){
    console.log(++x +"s");
}
var sil=setInterval(seconds,1000);//1000ms=1s

//stop after 10s
setTimeout(function(){
    clearInterval(sil);
},10000);