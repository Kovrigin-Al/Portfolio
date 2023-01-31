import { useState, useEffect, MutableRefObject } from 'react';

export function useOnScreen(ref: MutableRefObject<HTMLElement | null>) {
	const [isOnScreen, setOnScreen] = useState<boolean>(false);

	useEffect(() => {

		const observer = new IntersectionObserver(
			([entry]) => setOnScreen(entry.isIntersecting && entry.intersectionRect.height > window.innerHeight/2),
			{
				threshold: [0.25, 0.5, 0.75, 0.9],
			}
			);
		observer.observe(ref.current!);
		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isOnScreen;
};

