/** Base URL for GitHub Pages: "/ux-ui-lead/" in prod, "/" in dev */
export const BASE = import.meta.env.BASE_URL;

/** Resolves public asset path with base prefix. Handles leading slashes and "public/" prefix. */
export const asset = (p) => {
  const clean = String(p).replace(/^\/+/, "").replace(/^public\//, "");
  return `${BASE}${clean}`;
};
