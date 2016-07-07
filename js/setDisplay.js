function setHeight() {
  var viewportHeight;
  var viewportWidth;
  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  if (typeof window.innerHeight != 'undefined'){   
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth; 
  }else if (typeof document.documentElement != 'undefined'){ 
    viewportHeight = document.documentElement.clientHeight;
    viewportWidth = document.documentElement.clientWidth;
  }else{
    viewportHeight = document.getElementsByTagName('body')[0].clientHeight;
    viewportWidth = document.getElementsByTagName('body')[0].clientWidth; 
  }
   /*document.getElementById('container').style.minHeight=viewportheight + "px";*/
  if (viewportHeight <= "350"){  
    document.getElementById('footer').style.bottom="-200px" 
  }else{ 
    document.getElementById('footer').style.bottom="0px"; 
  }             
}

