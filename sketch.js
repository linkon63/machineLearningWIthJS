let mobilenet;
let video;
let label = "";
// model function fro do something
function modelReady() {
	console.log("your model is ready");

	mobilenet.predict(gotResult);
}

// got result after predict
function gotResult(error, result) {
	if (error) {
		console.error(error);
	} else {
		console.log(result);
		label = result[0].label;
		let con = result[0].confidence;
		mobilenet.predict(gotResult);
	}
}

// image ready 
// function imageReady() {
// 	image(puffin, 0, 0, width, height);
// }

// setup machine learning
function setup() {
	createCanvas(640, 550);
	background(0);

	// machine learning setup code here
	video = createCapture(VIDEO);
	video.hide();

	mobilenet = ml5.imageClassifier("MobileNet", video, modelReady)
}

function draw() {
	// put drawing code here
	background(0);
	image(video, 0, 0, 640, 480);
	fill(255);
		textSize(32);
		text(label, 10, height - 20);
		// createP(label)
		// createP(con)
}
