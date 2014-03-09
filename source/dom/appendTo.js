// parent에 child를 추가한다!!
clean.dom.appendTo = function(child, parent) {

	// append와 순서만 바뀔 뿐!!
	clean.dom.append(parent, child);
};
