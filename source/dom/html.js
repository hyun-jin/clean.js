// element의 html 문자열을 가져옵니다!!
clean.dom.html = function(el) {
	//REQUIRED: el

	var
	// 우선 wrapper를 만들어주고,
	wrapper = document.createElement('div');

	// element를 고대로 복사해서 붙혀넣은뒤,
	wrapper.appendChild(el.cloneNode(true));

	// wrapper의 innerHTML을 반환해주면 됩니다.
	return wrapper.innerHTML;
};
