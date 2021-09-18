function submitForm(){
    testID = document.getElementById('testID').value;
    userID = document.getElementById('userid').value;
var starCountRef = firebase.database().ref('tests/' + testID + '/users/' + userID);
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
   if(data != null){
       localStorage.setItem('testid' , testID);
       localStorage.setItem('userid' , userID);
     window.open('index.html' , '_self');
   }else{
       window.alert('Incorrect UserID or Test ID.');
   }
 });
}
