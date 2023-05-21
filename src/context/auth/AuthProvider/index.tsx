import { ReactNode, useEffect, useState } from 'react';
import AuthContext from '..';
import { getDataSStorage } from '@/util/storage';


const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(()=> {
		if(getDataSStorage('ak')) setIsLoggedIn(true);
	},[])

	return (
		<AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;