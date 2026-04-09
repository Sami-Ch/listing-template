/* eslint-disable */
// Auto-generated — do not edit manually
export const rawTemplates: Record<string, string> = {
  'luxe_noir': `<!DOCTYPE html><html lang="en"><head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Luxe Noir - Premium Perfume Listing</title>
		<!-- System Fonts for eBay Compliance -->
		<style>
		:root {
			--c-background: #0a0a0a;
			--c-primary: #d4af37;
			--c-foreground: #ffffff;
			--c-secondary: #a0a0a0;
			--accent-gold: var(--c-primary);
			--text-main: var(--c-foreground);
			--text-dim: var(--c-secondary);
			--border-color: color-mix(
				in srgb,
				var(--c-secondary) 40%,
				var(--c-background)
			);
			--font-serif: Georgia, "Times New Roman", Times, serif;
			--font-sans: Arial, Helvetica, sans-serif;
		}

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			background-color: #0a0a0a;
			color: var(--text-main);
			font-family: var(--font-sans);
			line-height: 1.6;
		}

		.listing-container {
			max-width: 1000px;
			margin: 0 auto;
			background-color: var(--c-background);
			border: 1px solid var(--border-color);
		}

		/* HEADER */
		.header {
			padding: 40px 20px;
			text-align: center;
			border-bottom: 1px solid var(--border-color);
		}

		.logo {
			max-width: 250px;
			margin-bottom: 20px;
		}

		.nav {
			display: flex;
			justify-content: center;
			gap: 25px;
			list-style: none;
			text-transform: uppercase;
			font-size: 12px;
			letter-spacing: 2px;
			color: var(--accent-gold);
		}

		.nav li a {
			color: inherit;
			text-decoration: none;
			transition: opacity 0.3s;
		}

		.nav li a:hover {
			opacity: 0.7;
		}

		/* BADGES */
		.trust-badges {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			padding: 20px;
			background-color: color-mix(in srgb, #000000 65%, var(--c-background));
			border-bottom: 1px solid var(--border-color);
			text-align: center;
		}

		.badge-item {
			font-size: 11px;
			text-transform: uppercase;
			letter-spacing: 1px;
			color: var(--text-dim);
		}

		/* HERO SECTION */
		.hero {
			display: flex;
			gap: 40px;
			padding: 50px 40px;
			align-items: center;
		}

		.product-image-container {
			flex: 1;
			text-align: center;
		}

		.product-main-image {
			max-width: 100%;
			height: auto;
			border: 1px solid var(--border-color);
			box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
		}

		.product-info {
			flex: 1;
		}

		.hero.hero--image-right {
			flex-direction: row-reverse;
		}

		.product-brand {
			font-family: var(--font-serif);
			font-size: 24px;
			color: var(--accent-gold);
			margin-bottom: 10px;
			font-style: italic;
		}

		.product-title {
			font-family: var(--font-serif);
			font-size: 42px;
			line-height: 1.1;
			margin-bottom: 20px;
			color: var(--text-main);
		}

		.item-specifics {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 15px;
			margin-top: 30px;
			padding-top: 30px;
			border-top: 1px solid var(--border-color);
		}

		.spec-item {
			font-size: 13px;
		}

		.spec-label {
			color: var(--text-dim);
			text-transform: uppercase;
			font-size: 10px;
			letter-spacing: 1px;
			display: block;
		}

		.spec-value {
			font-weight: 600;
			color: var(--text-main);
		}

		/* DESCRIPTION */
		.section-title {
			font-family: var(--font-serif);
			font-size: 28px;
			text-align: center;
			margin-bottom: 30px;
			color: var(--accent-gold);
			position: relative;
		}

		.section-title::after {
			content: "";
			display: block;
			width: 50px;
			height: 1px;
			background: var(--accent-gold);
			margin: 15px auto;
		}

		.description-content {
			padding: 60px 40px;
			border-bottom: 1px solid var(--border-color);
		}

		.description-text {
			max-width: 800px;
			margin: 0 auto;
			text-align: center;
			font-size: 16px;
			color: var(--text-dim);
			line-height: 1.8;
		}

		/* INFO TABS */
		.info-grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			border-bottom: 1px solid var(--border-color);
		}

		.info-card {
			padding: 40px;
			border-right: 1px solid var(--border-color);
		}

		.info-card:last-child {
			border-right: none;
		}

		.info-card h3 {
			font-family: var(--font-serif);
			font-size: 20px;
			margin-bottom: 15px;
			color: var(--accent-gold);
		}

		.info-card p,
		.info-card li {
			font-size: 14px;
			color: var(--text-dim);
			margin-bottom: 10px;
		}

		/* FOOTER */
		.footer {
			padding: 40px;
			text-align: center;
			background-color: color-mix(in srgb, #000000 70%, var(--c-background));
		}

		.footer p {
			font-size: 12px;
			color: var(--text-dim);
			letter-spacing: 1px;
		}

		/* RESPONSIVENESS */
		@media (max-width: 768px) {
			.hero {
				flex-direction: column;
				padding: 30px 20px;
			}

			.info-grid {
				grid-template-columns: 1fr;
			}

			.info-card {
				border-right: none;
				border-bottom: 1px solid var(--border-color);
			}

			.trust-badges {
				grid-template-columns: 1fr 1fr;
				gap: 15px;
			}

			.product-title {
				font-size: 32px;
			}
		}
		</style>
	</head>

	<body>
		<div class="listing-container">
			<!-- HEADER -->
			<header class="header" data-customizer-section="section_0">
				<img src="/assets/aura-nest-beatuy-logo.jpeg" alt="Aura Nest Beauty" class="logo" data-customizer-element="image_0">
				<nav>
					<ul class="nav">
						<li><a href="#" data-customizer-element="link_0">Store Home</a></li>
						<li><a href="#" data-customizer-element="link_1">New Arrivals</a></li>
						<li><a href="#" data-customizer-element="link_2">Ending Soon</a></li>
						<li><a href="#" data-customizer-element="link_3">Feedback</a></li>
						<li><a href="#" data-customizer-element="link_4">About Us</a></li>
					</ul>
				</nav>
			</header>

			<!-- TRUST BADGES -->
			<div class="trust-badges" data-customizer-section="section_1">
				<div class="badge-item" data-customizer-element="text_0">✨ 100% Authentic</div>
				<div class="badge-item" data-customizer-element="text_1">🚚 Fast &amp; Free Shipping</div>
				<div class="badge-item" data-customizer-element="text_2">↩ 30-Day Returns</div>
				<div class="badge-item" data-customizer-element="text_3">🏆 Top Rated Plus</div>
			</div>

			<!-- MAIN PRODUCT INFO -->
			<main class="hero" data-customizer-section="section_2">
				<div class="product-image-container">
					<img src="/assets/luxe_bottle.png" alt="Aura D'Or Paris" class="product-main-image" data-customizer-element="image_0">
				</div>
				<div class="product-info">
					<div class="product-brand" data-customizer-element="text_0">Burberry</div>
					<h1 class="product-title" data-customizer-element="text_1">
						BURBERRY BRIT FOR HER <br>by Burberry Perfume
					</h1>

					<div class="item-specifics">
						<div class="spec-item">
							<span class="spec-label" data-customizer-element="text_2">Fragrance Name</span>
							<span class="spec-value" data-customizer-element="text_3">Burberry Brit</span>
						</div>
						<div class="spec-item">
							<span class="spec-label" data-customizer-element="text_4">Size</span>
							<span class="spec-value" data-customizer-element="text_5">3.3 fl oz / 100 ml</span>
						</div>
						<div class="spec-item">
							<span class="spec-label" data-customizer-element="text_6">Concentration</span>
							<span class="spec-value" data-customizer-element="text_7">Eau de Parfum</span>
						</div>
						<div class="spec-item">
							<span class="spec-label" data-customizer-element="text_8">Condition</span>
							<span class="spec-value" data-customizer-element="text_9">Brand New / Tester</span>
						</div>
						<div class="spec-item">
							<span class="spec-label" data-customizer-element="text_10">Gender</span>
							<span class="spec-value" data-customizer-element="text_11">Women</span>
						</div>
						<div class="spec-item">
							<span class="spec-label" data-customizer-element="text_12">Package Type</span>
							<span class="spec-value" data-customizer-element="text_13">Retail Boxed</span>
						</div>
					</div>
				</div>
			</main>

			<!-- DESCRIPTION -->
			<section class="description-content" data-customizer-section="section_3">
				<h2 class="section-title" data-customizer-element="text_0">The Fragrance Story</h2>
				<div class="description-text">
					<p data-customizer-element="text_1">
						The Brit girl embodies the playful British spirit of individuality.
						She's outrageous but always charming and unpredictably sexy. Fresh
						and playful the fragrance is a classic green-oriental blend of lush
						fruits sweet nutty essences and soothing amber vanilla and Tonka
						bean.
					</p>
				</div>
			</section>

			<!-- ADDITIONAL INFO -->
			<div class="info-grid" data-customizer-section="section_4">
				<div class="info-card">
					<h3 data-customizer-element="text_0">What is a Tester?</h3>
					<p data-customizer-element="text_1">
						Testers are the same original fragrances that you find in full size
						perfume bottles. Fragrance companies manufacture testers to promote
						their products.
					</p>
					<p data-customizer-element="text_2">
						They may come in variety of packing - some come with simple white,
						brown box or unboxed with or without a cap. They are 100% authentic,
						fresh and completely full.
					</p>
				</div>
				<div class="info-card">
					<h3 data-customizer-element="text_3">Shipping Policy</h3>
					<ul>
						<li data-customizer-element="text_4">We ship all orders the same day or next business day.</li>
						<li data-customizer-element="text_5">
							Once an order is shipped, we will email you a tracking number.
						</li>
						<li data-customizer-element="text_6">
							Secure packaging to ensure your bottle arrives in perfect
							condition.
						</li>
						<li data-customizer-element="text_7">
							We ship to all USA states including Puerto Rico, Hawaii, Alaska.
						</li>
					</ul>
				</div>
			</div>

			<!-- FOOTER -->
			<footer class="footer" data-customizer-section="section_5">
				<span class="footer-line" data-customizer-element="text_0">© 2026 Aura Nest Beauty. All Rights Reserved. |
				</span>
				<a href="#" style="color: var(--accent-gold); text-decoration: none;" data-customizer-element="link_0">Contact Us</a>
			</footer>
		</div>
	

</body></html>`,
  'crystal_clean': `<!DOCTYPE html><html lang="en"><head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Crystal Clean - Minimalist Perfume Listing</title>
		<!-- System Fonts for eBay Compliance -->
		<style>
		:root {
			--c-background: #ffffff;
			--c-primary: #333333;
			--c-foreground: #222222;
			--c-secondary: #666666;
			--primary-bg: var(--c-background);
			--secondary-bg: color-mix(
				in srgb,
				var(--c-secondary) 8%,
				var(--c-background)
			);
			--accent-color: var(--c-primary);
			--text-main: var(--c-foreground);
			--text-dim: var(--c-secondary);
			--border-color: color-mix(in srgb, var(--c-secondary) 18%, #ffffff);
			--font-serif: Georgia, "Times New Roman", Times, serif;
			--font-sans: Arial, Helvetica, sans-serif;
		}

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			background-color: #e5e5e5;
			color: var(--text-main);
			font-family: var(--font-sans);
			line-height: 1.5;
		}

		.listing-container {
			max-width: 1000px;
			margin: 40px auto;
			background-color: var(--primary-bg);
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
			border-radius: 4px;
			overflow: hidden;
		}

		/* HEADER */
		.header {
			padding: 50px 20px;
			text-align: center;
			background-color: var(--primary-bg);
		}

		.logo {
			max-width: 220px;
			margin-bottom: 30px;
		}

		.nav {
			display: flex;
			justify-content: center;
			gap: 30px;
			list-style: none;
			border-top: 1px solid var(--border-color);
			border-bottom: 1px solid var(--border-color);
			padding: 15px 0;
		}

		.nav li a {
			color: var(--text-main);
			text-decoration: none;
			font-size: 11px;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 1.5px;
			transition: color 0.3s;
		}

		.nav li a:hover {
			color: var(--text-dim);
		}

		/* HERO SECTION */
		.hero {
			display: grid;
			grid-template-columns: 1.2fr 1fr;
			padding: 60px 40px;
			gap: 60px;
		}

		.product-image-container {
			position: relative;
		}

		.product-main-image {
			width: 100%;
			height: auto;
			border-radius: 2px;
		}

		.product-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.hero.hero--image-right .product-image-container {
			order: 2;
		}

		.hero.hero--image-right .product-info {
			order: 1;
		}

		.product-brand {
			font-size: 14px;
			letter-spacing: 3px;
			text-transform: uppercase;
			color: var(--text-dim);
			margin-bottom: 10px;
			font-weight: 300;
		}

		.product-title {
			font-family: var(--font-serif);
			font-size: 36px;
			font-weight: 400;
			color: var(--text-main);
			margin-bottom: 25px;
			line-height: 1.2;
		}

		.trust-badges {
			display: flex;
			gap: 15px;
			margin-bottom: 30px;
		}

		.badge {
			font-size: 10px;
			padding: 5px 10px;
			background: var(--secondary-bg);
			border: 1px solid var(--border-color);
			text-transform: uppercase;
			letter-spacing: 1px;
		}

		.specs-list {
			list-style: none;
		}

		.spec-row {
			display: flex;
			justify-content: space-between;
			padding: 12px 0;
			border-bottom: 1px solid var(--border-color);
			font-size: 13px;
		}

		.spec-label {
			font-weight: 600;
			color: var(--text-dim);
		}

		/* DESCRIPTION SECTION */
		.description-box {
			padding: 60px 40px;
			background-color: var(--secondary-bg);
			text-align: center;
		}

		.section-header {
			font-family: var(--font-serif);
			font-size: 24px;
			margin-bottom: 20px;
			font-weight: 400;
		}

		.description-text {
			max-width: 700px;
			margin: 0 auto;
			font-size: 15px;
			color: var(--text-dim);
			line-height: 1.8;
			font-weight: 300;
		}

		/* INFO SECTIONS */
		.info-container {
			display: flex;
			flex-wrap: wrap;
		}

		.info-section {
			flex: 1;
			min-width: 300px;
			padding: 50px 40px;
			border-right: 1px solid var(--border-color);
		}

		.info-section:last-child {
			border-right: none;
		}

		.info-section h3 {
			font-size: 14px;
			text-transform: uppercase;
			letter-spacing: 2px;
			margin-bottom: 20px;
			color: var(--text-main);
		}

		.info-content {
			font-size: 13px;
			color: var(--text-dim);
		}

		.info-content ul {
			padding-left: 15px;
		}

		.info-content li {
			margin-bottom: 10px;
		}

		/* FOOTER */
		.footer {
			padding: 40px;
			text-align: center;
			border-top: 1px solid var(--border-color);
			font-size: 11px;
			color: var(--text-dim);
			letter-spacing: 1px;
			text-transform: uppercase;
		}

		/* RESPONSIVENESS */
		@media (max-width: 850px) {
			.hero {
				grid-template-columns: 1fr;
				padding: 40px 20px;
			}

			.info-section {
				border-right: none;
				border-bottom: 1px solid var(--border-color);
			}

			.product-title {
				font-size: 30px;
			}
		}
		</style>
	</head>

	<body>
		<div class="listing-container">
			<!-- HEADER -->
			<header class="header" data-customizer-section="section_0">
				<img src="/assets/aura-nest-beatuy-logo.jpeg" alt="Aura Nest Beauty" class="logo" data-customizer-element="image_0">
				<nav>
					<ul class="nav">
						<li><a href="#" data-customizer-element="link_0">Shop</a></li>
						<li><a href="#" data-customizer-element="link_1">About</a></li>
						<li><a href="#" data-customizer-element="link_2">Feedback</a></li>
						<li><a href="#" data-customizer-element="link_3">Contact</a></li>
					</ul>
				</nav>
			</header>

			<!-- PRODUCT HERO -->
			<section class="hero" data-customizer-section="section_1">
				<div class="product-image-container">
					<img src="/assets/minimalist_bottle.png" alt="Aeterna Eau De Parfum" class="product-main-image" data-customizer-element="image_0">
				</div>
				<div class="product-info">
					<div class="product-brand" data-customizer-element="text_0">Signature Collection</div>
					<h1 class="product-title" data-customizer-element="text_1">
						Burberry Brit for Her <br>by Burberry Perfume
					</h1>

					<div class="trust-badges">
						<span class="badge" data-customizer-element="text_2">Authentic</span>
						<span class="badge" data-customizer-element="text_3">Fast Shipping</span>
						<span class="badge" data-customizer-element="text_4">Best Price</span>
					</div>

					<div class="specs-list">
						<div class="spec-row">
							<span class="spec-label" data-customizer-element="text_5">Size</span>
							<span class="spec-value" data-customizer-element="text_6">100ml / 3.3oz</span>
						</div>
						<div class="spec-row">
							<span class="spec-label" data-customizer-element="text_7">Type</span>
							<span class="spec-value" data-customizer-element="text_8">Eau de Parfum</span>
						</div>
						<div class="spec-row">
							<span class="spec-label" data-customizer-element="text_9">Condition</span>
							<span class="spec-value" data-customizer-element="text_10">New in Box</span>
						</div>
						<div class="spec-row">
							<span class="spec-label" data-customizer-element="text_11">Gender</span>
							<span class="spec-value" data-customizer-element="text_12">Women</span>
						</div>
					</div>
				</div>
			</section>

			<!-- DESCRIPTION -->
			<section class="description-box" data-customizer-section="section_2">
				<h2 class="section-header" data-customizer-element="text_0">Description</h2>
				<div class="description-text" data-customizer-element="text_1">
					Experience the essence of British style. Burberry Brit for Her is a
					fragrance that is both traditional and modern, featuring an oriental
					floral blend that opens with notes of lime and pear, settling into a
					heart of almond and peony, grounded by base notes of vanilla and tonka
					bean.
				</div>
			</section>

			<!-- INFO SECTIONS -->
			<div class="info-container" data-customizer-section="section_3">
				<div class="info-section">
					<h3 data-customizer-element="text_0">Tester Information</h3>
					<div class="info-content" data-customizer-element="text_1">
						Testers are original fragrances but often come in simpler packaging.
						They are exactly the same high-quality liquid, offering you the best
						value for your favorite scent.
					</div>
				</div>
				<div class="info-section">
					<h3 data-customizer-element="text_2">Authenticity</h3>
					<div class="info-content" data-customizer-element="text_3">
						We guarantee 100% authenticity on every item we sell. Our products
						are sourced directly from authorized distributors or the brands
						themselves.
					</div>
				</div>
				<div class="info-section">
					<h3 data-customizer-element="text_4">Returns Policy</h3>
					<div class="info-content">
						<ul>
							<li data-customizer-element="text_5">30-day hassle-free returns</li>
							<li data-customizer-element="text_6">Securely packaged shipments</li>
							<li data-customizer-element="text_7">Professional customer support</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- FOOTER -->
			<footer class="footer" data-customizer-section="section_4">
				<p class="footer-line" data-customizer-element="text_0">© 2026 Aura Nest Beauty. All rights reserved.</p>
			</footer>
		</div>
	

</body></html>`,
  'floral_essence': `<!DOCTYPE html><html lang="en"><head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Floral Essence - Romantic Perfume Listing</title>
		<!-- System Fonts for eBay Compliance -->
		<style>
		:root {
			--c-background: #fffbfb;
			--c-primary: #b86b6b;
			--c-foreground: #4a4a4a;
			--c-secondary: #7a7a7a;
			--primary-bg: var(--c-background);
			--secondary-bg: color-mix(
				in srgb,
				var(--c-primary) 12%,
				var(--c-background)
			);
			--accent-pink: color-mix(in srgb, var(--c-primary) 22%, #ffffff);
			--accent-text: var(--c-primary);
			--text-main: var(--c-foreground);
			--text-dim: var(--c-secondary);
			--border-color: color-mix(in srgb, var(--c-primary) 20%, #ffffff);
			--font-serif: Georgia, "Times New Roman", Times, serif;
			--font-sans: Arial, Helvetica, sans-serif;
		}

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			background-color: #ece8e8;
			color: var(--text-main);
			font-family: var(--font-serif);
			line-height: 1.6;
		}

		.listing-container {
			max-width: 1000px;
			margin: 30px auto;
			background-color: var(--primary-bg);
			border: 8px solid white;
			box-shadow: 0 15px 50px rgba(0, 0, 0, 0.03);
		}

		/* HEADER */
		.header {
			padding: 60px 20px;
			text-align: center;
			background: linear-gradient(
				to bottom,
				var(--secondary-bg),
				var(--primary-bg)
			);
		}

		.logo {
			max-width: 250px;
			margin-bottom: 20px;
		}

		.tagline {
			font-family: var(--font-serif);
			font-size: 26px;
			font-style: italic;
			color: var(--accent-text);
			margin-bottom: 30px;
		}

		.nav {
			display: flex;
			justify-content: center;
			gap: 40px;
			list-style: none;
			font-family: var(--font-sans);
			font-size: 13px;
			text-transform: uppercase;
			letter-spacing: 2px;
		}

		.nav li a {
			color: var(--text-dim);
			text-decoration: none;
			transition: color 0.3s;
		}

		.nav li a:hover {
			color: var(--accent-text);
		}

		/* HERO SECTION */
		.hero {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 40px;
			background-color: white;
			align-items: center;
		}

		.image-side {
			padding: 20px;
		}

		.main-image {
			width: 100%;
			height: auto;
			border: 1px solid var(--border-color);
			border-radius: 100px 100px 0 0;
			padding: 10px;
		}

		.content-side {
			padding: 0 40px;
		}

		.hero.hero--image-right .image-side {
			order: 2;
		}

		.hero.hero--image-right .content-side {
			order: 1;
		}

		.brand-name {
			font-family: var(--font-sans);
			font-size: 14px;
			text-transform: uppercase;
			letter-spacing: 4px;
			color: var(--accent-text);
			margin-bottom: 15px;
		}

		.product-name {
			font-size: 40px;
			line-height: 1.2;
			margin-bottom: 20px;
			font-style: italic;
		}

		.badges-row {
			display: flex;
			gap: 15px;
			margin-bottom: 30px;
		}

		.badge-pill {
			background-color: var(--secondary-bg);
			border: 1px solid var(--border-color);
			padding: 5px 15px;
			font-size: 11px;
			text-transform: uppercase;
			letter-spacing: 1px;
			color: var(--accent-text);
			border-radius: 20px;
		}

		/* DATA GRID */
		.data-grid {
			border-top: 1px solid var(--border-color);
			padding-top: 25px;
		}

		.data-row {
			display: flex;
			margin-bottom: 12px;
			font-size: 14px;
		}

		.data-label {
			width: 130px;
			color: var(--text-dim);
			font-family: var(--font-sans);
			text-transform: uppercase;
			font-size: 11px;
			letter-spacing: 1px;
		}

		.data-value {
			font-weight: 700;
		}

		/* DESCRIPTION SECTION */
		.description-banner {
			background-color: var(--secondary-bg);
			padding: 80px 40px;
			text-align: center;
			border-top: 1px solid var(--border-color);
			border-bottom: 1px solid var(--border-color);
		}

		.section-heart {
			color: var(--accent-text);
			font-size: 24px;
			margin-bottom: 15px;
		}

		.floral-title {
			font-family: var(--font-serif);
			font-size: 34px;
			font-style: italic;
			margin-bottom: 20px;
			color: var(--accent-text);
		}

		.banner-text {
			max-width: 650px;
			margin: 0 auto;
			font-size: 17px;
			font-style: italic;
			color: var(--text-dim);
			line-height: 1.8;
		}

		/* INFO BLOCKS */
		.info-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}

		.info-box {
			padding: 40px;
			border-right: 1px solid var(--border-color);
			text-align: center;
		}

		.info-box:last-child {
			border-right: none;
		}

		.info-box h4 {
			font-size: 13px;
			text-transform: uppercase;
			letter-spacing: 2px;
			margin-bottom: 15px;
			color: var(--accent-text);
		}

		.info-box p {
			font-size: 13px;
			color: var(--text-dim);
			line-height: 1.7;
		}

		/* FOOTER */
		.footer {
			padding: 50px;
			text-align: center;
			font-size: 12px;
			color: var(--text-dim);
			background: linear-gradient(
				to top,
				var(--secondary-bg),
				var(--primary-bg)
			);
		}

		@media (max-width: 800px) {
			.hero {
				grid-template-columns: 1fr;
			}

			.info-grid {
				grid-template-columns: 1fr;
			}

			.info-box {
				border-right: none;
				border-bottom: 1px solid var(--border-color);
			}

			.content-side {
				margin-top: 30px;
			}
		}
		</style>
	</head>

	<body>
		<div class="listing-container">
			<!-- HEADER -->
			<header class="header" data-customizer-section="section_0">
				<img src="/assets/aura-nest-beatuy-logo.jpeg" alt="Aura Nest Beauty" class="logo" data-customizer-element="image_0">
				<div class="tagline" data-customizer-element="text_0">Elegance in every drop...</div>
				<nav>
					<ul class="nav">
						<li><a href="#" data-customizer-element="link_0">Fragrances</a></li>
						<li><a href="#" data-customizer-element="link_1">Our Story</a></li>
						<li><a href="#" data-customizer-element="link_2">Reviews</a></li>
						<li><a href="#" data-customizer-element="link_3">Help Center</a></li>
					</ul>
				</nav>
			</header>

			<!-- PRODUCT DETAIL -->
			<div class="hero" data-customizer-section="section_1">
				<div class="image-side">
					<img src="/assets/floral_bottle.png" alt="Fleur D'Amour" class="main-image" data-customizer-element="image_0">
				</div>
				<div class="content-side">
					<div class="brand-name" data-customizer-element="text_0">Burberry England</div>
					<h1 class="product-name" data-customizer-element="text_1">Brit for Her <br>Oriental Floral</h1>

					<div class="badges-row">
						<span class="badge-pill" data-customizer-element="text_2">Premium Tester</span>
						<span class="badge-pill" data-customizer-element="text_3">Free Delivery</span>
					</div>

					<div class="data-grid">
						<div class="data-row">
							<span class="data-label" data-customizer-element="text_4">Notes</span>
							<span class="data-value" data-customizer-element="text_5">Lime, Pear, Almond, Peony</span>
						</div>
						<div class="data-row">
							<span class="data-label" data-customizer-element="text_6">Size</span>
							<span class="data-value" data-customizer-element="text_7">100 ml / 3.4 oz</span>
						</div>
						<div class="data-row">
							<span class="data-label" data-customizer-element="text_8">Form</span>
							<span class="data-value" data-customizer-element="text_9">Natural Spray</span>
						</div>
						<div class="data-row">
							<span class="data-label" data-customizer-element="text_10">Status</span>
							<span class="data-value" data-customizer-element="text_11">New / Boxed</span>
						</div>
					</div>
				</div>
			</div>

			<!-- STORY SECTION -->
			<section class="description-banner" data-customizer-section="section_2">
				<div class="section-heart" data-customizer-element="text_0">❦</div>
				<h2 class="floral-title" data-customizer-element="text_1">A Romantic Journey</h2>
				<p class="banner-text" data-customizer-element="text_2">
					Step into a world of blooming elegance. Burberry Brit for Her captures
					the essence of a sun-drenched garden, where the sweetness of pear
					meets the delicate crush of white peonies and warm vanilla. A scent
					designed for the woman who is effortlessly chic and always charming.
				</p>
			</section>

			<!-- TRUST BLOCKS -->
			<div class="info-grid" data-customizer-section="section_3">
				<div class="info-box">
					<h4 data-customizer-element="text_0">Tester Detail</h4>
					<p data-customizer-element="text_1">
						Our testers are 100% genuine and never used. They offer the same
						luxury experience as full retail packaging but at a price that lets
						you indulge in more of what you love.
					</p>
				</div>
				<div class="info-box">
					<h4 data-customizer-element="text_2">Bespoke Care</h4>
					<p data-customizer-element="text_3">
						Every bottle is hand-inspected and wrapped with the utmost care to
						ensure it arrives at your doorstep in pristine condition, ready for
						its first spray.
					</p>
				</div>
				<div class="info-box">
					<h4 data-customizer-element="text_4">Our Promise</h4>
					<p data-customizer-element="text_5">
						Return any product within 30 days if it's not the perfect fit for
						your collection. We believe in beauty without compromise.
					</p>
				</div>
			</div>

			<!-- FOOTER -->
			<footer class="footer" data-customizer-section="section_4">
				<p data-customizer-element="text_0">© 2026 Aura Nest Beauty - Pure Elegance, Timeless Scent</p>
			</footer>
		</div>
	

</body></html>`,
  'vintage_boutique': `<!DOCTYPE html><html lang="en"><head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Vintage Boutique - Artisanal Perfume Listing</title>
		<!-- System Fonts for eBay Compliance -->
		<style>
		:root {
			--c-background: #fdfaf4;
			--c-primary: #8e735b;
			--c-foreground: #2c2520;
			--c-secondary: #5a524a;
			--paper-bg: var(--c-background);
			--ink-color: var(--c-foreground);
			--accent-sepia: var(--c-primary);
			--border-ink: color-mix(
				in srgb,
				var(--c-foreground) 55%,
				var(--c-background)
			);
			--font-display: Georgia, "Times New Roman", Times, serif;
			--font-body: Georgia, "Times New Roman", Times, serif;
			--font-accent: Georgia, "Times New Roman", Times, serif;
		}

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			background-color: #e8e4dc;
			color: var(--ink-color);
			font-family: var(--font-body);
			line-height: 1.6;
		}

		.listing-container {
			max-width: 1000px;
			margin: 40px auto;
			background-color: var(--paper-bg);
			border: 1px solid #dcd3c1;
			box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
			padding: 2px;
			/* For double border effect */
		}

		.inner-container {
			border: 4px double var(--border-ink);
			padding: 40px;
			position: relative;
		}

		/* ORNAMENTAL CORNERS */
		.inner-container::before,
		.inner-container::after {
			content: "❦";
			position: absolute;
			font-size: 24px;
			color: var(--accent-sepia);
		}

		.inner-container::before {
			top: 10px;
			left: 10px;
		}

		.inner-container::after {
			bottom: 10px;
			right: 10px;
		}

		/* HEADER */
		.header {
			text-align: center;
			border-bottom: 1px solid #dcd3c1;
			padding-bottom: 40px;
			margin-bottom: 40px;
		}

		.logo {
			max-width: 200px;
			margin-bottom: 15px;
			opacity: 0.9;
		}

		.store-title {
			font-family: var(--font-display);
			font-size: 14px;
			letter-spacing: 4px;
			text-transform: uppercase;
			color: var(--accent-sepia);
		}

		.nav {
			margin-top: 25px;
			display: flex;
			justify-content: center;
			gap: 30px;
			list-style: none;
			font-family: var(--font-accent);
			text-transform: uppercase;
			font-size: 11px;
			letter-spacing: 2px;
		}

		.nav li a {
			color: var(--ink-color);
			text-decoration: none;
			border-bottom: 1px solid transparent;
			transition: border 0.3s;
		}

		.nav li a:hover {
			border-bottom-color: var(--accent-sepia);
		}

		/* PRODUCT HERO */
		.product-hero {
			display: flex;
			gap: 50px;
			margin-bottom: 60px;
			align-items: center;
		}

		.image-frame {
			flex: 1;
			padding: 15px;
			background: white;
			border: 1px solid #e0d9cb;
			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.02);
			transform: rotate(-1deg);
		}

		.product-img {
			width: 100%;
			height: auto;
			filter: sepia(0.2);
		}

		.product-brief {
			flex: 1.2;
		}

		.product-hero.hero--image-right {
			flex-direction: row-reverse;
		}

		.brand-stamp {
			font-family: var(--font-display);
			font-size: 16px;
			color: var(--accent-sepia);
			margin-bottom: 10px;
		}

		.product-title {
			font-family: var(--font-display);
			font-size: 38px;
			line-height: 1.1;
			margin-bottom: 30px;
			font-weight: 700;
			border-bottom: 1px solid var(--accent-sepia);
			display: inline-block;
			padding-bottom: 10px;
		}

		/* SPECS TABLE */
		.specs-table {
			width: 100%;
			border-collapse: collapse;
			font-family: var(--font-accent);
			font-size: 15px;
		}

		.spec-item {
			padding: 10px 0;
			border-bottom: 1px dotted #dcd3c1;
		}

		.spec-name {
			color: var(--accent-sepia);
			font-style: italic;
			width: 120px;
		}

		.spec-content {
			font-weight: 600;
		}

		/* DESCRIPTION */
		.description-wrapper {
			margin-bottom: 60px;
			text-align: center;
			background: #fbf8f0;
			padding: 60px 40px;
			border: 1px dashed #dcd3c1;
		}

		.desc-ornament {
			font-size: 30px;
			color: var(--accent-sepia);
			margin-bottom: 20px;
		}

		.desc-text {
			max-width: 750px;
			margin: 0 auto;
			font-size: 19px;
			font-style: italic;
			color: var(--c-secondary);
			line-height: 1.8;
		}

		/* POLICIES */
		.policies-grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 40px;
			border-top: 1px solid #dcd3c1;
			padding-top: 40px;
		}

		.policy-item h3 {
			font-family: var(--font-display);
			font-size: 14px;
			letter-spacing: 2px;
			margin-bottom: 15px;
			color: var(--accent-sepia);
			text-transform: uppercase;
		}

		.policy-item p {
			font-size: 14px;
			color: var(--c-secondary);
		}

		/* FOOTER */
		.footer {
			margin-top: 60px;
			padding-top: 30px;
			text-align: center;
			border-top: 1px solid #dcd3c1;
			font-family: var(--font-display);
			font-size: 10px;
			letter-spacing: 3px;
			color: var(--accent-sepia);
		}

		@media (max-width: 800px) {
			.product-hero {
				flex-direction: column;
			}

			.policies-grid {
				grid-template-columns: 1fr;
			}

			.inner-container {
				padding: 20px;
			}

			.product-title {
				font-size: 30px;
			}
		}
		</style>
	</head>

	<body>
		<div class="listing-container">
			<div class="inner-container">
				<!-- HEADER -->
				<header class="header" data-customizer-section="section_0">
					<img src="/assets/aura-nest-beatuy-logo.jpeg" alt="Aura Nest Beauty" class="logo" data-customizer-element="image_0">
					<div class="store-title" data-customizer-element="text_0">Established MMXXVI</div>
					<nav>
						<ul class="nav">
							<li><a href="#" data-customizer-element="link_0">The Archive</a></li>
							<li><a href="#" data-customizer-element="link_1">About Us</a></li>
							<li><a href="#" data-customizer-element="link_2">Testimonials</a></li>
							<li><a href="#" data-customizer-element="link_3">Inquiry</a></li>
						</ul>
					</nav>
				</header>

				<!-- PRODUCT SECTION -->
				<section class="product-hero" data-customizer-section="section_1">
					<div class="image-frame">
						<img src="/assets/vintage_bottle.png" alt="Burberry Brit Classic" class="product-img" data-customizer-element="image_0">
					</div>
					<div class="product-brief">
						<div class="brand-stamp" data-customizer-element="text_0">House of Burberry</div>
						<h1 class="product-title" data-customizer-element="text_1">
							Brit for Her <br>Classic Eau de Parfum
						</h1>

						<table class="specs-table">
							<tbody><tr>
								<td class="spec-name" data-customizer-element="text_2">Volume</td>
								<td class="spec-content" data-customizer-element="text_3">3.3 fl oz / 100 ml</td>
							</tr>
							<tr>
								<td class="spec-name" data-customizer-element="text_4">Vessel</td>
								<td class="spec-content" data-customizer-element="text_5">Atomiseur / Spray</td>
							</tr>
							<tr>
								<td class="spec-name" data-customizer-element="text_6">Provenance</td>
								<td class="spec-content" data-customizer-element="text_7">United Kingdom</td>
							</tr>
							<tr>
								<td class="spec-name" data-customizer-element="text_8">Condition</td>
								<td class="spec-content" data-customizer-element="text_9">Pristine / Collector's Box</td>
							</tr>
						</tbody></table>
					</div>
				</section>

				<!-- NARRATIVE -->
				<section class="description-wrapper" data-customizer-section="section_2">
					<div class="desc-ornament" data-customizer-element="text_0">❧</div>
					<p class="desc-text" data-customizer-element="text_1">
						"A fragrance that speaks of timeless heritage and modern
						individuality. Burberry Brit for Her captures the essence of the
						English countryside with a delightful blend of icy pear, sugared
						almonds, and lush white peony. It is a scent of quiet confidence and
						effortless grace."
					</p>
				</section>

				<!-- TERMS -->
				<div class="policies-grid" data-customizer-section="section_3">
					<div class="policy-item">
						<h3 data-customizer-element="text_0">The Tester Story</h3>
						<p data-customizer-element="text_1">
							Provenance of our testers is direct from the houses. These are
							original liquids housed in archival boxes, offering the same
							olfactory journey without the retail price premium.
						</p>
					</div>
					<div class="policy-item">
						<h3 data-customizer-element="text_2">Safe Passage</h3>
						<p data-customizer-element="text_3">
							We ensure each vessel is secured with archival-grade protection.
							Should your item not arrive in pristine condition, our 30-day
							return window ensures your peace of mind.
						</p>
					</div>
				</div>

				<!-- FOOTER -->
				<footer class="footer" data-customizer-section="section_4">
					<p class="footer-tagline" data-customizer-element="text_0">
						Aura Nest Beauty - Curators of Fine Scents
					</p>
				</footer>
			</div>
		</div>
	

</body></html>`,
};
