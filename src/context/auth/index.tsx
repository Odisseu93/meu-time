import React from 'react';
import { AuthContextProps } from './types';

const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;