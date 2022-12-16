function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(600,110);

    video = createCapture(VIDEO);
    video.size(550,500);

     poseNet = ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotposes);
}

function draw()
{
    background("gray");
}

function modelLoaded()
{
    console.log("poseNet is initialized");

}

function gotposes(results)
{
if(results.length > 0)
{
    console.log(results);
}
}