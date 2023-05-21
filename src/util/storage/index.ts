const setDataSStorage = (key:string, value: string) => {
	if(window) {
		window.sessionStorage[key] = JSON.stringify(value);
	}
	return;
};

const getDataSStorage = (key:string,) => {
	if(window) {
		if(!window.sessionStorage[key]) return null;
		return JSON.parse(window.sessionStorage[key]);
	}
	return null;
};

export { setDataSStorage, getDataSStorage};