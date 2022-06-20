const greetings = () =>{
	const value = document.getElementById('text').value;
	let para = document.getElementById("demo");
	para.textContent=`Hello ${value}, welcome to the bootcamp`;
}