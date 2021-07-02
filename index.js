function changeText() {
    var x = document.querySelector("p");
    var text = prompt("Enter any unique name you want to add!")

    if(text.length == 0) x.textContent = "hello  " + Jyoti ;
    else x.textContent = "hello  " + text ;
    
  }