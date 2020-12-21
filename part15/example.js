for(x=1;x<=100;x++){
    document.write(" "+x+ "<br>");
    if(x==20){
        break;
    }
    
}
for(x=1;x<=100;x++){
    
    if(x%2!=0){
        continue;
    }
    document.write(" "+x);
}