<script>
	import Icon from './Icon.svelte';
	import './FloatingStickers.css';

	let { stickers = [] } = $props();
	let layer;
	let activeDrag = null;
	const positions = new Map();

	function setPosition(sticker, node, x, y) {
		const bounds = layer.getBoundingClientRect();
		const stickerBounds = node.getBoundingClientRect();
		const current = positions.get(sticker.id) || { x: 0, y: 0 };
		const currentX = current.x;
		const currentY = current.y;
		const left = stickerBounds.left - bounds.left - currentX;
		const top = stickerBounds.top - bounds.top - currentY;
		const next = {
			x: Math.min(Math.max(x, -left), bounds.width - left - stickerBounds.width),
			y: Math.min(Math.max(y, -top), bounds.height - top - stickerBounds.height)
		};
		positions.set(sticker.id, next);
		node.style.setProperty('--drag-x', `${next.x}px`);
		node.style.setProperty('--drag-y', `${next.y}px`);
	}

	function startDrag(event, sticker) {
		if (event.button !== 0) return;
		const node = event.currentTarget;
		const current = positions.get(sticker.id) || { x: 0, y: 0 };
		activeDrag = {
			id: sticker.id,
			pointerId: event.pointerId,
			x: event.clientX,
			y: event.clientY,
			startX: current.x,
			startY: current.y
		};
		node.setPointerCapture(event.pointerId);
		node.classList.add('is-dragging');
	}

	function moveDrag(event, sticker) {
		if (activeDrag?.id !== sticker.id || activeDrag.pointerId !== event.pointerId) return;
		setPosition(
			sticker,
			event.currentTarget,
			activeDrag.startX + event.clientX - activeDrag.x,
			activeDrag.startY + event.clientY - activeDrag.y
		);
	}

	function endDrag(event, sticker) {
		if (activeDrag?.id !== sticker.id || activeDrag.pointerId !== event.pointerId) return;
		event.currentTarget.classList.remove('is-dragging');
		activeDrag = null;
	}

	function moveWithKeyboard(event, sticker) {
		const movement = {
			ArrowLeft: [-16, 0],
			ArrowRight: [16, 0],
			ArrowUp: [0, -16],
			ArrowDown: [0, 16]
		}[event.key];
		if (!movement) return;
		event.preventDefault();
		const current = positions.get(sticker.id) || { x: 0, y: 0 };
		setPosition(sticker, event.currentTarget, current.x + movement[0], current.y + movement[1]);
	}
</script>

<div
	class="floating-stickers"
	bind:this={layer}
	aria-label="Drag the floating stickers to arrange them"
>
	{#each stickers as sticker (sticker.id)}
		<button
			class="floating-sticker {sticker.id}"
			type="button"
			aria-label="Move {sticker.label} sticker. Drag or use arrow keys."
			onpointerdown={(event) => startDrag(event, sticker)}
			onpointermove={(event) => moveDrag(event, sticker)}
			onpointerup={(event) => endDrag(event, sticker)}
			onpointercancel={(event) => endDrag(event, sticker)}
			onkeydown={(event) => moveWithKeyboard(event, sticker)}
		>
			<span class="sticker-float" aria-hidden="true"
				><span class="sticker-symbol"><Icon name={sticker.icon} /></span></span
			>
		</button>
	{/each}
</div>
