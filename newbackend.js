// JavaScript Document
//let button = document.getElementById('btn');
//let data = [document.getElementById('name').value, document.getElementById('email').value];
let submitbutton = document.getElementById('btn');
//let form = document.getElementById('form');




/*resetButton.addEventListener('click', function(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name.value = '';
    email.value = '';
    message.value = '';
})


    
}) */

function readstrings(){
	let username = document.getElementById('username');
	let password = document.getElementById('password');
	username = username.value;
	localStorage.setItem('username', username);
	
	password = password.value;
	localStorage.setItem('password', password);
	
	document.write(localStorage.get('username'));
	document.write(localStorage.get('password'));
}
submitbutton.addEventListener('click', readstrings());
