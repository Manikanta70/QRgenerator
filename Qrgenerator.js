function GenerateQR()
{
    let gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    let image=document.getElementById("qrimage");
    let text=document.getElementById("usertext").value;
    let imgsize=document.getElementById("size").value;  
    console.log(image);
    if(text!=""&& imgsize=="150")
    {
        image.src=gapi+"150x150"+"&chl="+text;
    }
    else if(text!=""&& imgsize=="200")
    {
        image.src=gapi+"200x200"+"&chl="+text;
    }
    else if(text!=""&& imgsize=="250")
    {
        image.src=gapi+"250x250"+"&chl="+text;
    }
    else if(text!=""&& imgsize=="300")
    {
        image.src=gapi+"300x300"+"&chl="+text;
    }
    else if(text!=""&& imgsize=="400")
    {
        image.src=gapi+"400x400"+"&chl="+text;
    }
    else if(imgsize=="none" && text!="")
    {
        alert("Select appropriate size");
    }
    else
    {
        alert("Please enter valid text");
    }
} 