const places = [
  {
    id: 1,
    name: "Luma Coffee Çayyolu",
    category: "cafe",
    icon: "fa-mug-hot",
    x: 34,
    y: 34,
    distance: "2.1 km",
    distanceNumber: 2.1,
    travelTime: "7 dk",
    wait: 8,
    crowd: "Orta",
    parking: "Zor",
    parkingEasy: false,
    parkingLot: "Var",
    paidParking: "İlk 1 saat ücretsiz",
    valet: false,
    verified: true,
    priceLevel: "₺₺",
    updated: "Menü bugün güncellendi",
    description: "Çalışmak ve kahve içmek için popüler. Akşam saatlerinde park zorlaşıyor.",
    aiTip: "20 dakika sonra daha sakin görünüyor.",
    menu: [
      { item: "Latte", price: "₺105" },
      { item: "Americano", price: "₺85" },
      { item: "San Sebastian", price: "₺165" }
    ]
  },
  {
    id: 2,
    name: "Ankara 12. Noter",
    category: "notary",
    icon: "fa-file-signature",
    x: 72,
    y: 25,
    distance: "3.4 km",
    distanceNumber: 3.4,
    travelTime: "12 dk",
    wait: 42,
    crowd: "Yoğun",
    parking: "Çok zor",
    parkingEasy: false,
    parkingLot: "Yok",
    paidParking: "Yakında ücretli otopark var",
    valet: false,
    verified: true,
    priceLevel: "Resmi ücret",
    updated: "Yoğunluk 6 dk önce bildirildi",
    description: "Öğle öncesi yoğun. Yakındaki alternatif noter daha sakin olabilir.",
    aiTip: "Şu an gitmek önerilmez. 15:30 sonrası daha uygun.",
    menu: [
      { item: "Vekaletname", price: "Resmi tarife" },
      { item: "Araç Satış", price: "Resmi tarife" },
      { item: "Belge Onayı", price: "Resmi tarife" }
    ]
  },
  {
    id: 3,
    name: "Çayyolu Kargo Şubesi",
    category: "cargo",
    icon: "fa-box",
    x: 22,
    y: 67,
    distance: "1.2 km",
    distanceNumber: 1.2,
    travelTime: "5 dk",
    wait: 13,
    crowd: "Orta",
    parking: "Orta",
    parkingEasy: false,
    parkingLot: "Yok",
    paidParking: "Cadde üzeri park",
    valet: false,
    verified: false,
    priceLevel: "₺",
    updated: "Park bilgisi 1 saat önce eklendi",
    description: "Öğle arası yoğunluk artıyor. Paket teslim için bekleme orta seviyede.",
    aiTip: "14:30 sonrası bekleme süresi düşebilir.",
    menu: [
      { item: "Küçük Paket", price: "₺85+" },
      { item: "Orta Paket", price: "₺135+" },
      { item: "Dosya Gönderimi", price: "₺65+" }
    ]
  },
  {
    id: 4,
    name: "Batıkent Premium Oto Yıkama",
    category: "carwash",
    icon: "fa-car-on",
    x: 62,
    y: 72,
    distance: "5.8 km",
    distanceNumber: 5.8,
    travelTime: "16 dk",
    wait: 5,
    crowd: "Sakin",
    parking: "Kolay",
    parkingEasy: true,
    parkingLot: "Var",
    paidParking: "Ücretsiz",
    valet: true,
    verified: true,
    priceLevel: "₺₺",
    updated: "Fiyatlar bugün işletme tarafından güncellendi",
    description: "Geniş alan, kolay park ve hızlı hizmet. Şu an gitmek için iyi zaman.",
    aiTip: "Şimdi gitmek mantıklı. Bekleme düşük ve park kolay.",
    menu: [
      { item: "Dış Yıkama", price: "₺250" },
      { item: "İç-Dış Yıkama", price: "₺450" },
      { item: "Detaylı Temizlik", price: "₺1200" }
    ]
  },
  {
    id: 5,
    name: "Medline Poliklinik",
    category: "hospital",
    icon: "fa-hospital",
    x: 82,
    y: 58,
    distance: "4.6 km",
    distanceNumber: 4.6,
    travelTime: "14 dk",
    wait: 28,
    crowd: "Yoğun",
    parking: "Orta",
    parkingEasy: false,
    parkingLot: "Var",
    paidParking: "₺60 / saat",
    valet: true,
    verified: true,
    priceLevel: "₺₺₺",
    updated: "Yoğunluk 12 dk önce bildirildi",
    description: "Akşam saatlerinde danışma ve kayıt sırasında bekleme artıyor.",
    aiTip: "Randevun yoksa 18:00 sonrası önerilmez.",
    menu: [
      { item: "Muayene", price: "₺950+" },
      { item: "Kan Tahlili", price: "₺400+" },
      { item: "Check-up", price: "₺3500+" }
    ]
  },
  {
    id: 6,
    name: "Route Burger Ankara",
    category: "food",
    icon: "fa-burger",
    x: 47,
    y: 18,
    distance: "2.9 km",
    distanceNumber: 2.9,
    travelTime: "10 dk",
    wait: 18,
    crowd: "Orta",
    parking: "Kolay",
    parkingEasy: true,
    parkingLot: "Var",
    paidParking: "Ücretsiz",
    valet: false,
    verified: false,
    priceLevel: "₺₺",
    updated: "Menü 2 gün önce kullanıcı tarafından güncellendi",
    description: "Akşam 19:00 sonrası sıra artıyor. Park alanı genelde yeterli.",
    aiTip: "Şimdi gidersen yaklaşık 18 dakika bekleyebilirsin.",
    menu: [
      { item: "Classic Burger", price: "₺240" },
      { item: "Cheese Burger", price: "₺270" },
      { item: "Patates", price: "₺95" }
    ]
  }
];

const placesList = document.getElementById("placesList");
const resultCount = document.getElementById("resultCount");
const searchInput = document.getElementById("searchInput");

const filterButtons = document.querySelectorAll(".filter-btn");
const sideItems = document.querySelectorAll(".side-item");
const viewPanels = document.querySelectorAll(".view-panel");

const lowWaitCheck = document.getElementById("lowWaitCheck");
const easyParkCheck = document.getElementById("easyParkCheck");
const valetCheck = document.getElementById("valetCheck");
const verifiedCheck = document.getElementById("verifiedCheck");

const selectedCard = document.getElementById("selectedCard");
const mapMarkers = document.getElementById("mapMarkers");

const routePlaceName = document.getElementById("routePlaceName");
const routeSummary = document.getElementById("routeSummary");
const routeDistance = document.getElementById("routeDistance");
const routeTime = document.getElementById("routeTime");
const routeWait = document.getElementById("routeWait");
const routeWarning = document.getElementById("routeWarning");

const toast = document.getElementById("toast");

let activeCategory = "all";
let selectedPlace = null;
let smartSort = false;

function showToast(message) {
  toast.querySelector("span").textContent = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 2200);
}

function getCrowdTagClass(crowd) {
  if (crowd === "Sakin") return "green";
  if (crowd === "Orta") return "yellow";
  return "red";
}

function getMarkerCrowdClass(crowd) {
  if (crowd === "Sakin") return "crowd-low";
  if (crowd === "Orta") return "crowd-mid";
  return "crowd-high";
}

function getFilteredPlaces() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  let filteredPlaces = places.filter((place) => {
    const matchesCategory = activeCategory === "all" || place.category === activeCategory;

    const matchesSearch =
      place.name.toLowerCase().includes(searchTerm) ||
      place.description.toLowerCase().includes(searchTerm) ||
      place.category.toLowerCase().includes(searchTerm);

    const matchesLowWait = !lowWaitCheck.checked || place.wait <= 15;
    const matchesEasyPark = !easyParkCheck.checked || place.parkingEasy;
    const matchesValet = !valetCheck.checked || place.valet;
    const matchesVerified = !verifiedCheck.checked || place.verified;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesLowWait &&
      matchesEasyPark &&
      matchesValet &&
      matchesVerified
    );
  });

  if (smartSort) {
    filteredPlaces.sort((a, b) => {
      const scoreA = a.wait + a.distanceNumber * 3 + (a.parkingEasy ? -8 : 8);
      const scoreB = b.wait + b.distanceNumber * 3 + (b.parkingEasy ? -8 : 8);
      return scoreA - scoreB;
    });
  }

  return filteredPlaces;
}

function renderPlaces() {
  const filteredPlaces = getFilteredPlaces();

  resultCount.textContent = `${filteredPlaces.length} mekan bulundu`;
  placesList.innerHTML = "";

  filteredPlaces.forEach((place) => {
    const item = document.createElement("article");
    item.className = `place-item ${selectedPlace?.id === place.id ? "selected" : ""}`;

    item.innerHTML = `
      <div class="place-main">
        <h4>${place.name}</h4>
        <p>${place.description}</p>

        <div class="tags">
          <span class="tag green">${place.distance}</span>
          <span class="tag ${getCrowdTagClass(place.crowd)}">${place.crowd}</span>
          <span class="tag">${place.parking}</span>
          <span class="tag">${place.parkingLot}</span>
          <span class="tag">${place.valet ? "Vale var" : "Vale yok"}</span>
          ${place.verified ? `<span class="tag green">Doğrulanmış</span>` : `<span class="tag yellow">Topluluk verisi</span>`}
        </div>
      </div>

      <div class="place-actions">
        <div class="wait-chip">${place.wait} dk bekleme</div>
        <button class="select-btn" data-id="${place.id}">Detayları Gör</button>
        <button class="nav-start-btn" data-id="${place.id}">Navigasyonu Başlat</button>
      </div>
    `;

    placesList.appendChild(item);
  });

  document.querySelectorAll(".select-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      selectPlace(id);
    });
  });

  document.querySelectorAll(".nav-start-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      selectPlace(id);
      openView("route");
      showToast("Navigasyon simülasyonu başlatıldı.");
    });
  });

  renderMapMarkers();
}

function renderMapMarkers() {
  const filteredPlaces = getFilteredPlaces();
  mapMarkers.innerHTML = "";

  filteredPlaces.forEach((place) => {
    const marker = document.createElement("button");
    marker.className = `map-marker ${getMarkerCrowdClass(place.crowd)} ${selectedPlace?.id === place.id ? "selected" : ""}`;
    marker.style.left = `${place.x}%`;
    marker.style.top = `${place.y}%`;
    marker.title = place.name;
    marker.dataset.id = place.id;

    marker.innerHTML = `
      <i class="fa-solid ${place.icon}"></i>
      <span class="marker-wait">${place.wait} dk</span>
    `;

    marker.addEventListener("click", () => {
      selectPlace(place.id);
      showToast(`${place.name} seçildi.`);
    });

    mapMarkers.appendChild(marker);
  });
}

function selectPlace(id) {
  selectedPlace = places.find((place) => place.id === id);
  renderSelectedCard();
  renderPlaces();
  renderMapMarkers();
}

function renderSelectedCard() {
  if (!selectedPlace) return;

  selectedCard.innerHTML = `
    <div class="selected-info">
      <h3>${selectedPlace.name}</h3>
      <p>${selectedPlace.description}</p>

      <div class="detail-grid">
        <div class="detail-tile"><span>Bekleme</span><strong>${selectedPlace.wait} dk</strong></div>
        <div class="detail-tile"><span>Yoğunluk</span><strong>${selectedPlace.crowd}</strong></div>
        <div class="detail-tile"><span>Park</span><strong>${selectedPlace.parking}</strong></div>
        <div class="detail-tile"><span>Otopark</span><strong>${selectedPlace.parkingLot}</strong></div>
        <div class="detail-tile"><span>Ücret</span><strong>${selectedPlace.paidParking}</strong></div>
        <div class="detail-tile"><span>Vale</span><strong>${selectedPlace.valet ? "Var" : "Yok"}</strong></div>
      </div>

      <h4>Menü / Fiyat</h4>

      <div class="menu-list">
        ${selectedPlace.menu
          .map(
            (menuItem) => `
              <div class="menu-row">
                <span>${menuItem.item}</span>
                <strong>${menuItem.price}</strong>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="route-warning">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        ${selectedPlace.aiTip}
      </div>

      <button class="details-action" id="detailsNavBtn">Navigasyonu Başlat</button>
    </div>
  `;

  document.getElementById("detailsNavBtn").addEventListener("click", () => {
    openView("route");
    renderRoute();
    showToast("Rota hazırlandı.");
  });

  renderRoute();
}

function renderRoute() {
  if (!selectedPlace) return;

  routePlaceName.textContent = selectedPlace.name;

  routeSummary.textContent =
    `${selectedPlace.name} için örnek rota oluşturuldu. Yol süresi ${selectedPlace.travelTime}, ` +
    `tahmini bekleme ${selectedPlace.wait} dakika.`;

  routeDistance.textContent = selectedPlace.distance;
  routeTime.textContent = selectedPlace.travelTime;
  routeWait.textContent = `${selectedPlace.wait} dk`;

  let parkingMessage = "";

  if (selectedPlace.parkingEasy) {
    parkingMessage = "Park kolay görünüyor. Direkt gitmek mantıklı.";
  } else if (selectedPlace.valet) {
    parkingMessage = "Park biraz zor olabilir ama vale var. Vale kullanmak mantıklı olabilir.";
  } else {
    parkingMessage = "Park zor görünüyor. Yakındaki otoparkları kontrol etmen önerilir.";
  }

  routeWarning.innerHTML = `
    <i class="fa-solid fa-circle-info"></i>
    ${selectedPlace.aiTip} ${parkingMessage}
  `;
}

function openView(viewName) {
  sideItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });

  viewPanels.forEach((panel) => {
    panel.classList.remove("active");
  });

  document.getElementById(`${viewName}View`).classList.add("active");

  if (viewName === "map") {
    renderMapMarkers();
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    activeCategory = button.dataset.category;
    renderPlaces();
  });
});

sideItems.forEach((item) => {
  item.addEventListener("click", () => {
    openView(item.dataset.view);
  });
});

searchInput.addEventListener("input", renderPlaces);

lowWaitCheck.addEventListener("change", renderPlaces);
easyParkCheck.addEventListener("change", renderPlaces);
valetCheck.addEventListener("change", renderPlaces);
verifiedCheck.addEventListener("change", renderPlaces);

document.getElementById("sortBtn").addEventListener("click", () => {
  smartSort = !smartSort;

  document.getElementById("sortBtn").innerHTML = smartSort
    ? `<i class="fa-solid fa-arrow-down-short-wide"></i> Akıllı sıralama açık`
    : `<i class="fa-solid fa-arrow-down-short-wide"></i> En mantıklı sırala`;

  renderPlaces();
});

document.getElementById("openPremiumBtn").addEventListener("click", () => {
  openView("premium");
});

document.getElementById("removeAdBtn").addEventListener("click", () => {
  document.getElementById("adBox").style.display = "none";
  showToast("Demo: Reklam kaldırıldı. Premium özelliği aktif edildi.");
});

document.getElementById("notificationBtn").addEventListener("click", () => {
  showToast("Bildirim: Luma Coffee 20 dakika sonra sakinleşebilir.");
});

document.getElementById("changeLocationBtn").addEventListener("click", () => {
  showToast("Demo konumu güncellendi: Çayyolu, Ankara.");
});

document.getElementById("saveBusinessBtn").addEventListener("click", () => {
  showToast("İşletme bilgileri demo olarak kaydedildi.");
});

document.getElementById("fitMapBtn").addEventListener("click", () => {
  showToast("Harita demo konuma ortalandı.");
  renderMapMarkers();
});

renderPlaces();
renderMapMarkers();