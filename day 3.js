<!DOCTYPE html>   
<html>   
  
<head>   
</head>   
  
<body>  
  <div id = "div1"> This is the first div element.   
      <h3 id = "h"> This is a heading inside the div. </h3>  
      <div id = "div2"> This is the div inside the div element.   
      <div id = "div3"> This is the div element inside the second div element. </div>  
      </div>  
  </div>  
  
    <script>   
          
var val1 = document.getElementById("div3");  
  
var o1 = val1.closest("#div1");    
  
var o2 = val1.closest("div div");    
  
var o3 = val1.closest("div > div");    
  
var o4 = val1.closest(":not(#div3)");  
console.log(o1);  
console.log(o2);  
console.log(o3);  
console.log(o4);  
  
  
    </script>   
</body>   
  
</html>  