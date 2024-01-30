//list of textures that can fill the grid
const textures = [];
function preload(){
    //loop through 4 textures that are saved
for(let textureNumber = 1; textureNumber <= 4; textureNumber++){
    //get path of current texture
    const pathToTexture = 'Textures/texture-trans' + textureNumber +'.png';
    //load image using loadimage p5.js function and add it to textures list
    textures.push(loadImage(pathToTexture));
}
}

function setup() {
  
    //size of each square
    const squareSize = 60;

    //number of cells on the grid
    const cellNumber=10;

    //maximum offset
    const maxOffset =20;

     let change = random(maxOffset);
     let changes = random(maxOffset-20);

    // //canvas size in pixels
    const canvasSize = squareSize*cellNumber;
    createCanvas(canvasSize,canvasSize)
    noStroke(0);
   
    background(200);
    


    
    for(let row = 0; row <cellNumber; row++){
        for(let column= 0; column <cellNumber; column++){
            const red = random(255);
            const green = random(255);
            const blue = random(255);

            const myColor = color(red,green,blue);
            //get a random texture

            const texture = random(textures);
            //use fill to fill all the square with 1 color
            // fill(myColor)
            //tint the square
            tint(myColor)

            //calculate horizontal position of pixels
            const x = row*squareSize+change;
            //calculate vertical position in pixels
            const y = column*squareSize+change;

            //set width and height
            const width = squareSize+changes;
            const height = squareSize+changes;
//image (background, x position, y position, width, height)
// will draw imafe eith given with width and height
            image(texture, x  , y , squareSize, squareSize)
           //X= position of the left of the square
           //Y= position of the top of the square
           //S -  size of the size of the square
        // square(x, y, squareSize)
        }
    }
}
  



