// var square=['.square1','.square2','.square3','.square4','.square5','.square6','.square7','.square8','.square9'];
// var sq=document.querySelector(square);
// sq.addEventListener("click",function(){
// sq.src="zero.jpeg";
// });

var a;
var square=['.square1','.square2','.square3','.square4','.square5','.square6','.square7','.square8','.square9'];
a=[0,1,2,3,4,5,6,7,8];
var win=false;
var lose=false;
var c=0;
var count=0;
var result=0;
var m=0;
var n=0;
var o=0;
var arr=[12,36,678,852,48,642,345,147];
var validClick=0;

var sq1=document.querySelector(square[0]);
var sq2=document.querySelector(square[1]);
var sq3=document.querySelector(square[2]);
var sq4=document.querySelector(square[3]);
var sq5=document.querySelector(square[4]);
var sq6=document.querySelector(square[5]);
var sq7=document.querySelector(square[6]);
var sq8=document.querySelector(square[7]);
var sq9=document.querySelector(square[8]);

document.querySelector('#easyBtn').addEventListener("click",function(){
	alert("Easy mode is not available yet");
});

document.querySelector('#reset').addEventListener("click",function(){
	a=[0,1,2,3,4,5,6,7,8];
	win=false;
	lose=false;
	c=0;
	count=0;
	result=0;
	m=0;
	n=0;
	o=0;
	validClick=0;
	sq1.src="def.png";
	sq2.src="def.png";
	sq3.src="def.png";
	sq4.src="def.png";
	sq5.src="def.png";
	sq6.src="def.png";
	sq7.src="def.png";
	sq8.src="def.png";
	sq9.src="def.png";
});

sq1.addEventListener("click",function(){
	if(!(a[0]===-2)){a[0]=-1;
	count++;validClick=1;}
	var result=solve();
	if(result === "Draw")
		document.querySelector("#message").textContent="Draw";
	if(result === "Win")
		document.querySelector("#message").textContent="You Won";
	if(result === "Lost")
		document.querySelector("#message").textContent="You Lose";
});
sq2.addEventListener("click",function(){
	if(!(a[0]===-2)){a[1]=-1;
	count++;validClick=1;}
	var result=solve();
	if(result === "Draw")
		document.querySelector("#message").textContent="Draw";
	if(result === "Win")
		document.querySelector("#message").textContent="You Won";
	if(result === "Lost")
		document.querySelector("#message").textContent="You Lose";
});
sq3.addEventListener("click",function(){
	if(!(a[0]===-2)){a[2]=-1;
	count++;validClick=1;}
	var result=solve();
	if(result === "Draw")
		document.querySelector("#message").textContent="Draw";
	if(result === "Win")
		document.querySelector("#message").textContent="You Won";
	if(result === "Lost")
		document.querySelector("#message").textContent="You Lose";
});
sq4.addEventListener("click",function(){
	if(!(a[0]===-2)){a[3]=-1;
	count++;validClick=1;}
	var result=solve();
	if(result === "Draw")
		document.querySelector("#message").textContent="Draw";
	if(result === "Win")
		document.querySelector("#message").textContent="You Won";
	if(result === "Lost")
		document.querySelector("#message").textContent="You Lose";
});
sq5.addEventListener("click",function(){
	if(!(a[0]===-2)){a[4]=-1;
	count++;validClick=1;}
	var result=solve();
	if(result === "Draw")
		document.querySelector("#message").textContent="Draw";
	if(result === "Win")
		document.querySelector("#message").textContent="You Won";
	if(result === "Lost")
		document.querySelector("#message").textContent="You Lose";
});
sq6.addEventListener("click",function(){
	if(!(a[0]===-2)){a[5]=-1;
	count++;validClick=1;}
	var result=solve();
	if(result === "Draw")
		document.querySelector("#message").textContent="Draw";
	if(result === "Win")
		document.querySelector("#message").textContent="You Won";
	if(result === "Lost")
		document.querySelector("#message").textContent="You Lose";
});
sq7.addEventListener("click",function(){
	if(!(a[0]===-2)){a[6]=-1;
	count++;validClick=1;}
	var result=solve();
	if(result === "Draw")
		document.querySelector("#message").textContent="Draw";
	if(result === "Win")
		document.querySelector("#message").textContent="You Won";
	if(result === "Lost")
		document.querySelector("#message").textContent="You Lose";
});
sq8.addEventListener("click",function(){
	if(!(a[0]===-2)){a[7]=-1;
	count++;validClick=1;}
	var result=solve();
	if(result === "Draw")
		document.querySelector("#message").textContent="Draw";
	if(result === "Win")
		document.querySelector("#message").textContent="You Won";
	if(result === "Lost")
		document.querySelector("#message").textContent="You Lose";
});
sq9.addEventListener("click",function(){
	if(!(a[0]===-2)){a[8]=-1;
	count++;validClick=1;}
	var result=solve();
	if(result === "Draw")
		document.querySelector("#message").textContent="Draw";
	if(result === "Win")
		document.querySelector("#message").textContent="You Won";
	if(result === "Lost")
		document.querySelector("#message").textContent="You Lose";
});

function solve(){
	if(validClick===0)return("");
	validClick=1;
	if(win===true){
    	return("Win");
    }
    if(lose==true){
    	return("Lost");
    }
	for(var i=0;i<9;i++){
		if(a[i]===-1){
			if(i==0)
				sq1.src="cross.jpeg";
			if(i==1)
				sq2.src="cross.jpeg";
			if(i==2)
				sq3.src="cross.jpeg";
			if(i==3)
				sq4.src="cross.jpeg";
			if(i==4)
				sq5.src="cross.jpeg";
			if(i==5)
				sq6.src="cross.jpeg";
			if(i==6)
				sq7.src="cross.jpeg";
			if(i==7)
				sq8.src="cross.jpeg";
			if(i==8)
				sq9.src="cross.jpeg";
		}
	}
	if(count>=5)return("Draw");
	for(var i=0;i<8;i++){
        m=Math.floor(arr[i]/100);
        n=Math.floor(arr[i]/10);
        n=Math.floor(n%10);
        o=Math.floor(arr[i]%10);
        if((a[m]==a[n] && a[n]==-1 && a[o]==-1)){
            win=true;
        }
    }
    if(win===true){
    	return("Win");
    }

    if(count==1){
            if(a[4]!=-1)
                a[4]=-2;
                else
                    for(var i=0;i<n;i+=2)
                        if(a[i]!=-1){a[i]=-2;break;}
            }
            else{
                var flag=0;
                for(var i=0;i<8;i++) {
                    m=Math.floor(arr[i]/100);
        			n=Math.floor(arr[i]/10);
        			n=Math.floor(n%10);
        			o=Math.floor(arr[i]%10);
                    if(a[m]==-2 && a[n]==-2 && a[o]!=-1) {
                        a[o] = -2;
                        flag=1;
                        break;
                    }
                    if(a[m]==-2 && a[o]==-2 && a[n]!=-1) {
                        a[n] = -2;
                        flag=1;
                        break;
                    }
                    if(a[o]==-2 && a[n]==-2 && a[m]!=-1) {
                        a[m] = -2;
                        flag=1;
                        break;
                    }
                }
                if(flag==0) {
                    for (var i = 0; i < 8; i++) {
                        m=Math.floor(arr[i]/100);
        				n=Math.floor(arr[i]/10);
        				n=Math.floor(n%10);
        				o=Math.floor(arr[i]%10);
                        if (a[m] == -1 && a[n] == -1 && a[o] != -2) {
                            a[o] = -2;
                            flag = 1;
                            break;
                        }
                        if (a[m] == -1 && a[o] == -1 && a[n] != -2) {
                            a[n] = -2;
                            flag = 1;
                            break;
                        }
                        if (a[o] == -1 && a[n] == -1 && a[m] != -2) {
                            a[m] = -2;
                            flag = 1;
                            break;
                        }
                    }
                }
                if(flag==0)
                    for(var i=0;i<n;i++)
                        if(a[i]!=-1 && a[i]!=-2){a[i]=-2;flag=1;break;}
            }
            for(var i=0;i<9;i++){
		if(a[i]===-2){
			if(i==0)
				sq1.src="zero.jpeg";
			if(i==1)
				sq2.src="zero.jpeg";
			if(i==2)
				sq3.src="zero.jpeg";
			if(i==3)
				sq4.src="zero.jpeg";
			if(i==4)
				sq5.src="zero.jpeg";
			if(i==5)
				sq6.src="zero.jpeg";
			if(i==6)
				sq7.src="zero.jpeg";
			if(i==7)
				sq8.src="zero.jpeg";
			if(i==8)
				sq9.src="zero.jpeg";
		}
	}
	for(var i=0;i<8;i++){
            m=Math.floor(arr[i]/100);
        	n=Math.floor(arr[i]/10);
        	n=Math.floor(n%10);
        	o=Math.floor(arr[i]%10);
            if((a[m]==a[n] && a[n]==-2 && a[o]==-2)){lose=true;}
            }
            if(lose==true){return("Lost");}
}