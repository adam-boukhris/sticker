<script>
	import { onMount } from 'svelte';
	import './ScreenStickers.css';

	let { stickers = [] } = $props();
	let layer;
	let activeDrag = null;
	const positions = new Map();
	const shakeTimers = new Map();

	function moveBy(node, id, dx, dy) {
		const rect = node.getBoundingClientRect();
		const current = positions.get(id) || { x: 0, y: 0 };
		const targetX = Math.max(8, Math.min(rect.left + dx, window.innerWidth - rect.width - 8));
		const targetY = Math.max(8, Math.min(rect.top + dy, window.innerHeight - rect.height - 8));
		const next = { x: current.x + targetX - rect.left, y: current.y + targetY - rect.top };
		positions.set(id, next);
		node.style.setProperty('--drag-x', `${next.x}px`);
		node.style.setProperty('--drag-y', `${next.y}px`);
	}

	function shake(node, id) {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		clearTimeout(shakeTimers.get(id));
		node.classList.remove('drop-shake');
		void node.offsetWidth;
		node.classList.add('drop-shake');
		shakeTimers.set(
			id,
			setTimeout(() => node.classList.remove('drop-shake'), 280)
		);
		try {
			navigator.vibrate?.(10);
		} catch {
			/* Visual shake remains available. */
		}
	}

	function startDrag(event, sticker) {
		if (event.button !== 0) return;
		activeDrag = {
			id: sticker.id,
			pointerId: event.pointerId,
			x: event.clientX,
			y: event.clientY,
			distance: 0
		};
		event.currentTarget.setPointerCapture(event.pointerId);
		event.currentTarget.classList.add('is-dragging');
	}

	function moveDrag(event, sticker) {
		if (activeDrag?.id !== sticker.id || activeDrag.pointerId !== event.pointerId) return;
		const dx = event.clientX - activeDrag.x;
		const dy = event.clientY - activeDrag.y;
		activeDrag.distance += Math.hypot(dx, dy);
		activeDrag.x = event.clientX;
		activeDrag.y = event.clientY;
		moveBy(event.currentTarget, sticker.id, dx, dy);
	}

	function endDrag(event, sticker) {
		if (activeDrag?.id !== sticker.id || activeDrag.pointerId !== event.pointerId) return;
		const moved = activeDrag.distance > 4;
		event.currentTarget.classList.remove('is-dragging');
		activeDrag = null;
		if (moved && event.type === 'pointerup') shake(event.currentTarget, sticker.id);
	}

	function moveWithKeyboard(event, sticker) {
		const steps = {
			ArrowLeft: [-16, 0],
			ArrowRight: [16, 0],
			ArrowUp: [0, -16],
			ArrowDown: [0, 16]
		};
		const step = steps[event.key];
		if (!step) return;
		event.preventDefault();
		moveBy(event.currentTarget, sticker.id, step[0], step[1]);
	}

	onMount(() => {
		const clampAll = () =>
			layer
				.querySelectorAll('.screen-sticker')
				.forEach((node) => moveBy(node, node.dataset.id, 0, 0));
		window.addEventListener('resize', clampAll);
		return () => {
			window.removeEventListener('resize', clampAll);
			shakeTimers.forEach((timer) => clearTimeout(timer));
		};
	});
</script>

<div class="screen-stickers" bind:this={layer} aria-label="Move the stickers around the screen">
	{#each stickers as sticker (sticker.id)}
		<button
			class="screen-sticker"
			type="button"
			data-id={sticker.id}
			style:--left={sticker.left}
			style:--top={sticker.top}
			style:--size={`${sticker.size}px`}
			style:--mobile-size={`${sticker.mobileSize}px`}
			aria-label="Move {sticker.image.alt}. Drag or use arrow keys."
			onpointerdown={(event) => startDrag(event, sticker)}
			onpointermove={(event) => moveDrag(event, sticker)}
			onpointerup={(event) => endDrag(event, sticker)}
			onpointercancel={(event) => endDrag(event, sticker)}
			onkeydown={(event) => moveWithKeyboard(event, sticker)}
		>
			<span class="screen-sticker-art"
				><img
					src={sticker.image.url}
					alt=""
					width={sticker.image.width}
					height={sticker.image.height}
					draggable="false"
				/></span
			>
		</button>
	{/each}
</div>
