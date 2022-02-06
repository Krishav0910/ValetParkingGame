canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_height = 75;
car_width = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 5;
car_y = 225;

function add() {
	var background_imgTag = new Image;
	background_imgTag.onload = uploadBackground();
	background_imgTag = background_image;

	var car_imgTag = new Image;
	car_imgTag.onload = uploadgreencar;
	car_imgTag = greencar_image;

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

}

function uploadgreencar() {
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y = 0)
	{
		car_y = car_y - 10
		console.log("when up key is pressed x - " + car_x + "and y = " + car_y);
		uploadgreencar();
		uploadBackground();

	}

function down()
{
	if(car_y = 225)
	{
		car_y = car_y + 10
		console.log("when down key is pressed x - " + car_x + "and y = " + car_y);
		uploadgreencar();
		uploadBackground();

	}
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
