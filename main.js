function preload(){

}

function setup(){
Canvas=createCanvas(400,400);
Canvas.center();
video=createCapture(VIDEO)
video.hide()
tint_colour="";
}

function draw(){
image(video,0,0,400,400);
tint(tint_colour);
}

function take_snapshot(){
    save('download_img_png');
}
function filtertint(){
    tint_colour=document.getElementById("colour_name").value;
}