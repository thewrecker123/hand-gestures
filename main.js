Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_a_picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version = ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Bwvh7dSDF/model.json",modelLoded);


function modelLoded (){
    console.log('Model loded!')
}

function identify_image() {
    img=document.getElementById('captured_image');
    classifier.classify (img, gotResult);
}

function gotResult(error, result) {
    if (error) {

    console.error(error);
    } else {
        console.log(result);
        document.getElementById("show_label").innerHTML = result[0].label;
 geusture=result[0].label;
 toSpeak="";
 if(geusture=="thumbsup")

 {
    toSpeak="this is a thumbsup";
   document.getElementById("result_object_geusture_icon").innerHTML="&#128078"
 }

 else if(geusture=="amazing")

 {
    toSpeak="this is amazing";
   document.getElementById("result_object_geusture_icon").innerHTML=""
 }

 else if(geusture=="victory/peace")

 {
    toSpeak="this is a victory/peace";
   document.getElementById("result_object_geusture_icon").innerHTML="&#9996"
 }
 speak();
    }
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data=toSpeak;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}