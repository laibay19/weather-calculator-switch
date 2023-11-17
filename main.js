function weather(){
    let temp = document.getElementById("input").value 
    ans = ""

        switch (true){
         
            case temp < 0 :
            result = "too cold you may die"
            break;
         
            case temp > 40 :
            result = "heat stroke"
            break;
          
            case temp >= 30 :
            result = "normal weather"
            break;
    
            case temp >= 20 :
            result = "good weather"
            break;
           
            case temp >= 10 :
            result = "cold weather"
            break;
           
            default : 
            result = "too cold"
    }


    let output = document.getElementById("result")
    output.innerHTML = result

}