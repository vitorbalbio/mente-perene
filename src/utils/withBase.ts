/**
 * Prefixes an internal absolute path with Astro's configured `base`.
 *
 * With `base: '/mente-perene'`, `import.meta.env.BASE_URL` is `'/mente-perene/'`.
 * When deployed at the root (no base), it is `'/'`, so this becomes a no-op.
 *
 * @param path - An absolute path starting with `/` (e.g. `/blog`, `/images/x.jpg`)
 * @returns The path prefixed with the base (e.g. `/mente-perene/blog`)
 */
export function withBase(path: string = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
