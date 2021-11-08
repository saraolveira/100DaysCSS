const center = document.querySelector('.center');
center.addEventListener('click', function() {
	this.classList.toggle('active');
	this.classList.remove('stop');
})