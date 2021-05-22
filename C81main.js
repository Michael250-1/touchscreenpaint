canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
var mouse_event="empty";
var lastx, lasty;
color="blue";
line_width=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value;
    mouse_event="mouseDOWN";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouse_event="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouse_event="mouseLEAVE";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
   
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

if (mouse_event=="mouseDOWN") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
    console.log("lastx=" + lastx + "lasty=" + lasty);
    ctx.moveTo(lastx,lasty);
    console.log("currentx=" + currentx + "currenty=" + currenty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
}
lastx=currentx;
lasty=currenty;
}
function Cleararea(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
}