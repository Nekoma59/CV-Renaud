function switchMode() {
  let moon = document.getElementById ("moon");
    if(moon.className=="moon"){
      moon.className="sun";
      document.getElementsByClassName("right_Side")[0].backgroundColor = "#000";
      document.getElementsByClassName("right_Side")[0].style.color = "#fff";
    }
  else {
    moon.className ="moon";
    document.getElementsByClassName("right_Side"[0]).backgroundColor = "#fff";
    document.getElementsByClassName("right_Side")[0].style.color = "#000";
  }
}
