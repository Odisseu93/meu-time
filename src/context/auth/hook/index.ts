import React from 'react';
import AuthContext from '..';

export const useAuth = () => {
	const context = React.useContext(AuthContext);

	return context;
};