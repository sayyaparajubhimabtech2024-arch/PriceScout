// ------------------------------
// PRODUCTS (leave blank / paste your products here)
// ------------------------------
const merchants = {
    amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    flipkart: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png",
    reliance: "https://cdn.brandfetch.io/idYe1C76vX/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    croma: "https://cdn.brandfetch.io/id9J1O8vnD/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
  };

const products = [
  {
      title: "iPhone 15",
      category: "Mobiles",
      img: "https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 78999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0CHX4L5LJ" },
        { merchant: "Flipkart", price: 79999, logo: merchants.flipkart, url: "https://www.flipkart.com/apple-iphone-15-black-128-gb/p/itm6ac6485635968" },
        { merchant: "Reliance Digital", price: 80999, logo: merchants.reliance, url: "https://www.reliancedigital.in/apple-iphone-15-128-gb-black/p/493838437" }
      ]
    },
    {
      title: "Samsung Galaxy S23",
      category: "Mobiles",
      img: "https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 72999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0BT9CXXXX" },
        { merchant: "Flipkart", price: 73999, logo: merchants.flipkart, url: "https://www.flipkart.com/samsung-galaxy-s23-5g-phantom-black-128-gb/p/itm5fb5cfb1e5f47" },
        { merchant: "Croma", price: 71999, logo: merchants.croma, url: "https://www.croma.com/samsung-galaxy-s23-5g-128gb-8gb-ram-phantom-black-/p/268554" }
      ]
    },
    {
      title: "HP Laptop 15s",
      category: "Laptops",
      img: "https://m.media-amazon.com/images/I/71+gQ9gOTuL._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 54999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0CQW6DHSZ" },
        { merchant: "Flipkart", price: 55999, logo: merchants.flipkart, url: "https://www.flipkart.com/hp-15s-intel-core-i5-12th-gen-1235u-16-gb-512-gb-ssd-windows-11-home-fq5327tu-thin-light-laptop/p/itm8e2ed17c24d4f" },
        { merchant: "Reliance Digital", price: 56999, logo: merchants.reliance, url: "https://www.reliancedigital.in/hp-15s-fq5327tu-laptop-intel-core-i5-1235u-16gb-512gb-ssd-windows-11-home-mso-fhd-natural-silver-15-6-inch/p/493180163" }
      ]
    },
    {
      title: "Sony WH-1000XM5 Headphones",
      category: "Headphones",
      img: "https://m.media-amazon.com/images/I/51aXvjzcukL._SX522_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 27999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B09Y3PBCGF" },
        { merchant: "Flipkart", price: 28999, logo: merchants.flipkart, url: "https://www.flipkart.com/sony-wh-1000xm5-bluetooth-headset/p/itm7e0e6c8a89e31" },
        { merchant: "Croma", price: 29999, logo: merchants.croma, url: "https://www.croma.com/sony-wh-1000xm5-wireless-noise-cancelling-headphones-black-/p/261869" }
      ]
    },
    {
      title: "Canon EOS 1500D DSLR Camera",
      category: "Cameras",
      img: "https://m.media-amazon.com/images/I/914hFeTU2-L._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 41999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B07D3CZJMT" },
        { merchant: "Flipkart", price: 41999, logo: merchants.flipkart, url: "https://www.flipkart.com/canon-eos-1500d-dslr-camera-body-18-55-mm-lens/p/itmf85jjgf3vhdbz" },
        { merchant: "Croma", price: 40499, logo: merchants.croma, url: "https://www.croma.com/canon-eos-1500d-24-1mp-digital-slr-camera-body-with-18-55mm-lens-black-/p/229371" }
      ]
    },
    {
      title: "LG 55-inch 4K Smart TV",
      category: "Televisions",
      img: "https://m.media-amazon.com/images/I/81WimZLWH1L._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 58999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0CX3QT293" },
        { merchant: "Flipkart", price: 57999, logo: merchants.flipkart, url: "https://www.flipkart.com/lg-139-cm-55-inch-ultra-hd-4k-led-smart-webos-tv-2024-edition/p/itm0e0c0e9b5afe4" },
        { merchant: "Reliance Digital", price: 56999, logo: merchants.reliance, url: "https://www.reliancedigital.in/lg-139-cm-55-inch-4k-ultra-hd-smart-led-tv-55ur7500psc/p/493838326" }
      ]
    },
    {
      title: "Apple Watch Series 9",
      category: "Watches",
      img: "https://m.media-amazon.com/images/I/71XMTLtZd5L._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 40999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0CHX9F92S" },
        { merchant: "Flipkart", price: 41999, logo: merchants.flipkart, url: "https://www.flipkart.com/apple-watch-series-9-gps-41-mm-starlight-aluminium-case-sport-band/p/itm6de25b1f0c3f7" },
        { merchant: "Croma", price: 42999, logo: merchants.croma, url: "https://www.croma.com/apple-watch-series-9-gps-41mm-starlight-aluminium-case-with-starlight-sport-band-s-m-/p/296621" }
      ]
    },
    {
      title: "Boat Airdopes 441",
      category: "Headphones",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKbbDXCJXaq6ykQjXPNegWd8Fz1v5XQ7jOQPo_LCvgIdt0mhdpkuoRIPanfm7-sdmgO7YWPwFo9DbUwdWwC5PNTV3nbSol9N8yg6IrKEraLv7a51t0iQ4u-1bUQxl6zAs6a_T6-A&usqp=CAc",
      comparisons: [
        { merchant: "Amazon", price: 1999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B08KVN9Q7R" },
        { merchant: "Flipkart", price: 1899, logo: merchants.flipkart, url: "https://www.flipkart.com/boat-airdopes-441-bluetooth-headset/p/itm6c9fa5c0d4d77" },
        { merchant: "Croma", price: 1799, logo: merchants.croma, url: "https://www.croma.com/boat-airdopes-441-tws-earbuds-active-black-/p/248916" }
      ]
    },
    {
      title: "Lenovo IdeaPad Slim 3",
      category: "Laptops",
      img: "https://m.media-amazon.com/images/I/71Q6JmLZE7L._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 45999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0C5BYMF9F" },
        { merchant: "Flipkart", price: 46999, logo: merchants.flipkart, url: "https://www.flipkart.com/lenovo-ideapad-slim-3-intel-core-i5-12th-gen-1235u-16-gb-512-gb-ssd-windows-11-home-15iah8-thin-light-laptop/p/itm6a9f0e70a4c6d" },
        { merchant: "Croma", price: 44999, logo: merchants.croma, url: "https://www.croma.com/lenovo-ideapad-slim-3-intel-core-i5-12th-gen-windows-11-home-thin-and-light-laptop-16gb-512gb-ssd-15-6-inch-/p/284745" }
      ]
    },
    {
      title: "Samsung 1.5 Ton Inverter AC",
      category: "Appliances",
      img: "https://m.media-amazon.com/images/I/71VdcWMerhL._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 38999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B09WSPV7YZ" },
        { merchant: "Flipkart", price: 38499, logo: merchants.flipkart, url: "https://www.flipkart.com/samsung-1-5-ton-5-star-split-inverter-ac-white/p/itm50c5f6c7f9b31" },
        { merchant: "Reliance Digital", price: 37999, logo: merchants.reliance, url: "https://www.reliancedigital.in/samsung-1-5-ton-5-star-ai-enabled-split-inverter-ac-ar18cy5zagd-white/p/493838296" }
      ]
    },
    {
      title: "OnePlus 11R 5G",
      category: "Mobiles",
      img: "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 39999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0BQY3QQK9" },
        { merchant: "Flipkart", price: 40499, logo: merchants.flipkart, url: "https://www.flipkart.com/oneplus-11r-5g-sonic-black-128-gb/p/itm2fc5f5c7f9b31" },
        { merchant: "Croma", price: 38999, logo: merchants.croma, url: "https://www.croma.com/oneplus-11r-5g-128gb-8gb-ram-sonic-black-/p/278945" }
      ]
    },
    {
      title: "Dell Inspiron 15 Laptop",
      category: "Laptops",
      img: "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 62999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0CGJDLQKX" },
        { merchant: "Flipkart", price: 62999, logo: merchants.flipkart, url: "https://www.flipkart.com/dell-inspiron-intel-core-i5-13th-gen-16-gb-512-gb-ssd-windows-11-home/p/itm9e5c0e8a89e31" },
        { merchant: "Reliance Digital", price: 61999, logo: merchants.reliance, url: "https://www.reliancedigital.in/dell-inspiron-15-laptop/p/493838327" }
      ]
    },
    {
      title: "JBL Flip 6 Bluetooth Speaker",
      category: "Speakers",
      img: "https://m.media-amazon.com/images/I/41QBa9gm++L._SY300_SX300_QL70_FMwebp_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 11999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B09F62PC8J" },
        { merchant: "Flipkart", price: 11999, logo: merchants.flipkart, url: "https://www.flipkart.com/jbl-flip-6-portable-bluetooth-speaker/p/itm6c9fa5c0d4d78" },
        { merchant: "Croma", price: 11499, logo: merchants.croma, url: "https://www.croma.com/jbl-flip-6-portable-bluetooth-speaker-black-/p/256789" }
      ]
    },
    {
      title: "Nikon D3500 DSLR Camera",
      category: "Cameras",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCbtqwlP_mmvd4cTeIA5s-X4QifM2tTt4nCuIfvbd1jaQITF2JWp533tqEvKShwPIslYI3vzgK9bbvpImFSjdwCIwu7COFmF_hcaPE5OEeLI3YzNQUsuy-UdU",
      comparisons: [
        { merchant: "Amazon", price: 37999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B07GRSM2WC" },
        { merchant: "Flipkart", price: 37999, logo: merchants.flipkart, url: "https://www.flipkart.com/nikon-d3500-dslr-camera-body-af-p-dx-nikkor-18-55mm-vr-lens/p/itmf85jjgf3vhdbx" },
        { merchant: "Croma", price: 36999, logo: merchants.croma, url: "https://www.croma.com/nikon-d3500-24-2mp-digital-slr-camera/p/234567" }
      ]
    },
    {
      title: "Samsung 43-inch FHD Smart TV",
      category: "Televisions",
      img: "https://m.media-amazon.com/images/I/41uoJjWef-L._SX300_SY300_QL70_FMwebp_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 32999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0CX3QT294" },
        { merchant: "Flipkart", price: 32499, logo: merchants.flipkart, url: "https://www.flipkart.com/samsung-108-cm-43-inch-full-hd-led-smart-tizen-tv/p/itm0e0c0e9b5afe5" },
        { merchant: "Reliance Digital", price: 31999, logo: merchants.reliance, url: "https://www.reliancedigital.in/samsung-43-inch-full-hd-smart-led-tv/p/493838328" }
      ]
    },
    {
      title: "Noise ColorFit Pro 4",
      category: "Watches",
      img: "https://m.media-amazon.com/images/I/61jOliJK5CL._AC_UY327_FMwebp_QL65_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 2799, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0B7H8ZXYN" },
        { merchant: "Flipkart", price: 2999, logo: merchants.flipkart, url: "https://www.flipkart.com/noise-colorfit-pro-4-bluetooth-calling-smartwatch/p/itm6de25b1f0c3f8" },
        { merchant: "Croma", price: 3199, logo: merchants.croma, url: "https://www.croma.com/noise-colorfit-pro-4-smartwatch/p/298765" }
      ]
    },
    {
      title: "Sony WF-C500 Earbuds",
      category: "Headphones",
      img: "https://m.media-amazon.com/images/I/51yXYxvskaL._AC_UY327_FMwebp_QL65_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 5999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B09HHZXY1P" },
        { merchant: "Flipkart", price: 6199, logo: merchants.flipkart, url: "https://www.flipkart.com/sony-wf-c500-truly-wireless-bluetooth-headset/p/itm7e0e6c8a89e32" },
        { merchant: "Croma", price: 5799, logo: merchants.croma, url: "https://www.croma.com/sony-wf-c500-truly-wireless-earbuds/p/265432" }
      ]
    },
    {
      title: "Asus TUF Gaming Laptop",
      category: "Laptops",
      img: "https://m.media-amazon.com/images/I/813c2iSKWZL._AC_UY327_FMwebp_QL65_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 75999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0C5BYMF9G" },
        { merchant: "Flipkart", price: 76999, logo: merchants.flipkart, url: "https://www.flipkart.com/asus-tuf-gaming-f15-intel-core-i5-12th-gen-rtx-3050-laptop/p/itm8e2ed17c24d4g" },
        { merchant: "Croma", price: 77999, logo: merchants.croma, url: "https://www.croma.com/asus-tuf-gaming-f15-laptop/p/287654" }
      ]
    },
    {
      title: "LG 260L Refrigerator",
      category: "Appliances",
      img: "https://m.media-amazon.com/images/I/61+pdg8CfmL._AC_UY327_FMwebp_QL65_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 24999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B09WSPV7Y1" },
        { merchant: "Flipkart", price: 24499, logo: merchants.flipkart, url: "https://www.flipkart.com/lg-260-l-frost-free-double-door-refrigerator/p/itm50c5f6c7f9b32" },
        { merchant: "Reliance Digital", price: 23999, logo: merchants.reliance, url: "https://www.reliancedigital.in/lg-260-l-refrigerator/p/493838297" }
      ]
    },
    {
      title: "GoPro Hero 11 Black",
      category: "Cameras",
      img: "https://m.media-amazon.com/images/I/616x4hqisoL._AC_UY327_FMwebp_QL65_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 41999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0BBJBKDPR" },
        { merchant: "Flipkart", price: 42999, logo: merchants.flipkart, url: "https://www.flipkart.com/gopro-hero-11-black-action-camera/p/itmf85jjgf3vhdc1" },
        { merchant: "Croma", price: 43499, logo: merchants.croma, url: "https://www.croma.com/gopro-hero-11-black/p/276543" }
      ]
    },
    {
      title: "Xiaomi Redmi Note 13 Pro",
      category: "Mobiles",
      img: "https://m.media-amazon.com/images/I/71r41+TT2UL._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 25999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0CQW6DHSA" },
        { merchant: "Flipkart", price: 26999, logo: merchants.flipkart, url: "https://www.flipkart.com/xiaomi-redmi-note-13-pro-5g-ocean-teal-128-gb/p/itm6ac6485635969" },
        { merchant: "Reliance Digital", price: 27499, logo: merchants.reliance, url: "https://www.reliancedigital.in/xiaomi-redmi-note-13-pro/p/493838438" }
      ]
    },
    {
      title: "Sony PlayStation 5",
      category: "Gaming",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._SX679_.jpg",
      comparisons: [
        { merchant: "Amazon", price: 54990, logo: merchants.amazon, url: "https://www.amazon.in/dp/B08J85C8JS" },
        { merchant: "Flipkart", price: 54990, logo: merchants.flipkart, url: "https://www.flipkart.com/sony-playstation-5-cfi-1008a01r-825-gb/p/itm6c9fa5c0d4d79" },
        { merchant: "Croma", price: 54990, logo: merchants.croma, url: "https://www.croma.com/sony-playstation-5/p/258901" }
      ]
    },
    {
      title: "Mi 75-inch 4K Smart TV",
      category: "Televisions",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSj7ZhQJZLca0arw8ybYAK2G9ck8kQfLDznWVrs18ez1Jk7BGzVojmOZm1QJCQPaAmvy0VEZZpAtODWkPS2usgFNciMwj8JQIGDcPGEd2tv2bqpzJ3-3KUwew",
      comparisons: [
        { merchant: "Amazon", price: 89999, logo: merchants.amazon, url: "https://www.amazon.in/dp/B0B6ZNHDPQ" },
        { merchant: "Flipkart", price: 88999, logo: merchants.flipkart, url: "https://www.flipkart.com/mi-189-cm-75-inch-ultra-hd-4k-led-smart-android-tv/p/itm0e0c0e9b5afe6" },
        { merchant: "Reliance Digital", price: 87999, logo: merchants.reliance, url: "https://www.reliancedigital.in/mi-75-inch-4k-smart-tv/p/493838329" }
      ]
    },
    {
      title: "Dyson V12 Vacuum Cleaner",
      category: "Appliances",
      img: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Vacuum%20Cleaners/Images/257378_kmalzq.png?tr=w-640",
      comparisons: [
        { merchant: "Amazon", price: 42900, logo: merchants.amazon, url: "https://www.amazon.in/dp/B09R4FW88Y" },
        { merchant: "Flipkart", price: 42900, logo: merchants.flipkart, url: "https://www.flipkart.com/dyson-v12-detect-slim-absolute-cordless-vacuum-cleaner/p/itm50c5f6c7f9b33" },
        { merchant: "Croma", price: 42500, logo: merchants.croma, url: "https://www.croma.com/dyson-v12-vacuum-cleaner/p/293456" }
      ]
    }
];

// ------------------------------
// MAIN JS
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");
  const searchBox = document.getElementById("searchBox");
  const categoryFilter = document.getElementById("categoryFilter");
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");
  const sortSelect = document.getElementById("sortSelect");

  const normalize = m => (m || "").trim().toLowerCase();

  // --------------------------
  // Render Products
  // --------------------------
  function renderProducts(list, selectedSites) {
    if (!productGrid) return;
    productGrid.innerHTML = "";

    list.forEach(p => {
      const comparisons = p.comparisons || [];

      // Filter comparisons based on selected sites
      const visibleComparisons = comparisons.filter(c =>
        selectedSites.length === 0 ? true : selectedSites.includes(normalize(c.merchant))
      );

      if (visibleComparisons.length === 0) return; // skip if none match

      // Find cheapest among visible
      const minPrice = Math.min(...visibleComparisons.map(c => c.price));
      const sorted = [...visibleComparisons].sort((a, b) => a.price - b.price);
      const cheapest = sorted[0];

      const card = document.createElement("div");
      card.className = "product-card";

      // Create merchant comparison HTML
      const allRows = sorted.map(c => `
        <div class="merchant-row ${c.price === minPrice ? "cheapest" : ""}">
          <img src="${c.logo}" alt="${c.merchant}">
          <span>₹${c.price.toLocaleString()}</span>
          <a href="${c.url}" target="_blank">Visit</a>
        </div>
      `).join("");

      // Display only the cheapest initially
      const cheapestRow = `
        <div class="merchant-row cheapest">
          <img src="${cheapest.logo}" alt="${cheapest.merchant}">
          <span>₹${cheapest.price.toLocaleString()}</span>
          <a href="${cheapest.url}" target="_blank">Visit</a>
        </div>
      `;

      card.innerHTML = `
        <img src="${p.img || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'}" alt="${p.title}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'">
        <h3>${p.title}</h3>
        <p>${p.category}</p>
        ${cheapestRow}
        <button class="see-more" aria-expanded="false">See More</button>
        <div class="more-merchants" aria-hidden="true">${allRows}</div>
      `;

      productGrid.appendChild(card);
    });
  }

  // --------------------------
  // See More / See Less Toggle
  // --------------------------
  function setupSeeMore() {
    if (!productGrid) return;
    productGrid.addEventListener("click", e => {
      const btn = e.target.closest(".see-more");
      if (!btn) return;

      const container = btn.nextElementSibling;
      const expanded = btn.getAttribute("aria-expanded") === "true";

      if (expanded) {
        container.style.maxHeight = container.scrollHeight + "px";
        container.offsetHeight;
        container.style.maxHeight = "0px";
        btn.setAttribute("aria-expanded", "false");
        container.setAttribute("aria-hidden", "true");
        btn.textContent = "See More";
      } else {
        container.style.maxHeight = container.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
        container.setAttribute("aria-hidden", "false");
        btn.textContent = "See Less";
        container.addEventListener("transitionend", () => {
          if (btn.getAttribute("aria-expanded") === "true") {
            container.style.maxHeight = "none";
          }
        }, { once: true });
      }
    });
  }

  // --------------------------
  // Filtering + Sorting Logic
  // --------------------------
  function filterProducts() {
    const q = (searchBox?.value || "").toLowerCase();
    const cat = categoryFilter?.value || "all";
    const priceLimit = parseInt(priceRange?.value || "999999", 10);

    const selectedSites = Array.from(document.querySelectorAll("input[name='site']:checked"))
      .map(cb => normalize(cb.value));

    let filtered = products.filter(p => {
      const titleMatch = p.title.toLowerCase().includes(q);
      const catMatch = cat === "all" || p.category === cat;

      // Filter visible comparisons
      const visibleComparisons = (p.comparisons || []).filter(c =>
        selectedSites.length === 0 ? true : selectedSites.includes(normalize(c.merchant))
      );

      if (visibleComparisons.length === 0) return false; // no site selected for this product

      const minPrice = Math.min(...visibleComparisons.map(c => c.price));
      return titleMatch && catMatch && minPrice <= priceLimit;
    });

    // Sorting
    const sortType = sortSelect?.value || "";
    if (sortType === "low-high") {
      filtered.sort((a, b) => {
        const aMin = Math.min(...(a.comparisons || []).filter(c => selectedSites.includes(normalize(c.merchant)) || selectedSites.length === 0).map(c => c.price));
        const bMin = Math.min(...(b.comparisons || []).filter(c => selectedSites.includes(normalize(c.merchant)) || selectedSites.length === 0).map(c => c.price));
        return aMin - bMin;
      });
    } else if (sortType === "high-low") {
      filtered.sort((a, b) => {
        const aMin = Math.min(...(a.comparisons || []).filter(c => selectedSites.includes(normalize(c.merchant)) || selectedSites.length === 0).map(c => c.price));
        const bMin = Math.min(...(b.comparisons || []).filter(c => selectedSites.includes(normalize(c.merchant)) || selectedSites.length === 0).map(c => c.price));
        return bMin - aMin;
      });
    } else if (sortType === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "za") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    renderProducts(filtered, selectedSites);
  }

  // --------------------------
  // Event Listeners
  // --------------------------
  searchBox?.addEventListener("input", filterProducts);
  categoryFilter?.addEventListener("change", filterProducts);
  priceRange?.addEventListener("input", () => {
    if (priceValue) priceValue.textContent = `Up to ₹${priceRange.value}`;
    filterProducts();
  });
  sortSelect?.addEventListener("change", filterProducts);
  document.querySelectorAll("input[name='site']").forEach(cb =>
    cb.addEventListener("change", filterProducts)
  );

  // --------------------------
  // Initialize
  // --------------------------
  if (productGrid) {
    renderProducts(products, []);
    setupSeeMore();
  }
});

// ------------------------------
// Home Page Product Belt
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const belt = document.getElementById("homeBelt");
  if (!belt || !Array.isArray(products) || products.length === 0) return;

  // pick 5 random products
  const featured = [...products].sort(() => 0.5 - Math.random()).slice(0, 5);

  belt.innerHTML = featured.map(p => {
    const cheapest = p.comparisons.reduce((min, c) => c.price < min.price ? c : min, p.comparisons[0]);
    return `
      <div class="belt-item" onclick="window.location.href='products.html?category=${encodeURIComponent(p.category)}'">
        <img src="${p.img || 'no-image.png'}" alt="${p.title}" onerror="this.src='no-image.png'">
        <h3>${p.title}</h3>
        <p><strong>₹${cheapest.price.toLocaleString()}</strong></p>
        <small>${cheapest.merchant}</small>
      </div>
    `;
  }).join("");
});
