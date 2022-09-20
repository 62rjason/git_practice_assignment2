function checkprime(num){
    let factors=0;
    for(let i=0;i<=num;i++){
        if(num%i==0){
            factors++;
        }
    }
    if(factors==2){
        return true;
    }else{
        return false
    }  
}
let result= checkprime(13);
if(result==true){
    console.log("Prime");
}else{
    console.log("Not prime");
}

