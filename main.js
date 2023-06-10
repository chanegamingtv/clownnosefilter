noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage('clownnose.png');



}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    camera=createCapture(VIDEO)
    camera.size(300,300)
    camera.hide()
    addmodel=ml5.poseNet(camera,modelLoaded)
    addmodel.on("pose",gotPoses)

}
function draw(){
    image(camera, 0,0,300,300)
    fill(255,0,0);
    stroke(255,0,0)
    circle(noseX,noseY,20)
    image(clown_nose,noseX,noseY,30,30)
}
function modelLoaded(){
    console.log("Model Has Loaded successfully >:)")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseX=results[0].pose.nose.y;
    }



}