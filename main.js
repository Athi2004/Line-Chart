let a =document.getElementById("myLine");
let lineChart=new Chart(a,{
    type:'line',
    data:{
       labels:["January","Febuary","March","April","May","June","July","August","September","October","November","December"], 
       datasets:[{
        label:"Monthly Sales 2019",
        fill:false,
        lineTension:0.5 ,
        backgroundColor:"rgba(234, 32, 39,1.0)",
        borderColor:"rgba(52, 152, 219,1.0)",
        borderCapStyle:'square',
        borderJoinStyle:'round',
        pointBorderColor:"rgba(196, 229, 56,1.0)",
        pointBackgroundColor:"rgba(0, 98, 102,1.0)",
        pointHoverBorderColor:"rgba(26, 188, 156,1.0)",
        pointHoverBackgroundColor:"rgba(211, 84, 0,1.0)",
        pointHoverBorderWidth:3,
        pointRadius:3,
        data:[65,59,38,80,55,54,40,80,65,43,22,76]
       },]
    }
});