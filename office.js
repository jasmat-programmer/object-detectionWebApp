function back(){
    window.location = "index.html"
}
img=""
status=""
function preload(){
    img = loadImage('office.jpg')
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
   
}
function draw(){
    fill("green");
    text("C H A I R",250,250)
    noFill();
    rect(250,230,230,150)
    stroke("green")
}

function modelLoaded(){
    console.log("congrats your model is loaded !!")
    status = true;
    objectDetector.detect(img , gotResult);
}
function gotResult(error , results){
    if (error){
        console.log("yo there is an error!")
    }
    console.log(results);
}