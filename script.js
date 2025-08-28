function getFormvalue() {
    //Write your code here
	event.preventDefault();
	const firstName = document.querySelector("input[name='fname']").value.trim();
	const lastName  = document.querySelector("input[name='lname']").value.trim();
	const fullName = firstName + " " + lastName;
	alert(fullName);
	


}
