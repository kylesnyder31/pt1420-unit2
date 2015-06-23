// alert("Hello world");
function processForm(){
	var name;
	var message;
	var content
	name = document.getElementById("name");
    message = document.getElementById("message");
	content = document.getElementById("output")
	
	//alert("Hello " + name.value + " your message is: " + message.value);
	
	content.innerText = "Hello " + name.value + "your message is: " + message.value;
}