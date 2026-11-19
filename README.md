# Vanarasi Famous Kabab - Official Website

A modern, fast, mobile-responsive restaurant website for **Vanarasi Famous Kabab**, located in Vanarasi Village, Muduvadi Post, Kolar Taluk, Karnataka.

Built with clean HTML5, CSS3, and JavaScript, featuring a dark amber & fiery tandoor theme, bilingual English & Kannada support, dynamic WhatsApp ordering calculator, and Google Maps integration.

---

## 🌟 Key Features

1. **Brand Identity & Theme**
   - **Colors**: Premium Black (`#0d0b09`), Dark Brown (`#1c1712`), Fiery Crimson (`#dc2626`), and Golden Amber (`#f59e0b`).
   - Authentic South Indian / Bangalore & Kolar style **fiery red chicken kababs**, seasoned with traditional red masala, curry leaves, onions, and lemon wedges.

2. **Bilingual Support (English & Kannada / ಕನ್ನಡ)**
   - Single-click language switcher button in the header and footer.
   - Smooth instant translation without page reloads.
   - Optimized typography using **Plus Jakarta Sans** and **Noto Sans Kannada**.

3. **Complete Menu & Transparent Pricing**
   - **Half KG Kabab – ₹200** (ಅರ್ಧ ಕೆ.ಜಿ. ಕಬಾಬ್ – ₹200)
   - **1 KG Kabab – ₹400** (1 ಕೆ.ಜಿ. ಕಬಾಬ್ – ₹400)
   - Individual direct WhatsApp order buttons for each menu item.

4. **Interactive WhatsApp Order Builder & Calculator**
   - Customers can pick the exact number of Half KG and 1 KG packets.
   - Automatically calculates total price in real time.
   - Allows customer to input their name and special requests (e.g., extra spicy, extra lemon/onions).
   - Generates a pre-formatted WhatsApp message ready to send with one click.

5. **Direct WhatsApp Ordering (9113553538)**
   - Pre-filled WhatsApp message: `"Hello Vanarasi Famous Kabab, I want to place an order."`
   - WhatsApp link: `https://wa.me/919113553538`
   - Floating quick-order button pinned to the bottom-right for instant access on mobile.
   - Quick phone call button pinned to bottom-left on mobile screens.

6. **Location & Contact Details**
   - **Address**: Vanarasi Village, Muduvadi Post, Kolar Taluk, Kolar District, Karnataka, India.
   - **Phone**: 9113553538
   - Embedded Google Maps view + direct one-click "Open in Google Maps / Directions" button.

7. **SEO & Performance**
   - Schema.org Restaurant JSON-LD structured data for Google local search indexing.
   - Open Graph tags for WhatsApp and Facebook link preview cards.
   - Zero external framework overhead; ultra-fast loading on 3G/4G rural mobile connections.

---

## 🚀 How to Run the Website Locally

### Option 1: Direct in Browser
Double-click `index.html` or right-click `index.html` and choose **Open with > Chrome / Edge / Firefox**.

### Option 2: Using Python (Recommended for testing)
Open PowerShell or Command Prompt in this folder and run:
```bash
python -m http.server 8000
```
Then open your browser at:
```
http://localhost:8000
```

### Option 3: Using Node.js / npx
```bash
npx serve
```

---

## 📁 Project Structure

```
chicken kabab/
├── index.html        # Main HTML structure with semantic sections and SEO tags
├── styles.css        # Premium styling, animations, responsive design
├── script.js         # Language switching (EN/KN), order calculator, WhatsApp links
└── README.md         # Instructions and documentation
```

---

## ⚙️ How to Update Details in the Future

### 1. Changing Prices
Open `script.js` and edit lines 14-15:
```javascript
const PRICE_HALF_KG = 200; // Change to new price
const PRICE_ONE_KG = 400;  // Change to new price
```
Also update the displayed numbers in `index.html` under the `<section id="menu">` section.

### 2. Changing Phone / WhatsApp Number
Open `script.js` and edit lines 8-9:
```javascript
const SHOP_PHONE = "9113553538";
const WHATSAPP_NUMBER = "919113553538";
```
In `index.html`, do a search & replace for `9113553538` and `919113553538` if you ever change your phone number.

---

## 🌐 How to Publish Free Online (In 2 Minutes)

You can host this website completely free of cost forever:

- **Netlify Drop**: Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag-and-drop this entire folder. Your website goes live in 10 seconds!
- **Vercel**: Run `npx vercel` or link your GitHub repo.
- **GitHub Pages**: Push this folder to a GitHub repository, go to **Settings > Pages**, and select `main` branch.
