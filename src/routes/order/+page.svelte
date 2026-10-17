<script>
  import { onMount } from 'svelte';
  import { packs, governorates, WHATSAPP_NUMBER } from '$lib/data.js';

  const choices = [...packs.map((pack) => ({ value: pack.id, label: pack.name })), { value: 'custom', label: 'Custom photo stickers / ستيكرز بتصاورك' }];
  let form = $state({ name: '', phone: '', gov: '', city: '', address: '', pack: '', qty: 1, notes: '' });
  let error = $state('');
  let link = $state('');

  onMount(() => {
    const pack = new URLSearchParams(window.location.search).get('pack');
    if (choices.some((choice) => choice.value === pack)) form.pack = pack;
  });

  function submit(event) {
    event.preventDefault();
    error = '';
    link = '';
    const digits = form.phone.replace(/[\s.()-]/g, '');
    if (!/^(?:\+216|216)?[2594]\d{7}$/.test(digits)) {
      error = 'Please enter a valid Tunisian mobile number. / الرجاء إدخال رقم هاتف تونسي صحيح';
      return;
    }
    const selected = choices.find((choice) => choice.value === form.pack);
    if (!selected || !form.name.trim() || !form.gov || !form.city.trim() || !form.address.trim() || !Number.isInteger(Number(form.qty)) || Number(form.qty) < 1) {
      error = 'Please fill in all required fields. / الرجاء تعمير الخانات الإجبارية';
      return;
    }
    const message = [
      '🌸 New StickeRiri order request',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Governorate: ${form.gov}`,
      `City: ${form.city.trim()}`,
      `Address: ${form.address.trim()}`,
      `Pack: ${selected.label}`,
      `Quantity: ${form.qty}`,
      `Notes: ${form.notes.trim() || '-'}`,
      form.pack === 'custom' ? 'I will send my photos here on WhatsApp.' : ''
    ].filter(Boolean).join('\n');
    link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    // Keep a clickable fallback if the browser blocks the new tab.
    window.open(link, '_blank', 'noopener,noreferrer');
  }
</script>

<svelte:head>
  <title>Place Your Order | StickeRiri</title>
  <meta name="description" content="Order your favorite ready-made or custom StickeRiri sticker pack and confirm delivery by WhatsApp." />
</svelte:head>

<div class="order-page">
  <header class="order-page-header"><div class="container"><a class="wordmark" href="/">StickeRiri</a><a class="back-shop" href="/">← Back to Shop</a></div></header>
  <main class="order-layout">
    <div class="order-header-text"><span class="eyebrow-pill yellow">✺ EASY ORDERING · RAPID-POSTE NATIONWIDE</span><h1>Let's get your stickers!</h1><p lang="ar" dir="rtl">اختار الستيكرز متاعك وعمّر استمارة الطلب</p><p>No online payment required. We confirm your order directly on WhatsApp.</p></div>
    <div class="order-panel">
      <div class="form-note">💬 <b>Important for custom stickers:</b> after submitting your request, send your photos directly in WhatsApp. <span lang="ar" dir="rtl">إذا تحب ستيكرز مخصصين، ابعث التصاور على واتساب بعد الطلب.</span></div>
      <form onsubmit={submit}>
        <div class="form-grid">
          <label class="form-field"><span>Full name * <span class="arabic-label">الاسم واللقب</span></span><input required autocomplete="name" placeholder="e.g. Yasmine Ben Salem" bind:value={form.name} /></label>
          <label class="form-field"><span>Phone / WhatsApp * <span class="arabic-label">رقم الهاتف</span></span><input required type="tel" inputmode="tel" autocomplete="tel" placeholder="+216 12 345 678" bind:value={form.phone} /></label>
          <label class="form-field"><span>Governorate * <span class="arabic-label">الولاية</span></span><select required bind:value={form.gov}><option value="" disabled>Select your governorate</option>{#each governorates as gov}<option value={gov}>{gov}</option>{/each}</select></label>
          <label class="form-field"><span>City / Delegation * <span class="arabic-label">المدينة / المعتمدية</span></span><input required autocomplete="address-level2" placeholder="e.g. La Marsa" bind:value={form.city} /></label>
          <label class="form-field wide"><span>Delivery address * <span class="arabic-label">العنوان الكامل</span></span><textarea required rows="2" autocomplete="street-address" placeholder="Street, building, apartment, landmarks..." bind:value={form.address}></textarea></label>
          <label class="form-field"><span>Sticker pack * <span class="arabic-label">الباك</span></span><select required bind:value={form.pack}><option value="" disabled>Choose your stickers</option>{#each choices as choice}<option value={choice.value}>{choice.label}</option>{/each}</select></label>
          <label class="form-field"><span>Quantity * <span class="arabic-label">الكمية</span></span><input required type="number" min="1" step="1" bind:value={form.qty} /></label>
          <label class="form-field wide"><span>Notes / requests <span class="arabic-label">ملاحظات إضافية</span></span><textarea rows="3" placeholder="Anything else we should know?" bind:value={form.notes}></textarea></label>
        </div>
        {#if error}<p class="form-error" role="alert">{error}</p>{/if}
        <button class="btn btn-primary order-submit" type="submit">Continue on WhatsApp <span class="arrow" aria-hidden="true">➜</span></button>
        {#if link}<p class="form-footnote" role="status">WhatsApp didn't open? <a href={link} target="_blank" rel="noopener noreferrer"><b>Tap here to finish sending your order</b></a>.</p>{/if}
        <p class="form-footnote">Your request is not sent until you confirm the message in WhatsApp. We will contact you to confirm availability, price, and delivery.</p>
      </form>
    </div>
    <section class="delivery-info" id="delivery"><h2>Delivery &amp; prices / التوصيل والأسعار</h2><p>We use Rapid-Poste to deliver across Tunisia's 24 governorates. Your pack price, shipping fee, and payment method are confirmed by the shop before dispatch. You do not pay online on this website.</p><p dir="rtl" lang="ar">نوصلوا بالبريد السريع لكامل تراب الجمهورية. نأكدولك السعر ومصاريف التوصيل وطريقة الخلاص قبل إرسال الطلب.</p><a class="btn btn-light" href="/">← Browse more packs</a></section>
  </main>
</div>
