function my_spaceship(raketa){
    var x = 0;
    var y = 0;
    var dir = "up";

for (var i=0; i < raketa.length; i++){
    if (raketa[i] == "A")
    {
        if (dir == "up")
        {
            y--;
        }
        else if(dir == "right")
        {
            x++;
        }
        else if(dir == "down")
        {
            y++;
        }
        else if(dir == "left")
        {
            x--;
        }
    }
    else if (raketa[i] == "R")
    {
        if(dir == "up")
        {
            dir = "right";
        }
        else if(dir == "right")
        {
            dir = "down";
        }
        else if(dir == "down")
        {
            dir = "left";
        }
        else if(dir == "left")
        {
            dir = "up";
        }
    }
    else if (raketa[i] == "L")
    {
        if(dir == "up")
        { 
            dir = "left";
        }
        else if(dir == "left")
        {
            dir = "down";
        }
        else if(dir == "down")
        {
            dir = "right";
        }
        else if(dir == "right")
        {
            dir = "up";
        }
    }
}
    var resume = "{x: "+x+", y: "+ y + ", direction: '"+dir+"'}"
    return resume;
    
}

// console.log(my_spaceship("RAALAg
// console.log(my_spaceship("AAAA"));
// console.log(my_spaceship("RAARA"));