// element의 value를 가져옵니다!!!!
clean.dom.value = function(el) {

	// checkbox일 경우는 체크 되어 있는지를 가져옵니다!
	if (el.type === 'checkbox') {
		return el.checked;
	}

	// 아니면 그냥 value 반환!
	return el.value;
};
