var img = ""
var Status = ""
objects = [];
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
}
function preload() {
    img = loadImage("desk.jpg")
    Status = "true"
    objectDetector.detect(img, gotresults)
}
function gotresults(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results)
    objects = results;

}
function back() {
    window.location = "index.html";
}
function modelLoaded() {
    console.log("modelLoaded")
}
function draw() {
    image(img, 0, 0, 500, 500)
    if (Status == "true") {
        for (i = 0; i < objects.length; i++) {
            fill("red");
            console.log("fill")
            text(objects[i].label, objects[i].x + 15, objects[i].y + 15)
            console.log("text")
            document.getElementById("Status").innerHTML = "Status = Object Detected"
            noFill()
            stroke("red")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }

}