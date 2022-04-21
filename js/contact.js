const firebaseConfig = {
    apiKey: "AIzaSyAQwtRU7RfW55deKDTyeHE_w4OM5zSsFMA",
  authDomain: "form1-79724.firebaseapp.com",
  databaseURL: "https://form1-79724-default-rtdb.firebaseio.com",
  projectId: "form1-79724",
  storageBucket: "form1-79724.appspot.com",
  messagingSenderId: "713588849886",
  appId: "1:713588849886:web:075814ad5e817ddb4b164f"

  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };