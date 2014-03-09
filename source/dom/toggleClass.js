// element에 class 속성이 있으면 제거하고, 없으면 추가한다!!
clean.dom.addClass = function(el, className) {
	//REQUIRED: el
	//REQUIRED: className

	// element에 class 속성이 있냐?
	if (clean.dom.hasClass(el, className) === true) {

		// 그럼 제거ㅋ
		clean.dom.removeClass(el, className);
	}

	// 없냐?
	else {

		// 그럼 추가ㅋ
		clean.dom.addClass(el, className);
	}
};
