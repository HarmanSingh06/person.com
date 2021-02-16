var firebaseConfig = {
    apiKey: "AIzaSyCAKhP2BHogChGpulIAZvAD_3H8kv-8m-c",
    authDomain: "person-4e475.firebaseapp.com",
    projectId: "person-4e475",
    storageBucket: "person-4e475.appspot.com",
    messagingSenderId: "1050431904998",
    appId: "1:1050431904998:web:13de2c0746c089fea6af27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

function getInputVal(id){
    return document.getElementById(id).value;
}
var gradeLetter = 0,gradeEat = 0;


document.getElementById("form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getInputVal("name");
    var mail = getInputVal("email");
    var interests = getInputVal("interests");
    var eat = getInputVal('eat');
    var age = getInputVal("age");
    
    gradeName(name);
    gradeEat
    update(name,mail,interests,eat);

    //navigating to result page
    //window.location.href = "result.html"
    
}

//This is updating the firestore
function update(name,mail,interests,eat){
    db.collection("users").add({
        interests:interests,
        eat:eat,
        mail:mail,
        name:name
    })
}
function gradeEat(eat){

} 

function gradeName(name){
    var nameLwrCase = name.toLowerCase()
    var nameSplit = nameLwrCase.split('');
    gradeLetter = names[nameSplit[0]].grade
}


//displaying result
function getResult(){
    //document.write("<li>"Name"+gradeLetter</li>")
    console.log(gradeLetter)
    document.getElementById("name").innerHTML = "Name: " + gradeLetter
}




// Starting the linking part
function other(){
    window.location.href = "./other.html";
}
function student(){
    alert("You are very depressed person you get 100% for being a student");
}

