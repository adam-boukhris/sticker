<script>
	import Icon from './Icon.svelte';
	import ScreenStickers from './ScreenStickers.svelte';
	import './SiteFooter.css';
	let { catalog } = $props();
</script>

<footer class="site-footer" id="footer">
	<div class="container">
		<div class="footer-banner">
			<div>
				<span class="eyebrow-pill yellow"
					><Icon name="sparkling-line" /> Handmade with Love in Tunisia / مصنوع بكل حب في تونس</span
				>
				<h2>A little piece of you / قطعة صغيرة منك</h2>
				<p>
					Ready-made aesthetic packs or custom stickers crafted from your favorite photos. Fast
					delivery nationwide via Rapid-Poste.
				</p>
				<p class="footer-banner-ar" dir="rtl" lang="ar">
					باكات واجدين ولا ستيكرز مخصصين من تصاورك. توصيل لكامل تونس بالبريد السريع.
				</p>
			</div>
			<a class="btn btn-primary" href="/order"
				>Place Order / اطلب توا <span class="arrow"><Icon name="arrow-right-line" /></span></a
			>
		</div>

		<div class="footer-brand-row">
			<div class="footer-brand">{catalog.brand.name}</div>
			<ScreenStickers stickers={catalog.screenStickers.slice(4)} placement="footer" />
		</div>
		<p class="footer-subhead">{catalog.brand.tagline}</p>
		<div class="squiggle" aria-hidden="true">
			<Icon name="sparkling-line" />
			<Icon name="heart-3-line" />
			<Icon name="sparkling-line" />
		</div>

		<div class="footer-columns">
			<div class="footer-col footer-links">
				<h3>EXPLORE / تصفح</h3>
				{#each catalog.navigation as link (link.href)}<a href={link.href}>{link.label}</a>{/each}
				<a href="/order?pack=custom">Make Your Own</a><a href="/order">Order Form</a><a
					href="/order#delivery">Prices &amp; Delivery</a
				>
			</div>
			<div class="footer-col">
				<h3>HOW IT WORKS / كيفاش نشري</h3>
				<div class="footer-mini-card">
					<b>1. Choose &amp; Submit</b><span>Pick a ready pack or custom photo package.</span>
				</div>
				<div class="footer-mini-card">
					<b>2. Confirmation by WhatsApp or Phone</b><span
						>We confirm by phone &amp; you send photos on WhatsApp.</span
					>
				</div>
				<div class="footer-mini-card">
					<b>3. Rapid-Poste Delivery</b><span>Delivery across all 24 governorates.</span>
				</div>
			</div>
			<div class="footer-col">
				<h3>CONTACT &amp; WHATSAPP / تواصل معنا</h3>
				<a href="tel:+{catalog.contact.whatsapp}" class="footer-contact"
					><Icon name="phone-line" /> +{catalog.contact.whatsapp}</a
				>
				<a
					href="https://wa.me/{catalog.contact.whatsapp}"
					rel="noopener noreferrer"
					target="_blank"
					class="footer-contact whatsapp"><Icon name="whatsapp-line" /> WhatsApp for Photos</a
				>
				<a href="mailto:{catalog.contact.email}" class="footer-contact"
					><Icon name="mail-line" /> {catalog.contact.email}</a
				>
			</div>
			<div class="footer-col">
				<div class="footer-delivery">
					<h3><Icon name="truck-line" /> Rapid-Poste Tunisia</h3>
					<p>
						We deliver to all 24 Tunisian governorates. Orders are prepared with utmost care and
						delivered straight to your door.
					</p>
					<p dir="rtl" lang="ar">توصيل سريع لكافة الولايات التونسية الـ 24</p>
					<hr />
					<b><Icon name="secure-payment-line" /> No online payment</b>
				</div>
			</div>
		</div>
		<div class="copyright">
			<span
				>© 2026 {catalog.brand.name}. All rights reserved.
				<span class="red-heart"><Icon name="heart-fill" /></span></span
			><span>Tunisia 🇹🇳 تونس · Vinyl &amp; Die-Cut Stickers</span>
		</div>
	</div>
</footer>
