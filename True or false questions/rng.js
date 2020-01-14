function generate(){
    b = document.getElementById("number").innerHTML = Math.floor(Math.random() * 10) + 1
    if(b == 1){
    a = document.getElementById("questions").innerHTML = "Open space takes up 10% of total land." + "<br/>" + "True or False"
    }
    else if(b == 2){
    a = document.getElementById("questions").innerHTML = "This is a land use co-operation." + "<br/>" + "True or False"
    }
    else if(b == 3){
    a = document.getElementById("questions").innerHTML = "Air is a flow resource." + "<br/>" + "True or False"
    }
    else if(b == 4){
    a = document.getElementById("questions").innerHTML = "The greenbelt does not help with protecting the environment" + "<br/>" + "True or False"
    }
    else if(b == 5){
    a = document.getElementById("questions").innerHTML = "Wood is a non-renewable resource." + "<br/>" + "True or False"
    }
    else if(b == 6){
    a = document.getElementById("questions").innerHTML = "Fish are a renewable resource." + "<br/>" + "True or False"
    }
    else if(b == 7){
    a = document.getElementById("questions").innerHTML = "Street trees are a type of land use" + "<br/>" + "True or False"
    }
    else if(b == 8){
    a = document.getElementById("questions").innerHTML = "h" + "<br/>" + "True or False"
    }
    else if(b == 9){
    a = document.getElementById("questions").innerHTML = "i" + "<br/>" + "True or False"
    }
    else if(b == 10){
    a = document.getElementById("questions").innerHTML = "j" + "<br/>" + "True or False"
    } 
}