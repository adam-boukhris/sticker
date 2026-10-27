import { env } from '$env/dynamic/public';
import { validateCatalog } from '$lib/catalog.js';

export async function load({ fetch }) {
	const endpoint = env.PUBLIC_CATALOG_API_URL || '/api/catalog';
	const response = await fetch(endpoint);
	if (!response.ok) throw new Error(`Catalog request failed: ${response.status}`);
	return { catalog: validateCatalog(await response.json()) };
}
