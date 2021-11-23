leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
song="";
function preload(){
song=loadSound("music.mp3");
}

function draw(){
image(video,0,0,600,500);
fill("#FFC0CB");
stroke("#FFC0CB");
circle(leftwristx,leftwristy,20);
leftwristy_number=floor(Number(leftwristyg));
volume=leftwristy_number/500;
document.getElementById("volume").innerHTML="volume: "+volume;
song.setVolume(volume);
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1.5);
    
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y
    }
}


function modelloaded(){
    console.log("poseNet is initialized");
}