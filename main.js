var reasons=[
    "Aarav Chandani","Avika Chandani", "Dheeraj Sindhi", "Namita Easrani"
    ];
    
    var images=[
        "Screenshot 2021-06-06 173929.png", "image3 (1).jpeg", "image1.jpeg",  "image0.jpeg"
    
    ];
    
    var i=0;
    
    function nextslide(){
    if (i==4){
    i=0;
    }
    document.getElementById("image1").src=images[i];
    document.getElementById("reason1").innerHTML=reasons[i];
    i++;
    }