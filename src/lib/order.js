// JSON body for a future POST /orders endpoint. Uploaded files use the matching
// attachments[] indexes in multipart/form-data when an API is connected.
export function buildOrderPayload(form, selectedPacks, files, customStickers) {
	return {
		customer: {
			name: form.name.trim(),
			email: form.email.trim(),
			phone: form.phone.trim()
		},
		delivery: {
			governorate: form.gov,
			city: form.city.trim(),
			address: form.address.trim()
		},
		items: selectedPacks.map((pack) => ({ packId: pack.id, quantity: Number(form.qty) })),
		customStickers,
		attachments: files.map((item) => ({ name: item.name, type: item.type, size: item.size })),
		notes: form.notes.trim()
	};
}

export function toOrderFormData(payload, files) {
	const body = new FormData();
	body.append('order', JSON.stringify(payload));
	files.forEach((item) => body.append('attachments', item.file, item.name));
	return body;
}
