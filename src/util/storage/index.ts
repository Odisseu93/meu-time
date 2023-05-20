const setDataSStorage = (key:string, value: string) => {
	if(window) {
		window.sessionStorage[key] = value;
	}
	return;
};

const getDataSStorage = (key:string,) => {
	if(window) {
		if(!window.sessionStorage[key]) return null;
		return window.sessionStorage[key];
	}
	return null;
};

export { setDataSStorage, getDataSStorage};