resizeAction = () => {
	var width  = window.innerWidth
	var height = window.innerHeight
	var divSvg = document.getElementById('svg')

 if (width > height) {
	//divSvg.style.height = '100%'
	//divSvg.style.width  = height + 'px'
    divSvg.style.height = '80%'
	divSvg.style.width  = height * 0.8 + 'px'
	}
	else {
	//divSvg.style.height = width + 'px'
	//divSvg.style.width  = '100%'
    divSvg.style.height = width * 0.8 + 'px'
	divSvg.style.width  = '80%'
	}

}

window.addEventListener('resize', resizeAction, false)
