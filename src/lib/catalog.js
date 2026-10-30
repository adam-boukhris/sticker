export function validateCatalog(value) {
	if (
		value?.version !== 1 ||
		!value.brand?.name ||
		!value.contact?.whatsapp ||
		!value.contact?.email ||
		!Array.isArray(value.navigation) ||
		!Array.isArray(value.packs) ||
		!Array.isArray(value.governorates) ||
		!Array.isArray(value.features) ||
		!Array.isArray(value.screenStickers) ||
		value.packs.some((pack) => !pack.id || !pack.name || !pack.image?.url || !pack.image?.alt)
	) {
		throw new Error('Catalog API returned an invalid version 1 catalog');
	}
	return value;
}
