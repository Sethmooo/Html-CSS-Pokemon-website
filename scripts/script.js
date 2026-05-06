/*
	Seth Moore
	script.js 
	Date: 4/29/2026
*/


document.addEventListener('DOMContentLoaded', function() {
		
		var menuButton = document.getElementById('hamburger');
		var navBar = document.getElementById('nav-links');
		
		function toggleMenu() {
			navBar.classList.toggle('active');
			
			menuButton.classList.toggle('active');
			
		}
		
		menuButton.onclick = toggleMenu;
});