let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll') ()  {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop >40){
		navbarDiv.classlist.remove('navbar-cng');
	}
}