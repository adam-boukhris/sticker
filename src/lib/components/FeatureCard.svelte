<script>
	import Icon from './Icon.svelte';
	let { title, description, icon } = $props();
</script>

<div class="feature"><b><Icon name={icon} /> {title}</b><span>{description}</span></div>
