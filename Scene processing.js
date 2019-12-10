<html> 
 <head>
    <title>Simple scene changes</title> 
</head>
 <body>
    <p align="center"> 
	<!--This draws the Canvas on the webpage -->
      <canvas id="mycanvas"></canvas> 
    </p>
 </body>
  <script src="https://cdn.jsdelivr.net/processing.js/1.4.8/processing.min.js"></script> 
 
 <script>
 var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400); 
        frameRate(30);
        
        // ProgramCodeGoesHere
       var currentScene;

var drawScene1 = function() {
    currentScene = 1;
    background(235, 247, 255);
    fill(0, 85, 255);
    textSize(39);
    text("This is scene one", 45, height/2);
  textSize(20);
  text("click to change scene", 100, 250);
};

var drawScene2 = function() {
    currentScene = 2;
    background(16, 204, 119);
    fill(7, 14, 145);
    textSize(39);
    text("This is scene two", 45, height/2);
    //image(getImage("...."), width/2, height/2);
};

var drawScene3 = function() {
    currentScene = 3;
    background(173, 239, 255);
    fill(7, 14, 145);
    textSize(39);
    text("This is scene three", 40, height/2);
    //image(getImage("...."), width/2, height/2);
};

mouseClicked = function() {
    if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene1();
    }
};

drawScene1();

     }
 }

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc); 
 </script>

</html>
