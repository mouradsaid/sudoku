
var k=0;
var stp=0;
document.getElementById("knt").innerHTML=k+"/3";
let inelem = document.getElementsByTagName("input");
              
var f,n,index;
for(let i=0; i<inelem.length; i++){
    inelem[i].addEventListener("click", function(){f=this;index=i;});
}
function b(n){
    f.value=n;
    brf()
}


newlist0=[];
for(let a=0;a<9;a++){
  for(let b=0;b<9;b++){
newlist0.push(list[a][b])
}
}



newlist1=[];
sodokoSolver(list);
for(let i=0;i<9;i++){
  for(let j=0;j<9;j++){
newlist1.push(list[i][j])
}
}





for(let i=0;i<inelem.length;i++){
    if(newlist0[i]!="."){
    inelem[i].value=newlist0[i];
    inelem[i].disabled=true;
    stp++;
}
  }

function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }}return true;}

function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '.') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = '.';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}

var h=0
m=0
s=0;

var time = setInterval(function(){timer()},1000);
function timer(){


s++;
if(s==59){
    s=0
    m++
    if(m==59){
    m=0
    h++
}
}
document.getElementById("crn").innerHTML=h+":"+m+":"+s;
}

