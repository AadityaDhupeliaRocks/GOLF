
var Canvas = new fabric.Canvas()

ball_x = 10;
ball_y = 10;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	new_image(golf-history.png);
}

function new_image()
{
	fabric.Image.fromURL(get_image, function(Img){
        ball.png = Img;
		ball.png.scaleToWidth(block_image_width);
		ball.png.scaleToWidth(block_image_height);

		ball.png.set({
top: ball_y
left: ball_x


		});
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
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
		if(ball_y>=0) {

			ball_y = ball_y - block_image_height;

			console.log("block image height = " + block_image_height);
			console.log("When up arrow key is pressed, X = " + ball_x + ", Y = ") + ball_y);
			Canvas.remove(ball);

			player_update();
		}
	}

	function down()
	{
		if(ball_y<=500) {

			ball_y = ball_y - block_image_height;

			console.log("block image height = " + block_image_height);
			console.log("When up arrow key is pressed, X = " + ball_x + ", Y = ") + ball_y);
			Canvas.remove(ball);

			player_update();
	}
}

	function left()
	{
		if(ball_x >=5)
		{
			

				ball_y = ball_y - block_image_height;
	
				console.log("block image height = " + block_image_height);
				console.log("When up arrow key is pressed, X = " + ball_x + ", Y = ") + ball_y);
				Canvas.remove(ball);
	
				player_update();
		
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
}
