# StickeRiri

SvelteKit storefront for sticker packs and custom sticker requests.

## Run locally

```sh
npm install
npm run dev
```

## Catalog API contract

The entire site loads one versioned JSON object from `GET /api/catalog`. The local endpoint returns the sample data in `src/lib/data.js`. To use your own API, set `PUBLIC_CATALOG_API_URL` to a URL that returns the same JSON shape. The request and validation live in `src/routes/+layout.js`; the header, footer, shop, and order form all use its response.

Top-level fields:

```json
{
	"version": 1,
	"brand": { "name": "StickeRiri", "tagline": "..." },
	"contact": { "whatsapp": "21653242015", "email": "..." },
	"navigation": [{ "label": "Shop", "href": "/#shop", "hash": "#shop" }],
	"packs": [
		{
			"id": "kawaii-sweets",
			"name": "...",
			"image": { "url": "https://...", "alt": "...", "width": 560, "height": 560 }
		}
	],
	"governorates": ["Ariana"],
	"features": [{ "id": "shipping", "icon": "truck-line", "title": "...", "description": "..." }],
	"stickers": [{ "id": "flower", "icon": "flower-fill", "label": "flower" }],
	"screenStickers": [
		{
			"id": "love-it",
			"image": { "url": "/Love It.png", "alt": "...", "width": 828, "height": 783 },
			"left": "3vw",
			"top": "18vh",
			"size": 105,
			"mobileSize": 61
		}
	]
}
```

Each pack also has `arabic`, `category`, `count`, `finish`, `description`, `descriptionAr`, and `tone` fields. Keep pack IDs stable because order links and order items refer to them. `image.url` may be a full URL or a path served by your API or CDN. Icon names are [Remix Icon](https://remixicon.com/) class names without the `ri-` prefix.

## Order API contract

The order form currently opens WhatsApp. It creates a structured payload with `buildOrderPayload` in `src/lib/order.js` first. That payload has `customer` (`name`, `email`, `phone`), `delivery` (`governorate`, `city`, `address`), `items` (`packId`, `quantity`), `customStickers`, `attachments` (`name`, `type`, `size`), and `notes`.

When an order endpoint is available, send the same payload with `toOrderFormData(payload, files)`. It puts the JSON in the `order` field and the selected image files in repeated `attachments` fields. The current WhatsApp flow still asks customers to attach their photos in WhatsApp because it cannot transfer browser selected files automatically.

```sh
npm run build
```
