<script>
	import { packs, WHATSAPP_NUMBER, EMAIL } from '$lib/data.js';

	let menuOpen = $state(false);
	let favorites = $state([]);
	let soundOn = $state(false);
	let toast = $state('');
	let toastTimeout;

	function closeMenu() {
		menuOpen = false;
	}
	function toggleFavorite(id) {
		favorites = favorites.includes(id)
			? favorites.filter((favorite) => favorite !== id)
			: [...favorites, id];
	}
	function toggleSound() {
		soundOn = !soundOn;
		// The source page shows a sound toggle. No original audio assets were provided.
		// Toggle is persisted visually without autoplaying or inventing sounds.
		flash(soundOn ? 'Sound on · صوت شغال' : 'Sound off · صوت مغلق');
	}
	function flash(message) {
		toast = message;
		if (typeof window !== 'undefined') {
			clearTimeout(toastTimeout);
			toastTimeout = setTimeout(() => (toast = ''), 2600);
		}
	}
</script>

<svelte:head>
	<title>StickeRiri | Ready-Made Sticker Packs Tunisia</title>
	<meta
		name="description"
		content="Cute ready-made sticker packs, crafted with love in Tunisia. Choose your favorites and order for nationwide Rapid-Poste delivery."
	/>
	<meta name="theme-color" content="#ffe0dd" />
</svelte:head>

<header class="site-header" id="home">
	<div class="container nav-inner">
		<a href="/" class="wordmark" aria-label="StickeRiri home" onclick={closeMenu}>StickeRiri</a>
		<nav class:visible={menuOpen} id="main-nav" aria-label="Main navigation">
			<a href="#home" onclick={closeMenu}>Home</a>
			<a href="#shop" onclick={closeMenu}>Shop</a>
			<a href="#shop" onclick={closeMenu}>▸ Shop</a>
			<a href="#gallery" onclick={closeMenu}>Gallery</a>
			<a href="#about" onclick={closeMenu}>About Us</a>
			<a href="#footer" onclick={closeMenu}>▸ More / المزيد</a>
			<a class="mobile-order btn btn-primary" href="/order" onclick={closeMenu}
				>Order Now / اطلب توا <span aria-hidden="true">➜</span></a
			>
		</nav>
		<a class="btn btn-primary nav-cta" href="/order"
			>↗ Order Now / اطلب توا <span aria-hidden="true">➜</span></a
		>
		<button
			type="button"
			class="menu-toggle"
			aria-expanded={menuOpen}
			aria-controls="main-nav"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span><span></span><span></span>
		</button>
	</div>
</header>

<main>
	<section class="hero-section" aria-labelledby="hero-heading">
		<div class="container hero-grid">
			<div class="hero-copy">
				<span class="eyebrow-pill yellow">✺ INSTANT SELECTION : NO PHOTOS NEEDED</span>
				<h1 id="hero-heading">
					Curated sticker<br class="desktop-break" /> packs,<br /><span class="underlined"
						>ready to ship</span
					><br /><strong>today.</strong>
				</h1>
				<h2 class="hero-ar" lang="ar" dir="rtl">باكوات ستيكرز حاضرين ومزيانين</h2>
				<p class="hero-desc">
					many stickers collections ready to ship immediately! Pick your favourite category and
					place your order.
				</p>
				<p class="hero-desc hero-desc-ar" lang="ar" dir="rtl">
					برشا كوليكسيونات متنوعة وحاضرة للتوصيل! اختار إلي يعجبك وكمل طلبك.
				</p>
				<div class="hero-actions">
					<a href="#shop" class="btn btn-primary"
						>Explore our Packs <span class="arrow" aria-hidden="true">➜</span></a
					>
					<a href="/order?pack=custom" class="btn btn-light"
						>✣ Want custom photo stickers instead?</a
					>
				</div>
			</div>

			<aside class="perks-card" aria-label="3 Simple Perks">
				<div class="perks-top">
					<span class="perks-label">✧ Quick Guide</span><span class="perks-heart">♥</span>
				</div>
				<h2>3 Simple Perks</h2>
				<p class="perks-ar" dir="rtl" lang="ar">ثلاثة ميزات للطلب</p>
				<ul>
					<li>
						<b>Zero upload hassle:</b> pick your favourite theme and place your order request directly.
					</li>
					<li>
						<b>Pre-cut stickers:</b> individually cut peel-and-use for laptops, cases, and journals.
					</li>
					<li><b>Rapid-Poste delivery:</b> dispatching across all 24 Tunisian governorates.</li>
				</ul>
				<p class="perks-foot">
					Pack names and prices confirmed directly by the shop via WhatsApp or phone before
					dispatch.
				</p>
			</aside>
		</div>
	</section>

	<section class="shop-section" id="shop" aria-labelledby="shop-heading">
		<div class="container">
			<div class="shop-heading-row" id="gallery">
				<div>
					<p class="small-kicker">CURATED COLLECTIONS · CHOOSE YOUR THEME</p>
					<h2 class="section-title" id="shop-heading">Ready-Made Packs</h2>
					<p class="section-ar" dir="rtl" lang="ar">باكات حاضرين حسب ذوقك واختيارك</p>
				</div>
				<button class="sound-button" type="button" aria-pressed={soundOn} onclick={toggleSound}
					>{soundOn ? '♫ Sound On' : '♫ Sound Off'}</button
				>
			</div>
			<div class="section-rule"></div>

			<div class="packs-grid">
				{#each packs as pack (pack.id)}
					<article class="pack-card {pack.tone}">
						<div class="pack-image-wrap">
							<img
								class="pack-image"
								src={pack.image}
								alt="{pack.name} sticker artwork"
								width="560"
								height="560"
								loading="lazy"
							/>
						</div>
						<div class="pack-content">
							<div class="pack-title-row">
								<h3>{pack.name}</h3>
								<span class="stock-pill">Ready-Made</span>
							</div>
							<p class="pack-ar" dir="rtl" lang="ar">{pack.arabic}</p>
							<div class="pack-specs"><span>✓ {pack.count}</span><span>{pack.finish}</span></div>
							<p class="pack-description">{pack.description}</p>
							<p class="pack-description-ar" dir="rtl" lang="ar">{pack.descriptionAr}</p>
							<div class="price-row">
								<span>Pricing details</span><strong>Set upon confirmation</strong>
							</div>
							<div class="pack-actions">
								<a
									class="btn btn-primary pack-order"
									href="/order?pack={encodeURIComponent(pack.id)}"
									>▣ Order This Pack <span class="arrow" aria-hidden="true">➜</span></a
								>
								<button
									type="button"
									class:active={favorites.includes(pack.id)}
									class="favorite-button"
									aria-label={favorites.includes(pack.id)
										? `Remove ${pack.name} from favorites`
										: `Add ${pack.name} to favorites`}
									aria-pressed={favorites.includes(pack.id)}
									onclick={() => toggleFavorite(pack.id)}
									>{favorites.includes(pack.id) ? '♥' : '♡'}</button
								>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="order-prompt-section" id="about" aria-labelledby="prompt-heading">
		<div class="container">
			<div class="order-prompt">
				<span class="eyebrow-pill yellow">✺ EASY ORDERING · RAPID-POSTE NATIONWIDE</span>
				<h2 id="prompt-heading">
					Found your favorite<br /> pack?<br />Submit your<br /><span class="underlined"
						>request</span
					><br /> now.
				</h2>
				<p class="order-prompt-ar" dir="rtl" lang="ar">عجبك باك؟ عبّي الطلب ونأكدوه معاك</p>
				<p class="order-prompt-desc">
					No online credit card required. Place your order, and StickeRiri will contact you by phone
					or WhatsApp to confirm before dispatching via Rapid-Poste.
				</p>
				<p class="order-prompt-extra" lang="ar" dir="rtl">
					اطلب الباك إلي تحبه، نتواصلوا معاك للتأكيد ومن بعد نبعثوهولك.
				</p>
				<div class="feature-grid">
					<div class="feature">
						<b>♧ Phone Confirmation</b><span
							>We'll call to confirm your order details before preparing.</span
						>
					</div>
					<div class="feature">
						<b>♙ Rapid-Poste Shipping</b><span
							>Fast delivery across all 24 Tunisian governorates.</span
						>
					</div>
					<div class="feature">
						<b>♡ Quality Guarantee</b><span>Each sticker pack is prepared with care.</span>
					</div>
				</div>
				<div class="prompt-actions">
					<a href="/order" class="btn btn-primary"
						>Go to Order Form <span class="arrow" aria-hidden="true">➜</span></a
					>
					<a href="/order#delivery" class="btn btn-light">View Prices &amp; Delivery Info</a>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="site-footer" id="footer">
	<div class="container">
		<div class="footer-banner">
			<div>
				<span class="eyebrow-pill yellow"
					>✺ Handmade with Love in Tunisia / مصنوع بكل حب في تونس</span
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
				>Place Order / اطلب توا <span aria-hidden="true">➜</span></a
			>
		</div>

		<div class="footer-brand">StickeRiri</div>
		<p class="footer-subhead">Tunisian Sticker Shop / بوتيك ستيكرز تونسي</p>
		<div class="squiggle" aria-hidden="true">〰〰 〰</div>

		<div class="footer-columns">
			<div class="footer-col footer-links">
				<h3>EXPLORE / تصفح</h3>
				<a href="#home">Home</a><a href="#shop">Shop</a><a href="#shop">Ready-Made Packs</a><a
					href="/order?pack=custom">Make Your Own</a
				><a href="#gallery">Gallery</a><a href="#about">About Us</a><a href="/order">Order Form</a
				><a href="/order#delivery">Prices &amp; Delivery</a>
			</div>
			<div class="footer-col">
				<h3>HOW IT WORKS / كيفاش نشري</h3>
				<div class="footer-mini-card">
					<b>1. Choose &amp; Submit</b><span>Pick a ready pack or custom photo package.</span>
				</div>
				<div class="footer-mini-card">
					<b>2. WhatsApp Confirmation</b><span
						>We confirm by phone &amp; you send photos on WhatsApp.</span
					>
				</div>
				<div class="footer-mini-card">
					<b>3. Rapid-Poste Delivery</b><span>Delivery across all 24 governorates.</span>
				</div>
			</div>
			<div class="footer-col">
				<h3>CONTACT &amp; WHATSAPP / تواصل معنا</h3>
				<a href="tel:+{WHATSAPP_NUMBER}" class="footer-contact">♧ +{WHATSAPP_NUMBER}</a>
				<a
					href="https://wa.me/{WHATSAPP_NUMBER}"
					rel="noopener noreferrer"
					target="_blank"
					class="footer-contact whatsapp">♧ WhatsApp for Photos</a
				>
				<a href="mailto:{EMAIL}" class="footer-contact">✉ {EMAIL}</a>
			</div>
			<div class="footer-col">
				<div class="footer-delivery">
					<h3>♧ Rapid-Poste Tunisia</h3>
					<p>
						We deliver to all 24 Tunisian governorates. Orders are prepared with utmost care and
						delivered straight to your door.
					</p>
					<p dir="rtl" lang="ar">توصيل سريع لكافة الولايات التونسية الـ 24</p>
					<hr />
					<b>✧ No online payment</b>
				</div>
			</div>
		</div>
		<div class="copyright">
			<span>© 2026 StickeRiri. All rights reserved. <span class="red-heart">♥</span></span><span
				>Tunisia 🇹🇳 تونس · Vinyl &amp; Die-Cut Stickers</span
			>
		</div>
	</div>
</footer>

{#if toast}
	<div class="toast" role="status">{toast}</div>
{/if}
