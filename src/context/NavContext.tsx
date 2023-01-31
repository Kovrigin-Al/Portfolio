import React, { FC, useState, createContext } from 'react';

interface Props {
	children: React.ReactNode
}

interface IProviderValue {
	activeNavLinkId: string
	setActiveNavLinkId: (id: string) => void
}

export const NavContext = createContext({} as IProviderValue);

const NavProvider: FC<Props> = ({ children }) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState<string>('');

	const providerValue: IProviderValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};

export default NavProvider;