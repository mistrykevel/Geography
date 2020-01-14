function generate(){
    b = document.getElementById("number").innerHTML = Math.floor(Math.random() * 10) + 1
    if(b == 1){
    a = document.getElementById("questions").innerHTML = "What is an ecological resource?"
    }
    else if(b == 2){
    a = document.getElementById("questions").innerHTML = "What is urban sprawl?"
    }
    else if(b == 3){
    a = document.getElementById("questions").innerHTML = "What is Urbanization?"
    }
    else if(b == 4){
    a = document.getElementById("questions").innerHTML = "What is sustainability?"
    }
    else if(b == 5){
    a = document.getElementById("questions").innerHTML = "What is a primary industry?"
    }
    else if(b == 6){
    a = document.getElementById("questions").innerHTML = "What is a secondary industry?"
    }
    else if(b == 7){
    a = document.getElementById("questions").innerHTML = "What is a tertiary industry?"
    }
    else if(b == 8){
    a = document.getElementById("questions").innerHTML = "What are the 6 kinds of land use?"
    }
    else if(b == 9){
    a = document.getElementById("questions").innerHTML = "What is a land use conflict?"
    }
    else if(b == 10){
    a = document.getElementById("questions").innerHTML = "What is zoning?"
    } 
}