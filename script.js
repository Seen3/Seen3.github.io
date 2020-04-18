var colorchanger=document.getElementById('body');
var bgcol=document.getElementsByTagName('html')[0];

var x=setInterval(change,30000)

var cols=['aqua','lime','snow','magenta']
var count=0;
function change(){
    count+=1;
    colorchanger.style.color=cols[count];
    bgcol.style.backgroundColor=cols[count];
    if(count==3){
        count=-1;
    }
}