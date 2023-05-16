function switchMode() 
{
    let moon = document.getElementById ("moon");
      if(moon.className=="moon"){
        moon.className="sun";
        document.container .right_Side.style.backgroundColor = "#141D26";
        document.container .right_Side.style.color = "#fff";
      }
    else {
      moon.className ="moon";
      document.container .right_Side.style.backgroundColor = "#fff";
      document.container .right_Side.style.color = "#141D26";
    }
  }
  