const firebaseConfig = {
    apiKey: "AIzaSyDH6zKbQkqh38tKY1iLXodEym3BCUJISqY",
    authDomain: "contactform-a9759.firebaseapp.com",
    databaseURL: "https://contactform-a9759-default-rtdb.firebaseio.com",
    projectId: "contactform-a9759",
    storageBucket: "contactform-a9759.appspot.com",
    messagingSenderId: "3756442358",
    appId: "1:3756442358:web:b544486f7a68019c1062d7"
};

firebase.initializeApp(firebaseConfig);

var DB = firebase.database().ref("contactForm");
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var msg = getElementVal("msg");

    if(name.length>0&&email.length>0){
        saveMessage(name, email, msg); 
        
        document.querySelector(".alert").style.display = "block";
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);
        document.getElementById("contactForm").reset();
    }
    else{
        document.querySelector(".error").style.display = "block";
        setTimeout(() => {
            document.querySelector(".error").style.display = "none";
        }, 2000);
        document.getElementById("contactForm").reset();
    }
}

const saveMessage = (name, email, msg) => {
    var newForm = DB.push();

    newForm.set({
        Name: name,
        Email: email,
        Msgs: msg,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};