let serial;

let slider1;
let slider2;
let slider3;
let slider4;

function setup() {
 noCanvas();
 serialSetup();
 slider1 = createSlider(0, 1023).size(600);
 slider2 = createSlider(0, 1023).size(600);
 slider3 = createSlider(0, 1023).size(600);
 slider4 = createSlider(0, 1023).size(600);
}

function draw() {
 // nada
}

function gotData() {
  
 let entrada = serial.readLine();
 trim(entrada);
 let tamanho = entrada.length;
 if (!entrada) return;
 if (entrada.substring(0,1) !== "<"  || 
     entrada.substring(tamanho-1) !== ">") return; 
 
 slider1.value(int(entrada.substring(1,5)));
 slider2.value(int(entrada.substring(5,9)));
 slider3.value(int(entrada.substring(9,13)));
 slider4.value(int(entrada.substring(13,17)));
 
}


function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}


function serialSetup() {
 serial = new p5.SerialPort();
 serial.list();
 serial.open('COM5');
 serial.on('connected', serverConnected);
 serial.on('list', gotList);
 serial.on('data', gotData);
 serial.on('error', gotError);
 serial.on('open', gotOpen);
 serial.on('close', gotClose);
}