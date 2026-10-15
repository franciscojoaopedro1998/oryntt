import { useLocation } from "@tanstack/react-router";

/**
 * Section anchor on the home page. From any other page it goes back to home
 * first, so the header and footer links keep working everywhere.
 */
export function useHomeHref() {
	const { pathname } = useLocation();
	const onHome = /^\/(en\/?)?$/.test(pathname);
	return (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);
}
