var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="grey";
width_of_the_line=1;
canvas.addEventListner("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_the_line=document.getElementById("width_of_the_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if( mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width_of_the_line;
        console.log("last position of x and y coordinates= ");
        console.log("x= "+last_position_of_x+"y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_x);
        
        
        console.log("current position of x and y = ");
        console.log("x= "+ current_position_of_mouse_x +"y= "+ current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_x;
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e)
{
     mouseEvent = "mouseUP";
     }
      canvas.addEventListener("mouseleave", my_mouseleave);
       function my_mouseleave(e)
        {
             mouseEvent = "mouseleave";
             }

             function clearArea()
              {
                   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                 }