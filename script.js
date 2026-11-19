/**
 * Vanarasi Famous Kabab - Main JavaScript
 * Handles Bilingual Translation (English / Kannada),
 * Interactive WhatsApp Order Calculator, Navbar effects, and Mobile Drawer.
 */

// Phone and WhatsApp Configurations
const SHOP_PHONE = "9113553538";
const WHATSAPP_NUMBER = "919113553538";
const DEFAULT_WA_MSG_EN = "Hello Vanarasi Famous Kabab, I want to place an order.";
const DEFAULT_WA_MSG_KN = "ನಮಸ್ಕಾರ ವನರಾಸಿ ಫೇಮಸ್ ಕಬಾಬ್, ನಾನು ಕಬಾಬ್ ಆರ್ಡರ್ ನೀಡಲು ಬಯಸುತ್ತೇನೆ.";

// Pricing (INR)
const PRICE_HALF_KG = 200;
const PRICE_ONE_KG = 400;

// Current state
let currentLang = "en";
let qtyHalf = 1;
let qtyOne = 0;

// Translations dictionary
const translations = {
  en: {
    brandName: "Vanarasi Famous Kabab",
    brandSub: "Muduvadi Post • Kolar",
    topBannerText: "Piping Hot & Fresh Village Chicken Kababs! Order now on WhatsApp.",
    navHome: "Home",
    navMenu: "Menu",
    navAbout: "About Us",
    navOrder: "Order Online",
    navContact: "Contact",
    orderNowNav: "Order on WhatsApp",
    orderNow: "Order on WhatsApp",
    callUs: "Call 9113553538",
    heroBadge: "Kolar's Authentic Taste",
    heroShopName: "Vanarasi Famous Kabab",
    heroHeadline: "Fresh, Hot & Delicious Kababs!",
    heroTagline: "Crispy on the outside, succulent and juicy on the inside. Marinated with secret homemade village spices and freshly fried hot just for you!",
    halfKgLabel: "Half KG Kabab",
    oneKgLabel: "1 KG Kabab",
    popularBadge: "POPULAR",
    heroBtnWhatsApp: "Order on WhatsApp",
    heroBtnMenu: "Explore Menu",
    heroBtnLocation: "Find Us",
    feature1: "100% Fresh Chicken",
    feature2: "Traditional Spices",
    feature3: "Served Piping Hot",
    feature4: "Loved by Travelers",
    menuSectionTag: "OUR SPECIALTIES",
    menuTitle: "Our Signature Kabab Menu",
    menuSubtitle: "Made with premium, fresh farm chicken, infused with authentic spices, and fried crispy to golden perfection upon order.",
    halfKgBadge: "Standard Pack",
    menuItem1Title: "Half KG Kabab",
    menuItem1Desc: "Generous portion of fresh, spicy, and deep-fried crispy chicken kabab. Perfect snack or meal for 1-2 people. Served hot with sliced onions and fresh lemon wedges.",
    weightHalf: "500 Grams",
    servedFresh: "Freshly Fried",
    orderHalfKgBtn: "Order Half KG (₹200)",
    bestValueRibbon: "BEST VALUE • POPULAR",
    familyPackBadge: "Family Pack",
    menuItem2Title: "1 KG Kabab",
    menuItem2Desc: "Full 1 Kilogram family-sized platter of delicious, tender, and crispy kababs. Ideal for families, friends' gatherings, celebrations, or hearty weekend dinners.",
    weightOne: "1000 Grams (1 KG)",
    servesFamily: "Serves 3-4 People",
    orderOneKgBtn: "Order 1 KG (₹400)",
    guaranteeTitle: "Hot & Fresh Preparation Guarantee",
    guaranteeDesc: "We never serve pre-fried cold food. Every order is freshly fried in clean, hot oil upon receiving your request, ensuring supreme crunch and aromatic flavor.",
    calcTag: "QUICK & EASY ORDERING",
    calcTitle: "Order in 30 Seconds via WhatsApp",
    calcDesc: "No complicated apps or sign-ups required! Just pick your quantity below and click the button to send your order directly to our WhatsApp. We will prepare your hot kababs right away.",
    step1Title: "Select Quantity",
    step1Desc: "Choose how many Half KG or 1 KG packs you desire.",
    step2Title: "Click Order Button",
    step2Desc: "It opens WhatsApp with your pre-filled bill ready.",
    step3Title: "Collect Fresh & Hot",
    step3Desc: "Pick up your sizzling hot kabab from our Vanarasi shop.",
    calcCardTitle: "Custom Order Builder",
    calcItemHalf: "Half KG Kabab",
    calcItemOne: "1 KG Kabab",
    custNameLabel: "Your Name (Optional):",
    custNoteLabel: "Special Instructions (Optional):",
    calcTotalLabel: "Total Amount:",
    calcSubmitBtn: "Send Order via WhatsApp",
    calcFootnote: "No advance online payment required. Pay upon pickup or via UPI at the counter.",
    aboutTag: "ABOUT OUR SHOP",
    aboutTitle: "Welcome to Vanarasi Famous Kabab",
    aboutBadgeTitle: "Authentic Village Recipe",
    aboutBadgeSub: "Prepared with love & passion",
    aboutPara1: "Located peacefully in Vanarasi Village (Muduvadi Post, Kolar Taluk), Vanarasi Famous Kabab was established with one passionate mission: to serve the crispiest, juiciest, and most flavor-packed chicken kababs to our local community and highway travelers.",
    aboutPara2: "We take deep pride in traditional preparation. Every batch of chicken is sourced fresh every day, cut cleanly, and marinated for hours with our special blend of aromatic village spices, ginger-garlic paste, and crushed herbs. When you order, it is fried fresh to order in hot oil to lock in all the mouth-watering flavors.",
    aboutPara3: "Whether you are craving a crunchy evening snack, picking up dinner for your family, or stopping by while passing through Kolar, you will always be greeted with warmth and the irresistible aroma of authentic South Indian kababs.",
    aboutHigh1Title: "Daily Fresh Poultry",
    aboutHigh1Desc: "Only hygienic, quality fresh chicken used daily.",
    aboutHigh2Title: "Secret Spices Blend",
    aboutHigh2Desc: "Hand-ground spices for that unforgettable village punch.",
    aboutHigh3Title: "Honest & Affordable Pricing",
    aboutHigh3Desc: "Half KG for ₹200 and 1 KG for ₹400 – unmatched value.",
    aboutBtnWhatsApp: "Place Your Order",
    callUsBtn: "Call 9113553538",
    bigCtaTitle: "Craving Fresh Kababs Right Now?",
    bigCtaDesc: "Call or send us a WhatsApp message to book your pack in advance. Freshly made, packed hot, and ready for you!",
    bigCtaBtnWA: "Order on WhatsApp: 9113553538",
    bigCtaBtnCall: "Call Shop Directly",
    contactTag: "FIND OUR SHOP",
    contactTitle: "Visit Us or Get in Touch",
    contactSubtitle: "We are conveniently located in Vanarasi Village near Muduvadi Post, Kolar. Drop by or contact us anytime!",
    contactShopLabel: "Shop Name",
    contactShopSub: "Authentic Chicken Kabab Center",
    contactPhoneLabel: "Phone & WhatsApp",
    contactAddressLabel: "Shop Address",
    contactAddressFull: "Vanarasi Village, Muduvadi Post, Kolar Taluk, Kolar District, Karnataka, India.",
    getDirectionsBtn: "Open in Google Maps / Directions",
    contactPricesLabel: "Current Menu Rates",
    rate1: "Half KG: ₹200",
    rate2: "1 KG: ₹400",
    mapHeading: "Vanarasi Village, Muduvadi, Kolar",
    mapSub: "Kolar District, Karnataka",
    openMap: "Open Map",
    mapTip: "Serving customers across Vanarasi, Muduvadi, and all travelers on the Kolar route.",
    footerTagline: "Fresh, Hot & Delicious Kababs in Kolar",
    footerAbout: "Serving freshly marinated, hot and crispy chicken kababs prepared with authentic village spices. Your satisfaction is our pride!",
    footerAddressShort: "Vanarasi Village, Muduvadi Post, Kolar Taluk, Karnataka",
    footerQuickLinks: "Quick Links",
    footerMenuHeading: "Our Menu",
    kannadaHalfReminder: "Half KG Kabab – ₹200",
    kannadaOneReminder: "1 KG Kabab – ₹400",
    footerOrderHeading: "Instant Order",
    footerOrderPrompt: "Click the button below to message us directly on WhatsApp:",
    chooseLanguage: "Language:",
    allRightsReserved: "All Rights Reserved.",
    footerBadge: "Vanarasi Village, Muduvadi Post, Kolar District, Karnataka.",
    floatingTooltip: "Order Kababs on WhatsApp!",
    callNow: "Call Now",
    chatWA: "WhatsApp"
  },

  kn: {
    brandName: "ವನರಾಸಿ ಫೇಮಸ್ ಕಬಾಬ್",
    brandSub: "ಮುದುವಾಡಿ ಅಂಚೆ • ಕೋಲಾರ",
    topBannerText: "ಬಿಸಿಬಿಸಿಯಾದ ರುಚಿಕರ ಕಬಾಬ್! ಈಗಲೇ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ.",
    navHome: "ಮುಖಪುಟ",
    navMenu: "ಮೆನು & ಬೆಲೆ",
    navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
    navOrder: "ಆನ್‌ಲೈನ್ ಆರ್ಡರ್",
    navContact: "ಸಂಪರ್ಕಿಸಿ",
    orderNowNav: "ವಾಟ್ಸಾಪ್ ಆರ್ಡರ್",
    orderNow: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ",
    callUs: "ಕರೆ ಮಾಡಿ 9113553538",
    heroBadge: "ಕೋಲಾರದ ಅಪ್ಪಟ ಹಳ್ಳಿ ರುಚಿ",
    heroShopName: "ವನರಾಸಿ ಫೇಮಸ್ ಕಬಾಬ್",
    heroHeadline: "ರುಚಿಕರವಾದ ಬಿಸಿ ಬಿಸಿ ಕಬಾಬ್!",
    heroTagline: "ಹೊರಗೆ ಗರಿಗರಿ, ಒಳಗೆ ಮೃದು ಮತ್ತು ರಸಭರಿತ! ನಮ್ಮದೇ ಸಾಂಪ್ರದಾಯಿಕ ಹಳ್ಳಿ ಮಸಾಲೆಗಳೊಂದಿಗೆ ತಕ್ಷಣವೇ ಬಿಸಿಬಿಸಿಯಾಗಿ ಕರಿದು ನೀಡಲಾಗುವುದು!",
    halfKgLabel: "ಅರ್ಧ ಕೆ.ಜಿ. ಕಬಾಬ್",
    oneKgLabel: "1 ಕೆ.ಜಿ. ಕಬಾಬ್",
    popularBadge: "ಜನಪ್ರಿಯ",
    heroBtnWhatsApp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ",
    heroBtnMenu: "ಮೆನು ನೋಡಿ",
    heroBtnLocation: "ವಿಳಾಸ ನೋಡಿ",
    feature1: "100% ತಾಜಾ ಚಿಕನ್",
    feature2: "ಸಾಂಪ್ರದಾಯಿಕ ಮಸಾಲೆಗಳು",
    feature3: "ಬಿಸಿಬಿಸಿಯಾಗಿ ತಯಾರಿಕೆ",
    feature4: "ಪ್ರಯಾಣಿಕರ ನೆಚ್ಚಿನ ರುಚಿ",
    menuSectionTag: "ನಮ್ಮ ವಿಶೇಷತೆಗಳು",
    menuTitle: "ನಮ್ಮ ಕಬಾಬ್ ಮೆನು ಹಾಗೂ ಬೆಲೆಗಳು",
    menuSubtitle: "ಶುದ್ಧ ಹಾಗೂ ತಾಜಾ ಚಿಕನ್‌ನಿಂದ ತಯಾರಿಸಿ, ಗ್ರಾಹಕರ ಆರ್ಡರ್ ಮೇಲೆ ಗರಿಗರಿಯಾಗಿ ಕರಿದು ನೀಡಲಾಗುತ್ತದೆ.",
    halfKgBadge: "ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಪ್ಯಾಕ್",
    menuItem1Title: "ಅರ್ಧ ಕೆ.ಜಿ. ಕಬಾಬ್",
    menuItem1Desc: "ರುಚಿಕರವಾದ ಮತ್ತು ಗರಿಗರಿಯಾದ ಚಿಕನ್ ಕಬಾಬ್. 1-2 ಜನರಿಗೆ ಧಾರಾಳ. ನಿಂಬೆಹಣ್ಣು ಹಾಗೂ ಈರುಳ್ಳಿಯೊಂದಿಗೆ ಬಿಸಿಬಿಸಿಯಾಗಿ ನೀಡಲಾಗುತ್ತದೆ.",
    weightHalf: "500 ಗ್ರಾಂ",
    servedFresh: "ತಕ್ಷಣ ಕರಿದುಕೊಡಲಾಗುತ್ತದೆ",
    orderHalfKgBtn: "ಅರ್ಧ ಕೆ.ಜಿ. ಆರ್ಡರ್ ಮಾಡಿ (₹200)",
    bestValueRibbon: "ಅತ್ಯುತ್ತಮ ಮೌಲ್ಯ • ಜನಪ್ರಿಯ",
    familyPackBadge: "ಫ್ಯಾಮಿಲಿ ಪ್ಯಾಕ್",
    menuItem2Title: "1 ಕೆ.ಜಿ. ಕಬಾಬ್",
    menuItem2Desc: "ಪೂರ್ಣ 1 ಕೆಜಿ ರುಚಿಕರ ಕಬಾಬ್. ಕುಟುಂಬಕ್ಕೆ, ಸ್ನೇಹಿತರ ಕೂಟಕ್ಕೆ ಹಾಗೂ ಸಂಭ್ರಮಗಳಿಗೆ ಹೇಳಿಮಾಡಿಸಿದ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ.",
    weightOne: "1000 ಗ್ರಾಂ (1 ಕೆ.ಜಿ.)",
    servesFamily: "3-4 ಜನರಿಗೆ ಸೂಕ್ತ",
    orderOneKgBtn: "1 ಕೆ.ಜಿ. ಆರ್ಡರ್ ಮಾಡಿ (₹400)",
    guaranteeTitle: "ಬಿಸಿಬಿಸಿ ಮತ್ತು ತಾಜಾತನದ ಭರವಸೆ",
    guaranteeDesc: "ನಾವು ಎಂದಿಗೂ ಮೊದಲೇ ಕರಿದಿಟ್ಟ ಆಹಾರವನ್ನು ನೀಡುವುದಿಲ್ಲ. ನಿಮ್ಮ ಬೇಡಿಕೆಯ ಮೇರೆಗೆ ಶುದ್ಧ ಎಣ್ಣೆಯಲ್ಲಿ ಬಿಸಿಯಾಗಿ ಕರಿದು ನೀಡುತ್ತೇವೆ.",
    calcTag: "ಸುಲಭ ಹಾಗೂ ತ್ವರಿತ ಆರ್ಡರ್",
    calcTitle: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಕ್ಷಣಾರ್ಧದಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ",
    calcDesc: "ಯಾವುದೇ ಆಪ್‌ಗಳ ಅಗತ್ಯವಿಲ್ಲ! ಕೆಳಗೆ ಪ್ರಮಾಣವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಬಟನ್ ಒತ್ತಿ, ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆರ್ಡರ್ ಕಳುಹಿಸಿ.",
    step1Title: "ಪ್ರಮಾಣ ಆಯ್ಕೆಮಾಡಿ",
    step1Desc: "ಅರ್ಧ ಕೆ.ಜಿ. ಅಥವಾ 1 ಕೆ.ಜಿ. ಎಷ್ಟು ಬೇಕು ಎಂಬುದನ್ನು ನಿಗದಿಪಡಿಸಿ.",
    step2Title: "ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ",
    step2Desc: "ನಿಮ್ಮ ಆರ್ಡರ್ ವಿವರಗಳೊಂದಿಗೆ ವಾಟ್ಸಾಪ್ ತೆರೆದುಕೊಳ್ಳುತ್ತದೆ.",
    step3Title: "ಬಿಸಿಬಿಸಿಯಾಗಿ ಪಡೆದುಕೊಳ್ಳಿ",
    step3Desc: "ನಮ್ಮ ವನರಾಸಿ ಕಬಾಬ್ ಸೆಂಟರ್‌ನಲ್ಲಿ ಬಿಸಿಬಿಸಿಯಾಗಿ ಪಡೆದುಕೊಳ್ಳಿ.",
    calcCardTitle: "ಆರ್ಡರ್ ಲೆಕ್ಕಾಚಾರ ಹಾಗೂ ಬುಕ್ಕಿಂಗ್",
    calcItemHalf: "ಅರ್ಧ ಕೆ.ಜಿ. ಕಬಾಬ್",
    calcItemOne: "1 ಕೆ.ಜಿ. ಕಬಾಬ್",
    custNameLabel: "ನಿಮ್ಮ ಹೆಸರು (ಐಚ್ಛಿಕ):",
    custNoteLabel: "ವಿಶೇಷ ಸೂಚನೆಗಳು (ಐಚ್ಛಿಕ):",
    calcTotalLabel: "ಒಟ್ಟು ಮೊತ್ತ:",
    calcSubmitBtn: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆರ್ಡರ್ ಕಳುಹಿಸಿ",
    calcFootnote: "ಮುಂಗಡ ಪಾವತಿ ಅಗತ್ಯವಿಲ್ಲ. ಸ್ಥಳದಲ್ಲೇ ನಗದು ಅಥವಾ ಯುಪಿಐ ಮೂಲಕ ಪಾವತಿಸಿ.",
    aboutTag: "ನಮ್ಮ ಬಗ್ಗೆ",
    aboutTitle: "ವನರಾಸಿ ಫೇಮಸ್ ಕಬಾಬ್‌ಗೆ ಸುಸ್ವಾಗತ",
    aboutBadgeTitle: "ಅಪ್ಪಟ ಹಳ್ಳಿ ಶೈಲಿ",
    aboutBadgeSub: "ಪ್ರೀತಿ ಮತ್ತು ನಂಬಿಕೆಯೊಂದಿಗೆ",
    aboutPara1: "ಕೋಲಾರ ತಾಲೂಕಿನ ಮುದುವಾಡಿ ಅಂಚೆಯ ವನರಾಸಿ ಗ್ರಾಮದಲ್ಲಿರುವ ವನರಾಸಿ ಫೇಮಸ್ ಕಬಾಬ್, ನಮ್ಮ ಗ್ರಾಮಸ್ಥರಿಗೆ ಹಾಗೂ ಪ್ರಯಾಣಿಕರಿಗೆ ಶುದ್ಧ ಮತ್ತು ಅತ್ಯಂತ ರುಚಿಕರವಾದ ಕಬಾಬ್ ನೀಡುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ.",
    aboutPara2: "ಪ್ರತಿದಿನ ಶುದ್ಧ ಹಾಗೂ ತಾಜಾ ಚಿಕನ್ ಅನ್ನು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ. ನಮ್ಮದೇ ವಿಶೇಷ ಹಳ್ಳಿಯ ಮಸಾಲೆಗಳೊಂದಿಗೆ ನೆನೆಸಿ, ಗ್ರಾಹಕರು ಕೇಳಿದಾಗ ಶುದ್ಧ ಎಣ್ಣೆಯಲ್ಲಿ ಬಿಸಿಯಾಗಿ ಕರಿಯಲಾಗುತ್ತದೆ.",
    aboutPara3: "ಸಂಜೆಯ ತಿಂಡಿಗಾಗಲಿ ಅಥವಾ ಕುಟುಂಬದ ರಾತ್ರಿಯ ಊಟಕ್ಕಾಗಲಿ, ಬಿಸಿಬಿಸಿ ಮತ್ತು ಸುವಾಸನೆಯುಕ್ತ ಕಬಾಬ್ ಸವಿಯಲು ಇಂದೇ ಭೇಟಿ ನೀಡಿ.",
    aboutHigh1Title: "ಪ್ರತಿದಿನ ತಾಜಾ ಚಿಕನ್",
    aboutHigh1Desc: "ಶುಚಿತ್ವಕ್ಕೆ ಮೊದಲ ಆದ್ಯತೆ.",
    aboutHigh2Title: "ವಿಶೇಷ ಸಾಂಪ್ರದಾಯಿಕ ಮಸಾಲೆ",
    aboutHigh2Desc: "ಅದ್ಭುತ ರುಚಿ ನೀಡುವ ವಿಶೇಷ ಮಿಶ್ರಣ.",
    aboutHigh3Title: "ನ್ಯಾಯಯುತ ಬೆಲೆ",
    aboutHigh3Desc: "ಅರ್ಧ ಕೆ.ಜಿ ₹200 ಮತ್ತು 1 ಕೆ.ಜಿ ₹400 – ಸಾಟಿಯಿಲ್ಲದ ಮೌಲ್ಯ.",
    aboutBtnWhatsApp: "ಆರ್ಡರ್ ನೀಡಿ",
    callUsBtn: "ಕರೆ ಮಾಡಿ 9113553538",
    bigCtaTitle: "ಈಗಲೇ ಬಿಸಿಬಿಸಿ ಕಬಾಬ್ ಸವಿಯಬೇಕೇ?",
    bigCtaDesc: "ಈಗಲೇ ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಕಳುಹಿಸಿ ಮುಂಚಿತವಾಗಿಯೇ ಬುಕ್ ಮಾಡಿ! ತಕ್ಷಣವೇ ಬಿಸಿಯಾಗಿ ತಯಾರಿಸಲಾಗುತ್ತದೆ.",
    bigCtaBtnWA: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ: 9113553538",
    bigCtaBtnCall: "ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ",
    contactTag: "ನಮ್ಮ ಅಂಗಡಿ ವಿಳಾಸ",
    contactTitle: "ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ ಅಥವಾ ಸಂಪರ್ಕಿಸಿ",
    contactSubtitle: "ಕೋಲಾರ ತಾಲೂಕಿನ ಮುದುವಾಡಿ ಅಂಚೆಯ ವನರಾಸಿ ಗ್ರಾಮದಲ್ಲಿ ನಾವಿದ್ದೇವೆ. ಯಾವಾಗಲಾದರೂ ಸಂಪರ್ಕಿಸಿ!",
    contactShopLabel: "ಅಂಗಡಿಯ ಹೆಸರು",
    contactShopSub: "ಅಪ್ಪಟ ಚಿಕನ್ ಕಬಾಬ್ ಸೆಂಟರ್",
    contactPhoneLabel: "ದೂರವಾಣಿ ಹಾಗೂ ವಾಟ್ಸಾಪ್",
    contactAddressLabel: "ವಿಳಾಸ",
    contactAddressFull: "ವನರಾಸಿ ಗ್ರಾಮ, ಮುದುವಾಡಿ ಅಂಚೆ, ಕೋಲಾರ ತಾಲ್ಲೂಕು, ಕೋಲಾರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ, ಭಾರತ.",
    getDirectionsBtn: "ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ನೋಡಿ",
    contactPricesLabel: "ಪ್ರಸ್ತುತ ದರಗಳು",
    rate1: "ಅರ್ಧ ಕೆ.ಜಿ: ₹200",
    rate2: "1 ಕೆ.ಜಿ: ₹400",
    mapHeading: "ವನರಾಸಿ ಗ್ರಾಮ, ಮುದುವಾಡಿ, ಕೋಲಾರ",
    mapSub: "ಕೋಲಾರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ",
    openMap: "ಮ್ಯಾಪ್ ವೀಕ್ಷಿಸಿ",
    mapTip: "ವನರಾಸಿ, ಮುದುವಾಡಿ ಹಾಗೂ ಕೋಲಾರ ಭಾಗದ ಎಲ್ಲಾ ಗ್ರಾಹಕರಿಗೆ ಸೇವೆ ಲಭ್ಯವಿದೆ.",
    footerTagline: "ಕೋಲಾರದ ರುಚಿಕರವಾದ ಬಿಸಿ ಬಿಸಿ ಕಬಾಬ್",
    footerAbout: "ಸಾಂಪ್ರದಾಯಿಕ ಮಸಾಲೆಗಳೊಂದಿಗೆ ತಯಾರಿಸಿದ ಬಿಸಿಬಿಸಿಯಾದ ಕಬಾಬ್. ನಿಮ್ಮ ತೃಪ್ತಿಯೇ ನಮ್ಮ ಗುರಿ!",
    footerAddressShort: "ವನರಾಸಿ ಗ್ರಾಮ, ಮುದುವಾಡಿ ಅಂಚೆ, ಕೋಲಾರ ತಾಲ್ಲೂಕು, ಕರ್ನಾಟಕ",
    footerQuickLinks: "ಲಿಂಕ್‌ಗಳು",
    footerMenuHeading: "ನಮ್ಮ ಮೆನು",
    kannadaHalfReminder: "ಅರ್ಧ ಕೆ.ಜಿ. ಕಬಾಬ್ – ₹200",
    kannadaOneReminder: "1 ಕೆ.ಜಿ. ಕಬಾಬ್ – ₹400",
    footerOrderHeading: "ತಕ್ಷಣದ ಆರ್ಡರ್",
    footerOrderPrompt: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಲು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ:",
    chooseLanguage: "ಭಾಷೆ:",
    allRightsReserved: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    footerBadge: "ವನರಾಸಿ ಗ್ರಾಮ, ಮುದುವಾಡಿ ಅಂಚೆ, ಕೋಲಾರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ.",
    floatingTooltip: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಬಾಬ್ ಆರ್ಡರ್ ಮಾಡಿ!",
    callNow: "ಕರೆ ಮಾಡಿ",
    chatWA: "ವಾಟ್ಸಾಪ್"
  }
};

/**
 * Initialize application when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearElem = document.getElementById("currentYear");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // Load stored language preference or default to English
  const savedLang = localStorage.getItem("vfk_lang") || "en";
  switchLanguage(savedLang, false);

  // Setup navbar scroll listener
  setupNavbarScroll();

  // Setup mobile navigation toggle
  setupMobileNav();

  // Initialize order calculator display
  updateOrderCalculator();
});

/**
 * Switch Language function
 * @param {string} lang - 'en' or 'kn'
 * @param {boolean} savePref - Whether to persist in localStorage
 */
function switchLanguage(lang, savePref = true) {
  if (lang !== "en" && lang !== "kn") return;
  currentLang = lang;

  if (savePref) {
    localStorage.setItem("vfk_lang", lang);
  }

  // Apply language class to body for font rendering
  if (lang === "kn") {
    document.body.classList.add("lang-kn");
  } else {
    document.body.classList.remove("lang-kn");
  }

  // Update elements with data-i18n attribute
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update Language toggle button label in Navbar
  const langLabel = document.getElementById("langLabel");
  if (langLabel) {
    // Show opposite language option to click
    langLabel.textContent = lang === "en" ? "ಕನ್ನಡ" : "English";
  }

  // Update Footer language buttons state
  const btnEn = document.getElementById("footerLangEn");
  const btnKn = document.getElementById("footerLangKn");
  if (btnEn && btnKn) {
    btnEn.classList.toggle("active", lang === "en");
    btnKn.classList.toggle("active", lang === "kn");
  }

  // Update calculator order button text & summary
  updateOrderCalculator();
}

// Navbar Toggle Button click listener
const langToggleBtn = document.getElementById("langToggleBtn");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "kn" : "en";
    switchLanguage(newLang);
  });
}

/**
 * Quantity Controller for Interactive Order Calculator
 * @param {string} type - 'half' or 'one'
 * @param {number} delta - +1 or -1
 */
function updateQty(type, delta) {
  if (type === "half") {
    qtyHalf = Math.max(0, qtyHalf + delta);
    // If both become 0, ensure at least one is 1
    if (qtyHalf === 0 && qtyOne === 0) {
      if (delta < 0) qtyOne = 1;
      else qtyHalf = 1;
    }
    const qtyHalfElem = document.getElementById("qtyHalf");
    if (qtyHalfElem) qtyHalfElem.textContent = qtyHalf;
  } else if (type === "one") {
    qtyOne = Math.max(0, qtyOne + delta);
    if (qtyHalf === 0 && qtyOne === 0) {
      if (delta < 0) qtyHalf = 1;
      else qtyOne = 1;
    }
    const qtyOneElem = document.getElementById("qtyOne");
    if (qtyOneElem) qtyOneElem.textContent = qtyOne;
  }

  updateOrderCalculator();
}

/**
 * Recalculate Total and Update Calculator Display
 */
function updateOrderCalculator() {
  const total = (qtyHalf * PRICE_HALF_KG) + (qtyOne * PRICE_ONE_KG);
  const totalElem = document.getElementById("calcTotalPrice");
  if (totalElem) {
    totalElem.textContent = `₹${total}`;
  }

  const submitBtn = document.getElementById("calcSubmitBtn");
  if (submitBtn) {
    const btnSpan = submitBtn.querySelector("span");
    if (btnSpan) {
      if (currentLang === "kn") {
        btnSpan.textContent = `ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆರ್ಡರ್ ಕಳುಹಿಸಿ (₹${total})`;
      } else {
        btnSpan.textContent = `Send Order via WhatsApp (₹${total})`;
      }
    }
  }
}

/**
 * Build & Send Custom Order to WhatsApp
 */
function sendCustomWhatsAppOrder() {
  const total = (qtyHalf * PRICE_HALF_KG) + (qtyOne * PRICE_ONE_KG);
  const nameInput = document.getElementById("custName");
  const noteInput = document.getElementById("custNote");

  const custName = nameInput ? nameInput.value.trim() : "";
  const custNote = noteInput ? noteInput.value.trim() : "";

  let message = "";

  if (currentLang === "kn") {
    message = `ನಮಸ್ಕಾರ ವನರಾಸಿ ಫೇಮಸ್ ಕಬಾಬ್, ನಾನು ಆರ್ಡರ್ ನೀಡಲು ಬಯಸುತ್ತೇನೆ:\n`;
    if (qtyHalf > 0) {
      message += `• ${qtyHalf} x ಅರ್ಧ ಕೆ.ಜಿ. ಕಬಾಬ್ (₹${qtyHalf * PRICE_HALF_KG})\n`;
    }
    if (qtyOne > 0) {
      message += `• ${qtyOne} x 1 ಕೆ.ಜಿ. ಕಬಾಬ್ (₹${qtyOne * PRICE_ONE_KG})\n`;
    }
    message += `ಒಟ್ಟು ಮೊತ್ತ: ₹${total}\n`;
    if (custName) {
      message += `ಗ್ರಾಹಕರ ಹೆಸರು: ${custName}\n`;
    }
    if (custNote) {
      message += `ಸೂಚನೆ: ${custNote}\n`;
    }
    message += `ದಯವಿಟ್ಟು ಸಿದ್ಧಪಡಿಸಿ, ನಾನು ಅಂಗಡಿಯಲ್ಲಿ ಪಡೆದುಕೊಳ್ಳುತ್ತೇನೆ.`;
  } else {
    message = `Hello Vanarasi Famous Kabab, I want to place an order:\n`;
    if (qtyHalf > 0) {
      message += `• ${qtyHalf} x Half KG Kabab (₹${qtyHalf * PRICE_HALF_KG})\n`;
    }
    if (qtyOne > 0) {
      message += `• ${qtyOne} x 1 KG Kabab (₹${qtyOne * PRICE_ONE_KG})\n`;
    }
    message += `Total Bill: ₹${total}\n`;
    if (custName) {
      message += `Customer Name: ${custName}\n`;
    }
    if (custNote) {
      message += `Instructions: ${custNote}\n`;
    }
    message += `Please prepare hot. I will pick up from your shop.`;
  }

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

/**
 * Setup Navbar scroll effect & active section observer
 */
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active link highlighters
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function setupMobileNav() {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!mobileBtn || !mobileDrawer) return;

  mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.toggle("active");
    mobileDrawer.classList.toggle("open");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileBtn.classList.remove("active");
      mobileDrawer.classList.remove("open");
    });
  });
}
