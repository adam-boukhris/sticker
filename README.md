# StickeRiri — Svelte 5 recreation

This reconstructs the design shown in the supplied screenshot of stickeriri.designhouse.site, with targeted responsive and accessibility improvements. It is not the Designhouse export and does not contain the builder's original source code.

## Getting started

1. Install Node.js 20.19+ or 22+
2. Run `npm install`
3. Run `npm run dev` and open the displayed localhost URL.
4. Run `npm run check` and `npm run build` before deployment.

## File map

- `src/routes/+page.svelte` — home, six packs, CTA and footer
- `src/routes/order/+page.svelte` — order form and WhatsApp handoff
- `src/app.css` — shared brand CSS and responsive layouts
- `src/lib/data.js` — products, Tunisian governorates and contact details
- `static/images/` — six illustrated product image placeholders

## Important: screenshot-derived images

The original high-resolution product artwork wasn't accessible through the public-page inspection method used. The six images in `static/images/` were **cropped from your screenshot** to preserve the correct illustrations and layout. They look softer than your original page, especially on large screens. Replace each file with its original high-resolution artwork while keeping the same filenames, and all components will update automatically.

## Order workflow

Each "Order This Pack" button opens `/order?pack=<id>`, with the relevant product preselected. The form validates the supplied phone number, creates a URI-encoded WhatsApp message in a new tab, and shows a fallback link. **Submitting the form does not directly place or store an order**: the customer must send the message within WhatsApp. No backend is required.

The "Sound Off" toggle mirrors the screenshot's UI, but no sound is played: the original audio files were not supplied. The toggle displays a state and an explanatory toast, without misleading or surprising autoplay.

Prices are intentionally not invented and remain "set upon confirmation," following the reference design. Favorites are transient, resetting on refresh. This clone does not include checkout/payment processing.
