var givenArray =">v<>>>v^~><><~><><",
    right ='>',
    left = '<',
    up ='^',
    down ='v',
    reverse ='~',
    x = -5,
    y =  -5;

for(var i = 0; i<givenArray.length ;i++){
	
	if(givenArray[i] == right){
		x++;
    }else if(givenArray[i] == left){
		x--;

	}else if(givenArray[i] == down){
		y++;

	}else if(givenArray[i] == up){
		y--;

	}else if(givenArray[i] == reverse && givenArray[i] == right){
		x--;
        

	}else if(givenArray[i] == reverse && givenArray[i] == left){
		x++;
		

	}else if(givenArray[i] == reverse && givenArray[i] == down){
		y--;
        
	}else if(givenArray[i] == reverse && givenArray[i] == up){
		y++;
		
	}


}console.log(x);
console.log(y);
