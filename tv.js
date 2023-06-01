img = "";
status = "";
function back(){
    window.location = "index.html"
}
function preload(){
img = loadImage('tv.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status = detecting object"
}
function draw(){
    fill("red");
    text("T.V",185,160,'red');
    noFill();
    stroke("Red");
    rect(180,150,180,200);
    text("L A M P",373,170)
    rect(370,150,130,270);

}
function modelLoaded(){
    console.log("congrats your model is loaded!!")
    status = true
    objectDetector.detect(img , gotResult)
}
function gotResult(error,results){
    if(error){
        console.log("yo there is an error!!");
    }
    console.log(results)
}