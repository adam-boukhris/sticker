<script>
	const WA = '21653242015';
	const govs = [
		'Ariana',
		'Béja',
		'Ben Arous',
		'Bizerte',
		'Gabès',
		'Gafsa',
		'Jendouba',
		'Kairouan',
		'Kasserine',
		'Kebili',
		'Kef',
		'Mahdia',
		'Manouba',
		'Medenine',
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
	const steps = [
		{
			t: '1. Submit Request',
			a: '.1 سجّل طلبك في الاستمارة',
			d: 'No payment needed right now on the website.',
			c: 'var(--red)',
			i: '✓'
		},
		{
			t: '2. WhatsApp Photos',
			a: '.2 ابعث التصاور على واتساب',
			d: 'For custom stickers: send photos directly via WhatsApp after submitting.',
			c: 'var(--yellow)',
			i: '💬'
		},
		{
			t: '3. Rapid-Poste Delivery',
			a: '.3 توصيل بالبريد السريع',
			d: 'Nationwide delivery across all 24 Tunisian governorates.',
			c: 'var(--purple)',
			i: '🚚'
		}
	];
	const faqs = [
		{
			q: 'How do you confirm my order?',
			a: 'كيفاش ناكدو طلبيتي؟',
			p: 'Once you submit the order form, we will contact you directly via phone call or WhatsApp to confirm your selected sticker pack, total amount, and delivery address before preparing your order.',
			pa: 'اول ما تسجّل الاستمارة، نتصلو بيك بالهاتف ولا على واتساب باش نثبتو الاختيارات والعنوان والمجموع قبل ما نحضرو الباكيج.',
			i: '📞'
		},
		{
			q: 'How does nationwide delivery work?',
			a: 'كيفاش يوصلني الكولي في تونس؟',
			p: 'We ship with Rapid-Poste to all 24 governorates. Orders are packed with care and delivered straight to your door.',
			pa: 'نبعثو بالبريد السريع لكل الولايات ويوصلك الطلب لباب الدار.',
			i: '📦'
		},
		{
			q: 'Do I pay online when submitting the form?',
			a: 'فما خلاص اونلاين على السيت؟',
			p: 'No. There is no upfront online payment. You pay upon confirmation or delivery.',
			pa: 'لا، ما فماش خلاص مسبق. تخلّص عند التأكيد ولا عند التوصيل.',
			i: '🛡'
		},
		{
			q: 'How and when do I send my custom photos?',
			a: 'وقتاش وكيفاش نبعث تصاوري للستيكرز الخاصين؟',
			p: 'After submitting the form, send your photos directly to us on WhatsApp. No file upload is needed on the website.',
			pa: 'بعد ما تسجّل الاستمارة، ابعث التصاور مباشرة على واتساب.',
			i: '💛'
		}
	];
	let open = $state(0),
		menu = $state(false),
		sent = $state(false),
		err = $state('');
	let f = $state({ name: '', phone: '', gov: '', city: '', addr: '', type: '', qty: 1, notes: '' });
	const types = [
		'Ready-made pack – Cute Mix',
		'Ready-made pack – Aesthetic',
		'Custom stickers (my photos)'
	];
	function submit(e) {
		e.preventDefault();
		if (!/^(\+216)?\s?\d{2}\s?\d{3}\s?\d{3}$/.test(f.phone.trim())) {
			err = 'Enter a valid Tunisian phone number / أدخل رقم هاتف صحيح';
			return;
		}
		err = '';
		sent = true;
		const m = `New order request%0AName: ${f.name}%0APhone: ${f.phone}%0AGovernorate: ${f.gov}%0ACity: ${f.city}%0AAddress: ${f.addr}%0AOrder: ${f.type} x${f.qty}%0ANotes: ${f.notes || '-'}`;
		window.open(`https://wa.me/${WA}?text=${m}`, '_blank');
	}
</script>

<header>
	<div class="wrap nav">
		<a href="#top" class="logo">StickeRiri</a>
		<nav class:show={menu}>
			{#each ['Home', 'Shop', '▸ Shop', 'Gallery', 'About Us'] as l}<a
					href="#order"
					onclick={() => (menu = false)}>{l}</a
				>{/each}
			<a href="#faq">▸ More / المزيد</a>
		</nav>
		<a class="btn sm" href="#order">Order Now / اطلب توا <span class="arrow">➜</span></a>
		<button class="burger" aria-label="Menu" onclick={() => (menu = !menu)}>☰</button>
	</div>
</header>

<section id="top" class="hero">
	<div class="wrap center">
		<div class="pills">
			<span class="pill y">✦ TUNISIA NATIONWIDE DELIVERY</span><span class="pill"
				>توصيل لكامل تراب الجمهورية</span
			>
		</div>
		<h1 class="display big">Ready to order your <span class="ul">cute stickers?</span></h1>
		<p class="ar sub">حاضر باش تكوماندي أحلى ستيكرز؟</p>
		<p class="lead">
			Fill out the form below to submit your order request. We will contact you on phone or WhatsApp
			to confirm your details before dispatching via Rapid-Poste.
		</p>
		<div class="steps">
			{#each steps as s}
				<div class="step">
					<span class="ic" style="background:{s.c}">{s.i}</span>
					<div>
						<b>{s.t}</b>
						<div class="ar tiny">{s.a}</div>
						<p>{s.d}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="order" class="orderS">
	<div class="wrap center">
		<span class="pill r">♥ ORDER REQUEST FORM</span>
		<h2 class="display h2">Order Your Stickers</h2>
		<p class="ar" style="font-size:20px">سجّل طلبيتك بكل سهولة</p>
		<p class="lead sm">
			We will review your request, reach out on WhatsApp or phone to confirm, and package your
			stickers with love.
		</p>
		<form class="card formc" onsubmit={submit}>
			<div class="note">
				<span>💬</span>
				<div>
					<b>Important note for Custom Stickers:</b> Photos are sent directly via WhatsApp after
					submitting this form. No file upload is required on the website.
					<div class="ar tiny">
						ملاحظة: إذا اخترت ستيكرز بتصاورك، تبعثلنا التصاور مباشرة على واتساب بعد ما تعمّر
						الاستمارة.
					</div>
				</div>
			</div>
			<label
				>Full Name <i class="ar">الاسم واللقب</i> / *<input
					required
					placeholder="e.g. Yasmine Ben Salem"
					bind:value={f.name}
				/></label
			>
			<label
				>Phone Number (WhatsApp) <i class="ar">رقم الهاتف والواتساب</i> / *<input
					required
					type="tel"
					placeholder="+216 -- --- ---"
					bind:value={f.phone}
				/></label
			>
			{#if err}<p class="err" role="alert">{err}</p>{/if}
			<div class="row">
				<label
					>Governorate <i class="ar">الولاية</i> / *<select required bind:value={f.gov}
						><option value="" disabled>Select Governorate / اختار الولاية</option
						>{#each govs as g}<option>{g}</option>{/each}</select
					></label
				>
				<label
					>City / Delegation <i class="ar">المدينة أو المعتمدية</i> / *<input
						required
						placeholder="e.g. La Marsa, Menzah 9, Sousse Ville"
						bind:value={f.city}
					/></label
				>
			</div>
			<label
				>Full Delivery Address <i class="ar">العنوان الكامل للتوصيل</i> / *<textarea
					required
					rows="2"
					placeholder="Street name, building, apartment number, postal code, or nearby landmark..."
					bind:value={f.addr}></textarea></label
			>
			<div class="row r2">
				<label
					>Order Choice <i class="ar">نوع الطلب</i> / *<select required bind:value={f.type}
						><option value="" disabled>Select sticker pack or custom option</option
						>{#each types as t}<option>{t}</option>{/each}</select
					></label
				>
				<label
					>Quantity <i class="ar">الكمية</i> / *<input
						required
						type="number"
						min="1"
						bind:value={f.qty}
					/></label
				>
			</div>
			<label
				>Notes or Special Instructions <i class="ar">ملاحظات إضافية</i> / (Optional)<textarea
					rows="2"
					placeholder="Any special requests, preferred delivery time, or pack customisation details..."
					bind:value={f.notes}></textarea></label
			>
			<button class="btn submit" type="submit"
				>Submit Order Request / أرسل الطلب <span class="arrow">➜</span></button
			>
			{#if sent}<p class="ok" role="status">
					Thanks! Opening WhatsApp to finish your request ✓
				</p>{/if}
			<small>No upfront online payment required. Pay upon confirmation or delivery.</small>
		</form>
	</div>
</section>

<section id="faq" class="faqS">
	<div class="wrap center">
		<p class="eyebrow">WHAT HAPPENS NEXT?</p>
		<h2 class="display h2">Frequently Asked Questions</h2>
		<p class="ar" style="font-size:20px">كل ما تحب تعرفو على الطلب والتوصيل</p>
		<p class="lead sm">
			Clear, friendly answers about how we confirm, print, and deliver your stickers across Tunisia.
		</p>
		<div class="faqs">
			{#each faqs as q, n}
				<div class="card faq" class:open={open === n}>
					<button onclick={() => (open = open === n ? -1 : n)} aria-expanded={open === n}>
						<span class="ic" style="background:var(--yellow)">{q.i}</span>
						<span class="qt"><b>{q.q}</b><span class="ar tiny">{q.a}</span></span>
						<span class="chev">{open === n ? '⌃' : '⌄'}</span>
					</button>
					{#if open === n}<div class="ans">
							<p>{q.p}</p>
							<p class="ar tiny" dir="rtl">{q.pa}</p>
						</div>{/if}
				</div>
			{/each}
		</div>
		<div class="cta">
			<small>HAVE A CUSTOM REQUEST OR QUESTION?</small>
			<p class="ar" style="color:#fff;font-size:18px">عندك استفسار او طلب خاص؟</p>
			<p>
				Reach out to us directly on WhatsApp at <a href="https://wa.me/{WA}"
					>+{WA.replace('216', '216')}</a
				>
			</p>
		</div>
	</div>
</section>

<footer>
	<div class="wrap">
		<div class="banner">
			<div>
				<span class="pill y">✦ Handmade with Love in Tunisia / مصنوع بحب في تونس</span>
				<h3 class="display">
					A little piece of you / <span class="ar" style="color:#fff">قطعة صغيرة منك</span>
				</h3>
				<p>
					Ready-made aesthetic packs or custom stickers crafted from your favorite photos. Fast
					delivery nationwide via Rapid-Poste.
				</p>
				<p class="ar tiny" style="color:var(--yellow)">
					باكات واجدين ولا ستيكرز مخصصين من تصاورك المفضلة. توصيل لكامل تراب الجمهورية بالبريد
					السريع.
				</p>
			</div>
			<a class="btn" href="#order">Place Order / اطلب توا <span class="arrow">➜</span></a>
		</div>
		<div class="brand display">StickeRiri</div>
		<p class="bsub"><b>Tunisian Sticker Shop</b> / <span class="ar">بوتيك ستيكرز تونسي</span></p>
		<div class="cols">
			<div>
				<h4>EXPLORE / <span class="ar">تصفح</span></h4>
				{#each ['Home', 'Shop', 'Ready-Made Packs', 'Make Your Own', 'Gallery', 'About Us', 'Order Form', 'Prices & Delivery'] as l}<a
						href="#order">{l}</a
					>{/each}
			</div>
			<div>
				<h4>HOW IT WORKS / <span class="ar">كيفاش تشتري</span></h4>
				<div class="mini">
					<b>1. Choose & Submit</b><br />Pick a ready pack or custom photo package.
				</div>
				<div class="mini">
					<b>2. WhatsApp Confirmation</b><br />We confirm by phone & you send custom photos on
					WhatsApp.
				</div>
				<div class="mini">
					<b>3. Rapid-Poste Delivery</b><br />Delivery across all governorates.
				</div>
			</div>
			<div>
				<h4>CONTACT & WHATSAPP / <span class="ar">تواصل معنا</span></h4>
				<div class="mini ct">📞 +{WA}</div>
				<a class="mini ct wa" href="https://wa.me/{WA}">💬 WhatsApp for Photos</a>
				<div class="mini ct">✉ stickeriri.shop@gmail.com</div>
			</div>
			<div class="card rp">
				<b>📦 Rapid-Poste Tunisia</b>
				<p>
					We deliver to all 24 Tunisian governorates. Orders are prepared with utmost care and
					delivered straight to your door.
				</p>
				<p class="ar tiny" dir="rtl">توصيل سريع ومضمون لكافة الولايات التونسية الـ 24</p>
				<small>No online payment</small>
			</div>
		</div>
		<div class="copy">
			<span>© 2026 StickeRiri. All rights reserved. <span style="color:var(--red)">♥</span></span
			><span>Tunisia 🇹🇳 تونس · Vinyl & Die-Cut Stickers</span>
		</div>
	</div>
</footer>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--pink);
		border-bottom: 4px solid var(--ink);
	}
	.nav {
		display: flex;
		align-items: center;
		gap: 24px;
		height: 64px;
	}
	.logo {
		font: 800 20px 'Syne';
		letter-spacing: -0.03em;
		color: var(--ink);
		text-decoration: none;
	}
	nav {
		display: flex;
		gap: 22px;
		margin-left: auto;
	}
	nav a {
		color: var(--ink);
		text-decoration: none;
		font-size: 13px;
		font-weight: 600;
	}
	nav a:hover {
		color: var(--red);
	}
	.sm {
		padding: 8px 14px;
		font-size: 13px;
	}
	.burger {
		display: none;
		background: none;
		border: 2.5px solid var(--ink);
		border-radius: 10px;
		font-size: 18px;
		padding: 2px 9px;
		cursor: pointer;
	}
	.center {
		text-align: center;
	}
	.hero {
		background: var(--pink);
		padding: 48px 0 56px;
	}
	.pills {
		display: flex;
		gap: 10px;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 24px;
	}
	.big {
		font-size: clamp(40px, 7vw, 76px);
		max-width: 820px;
		margin: 0 auto;
	}
	.ul {
		display: inline-block;
		border-bottom: 5px solid var(--purple);
		border-radius: 0 0 50% 20%;
		padding-bottom: 2px;
	}
	.sub {
		font-size: clamp(20px, 3vw, 28px);
		margin: 6px 0 14px;
	}
	.lead {
		max-width: 520px;
		margin: 0 auto;
		color: #5a4450;
		font-size: 15px;
	}
	.lead.sm {
		font-size: 14px;
		color: var(--ink);
	}
	.steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin: 36px auto 0;
		max-width: 900px;
		text-align: left;
	}
	.step {
		display: flex;
		gap: 12px;
		background: var(--blush);
		border: 3px solid var(--ink);
		border-radius: 16px;
		box-shadow: var(--sh);
		padding: 14px;
	}
	.step b {
		font-size: 12px;
	}
	.step p {
		font-size: 11px;
		color: #6a5560;
	}
	.ic {
		flex: none;
		width: 34px;
		height: 34px;
		border: 2.5px solid var(--ink);
		border-radius: 50%;
		display: grid;
		place-items: center;
		font-size: 14px;
	}
	.tiny {
		font-size: 11px;
		display: block;
	}
	.orderS {
		padding: 56px 0 72px;
		background: var(--blush);
	}
	.h2 {
		font-size: clamp(34px, 5vw, 52px);
		margin: 12px 0 4px;
	}
	.formc {
		max-width: 720px;
		margin: 36px auto 0;
		padding: 24px;
		background: var(--pink);
		text-align: left;
		display: grid;
		gap: 14px;
	}
	.note {
		display: flex;
		gap: 10px;
		background: var(--cream);
		border: 2.5px solid var(--ink);
		border-radius: 14px;
		padding: 14px;
		font-size: 12px;
	}
	label {
		display: grid;
		gap: 6px;
		font-size: 12px;
		font-weight: 700;
	}
	label i {
		font-style: normal;
		font-weight: 500;
		font-size: 11px;
	}
	input,
	select,
	textarea {
		font: 500 13px 'Plus Jakarta Sans';
		border: 2.5px solid var(--ink);
		border-radius: 14px;
		padding: 12px 14px;
		background: var(--blush);
		color: var(--ink);
		width: 100%;
		box-shadow: inset 0 -3px 0 rgba(42, 15, 30, 0.08);
	}
	textarea {
		resize: vertical;
		min-height: 70px;
	}
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 14px;
	}
	.r2 {
		grid-template-columns: 2fr 1fr;
	}
	.submit {
		width: 100%;
		padding: 14px;
		font-size: 15px;
		background: var(--red);
	}
	.formc small {
		text-align: center;
		font-size: 11px;
		color: #6a5560;
	}
	.err {
		color: var(--red);
		font-size: 12px;
		font-weight: 700;
	}
	.ok {
		color: var(--purple);
		font-weight: 700;
		text-align: center;
		font-size: 13px;
	}
	.faqS {
		background: var(--rose);
		padding: 64px 0;
	}
	.eyebrow {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.18em;
		color: #6a5560;
		margin-bottom: 6px;
	}
	.faqs {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		max-width: 920px;
		margin: 44px auto 0;
		align-items: start;
		text-align: left;
	}
	.faq button {
		all: unset;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 18px;
		width: 100%;
		cursor: pointer;
	}
	.qt {
		flex: 1;
		display: grid;
		font-size: 14px;
	}
	.chev {
		width: 28px;
		height: 28px;
		border: 2px solid var(--ink);
		border-radius: 50%;
		display: grid;
		place-items: center;
		font-size: 14px;
	}
	.open .chev {
		background: var(--red);
		color: #fff;
	}
	.ans {
		padding: 0 18px 18px;
		border-top: 2px solid var(--rose);
		margin: 0 18px;
		padding: 14px 0 18px;
		font-size: 13px;
		color: #5a4450;
		display: grid;
		gap: 8px;
	}
	.cta {
		max-width: 520px;
		margin: 36px auto 0;
		background: var(--purple);
		color: #fff;
		border: 3px solid var(--ink);
		border-radius: 18px;
		box-shadow: var(--sh);
		padding: 18px;
		font-size: 12px;
	}
	.cta a {
		color: var(--yellow);
		font-weight: 700;
	}
	footer {
		background: var(--pink);
		padding: 40px 0 20px;
	}
	.banner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		background: var(--purple);
		color: #fff;
		border: 3px solid var(--ink);
		border-radius: 22px;
		box-shadow: var(--sh);
		padding: 28px;
		font-size: 14px;
	}
	.banner h3 {
		font-size: clamp(22px, 3vw, 30px);
		margin: 10px 0 6px;
		line-height: 1.1;
	}
	.banner .pill {
		font-size: 10px;
		color: var(--ink);
	}
	.brand {
		font-size: clamp(56px, 11vw, 112px);
		margin-top: 36px;
	}
	.bsub {
		font-size: 13px;
		margin-bottom: 28px;
	}
	.cols {
		display: grid;
		grid-template-columns: 1fr 1.2fr 1fr 1fr;
		gap: 28px;
		align-items: start;
	}
	h4 {
		font-size: 10px;
		letter-spacing: 0.14em;
		margin-bottom: 12px;
		font-weight: 700;
	}
	.cols > div > a {
		display: block;
		color: var(--ink);
		text-decoration: none;
		font-size: 12px;
		margin-bottom: 14px;
	}
	.mini {
		display: block;
		background: var(--blush);
		border: 2.5px solid var(--ink);
		border-radius: 12px;
		box-shadow: 3px 3px 0 var(--ink);
		padding: 10px 12px;
		margin-bottom: 12px;
		font-size: 11px;
		color: var(--ink);
		text-decoration: none;
	}
	.ct {
		font-size: 12px;
		padding: 12px;
	}
	.wa {
		background: var(--yellow);
		font-weight: 700;
	}
	.rp {
		padding: 16px;
		font-size: 11px;
		display: grid;
		gap: 8px;
	}
	.copy {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 8px;
		border-top: 2px solid var(--ink);
		margin-top: 36px;
		padding-top: 18px;
		font-size: 11px;
		font-weight: 600;
	}
	@media (max-width: 900px) {
		.steps,
		.faqs {
			grid-template-columns: 1fr;
		}
		.cols {
			grid-template-columns: 1fr 1fr;
		}
		.banner {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	@media (max-width: 720px) {
		.burger {
			display: block;
			margin-left: auto;
			order: 3;
		}
		.nav > .btn {
			display: none;
		}
		nav {
			display: none;
			position: absolute;
			top: 64px;
			left: 0;
			right: 0;
			flex-direction: column;
			background: var(--pink);
			padding: 16px 20px;
			border-bottom: 4px solid var(--ink);
			margin: 0;
		}
		nav.show {
			display: flex;
		}
		.row,
		.r2,
		.cols {
			grid-template-columns: 1fr;
		}
		.formc {
			padding: 16px;
		}
		.copy {
			flex-direction: column;
		}
	}
</style>
