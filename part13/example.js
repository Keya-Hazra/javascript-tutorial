/*for(x=2;x<=100;x=x+2){
    document.write(" "+x+ "<br>");
} 

for(x=10;x>=1;x=x-1){
    document.write( x + "<br>");
}
var sum=0;
for(x=1;x<=5;x=x+1){
    
    sum=sum+x;

}
document.write("sum is="+sum);*/

var m=parseInt (prompt("Enter the starting num:"));
var n=parseInt (prompt("Enter the last num:"));
var sum=0;
for(x=m;x<=n;x++){
    sum=sum+x;
}
document.write("sum is="+sum);

