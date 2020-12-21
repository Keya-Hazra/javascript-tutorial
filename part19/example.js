var num=new Array();
for (x=0;x<=4;x++){
    num[x]=parseInt(prompt("enter you num="));
}
var sum=0;
for(x=0;x<5;x++){
    document.write(num[x]+"<br>");
    sum=sum+num[x];

}
document.write("sum is= "+sum);