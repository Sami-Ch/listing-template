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
            /* BRAND COLORS - EASY TO EDIT */
            --primary-bg: #0a0a0a;
            --secondary-bg: #111111;
            --accent-gold: #d4af37;
            --text-main: #ffffff;
            --text-dim: #a0a0a0;
            --border-color: #222222;
            --font-serif: 'Georgia', 'Times New Roman', serif;
            --font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--primary-bg);
            color: var(--text-main);
            font-family: var(--font-sans);
            line-height: 1.6;
        }

        .listing-container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: var(--secondary-bg);
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
            background-color: #050505;
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
            content: '';
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
            background-color: #050505;
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
                <h1 class="product-title" data-customizer-element="text_1">BURBERRY BRIT FOR HER <br>by Burberry Perfume</h1>

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
            <div class="description-text" data-customizer-element="text_1">
                <p data-customizer-element="text_2">The Brit girl embodies the playful British spirit of individuality. She's outrageous but always
                    charming and unpredictably sexy. Fresh and playful the fragrance is a classic green-oriental blend
                    of lush fruits sweet nutty essences and soothing amber vanilla and Tonka bean.</p>
            </div>
        </section>

        <!-- ADDITIONAL INFO -->
        <div class="info-grid" data-customizer-section="section_4">
            <div class="info-card">
                <h3 data-customizer-element="text_0">What is a Tester?</h3>
                <p data-customizer-element="text_1">Testers are the same original fragrances that you find in full size perfume bottles. Fragrance
                    companies manufacture testers to promote their products.</p>
                <p data-customizer-element="text_2">They may come in variety of packing - some come with simple white, brown box or unboxed with or
                    without a cap. They are 100% authentic, fresh and completely full.</p>
            </div>
            <div class="info-card">
                <h3 data-customizer-element="text_3">Shipping Policy</h3>
                <ul>
                    <li data-customizer-element="text_4">We ship all orders the same day or next business day.</li>
                    <li data-customizer-element="text_5">Once an order is shipped, we will email you a tracking number.</li>
                    <li data-customizer-element="text_6">Secure packaging to ensure your bottle arrives in perfect condition.</li>
                    <li data-customizer-element="text_7">We ship to all USA states including Puerto Rico, Hawaii, Alaska.</li>
                </ul>
            </div>
        </div>

        <!-- FOOTER -->
        <footer class="footer" data-customizer-section="section_5">
            <p data-customizer-element="text_0">© 2026 Aura Nest Beauty. All Rights Reserved. | <a href="#" style="color: var(--accent-gold); text-decoration: none;" data-customizer-element="link_0">Contact Us</a></p>
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
            /* BRAND COLORS - EASY TO EDIT */
            --primary-bg: #ffffff;
            --secondary-bg: #f9f9f9;
            --accent-color: #333333;
            --text-main: #222222;
            --text-dim: #666666;
            --border-color: #eeeeee;
            --font-serif: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
            --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #f5f5f5;
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
                <h1 class="product-title" data-customizer-element="text_1">Burberry Brit for Her <br>by Burberry Perfume</h1>

                <div class="trust-badges">
                    <span class="badge">Authentic</span>
                    <span class="badge">Fast Shipping</span>
                    <span class="badge">Best Price</span>
                </div>

                <div class="specs-list">
                    <div class="spec-row">
                        <span class="spec-label" data-customizer-element="text_2">Size</span>
                        <span class="spec-value" data-customizer-element="text_3">100ml / 3.3oz</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label" data-customizer-element="text_4">Type</span>
                        <span class="spec-value" data-customizer-element="text_5">Eau de Parfum</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label" data-customizer-element="text_6">Condition</span>
                        <span class="spec-value" data-customizer-element="text_7">New in Box</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label" data-customizer-element="text_8">Gender</span>
                        <span class="spec-value" data-customizer-element="text_9">Women</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- DESCRIPTION -->
        <section class="description-box" data-customizer-section="section_2">
            <h2 class="section-header" data-customizer-element="text_0">Description</h2>
            <div class="description-text" data-customizer-element="text_1">
                Experience the essence of British style. Burberry Brit for Her is a fragrance that is both traditional
                and modern, featuring an oriental floral blend that opens with notes of lime and pear, settling into a
                heart of almond and peony, grounded by base notes of vanilla and tonka bean.
            </div>
        </section>

        <!-- INFO SECTIONS -->
        <div class="info-container" data-customizer-section="section_3">
            <div class="info-section">
                <h3 data-customizer-element="text_0">Tester Information</h3>
                <div class="info-content">
                    Testers are original fragrances but often come in simpler packaging. They are exactly the same
                    high-quality liquid, offering you the best value for your favorite scent.
                </div>
            </div>
            <div class="info-section">
                <h3 data-customizer-element="text_1">Authenticity</h3>
                <div class="info-content">
                    We guarantee 100% authenticity on every item we sell. Our products are sourced directly from
                    authorized distributors or the brands themselves.
                </div>
            </div>
            <div class="info-section">
                <h3 data-customizer-element="text_2">Returns Policy</h3>
                <div class="info-content">
                    <ul>
                        <li data-customizer-element="text_3">30-day hassle-free returns</li>
                        <li data-customizer-element="text_4">Securely packaged shipments</li>
                        <li data-customizer-element="text_5">Professional customer support</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- FOOTER -->
        <footer class="footer" data-customizer-section="section_4">
            © 2026 Aura Nest Beauty. All rights reserved.
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
            /* BRAND COLORS - EASY TO EDIT */
            --primary-bg: #fffbfb;
            --secondary-bg: #fff5f5;
            --accent-pink: #f4dada;
            --accent-text: #b86b6b;
            --text-main: #4a4a4a;
            --text-dim: #7a7a7a;
            --border-color: #f7e1e1;
            --font-script: 'Brush Script MT', 'Lucida Handwriting', cursive;
            --font-serif: 'Georgia', 'Times New Roman', serif;
            --font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #fcf8f8;
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
            background: linear-gradient(to bottom, var(--secondary-bg), var(--primary-bg));
        }

        .logo {
            max-width: 250px;
            margin-bottom: 20px;
        }

        .tagline {
            font-family: var(--font-script);
            font-size: 28px;
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
            font-family: var(--font-script);
            font-size: 36px;
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
            background: linear-gradient(to top, var(--secondary-bg), var(--primary-bg));
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
            <div class="tagline">Elegance in every drop...</div>
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
                <div class="brand-name">Burberry England</div>
                <h1 class="product-name" data-customizer-element="text_0">Brit for Her <br>Oriental Floral</h1>

                <div class="badges-row">
                    <span class="badge-pill">Premium Tester</span>
                    <span class="badge-pill">Free Delivery</span>
                </div>

                <div class="data-grid">
                    <div class="data-row">
                        <span class="data-label">Notes</span>
                        <span class="data-value">Lime, Pear, Almond, Peony</span>
                    </div>
                    <div class="data-row">
                        <span class="data-label">Size</span>
                        <span class="data-value">100 ml / 3.4 oz</span>
                    </div>
                    <div class="data-row">
                        <span class="data-label">Form</span>
                        <span class="data-value">Natural Spray</span>
                    </div>
                    <div class="data-row">
                        <span class="data-label">Status</span>
                        <span class="data-value">New / Boxed</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- STORY SECTION -->
        <section class="description-banner" data-customizer-section="section_2">
            <div class="section-heart">❦</div>
            <h2 class="floral-title" data-customizer-element="text_0">A Romantic Journey</h2>
            <p class="banner-text" data-customizer-element="text_1">
                Step into a world of blooming elegance. Burberry Brit for Her captures the essence of a sun-drenched
                garden, where the sweetness of pear meets the delicate crush of white peonies and warm vanilla. A scent
                designed for the woman who is effortlessly chic and always charming.
            </p>
        </section>

        <!-- TRUST BLOCKS -->
        <div class="info-grid" data-customizer-section="section_3">
            <div class="info-box">
                <h4 data-customizer-element="text_0">Tester Detail</h4>
                <p data-customizer-element="text_1">Our testers are 100% genuine and never used. They offer the same luxury experience as full retail
                    packaging but at a price that lets you indulge in more of what you love.</p>
            </div>
            <div class="info-box">
                <h4 data-customizer-element="text_2">Bespoke Care</h4>
                <p data-customizer-element="text_3">Every bottle is hand-inspected and wrapped with the utmost care to ensure it arrives at your doorstep
                    in pristine condition, ready for its first spray.</p>
            </div>
            <div class="info-box">
                <h4 data-customizer-element="text_4">Our Promise</h4>
                <p data-customizer-element="text_5">Return any product within 30 days if it's not the perfect fit for your collection. We believe in
                    beauty without compromise.</p>
            </div>
        </div>

        <!-- FOOTER -->
        <footer class="footer" data-customizer-section="section_4">
            <p data-customizer-element="text_0">© 2026 Aura Nest Beauty - Pure Elegance, Timeless Scent</p>
        </footer>
    </div>



</body></html>`,
  'modern_sport': `<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luxury Sport - High Performance Perfume Listing</title>
    <!-- System Fonts for eBay Compliance -->
    <style>
        :root {
            /* LUXE SPORT COLOR SYSTEM */
            --carbon-base: #0f0f0f;
            --carbon-light: #1a1a1a;
            --deep-blue: #0056b3;
            --electric-blue: #00a2ff;
            --brushed-silver: #c0c0c0;
            --text-pure: #ffffff;
            --text-muted: #999999;
            --font-head: 'Impact', 'Arial Black', sans-serif;
            --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            --border-glint: rgba(255, 255, 255, 0.1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--carbon-base);
            color: var(--text-pure);
            font-family: var(--font-body);
            -webkit-font-smoothing: antialiased;
        }

        .listing-wrapper {
            max-width: 1000px;
            margin: 0 auto;
            background: linear-gradient(180deg, var(--carbon-light) 0%, var(--carbon-base) 100%);
            border: 1px solid var(--border-glint);
            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
            overflow: hidden;
        }

        /* HEADER & LOGO BADGE */
        .header {
            padding: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-glint);
            position: relative;
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 150px;
            height: 2px;
            background: var(--electric-blue);
        }

        .logo-badge {
            background: #ffffff;
            padding: 8px;
            border-radius: 8px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 180px;
        }

        .logo {
            width: 100%;
            height: auto;
            object-fit: contain;
        }

        .nav {
            display: flex;
            gap: 25px;
            list-style: none;
        }

        .nav li a {
            color: var(--text-pure);
            text-decoration: none;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: color 0.3s;
        }

        .nav li a:hover {
            color: var(--electric-blue);
        }

        /* TRUST BAR - CLEAN INTEGRATED */
        .trust-strip {
            display: flex;
            background: rgba(255, 255, 255, 0.03);
            border-bottom: 1px solid var(--border-glint);
        }

        .trust-item {
            flex: 1;
            padding: 15px;
            text-align: center;
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--brushed-silver);
            border-right: 1px solid var(--border-glint);
            transition: background 0.3s;
        }

        .trust-item:last-child {
            border-right: none;
        }

        .trust-item:hover {
            background: rgba(0, 162, 255, 0.1);
            color: var(--electric-blue);
        }

        /* HERO SECTION */
        .hero {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            padding: 80px 40px;
            gap: 60px;
            align-items: center;
        }

        .image-viewport {
            position: relative;
            background: radial-gradient(circle at center, #1a2a3a 0%, #000000 80%);
            border-radius: 20px;
            padding: 40px;
            border: 1px solid var(--border-glint);
            overflow: hidden;
        }

        .image-viewport::before {
            content: 'HIGH PERFORMANCE';
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 10px;
            font-weight: 900;
            color: var(--electric-blue);
            opacity: 0.5;
        }

        .main-img {
            width: 100%;
            height: auto;
            filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8));
            transition: transform 0.5s;
        }

        .image-viewport:hover .main-img {
            transform: scale(1.05);
        }

        .info-panel {
            padding: 20px 0;
        }

        .category-tag {
            font-size: 12px;
            font-weight: 900;
            text-transform: uppercase;
            color: var(--electric-blue);
            letter-spacing: 4px;
            margin-bottom: 15px;
            display: block;
        }

        .product-title {
            font-family: var(--font-head);
            font-size: 52px;
            line-height: 0.95;
            text-transform: uppercase;
            margin-bottom: 40px;
            font-weight: 900;
        }

        .product-title span {
            display: block;
            color: transparent;
            -webkit-text-stroke: 1px var(--brushed-silver);
        }

        /* TECHNICAL SPECS OVERLAY */
        .tech-specs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .spec-entry {
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 4px;
            border-left: 3px solid var(--deep-blue);
        }

        .spec-entry.blue {
            border-left-color: var(--electric-blue);
            background: rgba(0, 162, 255, 0.05);
        }

        .spec-label {
            font-size: 9px;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--text-muted);
            letter-spacing: 1px;
            margin-bottom: 5px;
            display: block;
        }

        .spec-value {
            font-family: var(--font-head);
            font-size: 18px;
            font-weight: 700;
            color: var(--text-pure);
        }

        /* DESCRIPTION SECTION */
        .details-section {
            padding: 100px 60px;
            background: var(--carbon-light);
            text-align: center;
            border-top: 1px solid var(--border-glint);
        }

        .section-headline {
            font-family: var(--font-head);
            font-size: 32px;
            text-transform: uppercase;
            margin-bottom: 30px;
            color: var(--brushed-silver);
        }

        .story-text {
            font-size: 17px;
            line-height: 1.8;
            color: var(--text-muted);
            max-width: 800px;
            margin: 0 auto;
            font-weight: 300;
        }

        /* BOTTOM DATA GRID */
        .data-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-top: 1px solid var(--border-glint);
        }

        .data-block {
            padding: 50px 40px;
            border-right: 1px solid var(--border-glint);
        }

        .data-block:last-child {
            border-right: none;
        }

        .data-block h3 {
            font-family: var(--font-head);
            font-size: 14px;
            text-transform: uppercase;
            color: var(--electric-blue);
            margin-bottom: 20px;
            letter-spacing: 2px;
        }

        .data-block p {
            font-size: 13px;
            line-height: 1.6;
            color: var(--text-muted);
        }

        /* FOOTER */
        .footer {
            padding: 40px;
            text-align: center;
            background: #000000;
            border-top: 1px solid var(--border-glint);
        }

        .footer-text {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #444444;
        }

        /* MOBILE RESPONSIVENESS */
        @media (max-width: 768px) {
            .hero {
                grid-template-columns: 1fr;
                padding: 40px 20px;
            }

            .product-title {
                font-size: 40px;
            }

            .tech-specs {
                grid-template-columns: 1fr;
            }

            .data-grid {
                grid-template-columns: 1fr;
            }

            .data-block {
                border-right: none;
                border-bottom: 1px solid var(--border-glint);
            }

            .nav {
                display: none;
                /* Mobile menu can be added later if needed */
            }

            .header {
                flex-direction: column;
                gap: 20px;
            }

            .trust-strip {
                flex-wrap: wrap;
            }

            .trust-item {
                flex: 0 0 50%;
                border-bottom: 1px solid var(--border-glint);
            }
        }
    </style>
</head>

<body>

    <div class="listing-wrapper">
        <!-- TOP NAVIGATION -->
        <header class="header" data-customizer-section="section_0">
            <div class="logo-badge">
                <img src="/assets/aura-nest-beatuy-logo.jpeg" alt="Aura Nest Beauty" class="logo" data-customizer-element="image_0">
            </div>
            <nav>
                <ul class="nav">
                    <li><a href="#" data-customizer-element="link_0">Official Store</a></li>
                    <li><a href="#" data-customizer-element="link_1">Reviews</a></li>
                    <li><a href="#" data-customizer-element="link_2">Contact</a></li>
                </ul>
            </nav>
        </header>

        <!-- TRUST STRIP -->
        <div class="trust-strip" data-customizer-section="section_1">
            <div class="trust-item">Verified Authentic</div>
            <div class="trust-item">Priority Dispatch</div>
            <div class="trust-item">30-Day Returns</div>
            <div class="trust-item">Tracked Shipping</div>
        </div>

        <!-- HERO IMPACT -->
        <main class="hero" data-customizer-section="section_2">
            <div class="image-viewport">
                <img src="/assets/sport_bottle.png" alt="High Performance Fragrance" class="main-img" data-customizer-element="image_0">
            </div>

            <div class="info-panel">
                <span class="category-tag">Velocity Edition</span>
                <h1 class="product-title" data-customizer-element="text_0">
                    Burberry Brit
                    <span>For Him</span>
                </h1>

                <div class="tech-specs">
                    <div class="spec-entry">
                        <span class="spec-label" data-customizer-element="text_1">Engine</span>
                        <span class="spec-value" data-customizer-element="text_2">Eau de Toilette</span>
                    </div>
                    <div class="spec-entry blue">
                        <span class="spec-label" data-customizer-element="text_3">Capacity</span>
                        <span class="spec-value" data-customizer-element="text_4">100ml / 3.3oz</span>
                    </div>
                    <div class="spec-entry blue">
                        <span class="spec-label" data-customizer-element="text_5">Tuning</span>
                        <span class="spec-value" data-customizer-element="text_6">Woody Spicy</span>
                    </div>
                    <div class="spec-entry">
                        <span class="spec-label" data-customizer-element="text_7">Grade</span>
                        <span class="spec-value" data-customizer-element="text_8">Mint / New Box</span>
                    </div>
                </div>
            </div>
        </main>

        <!-- PERFORMANCE PROFILE -->
        <section class="details-section" data-customizer-section="section_3">
            <h2 class="section-headline" data-customizer-element="text_0">The Performance Profile</h2>
            <p class="story-text" data-customizer-element="text_1">
                Engineered for the modern man. Burberry Brit for Him is an effortless, sexy, and masculine scent. It
                opens with the freshness of ginger and cardamom, hits with a heart of cedarwood and nutmeg, and finishes
                with a deep base of tonka bean and patchouli. Sophistication meets raw energy in a bottle designed for
                those who move fast.
            </p>
        </section>

        <!-- TECHNICAL DATA BLOCKS -->
        <section class="data-grid" data-customizer-section="section_4">
            <div class="data-block">
                <h3 data-customizer-element="text_0">Tester Data</h3>
                <p data-customizer-element="text_1">Our testers are original fragrances in simplified packaging. Guaranteed performance levels exactly
                    identical to retail units, provided at the best possible value.</p>
            </div>
            <div class="data-block">
                <h3 data-customizer-element="text_2">Shipping Logistics</h3>
                <p data-customizer-element="text_3">Orders processed within 24 hours via priority courier. Stealth-grade packaging ensures global
                    delivery integrity. Secure tracking provided on dispatch.</p>
            </div>
            <div class="data-block">
                <h3 data-customizer-element="text_4">Authenticity Hub</h3>
                <p data-customizer-element="text_5">100% genuine guaranteed. No clones. No imitations. We source exclusively from authorized supply
                    chains to ensure your fragrance is the real deal.</p>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="footer" data-customizer-section="section_5">
            <div class="footer-text">© 2026 Aura Nest Beauty • High Performance Fragrance Division</div>
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
            /* BRAND COLORS - EASY TO EDIT */
            --paper-bg: #fdfaf4;
            --ink-color: #2c2520;
            --accent-sepia: #8e735b;
            --border-ink: #3d342d;
            --font-display: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
            --font-body: 'Georgia', 'Times New Roman', serif;
            --font-accent: 'Garamond', 'Baskerville', serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #f2eee8;
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
            content: '❦';
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
            color: #4a4138;
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
            color: #5a524a;
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
                    <div class="brand-stamp">House of Burberry</div>
                    <h1 class="product-title" data-customizer-element="text_0">Brit for Her <br>Classic Eau de Parfum</h1>

                    <table class="specs-table">
                        <tbody><tr>
                            <td class="spec-name">Volume</td>
                            <td class="spec-content">3.3 fl oz / 100 ml</td>
                        </tr>
                        <tr>
                            <td class="spec-name">Vessel</td>
                            <td class="spec-content">Atomiseur / Spray</td>
                        </tr>
                        <tr>
                            <td class="spec-name">Provenance</td>
                            <td class="spec-content">United Kingdom</td>
                        </tr>
                        <tr>
                            <td class="spec-name">Condition</td>
                            <td class="spec-content">Pristine / Collector's Box</td>
                        </tr>
                    </tbody></table>
                </div>
            </section>

            <!-- NARRATIVE -->
            <section class="description-wrapper" data-customizer-section="section_2">
                <div class="desc-ornament">❧</div>
                <p class="desc-text" data-customizer-element="text_0">
                    "A fragrance that speaks of timeless heritage and modern individuality. Burberry Brit for Her
                    captures the essence of the English countryside with a delightful blend of icy pear, sugared
                    almonds, and lush white peony. It is a scent of quiet confidence and effortless grace."
                </p>
            </section>

            <!-- TERMS -->
            <div class="policies-grid" data-customizer-section="section_3">
                <div class="policy-item">
                    <h3 data-customizer-element="text_0">The Tester Story</h3>
                    <p data-customizer-element="text_1">Provenance of our testers is direct from the houses. These are original liquids housed in
                        archival boxes, offering the same olfactory journey without the retail price premium.</p>
                </div>
                <div class="policy-item">
                    <h3 data-customizer-element="text_2">Safe Passage</h3>
                    <p data-customizer-element="text_3">We ensure each vessel is secured with archival-grade protection. Should your item not arrive in
                        pristine condition, our 30-day return window ensures your peace of mind.</p>
                </div>
            </div>

            <!-- FOOTER -->
            <footer class="footer" data-customizer-section="section_4">
                Aura Nest Beauty - Curators of Fine Scents
            </footer>
        </div>
    </div>



</body></html>`,
};
