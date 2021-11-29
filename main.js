function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5,soundClassifier('https://teachablemachine.withgoogle.com/models/RJI1EGdF4/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,result){
    console.log(gotResults);
}