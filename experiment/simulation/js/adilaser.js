/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
$(document).ready(()=>{
$("#adilasr").hide();
});
let adi1=0,adi2=0;
function adilsr(adi1,adi2){
    
    if(adi1=='0' && adi2=='0'){
        $("#adilasr").hide();
    }
    else if(adi1=='1' && adi2=='1'){
        $("#adilasr").html("<div class=\" h3 text-primary text-center\"> <span> Result: Plate Heating </span> <br><br> <video id=\"adivid\" autoplay>  <source src=\"./images/ArcCase-3.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adilasr").show();

    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adilasr").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(adi1,adi2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adilasr").show();
    });
    }
    else if(adi1=='1' && adi2=='2'){
        $("#adilasr").html("<div class=\" h3 text-primary text-center\"> <span> Result: Plate Heating </span> <br><br> <video id=\"adivid\" autoplay>  <source src=\"./images/ArcCase-2.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adilasr").show();

    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adilasr").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(adi1,adi2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adilasr").show();
    });
    }
    else if(adi1=='1' && adi2=='3'){
        $("#adilasr").html("<div class=\" h3 text-primary text-center\"> <span> Result: Plate Heating </span> <br><br> <video id=\"adivid\" autoplay>  <source src=\"./images/ArcCase-1.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adilasr").show();

    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adilasr").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(adi1,adi2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adilasr").show();
    });
    }
    else if(adi1=='2' && adi2=='1'){
        $("#adilasr").html("<div class=\" h3 text-primary text-center\"> <span> Result: Weld Formed </span> <br><br> <video id=\"adivid\" autoplay>  <source src=\"./images/ArcCase-6.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adilasr").show();

    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adilasr").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(adi1,adi2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adilasr").show();
    });
    }
    else if(adi1=='2' && adi2=='2'){
        $("#adilasr").html("<div class=\" h3 text-primary text-center\"> <span> Result: Weld Formed </span> <br><br> <video id=\"adivid\" autoplay>  <source src=\"./images/ArcCase-5.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adilasr").show();

    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adilasr").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(adi1,adi2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adilasr").show();
    });
    }
    else if(adi1=='2' && adi2=='3'){
        $("#adilasr").html("<div class=\" h3 text-primary text-center\"> <span> Result: Weld Formed </span> <br><br> <video id=\"adivid\" autoplay>  <source src=\"./images/ArcCase-4.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adilasr").show();

    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adilasr").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(adi1,adi2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adilasr").show();
    });
    }
    else if(adi1=='3' && adi2=='1'){
        $("#adilasr").html("<div class=\" h3 text-primary text-center\"> <span> Result: Blow Holes </span> <br><br> <video id=\"adivid\" autoplay>  <source src=\"./images/ArcCase-9.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adilasr").show();

    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adilasr").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(adi1,adi2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adilasr").show();
    });
    }
    else if(adi1=='3' && adi2=='2'){
        $("#adilasr").html("<div class=\" h3 text-primary text-center\"> <span> Result: Blow Holes </span> <br><br> <video id=\"adivid\" autoplay>  <source src=\"./images/ArcCase-8.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adilasr").show();

    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adilasr").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(adi1,adi2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adilasr").show();
    });
    }
    else if(adi1=='3' && adi2=='3'){
        $("#adilasr").html("<div class=\" h3 text-primary text-center\"> <span> Result: Blow Holes </span> <br><br> <video id=\"adivid\" autoplay>  <source src=\"./images/ArcCase-7.mp4\" type=\"video/mp4\"> </video></div>");
        $("#adilasr").show();

    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adilasr").html("<div class=\"border border-3  btn btn-success  rounded-pill\" onclick=\"adindt(adi1,adi2);\"> <span class=\"h6\">&nbsp; Restart &nbsp;</span></div>");
          $("#adilasr").show();
    });
    }
};

async function main() {
    let pyodide = await loadPyodide();
    await pyodide.loadPackage("numpy");
    return pyodide;
    }
  
    let pyodideReadyPromise = main();
    
    async function evaluatePython(x,y) {    
        if(x>=Math.pow(10,-4) && x<=5){
            if(y>=500 && y<=2000){
                let pyodide = await pyodideReadyPromise;
    let test = pyodide.runPython(`
              import numpy as np
              from pyodide.ffi import to_js
              def test(x):
                  beam_dia=float(x[0])
                  laser_power=float(x[1])
                  t=2
                  eff=0.7
                  r=beam_dia*0.5
                  Q0=(3*eff*laser_power*np.exp(3))/(np.pi*(np.exp(3)-1))
                  Q0=Q0/(t*(r**2))
                  x_axis=np.linspace(-r,r,1000)
                  y_axis=np.linspace(-r,r,1000)
                  X,Y=np.meshgrid(x_axis,y_axis)
                  r1=np.sqrt(X**2+Y**2)
                  Qv=Q0*(np.exp((-3*r1)/(r**2)))
                  dat=[X,Y,Qv]
                  return to_js(dat)
              test
      `);
let res = test([x,y]);
var data = [{
  x:res[0],
  y:res[1],
z: res[2],
type: 'surface',
}];
var layout = {
title: 'Power Distribution on Focal plane',
autosize: false,
width: 800,
height: 700,
scene: {
  xaxis: {title: 'x (cm)-->'},
  yaxis: {title: 'y (cm)-->'},
  zaxis:{
title:'Power density (W/cm<sup>2</sup>)'
}
}

};
Plotly.newPlot('adigrph', data, layout);

            }else{alert("Enter proper Power value in range between 500 to 2000 Watts");
            $("#adigraph").html("<div class=\"col-sm-12 text-center text-danger\">Enter proper Beam Diameter in range between 500 to 2000 Watts</div>");        
        }
        }else{alert("Enter proper Beam Diameter in range between 100 microns to 5 cms");
        $("#adigraph").html("<div class=\"col-sm-12 text-center text-danger\">Enter proper Beam Diameter in range between 100 microns to 5 cms</div>");  }
    
}