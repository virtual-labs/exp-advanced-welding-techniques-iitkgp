/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
var ch=0;

var x_0 = 40,y_0 = 40;

$(document).ready(function(){
    adiwe6(0);
    $("img").addClass("img img-fluid");
});

function rng(s,e,st){
    var adi=[];
    for(i=0;i<=st;i++){
        adi[i]=(s+i*(e-s)/st);
    }
    return adi;
};

function adiwe6(a){
    if(a==0)
    {
        $("#grph").hide();    
        ch=0;
    }
    else
    {
        $("#grph").show();
        if(a==1){
            if(Number($("#bd").val())>0 && Number($("#lp").val())>0){
                adiplt(Number($("#bd").val()),Number($("#lp").val()));
            }
            else
            {
                $("#grph").hide();
                $('#inst').show();
                $('#bd').val('');
                $('#lp').val('');
                ch=0;
                alert("Read the instructions and enter the right values");
            }
        }
        else if(a==2){
            $("#grph").hide();
            $('#inst').show();
            $('#bd').val('');
            $('#lp').val('');
            ch=0;
        }
    }

};

function adimul(muf,rn){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=muf*rn[i]/rn[i];
    }
    return res;
};

function adimesh(x,y){

  let xv=[];
  let yv=[];
  for(let i=0;i<x.length;i++){
    xv.push([]);
  }
    for(let j=0;j<y.length;j++){
      yv.push([]);
    }
  
    for(let i=0;i<x.length;i++){
      for(let j=0;j<y.length;j++){
        xv[i][j]=x[j];
        yv[i][j]=y[i];
      }
    }
    return [xv,yv];
  };

function adimatmul(rn,mul){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=Math.pow(rn[i],mul);
    }
    return res;
};

function adismatmul(sca,rn){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=sca*rn[i];
    }
    return res;
};

function adisqrt(sq){
    
    var res=[];
    for(i=0;i<=sq.length;i++){
        res[i]=Math.sqrt(sq[i]);
    }
    return res;
};

function adismatsum(rn,sca){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=sca+rn[i];
    }
    return res;
};

function adimatsum(rn1,rn2){
    var res=[];
    for(i=0;i<=rn1.length;i++){
        res[i]=rn2[i]+rn1[i];
    }
    return res;
};

function adiplt(bd, lp){
  
    var gr = document.getElementById('grph');
    const t=2;
    const eff=0.7;
    var r=bd*0.5;
    var Q0=(3*eff*lp*Math.exp(3))/(Math.PI*(Math.exp(3)-1));
    Q0=Q0/(t*(Math.pow(r,2)));
    xa=rng(-r,r,100);
    ya=rng(-r,r,100);
    XY=adimesh(xa,ya);
    r1=adisqrt(adimatmul(XY[0],2)+adimatmul(XY[1],2));
    Qv=Q0*(Math.exp((-3*r1)/(Math.pow(r,2))));
    console.log(r1);
    var data_z1 = {z: XY[0], type: 'surface'};
    var data_z2 = {z: XY[1], showscale: false, opacity:0.9, type: 'surface'};
    var data_z3 = {z: Qv, showscale: false, opacity:0.9, type: 'surface'};
    
    Plotly.newPlot(gr, [data_z1, data_z2, data_z3], layout);
    
   
    
     
};