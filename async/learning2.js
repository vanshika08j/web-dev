

function printTable(){

    // setInterval(
    //         ()=>{
    //         for(let i=1;i <=10; i++){

    //             console.log(i*2)
    //         }
    //     },5000)
    let i =0;
    let myInterval = setInterval(function print(){
            i++;    
            console.log(i*2)
            
            if(i==10){
                clearInterval(myInterval);
            }
            
    }, 1000)

}

printTable()
