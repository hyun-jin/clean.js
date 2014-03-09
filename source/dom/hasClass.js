// element에 class 속성이 있는지 확인한다!!
clean.dom.addClass = function(el, className) {
	//REQUIRED: el
	//REQUIRED: className

	// element의 class name속성에 class name이 있는지 정규 표현식으로 확인한다!
	return new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
};
