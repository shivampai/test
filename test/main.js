var testId = localStorage.getItem("testid");
var userid = localStorage.getItem('userid');
lengthofkey= 0;
test = '001';
qno = 1;
if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("You've tried to open context menu");
      window.event.returnValue = false;
    });
  }  
function endtest() {
    endalert = window.confirm("Are You Sure To End Test?");
    if(endalert==true){
        var save = document.getElementById('table').innerHTML;
        console.log(save);
        firebase.database().ref('tests/' + testId + '/users/' + userid + '/answers').set({
        html : save
        });
      window.open('submitted.html' , '_self');
      console.log(document.getElementById('table').innerHTML)
    }
}
function load(){
  var starCountRef = firebase.database().ref('tests/' + testId +"/question");
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
      lengthofkey = data.length-1;
      console.log(data.length-1);
      
      for (let g = 0; g < lengthofkey+1; g++) {
          i=g+1
          document.getElementById('table').innerHTML += '<tr><td id="questionno"><button class="btn btn-warning" id="open'+i+'">'+i+'</button></td><td id="q'+ i +'selected">Not Visited</td></tr>';
        }      
  }); 
  var starCountRef = firebase.database().ref('tests/' + testId +"/users/" + userid + '/name');
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
         localStorage.setItem('name' , data);
  }); var starCountRef = firebase.database().ref('tests/' + testId +"/name");
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
      document.getElementById('testname').innerHTML = data;
      console.log(data);
      document.title = data;
  });
loadQuestion();
}
function loadQuestion(){
var starCountRef = firebase.database().ref('tests/' + testId +"/question/"+ (qno-1));
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
    document.getElementById('op1text').innerHTML = data['op1'];
    document.getElementById('qlabel').innerHTML = data['q'];
    document.getElementById('op2text').innerHTML = data['op2'];
    document.getElementById('op3text').innerHTML = data['op3'];
    document.getElementById('op4text').innerHTML = data['op4'];
    console.log(data);
});

}
function nextQuestion(){
    if(document.getElementById('op1').checked == true){
    document.getElementById('open' + qno).className = 'btn btn-success';
    document.getElementById('q'+qno + 'selected').innerHTML = 'Option 1';
    }else if(document.getElementById('op2').checked == true){
    document.getElementById('open' + qno).className = 'btn btn-success';
    document.getElementById('q'+qno + 'selected').innerHTML = 'Option 2';
    }else if(document.getElementById('op3').checked == true){
    document.getElementById('open' + qno).className = 'btn btn-success';
    document.getElementById('q'+qno + 'selected').innerHTML = 'Option 3';
    }else if(document.getElementById('op4').checked == true){
    document.getElementById('open' + qno).className = 'btn btn-success';
    document.getElementById('q'+qno + 'selected').innerHTML = 'Option 4';
    }else{
        document.getElementById('open' + qno).className = 'btn btn-primary';
        document.getElementById('q'+qno + 'selected').innerHTML = 'Unattempted';    
    }
    document.getElementById('op1').checked = false;
    document.getElementById('op2').checked = false;
    document.getElementById('op3').checked = false;
    document.getElementById('op4').checked = false;
    if(lengthofkey+1 != qno){
    qno = qno + 1;
    loadQuestion();}else{
        qno = 1;
        loadQuestion();
    }
}