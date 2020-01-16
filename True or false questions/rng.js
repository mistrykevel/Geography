function generate(){
    b = document.getElementById("number").innerHTML = Math.floor(Math.random() * 16) + 1
    if(b == 1){
    a = document.getElementById("questions").innerHTML = "Open space takes up 10% of total land." + "<br/>" + "True or False"/*false*/
    }
    else if(b == 2){
    a = document.getElementById("questions").innerHTML = "A land use cooperation is when 2 or more types of land use can prosper together" + "<br/>" + "True or False"/*true*/
    }
    else if(b == 3){
    a = document.getElementById("questions").innerHTML = "Air is a flow resource." + "<br/>" + "True or False"/*true*/
    }
    else if(b == 4){
    a = document.getElementById("questions").innerHTML = "The greenbelt does not help with protecting the environment" + "<br/>" + "True or False"/*false*/
    }
    else if(b == 5){
    a = document.getElementById("questions").innerHTML = "Wood is a non-renewable resource." + "<br/>" + "True or False"/*false*/
    }
    else if(b == 6){
    a = document.getElementById("questions").innerHTML = "Fish are a renewable resource." + "<br/>" + "True or False"/*true*/
    }
    else if(b == 7){
    a = document.getElementById("questions").innerHTML = "Street trees are a type of land use" + "<br/>" + "True or False"/*true*/
    }
    else if(b == 8){
    a = document.getElementById("questions").innerHTML = "Alberta has the most immigrants" + "<br/>" + "True or False"/*false*/
    }
    else if(b == 9){
    a = document.getElementById("questions").innerHTML = "Erosion is the breaking of rocks" + "<br/>" + "True or False"/*false*/
    }
    else if(b == 10){
    a = document.getElementById("questions").innerHTML = "Climate change is the rapid heating/cooling of the Earth's temperature" + "<br/>" + "True or False"/*true*/
    } 
    else if(b == 11){
    a = document.getElementById("questions").innerHTML = "Permafrost is one of Canada's vegetation regions" + "<br/>" + "True or False"/*false*/
    }
    else if(b == 12){
    a = document.getElementById("questions").innerHTML = "A pine tree is a coniferous tree" + "<br/>" + "True or False"/*true*/
    }
    else if(b == 13){
    a = document.getElementById("questions").innerHTML = "Adaptation is when you try to prevent climate change" + "<br/>" + "True or False"/*false*/
    }
    else if(b == 14){
    a = document.getElementById("questions").innerHTML = "A boom is when a mining town turns into a ghost town beause the mine runs dry" + "<br/>" + "True or False"/**/
    }
    else if(b == 15){
    a = document.getElementById("questions").innerHTML = "Mitigation is when you try and prevent climate change" + "<br/>" + "True or False"/*true*/
    }
    else if(b == 16){
    a = document.getElementById("questions").innerHTML = "A bust is when a mining town's mine runs out of materials and the town turns into a ghost town" + "<br/>" + "True or False"/*true*/
    }
}