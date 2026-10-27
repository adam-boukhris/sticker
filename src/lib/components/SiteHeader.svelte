<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import Icon from './Icon.svelte';
	import './SiteHeader.css';

	let { catalog } = $props();
	let menuOpen = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const update = () => {
			scrolled = window.scrollY > 20;
		};
		update();
		window.addEventListener('scroll', update, { passive: true });
		return () => window.removeEventListener('scroll', update);
	});
	function active(hash) {
		return (
			page.url.pathname === '/' &&
			(hash ? page.url.hash === hash : !page.url.hash || page.url.hash === '#home')
		);
	}
</script>

<header class="site-header" class:scrolled id="home">
	<div class="container nav-inner">
		<a href="/" class="wordmark" aria-label="StickeRiri home" onclick={() => (menuOpen = false)}
			>{catalog.brand.name}</a
		>
		<nav class:visible={menuOpen} id="main-nav" aria-label="Main navigation">
			{#each catalog.navigation as link (link.href)}
				<a
					href={link.href}
					class:active={active(link.hash)}
					aria-current={active(link.hash) ? 'page' : undefined}
					onclick={() => (menuOpen = false)}
					>{#if link.icon}<Icon name={link.icon} />
					{/if}{link.label}</a
				>
			{/each}
			<a
				class="mobile-order btn btn-primary"
				class:active={page.url.pathname === '/order'}
				aria-current={page.url.pathname === '/order' ? 'page' : undefined}
				href="/order"
				onclick={() => (menuOpen = false)}
				>Order Now / اطلب توا <span class="arrow"><Icon name="arrow-right-line" /></span></a
			>
		</nav>
		<a
			class="btn btn-primary nav-cta"
			class:active={page.url.pathname === '/order'}
			aria-current={page.url.pathname === '/order' ? 'page' : undefined}
			href="/order"
			><Icon name="arrow-right-up-line" /> Order Now / اطلب توا
			<span class="arrow"><Icon name="arrow-right-line" /></span></a
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
