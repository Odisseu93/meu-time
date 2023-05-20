import { ReactNode, useState } from 'react';
import AuthContext from '..';


const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;