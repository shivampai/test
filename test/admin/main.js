function submit(){
    testID = document.getElementById('testID').value;
var starCountRef = firebase.database().ref('tests/' + testID +"/password");
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
   if(document.getElementById('password').value == data){
       localStorage.setItem('admin testid' , testID)
     window.open('dashboard.html' , '_self');
   }else{
       window.alert('Incorrect UserID or Password.')
   }
 });
}
function getResult(){
    testID = localStorage.getItem('admin testid');
    userid = document.getElementById('userid').value;
    var starCountRef = firebase.database().ref('tests/' + testID +"/users/" + userid);
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(data)
  document.getElementById('username').innerHTML = data['name'];
  document.getElementById('result').innerHTML = data['answers']['html'];
 });
}