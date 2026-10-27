// Elements stay visible until this action runs, so content is never hidden without JavaScript.
export function reveal(node) {
	if (
		window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
		!('IntersectionObserver' in window)
	)
		return;
	node.classList.add('motion-pending');
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				node.classList.add('motion-visible');
				observer.disconnect();
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -24px 0px' }
	);
	observer.observe(node);
	return {
		destroy() {
			observer.disconnect();
			node.classList.remove('motion-pending', 'motion-visible');
		}
	};
}
