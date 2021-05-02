
var total=function totalOutput(a,b,c,d){
   document.write("Output for shade A is " + a + " litres"+"<br>");
   document.write("Output for shade B is " + b + " litres"+"<br>");
   document.write("Output for shade C is " + c + " litres"+"<br>");
   document.write("Output for shade D is " + d + " litres"+"<br>");
  
}
function tto(a,b,c,d){
    return a+b+c+d;
}
total(510,308,486,572)
document.write("The total otput for all shades is "+ tto(510,308,486,572)+" litres"+"<br>");
document.write(""+"<br>"+"<br>")


var get=document.getElementById("average");

var income=function totalIncome(price,litres,time){
    return time*price*litres
}
document.write("The weekly income is "+income(45,1876,7)+"<br>");
document.write("The income in a year is "+income(45,1876,365)+"<br>");
document.write("The daily income "+(income(45,1876,1))+"<br>");
document.write(""+"<br>"+"<br>")

var months= [31,30,29];{
    document.write("<h1>"+"Monthly"+"</h1>");
    document.write("The total income for January is "+ months[0]*8446+"<br>");
    document.write("The total income for February is "+ months[2]*8446+"<br>");
    document.write("The total income for March is "+ months[0]*8446+"<br>");
    document.write("The total income for April is "+ months[1]*8446+"<br>");
    document.write("The total income for May is "+ months[0]*8446+"<br>");
    document.write("The total income for June is "+ months[1]*8446+"<br>");
    document.write("The total income for July is "+ months[0]*8446+"<br>");
    document.write("The total income for August is "+ months[0]*8446+"<br>");
    document.write("The total income for september is "+ months[1]*8446+"<br>");
    document.write("The total income for september is "+ months[1]*8446+"<br>");
    document.write("The total income for October is "+ months[0]*8446+"<br>");
    document.write("The total income for November is "+ months[1]*8446+"<br>");
    document.write("The total income for December is "+ months[0]*8446+"<br>");
    
}


    
