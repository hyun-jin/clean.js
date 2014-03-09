// element에 class 속성을 추가한다!!
clean.dom.addClass = function(el, className) {
	//REQUIRED: el
	//REQUIRED: className

	// element의 class name속성에 class name을 추가하기만 하면 된다!!
	el.className += ' ' + className;
};
