// Alex Pinch
// Last modified March 23rd 2023

// This script accesses and displays a live-feed from the user's webcam

let capture;

function setup() {
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
}