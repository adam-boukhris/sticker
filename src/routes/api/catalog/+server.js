import { json } from '@sveltejs/kit';
import { catalog } from '$lib/data.js';

export function GET() {
	return json(catalog);
}
