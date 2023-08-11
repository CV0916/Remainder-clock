function Clock() {

    var hours=document.getElementById('hrs');
    var minutes=document.getElementById('mins');
    var seconds=document.getElementById('secs');
    var Am=document.getElementById('am');


    var time=new Date();

    var a=time.getHours();
    hours.innerHTML=a;

    var b=time.getMinutes();
    minutes.innerHTML=b;

    var c = time.getSeconds();
    seconds.innerHTML=c;

    Am.innerHTML = a >= 12 ? "PM" : "AM";


}
setInterval(Clock,1000);

function settime(){
       var i=document.getElementById('wakeuptime1').value;
       var value=new Date().getHours();
       if (i==value){
        document.getElementById('msg-image').style.backgroundImage="url(./images/Component\ 30\ –\ 1.svg)";
        document.getElementById('message').innerHTML="Grab some healthy breakfast";
       }

       var j=document.getElementById('wakeuptime2').value;
       var value=new Date().getHours();
       if (j==value){
        document.getElementById('msg-image').style.backgroundImage="url(./images/Component 30-1.svg)";
        document.getElementById('message').innerHTML="Lets have some lunch";
       }

       var k=document.getElementById('wakeuptime3').value;
       var value=new Date().getHours();
       if (k==value){
        document.getElementById('msg-image').style.backgroundImage="url(./images/lunch_image.png)";
        document.getElementById('message').innerHTML="Stop Yawning,Get some tea..Its just evening";
       }

       var x=document.getElementById('wakeuptime4').value;
       var value=new Date().getHours();
       if (x==value){
        document.getElementById('msg-image').style.backgroundImage="url(./images/goodnight_image.svg)";
        document.getElementById('message').innerHTML="Close your eyes and go to sleep";
       }

        displaytime();
}

function displaytime(){
    let arr=[];

    var newdiv=document.createElement('div');
    newdiv.id="container-block";
    document.getElementById("appendblock").appendChild(newdiv);


    var invalue1=document.getElementById("wakeuptime1");
    var result1=invalue1.options[invalue1.selectedIndex].text;
    if (result1 != 'Default'){
        arr.push("Wakeup time:" + " " + result1);
        
     }
     else{
        console.log(result1);
     }

    var invalue2=document.getElementById("wakeuptime2");
    var result2=invalue2.options[invalue2.selectedIndex].text;
    if (result2 != 'Default'){
        arr.push("Lunch time:" + " " + result2);
     }
     else{
        console.log(result2);
     }


    var invalue3=document.getElementById("wakeuptime3");
    var result3=invalue3.options[invalue3.selectedIndex].text;
    if (result3 != 'Default'){
        arr.push("Tea time:" + " " + result3);
     }
     else{
        console.log(result3);
     }



    var invalue4=document.getElementById("wakeuptime4");
    var result4=invalue4.options[invalue4.selectedIndex].text;
    if (result4 != 'Default'){
        arr.push("Nap time:" + " " + result4); 
     }
     else{
        console.log(result4);
     }


    arr.forEach((item)=>{
        let li = document.createElement('li');
        li.innerText=item;
        document.getElementById("container-block").appendChild(li);
    })


}



