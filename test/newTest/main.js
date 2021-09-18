testID = Math.floor(Math.random()*999);
questions = [];
op1 = [];
op2 = [];
op3 = [];
op4 = [];
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
function saveSettings() {
  document.getElementById('q').value;
  firebase.database().ref('tests/' + testID).set({
    name:document.getElementById('testname').value,
    password:document.getElementById('password').value
    });
    document.getElementsByClassName('tablinks')[1].disabled = false;
    document.getElementsByClassName('tablinks')[2].disabled = false;
  }
function save() {
  for (let i = 0; i < questions.length; i++) {
    firebase.database().ref('tests/' + testID + "/question/" +i).set({
         q:questions[i],
         op1:op1[i],
         op2:op2[i],
         op3:op3[i],
         op4:op4[i],
    });
  }  
}
  function next(){
    questions.push(document.getElementById('q').value);
    op1.push(document.getElementById('op1').value);
    op2.push(document.getElementById('op2').value);
    op3.push(document.getElementById('op3').value);
    op4.push(document.getElementById('op4').value);
  }
var usrname = [];
usrid = [];
  function nextUser(){
    usrname.push(document.getElementById('username').value);
    usrid.push(document.getElementById('userid').value);
  }
  function saveUsers(){    
  for (let i = 0; i < usrname.length; i++) {
    firebase.database().ref('tests/' + testID + "/users/" +usrid[i]).set({
         name:usrname[i]
    });
    console.log()
  }
}
