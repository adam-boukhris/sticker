const packs = [
	{
		id: 'kawaii-sweets',
		name: 'Kawaii Sweets Pack',
		arabic: 'باك حلويات كاواي',
		category: 'Sweets & Treats',
		image: {
			url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=3840&q=90',
			alt: 'Kawaii Sweets Pack sticker artwork',
			width: 560,
			height: 560
		},
		count: '18 Die-cut vinyl stickers',
		finish: 'Waterproof Vinyl',
		description: 'Mochi, bubble tea cups, soft serve ice creams, and delightful sweet desserts.',
		descriptionAr: 'ستيكرز حلويات ومشروبات لطيفة وألوان حلوة.',
		tone: 'peach'
	},
	{
		id: 'cozy-animals',
		name: 'Cozy Animals Pack',
		arabic: 'باك الحيوانات اللطيفة',
		category: 'Fluffy Friends',
		image: {
			url: 'https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
			alt: 'Cozy Animals Pack sticker artwork',
			width: 560,
			height: 560
		},
		count: '18 Die-cut vinyl stickers',
		finish: 'Waterproof Vinyl',
		description:
			'Fluffy critters, loyal little pups, resting kitties, and warm woodland companions.',
		descriptionAr: 'حيوانات كيوت وستيكرز لطيفة لمحبي الحيوانات.',
		tone: 'rose'
	},
	{
		id: 'pastel-stars',
		name: 'Pastel Stars & Sparkles',
		arabic: 'باك النجوم والبريق',
		category: 'Dreamy Magic',
		image: {
			url: 'https://webclips.jp/design/image/styles/liquid-design.webp',
			alt: 'Pastel Stars and Sparkles sticker artwork',
			width: 560,
			height: 560
		},
		count: '20 Die-cut vinyl stickers',
		finish: 'Waterproof Vinyl',
		description:
			'Holographic shine effects, cosmic sparkles, dreamy crescent moons, and constellation badges.',
		descriptionAr: 'نجوم وألوان باستيل ولمعة تعطي لمسة سحرية.',
		tone: 'peach'
	},
	{
		id: 'botanical-doodles',
		name: 'Botanical Doodles Pack',
		arabic: 'باك النباتات والطبيعة',
		category: 'Plant Aesthetic',
		image: {
			url: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=3840&q=90',
			alt: 'Botanical Doodles Pack sticker artwork',
			width: 560,
			height: 560
		},
		count: '25 Die-cut vinyl stickers',
		finish: 'Waterproof Vinyl',
		description:
			'Monstera leaves, soft pink succulents, wildflowers, and hand-drawn nature aesthetics.',
		descriptionAr: 'أزهار وأوراق نباتات لمحبي الطبيعة.',
		tone: 'cream'
	},
	{
		id: 'retro-gamer',
		name: 'Retro Gamer Pack',
		arabic: 'باك ألعاب زمان والبيكسل',
		category: 'Pixel Nostalgia',
		image: {
			url: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=3840&q=90',
			alt: 'Retro Gamer Pack sticker artwork',
			width: 560,
			height: 560
		},
		count: '18 Die-cut vinyl stickers',
		finish: 'Waterproof Vinyl',
		description: 'Pixel hearts, handheld retro consoles, arcade badges, and 8-bit nostalgic icons.',
		descriptionAr: 'قلوب وألعاب كلاسيكية لمحبي الريترو.',
		tone: 'lilac'
	},
	{
		id: 'aesthetic-vibe',
		name: 'Aesthetic Vibe Pack',
		arabic: 'باك الأجواء العصرية',
		category: 'Daily Aesthetics',
		image: {
			url: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=3840&q=90',
			alt: 'Aesthetic Vibe Pack sticker artwork',
			width: 560,
			height: 560
		},
		count: '18 Die-cut vinyl stickers',
		finish: 'Waterproof Vinyl',
		description:
			'Cozy coffee cups, sunny affirmation badges, cute cameras, and joyful everyday icons.',
		descriptionAr: 'قهوة وشمس وأيقونات مميزة للأشياء اليومية.',
		tone: 'peach'
	}
];

const governorates = [
	'Ariana',
	'Béja',
	'Ben Arous',
	'Bizerte',
	'Gabès',
	'Gafsa',
	'Jendouba',
	'Kairouan',
	'Kasserine',
	'Kébili',
	'Le Kef',
	'Mahdia',
	'Manouba',
	'Médenine',
	'Monastir',
	'Nabeul',
	'Sfax',
	'Sidi Bouzid',
	'Siliana',
	'Sousse',
	'Tataouine',
	'Tozeur',
	'Tunis',
	'Zaghouan'
];

// GET /api/catalog returns this shape. Set PUBLIC_CATALOG_API_URL to use an external API.
export const catalog = {
	version: 1,
	brand: { name: 'StickeRiri', tagline: 'Tunisian Sticker Shop / بوتيك ستيكرز تونسي' },
	contact: { whatsapp: '21653242015', email: 'stickeriri.shop@gmail.com' },
	navigation: [
		{ label: 'Home', href: '/', hash: '' },
		{ label: 'Shop', href: '/#shop', hash: '#shop' },
		{ label: 'Gallery', href: '/#gallery', hash: '#gallery' },
		{ label: 'About Us', href: '/#about', hash: '#about' },
		{ label: 'More / المزيد', href: '/#footer', hash: '#footer', icon: 'more-line' }
	],
	packs,
	governorates,
	features: [
		{
			id: 'confirmation',
			icon: 'phone-line',
			title: 'Phone Confirmation',
			description: "We'll call to confirm your order details before preparing."
		},
		{
			id: 'shipping',
			icon: 'truck-line',
			title: 'Rapid-Poste Shipping',
			description: 'Fast delivery across all 24 Tunisian governorates.'
		},
		{
			id: 'quality',
			icon: 'heart-3-line',
			title: 'Quality Guarantee',
			description: 'Each sticker pack is prepared with care.'
		}
	],
	screenStickers: [
		{
			id: 'love-it',
			image: { url: '/Love It.png', alt: 'Love It hand sign sticker', width: 828, height: 783 },
			left: '2%',
			top: '15%',
			size: 105,
			mobileSize: 61
		},
		{
			id: 'vibes',
			image: { url: '/Vibes.png', alt: 'Vibes rainbow sticker', width: 1033, height: 562 },
			left: '88%',
			top: '18%',
			size: 119,
			mobileSize: 78
		},
		{
			id: 'not-sure',
			image: { url: '/Not Sure.png', alt: 'Not Sure hand sign sticker', width: 1158, height: 868 },
			left: '2%',
			top: '70%',
			size: 115,
			mobileSize: 75
		},
		{
			id: 'peek',
			image: { url: '/Take a Peek.png', alt: 'Take a Peek eyes sticker', width: 831, height: 856 },
			left: '89%',
			top: '70%',
			size: 100,
			mobileSize: 65
		},
		{
			id: 'killed-it',
			image: { url: '/Killed It.png', alt: 'Killed It skull sticker', width: 801, height: 755 },
			left: '0',
			top: '0',
			size: 94,
			mobileSize: 59
		}
	]
};
