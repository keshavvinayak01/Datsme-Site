	var images = Array.from(document.querySelectorAll('.grid-image'));	
	var currIdx = 1;
	var leftImg,currImg,rightImg;
	var currImg = images[currIdx];
	var leftImg = images[currIdx - 1];
	var rightImg = images[currIdx + 1];
	highlights(leftImg,currImg,rightImg);
	let lastIdx;
	let test,method;

	function serve(currIdx){
		var currImg = images[currIdx]
		var leftImg = images[currIdx === 0 ? 3 : currIdx-1];
		var rightImg = images[currIdx === 3 ? 0 : currIdx + 1];
		// console.log(leftImg.dataset,currImg.dataset,rightImg.dataset);
		return highlights(leftImg,currImg,rightImg)
	}
	function clearAllImages(){
		images.forEach(image => {
			image.classList.add('hidden-img');
			image.classList.remove('active-image');
			image.classList.remove('grid-image');
			image.pause();
			// image.style.gridArea = "";
	});
}

	function highlights(leftImg,currImg,rightImg){
		clearAllImages();
		
		leftImg.classList.remove('hidden-img');
		leftImg.classList.add('grid-image');
		leftImg.style.gridArea = "imageLeft";

		currImg.classList.remove('hidden-img');
		currImg.style.gridArea = "imageCurr";
		currImg.classList.add('grid-image','active-image');

		rightImg.classList.remove('hidden-img');
		rightImg.classList.add('grid-image');
		rightImg.style.gridArea = "imageRight";
		// currImg.play();

			
	}

	function transitionImage(e){
		// console.log(e);
		lastIdx = currIdx;
		currIdx = this.dataset.key - 1;
		if(lastIdx === currIdx){
			const method = this.paused ? 'play' : 'pause';
			this[method]();
			if(method == "play"){
			this.classList.add('active-image');
			}
			else{
				this.classList.remove('active-image');
			}
			return
		}
		serve(currIdx);
		const method = this.paused ? 'play' : 'pause';
		if(method=="play"){
		images.forEach(image => {
			image.classList.remove('active-image');
			image.pause();
		});
		this.classList.add('active-image');
  		this[method]();
  		}
  		if(method=="pause"){
  		this.classList.remove('active-image');
  		this[method]();}
	}
	// function autoTransition(){
	// 	currIdx = this.dataset.key - 1;
	// 	test = currIdx == 0? 3:currIdx - 1;
	// 	// console.log(this.dataset.key,currIdx)
	// 	serve(test);
	// 	currImg.play();

	// }
	images.forEach(image => image.addEventListener("click",transitionImage));
	// images.forEach(image => image.addEventListener("ended",autoTransition));
	// console.log(currIdx);
	images.forEach(image => image.addEventListener("mouseover",() => image.classList.toggle('hover-image')));
	images.forEach(image => image.addEventListener("mouseout",() => image.classList.toggle('hover-image')));

	var toMime = document.querySelector('#particles-js');
	var toSet = document.querySelector('.container-grid');
	toSet.style.width = toMime.offsetWidth + 'px';
