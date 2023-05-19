function switchMode() {
  let moon = document.getElementById ("moon");
    if(moon.className=="moon"){
      moon.className="sun";
      document.body.backgroundColor = "#000";
      document.body.style.color = "#fff";
    }
  else {
    moon.className ="moon";
    document.body.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}
