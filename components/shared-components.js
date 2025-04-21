// PocketSous Shared Components

// Site Header Component
class SiteHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="container">
                    <a href="/" class="logo">
                        <img src="logo.png" alt="PocketSous Logo" width="50" height="50">
                        <span>PocketSous</span>
                    </a>
                    <div class="header-cta">
                        <a href="https://apps.apple.com/app/id6743449540" class="app-store-badge">
                            <img src="Apple_Badge_White.svg" alt="Download on the App Store">
                        </a>
                    </div>
                </div>
            </header>
        `;
    }
}

// Site Footer Component
class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <a href="/" class="footer-logo">
                            <img src="logo.png" alt="PocketSous Logo" width="60" height="60">
                            <span>PocketSous</span>
                        </a>
                        <p>Your personal sous chef in the kitchen. No accounts. No ads. No clutter.</p>
                        <p>&copy; ${new Date().getFullYear()} PocketSous. All rights reserved.</p>
                    </div>
                    <div class="footer-links">
                        <a href="privacy.html">Privacy Policy</a>
                        <a href="support.html">Support</a>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Register the custom elements
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
