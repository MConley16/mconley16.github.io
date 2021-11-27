let myImage = document.querySelector('#second-image');

//This function switches the source of myImage when it's clicked on between 2 files/pics
myImage.onclick = function() {
    //getAttribute can select any property of an element to be changed in the following if-else block
    let mySrc = myImage.getAttribute('src');
    //If the image is already "cool hip pic", change it to "find us coffee"
    if(mySrc === 'images/cool-hip-pic.jpg') {
      myImage.setAttribute('src','images/find-us-coffee.jpg');
    }
    //If the image is "find us coffee", switch back to "cool hip pic"
    else {
      myImage.setAttribute('src','images/cool-hip-pic.jpg');
    }
}


/* Username block --------------- */

let userButton = document.querySelector('#user-button');
let simpleHeading = document.querySelector('h1');

//This function sets the username based on user input
function setUserName() {
    //The prompt function shows the argument text and takes user text input in a dialog box, which it saves to
    //userName after the user clicks OK
    let userName = prompt('Please enter your username');
    //If the user does not enter anything, do a recursive call to try again
    if(!userName) {
      setUserName();
    } 
    else {
    //Saves userName to localStorage (from the Web Storage API), which allows you to store data in the browser and retrieve it later
    //setItem() creates and stores a data item called 'name' with the value from userName
    localStorage.setItem('name', userName);
    simpleHeading.textContent = 'Welcome to The Simple Coffee House, ' + userName + "!";
    }
  }

//Initialization code for username (structures the app when it first loads)
  if(!localStorage.getItem('name')) {
    //Call the function made above if 'name' is empty
    setUserName();
    //If 'name' contains a value, retrieve it and add it to the heading
  } else {
    let storedName = localStorage.getItem('name');
    simpleHeading.textContent = 'Welcome to The Simple Coffee House, ' + storedName + "!";
  }
  
  //Change User button event handler
  userButton.onclick = function() {
    setUserName();
  }

/* End username block -------------------------- */
