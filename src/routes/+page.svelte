<script>
	import { onMount } from 'svelte';
	import { reveal } from '$lib/motion.js';
	import Icon from '$lib/components/Icon.svelte';
	import PackCard from '$lib/components/PackCard.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import ScreenStickers from '$lib/components/ScreenStickers.svelte';
	import './home.css';

	let { data } = $props();
	let catalog = $derived(data.catalog);
	let favorites = $state([]);
	let soundOn = $state(true);
	let toast = $state('');
	let toastTimeout;

	onMount(() => {
		return () => {
			clearTimeout(toastTimeout);
		};
	});

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

<main>
	<section class="hero-section" aria-labelledby="hero-heading">
		<div class="container hero-grid">
			<div class="hero-copy" use:reveal>
				<span class="eyebrow-pill yellow"
					><Icon name="sparkling-line" /> INSTANT SELECTION : NO PHOTOS NEEDED</span
				>
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
						>Explore our Packs <span class="arrow"><Icon name="arrow-right-line" /></span></a
					>
					<a href="/order?pack=custom" class="btn btn-light"
						><Icon name="magic-line" /> Want custom photo stickers instead?</a
					>
				</div>
			</div>

			<aside class="perks-card" use:reveal aria-label="3 Simple Perks">
				<div class="perks-top">
					<span class="perks-label"><Icon name="sparkling-line" /> Quick Guide</span><span
						class="perks-heart"><Icon name="heart-fill" /></span
					>
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
		<ScreenStickers stickers={catalog.screenStickers.slice(0, 4)} placement="hero" />
	</section>

	<section class="shop-section" id="shop" aria-labelledby="shop-heading">
		<div class="container">
			<div class="shop-heading-row" id="gallery" use:reveal>
				<div>
					<p class="small-kicker">CURATED COLLECTIONS · CHOOSE YOUR THEME</p>
					<h2 class="section-title" id="shop-heading">Ready-Made Packs</h2>
					<p class="section-ar" dir="rtl" lang="ar">باكات حاضرين حسب ذوقك واختيارك</p>
				</div>
				<button class="sound-button" type="button" aria-pressed={soundOn} onclick={toggleSound}
					><Icon name={soundOn ? 'volume-up-line' : 'volume-mute-line'} /> Sound {soundOn
						? 'On'
						: 'Off'}</button
				>
			</div>
			<div class="section-rule"></div>

			<div class="packs-grid">
				{#each catalog.packs as pack, index (pack.id)}
					<div class="pack-reveal" style:--reveal-index={index % 3} use:reveal>
						<PackCard {pack} favorite={favorites.includes(pack.id)} onFavorite={toggleFavorite} />
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="order-prompt-section" id="about" aria-labelledby="prompt-heading">
		<div class="container">
			<div class="order-prompt" use:reveal>
				<span class="eyebrow-pill yellow"
					><Icon name="sparkling-line" /> EASY ORDERING · RAPID-POSTE NATIONWIDE</span
				>
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
					{#each catalog.features as feature (feature.id)}
						<FeatureCard {...feature} />
					{/each}
				</div>
				<div class="prompt-actions">
					<a href="/order" class="btn btn-primary"
						>Go to Order Form <span class="arrow"><Icon name="arrow-right-line" /></span></a
					>
					<a href="/order#delivery" class="btn btn-light">View Prices &amp; Delivery Info</a>
				</div>
			</div>
		</div>
	</section>
</main>

{#if toast}
	<div class="toast" role="status">{toast}</div>
{/if}
