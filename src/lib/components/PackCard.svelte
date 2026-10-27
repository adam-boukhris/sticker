<script>
	import Icon from './Icon.svelte';
	import './PackCard.css';

	let { pack, favorite = false, onFavorite = () => {} } = $props();
</script>

<article class="pack-card {pack.tone}">
	<div class="pack-image-wrap">
		<img
			class="pack-image"
			src={pack.image.url}
			alt={pack.image.alt}
			width={pack.image.width}
			height={pack.image.height}
			loading="lazy"
		/>
	</div>
	<div class="pack-content">
		<div class="pack-title-row">
			<h3>{pack.name}</h3>
			<span class="stock-pill">Ready-Made</span>
		</div>
		<p class="pack-ar" dir="rtl" lang="ar">{pack.arabic}</p>
		<div class="pack-specs">
			<span><Icon name="check-line" /> {pack.count}</span><span>{pack.finish}</span>
		</div>
		<p class="pack-description">{pack.description}</p>
		<p class="pack-description-ar" dir="rtl" lang="ar">{pack.descriptionAr}</p>
		<div class="price-row"><span>Pricing details</span><strong>Set upon confirmation</strong></div>
		<div class="pack-actions">
			<a class="btn btn-primary pack-order" href="/order?pack={encodeURIComponent(pack.id)}"
				><Icon name="shopping-bag-line" /> Order This Pack
				<span class="arrow"><Icon name="arrow-right-line" /></span></a
			>
			<button
				type="button"
				class:active={favorite}
				class="favorite-button"
				aria-label={favorite
					? `Remove ${pack.name} from favorites`
					: `Add ${pack.name} to favorites`}
				aria-pressed={favorite}
				onclick={() => onFavorite(pack.id)}
				><Icon name={favorite ? 'heart-fill' : 'heart-line'} /></button
			>
		</div>
	</div>
</article>
