function switchMode() {
    let moon = document.getElementById ("moon");
      if(moon.className=="moon"){
        moon.className="sun";
        container.right_Side.style.backgroundColor = "#141D26";
        container.right_Side.style.color = "#fff";
      }
    else {
      moon.className ="moon";
      container.right_Side.style.backgroundColor = "#fff";
      container.right_Side.style.color = "#000";
    }
  }
  