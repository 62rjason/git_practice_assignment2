function checkprime(num){
    
let f=0;
for(let i=1;i<=num;i++){
if(num%i==0){
f++;
}}
if(f==2){
    console.log("Prime");
}else{
    console.log("Not Prime");
}
}



