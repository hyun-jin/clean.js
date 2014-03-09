// element의 class를 지운다!!!
clean.dom.removeClass = function(el, className) {

	// el의 className 속성에서 className을 검색하여 모두 빈 문자열로 바꿔준 뒤, 다시 className 속성에 지정하면 된다!
	el.className = el.className.replace(new RegExp('(^|\\s)' + className + '(\\s|$)', 'g'), '');
};
