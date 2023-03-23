// Alex Pinch
// Last modified March 23rd 2023

// This script accesses and displays a live-feed from the user's webcam

let capture;

function setup() {
  createCanvas(960, 720);
  capture = createCapture(VIDEO);
  capture.size(960, 720);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 960, 720);
}
