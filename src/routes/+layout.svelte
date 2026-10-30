<script>
	import '../app.css';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import ChatSticker from '$lib/components/ChatSticker.svelte';
	let { data, children } = $props();
</script>

<SiteHeader catalog={data.catalog} />
{@render children()}
<SiteFooter catalog={data.catalog} />
<ChatSticker />
