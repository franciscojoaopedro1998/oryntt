// Server entry: intercept every request with the Paraglide locale middleware.
//
// TanStack Router handles URL localization itself (see `rewrite` in
// `src/router.tsx`), so we pass the ORIGINAL request — the middleware is still
// responsible for locale detection, redirects and the SSR AsyncLocalStorage
// context that powers `getLocale()` while rendering.
//
// Ref.: https://paraglidejs.com/tanstack-start

import handler from "@tanstack/react-start/server-entry";
import { paraglideMiddleware } from "#/paraglide/server";

export default {
	fetch(request: Request): Promise<Response> {
		return paraglideMiddleware(request, () => handler.fetch(request));
	},
};
