import React, { useEffect, useMemo, useState } from "react";

/* -------------------------------------------------------
   VIBES WIL – TV Display (Black & Gold mit vollen Spaltenbildern)
   - 3 Spalten (links & mitte: rotierend, rechts: Shisha fix)
   - Dunkles Overlay für Lesbarkeit
   - Inhalt oben ausgerichtet
--------------------------------------------------------*/

// Fallback-Bild (wenn URL nicht lädt)
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1500&q=80";

// Bild-Zuordnung (normalisierte Keys)
const IMAGE_MAP = {
  "cocktails":
    "https://plus.unsplash.com/premium_photo-1677000666461-fbefa43c2c7f?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "bier":
    "https://images.unsplash.com/photo-1646824648652-7cc03f332047?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "softdrinks":
    "https://images.unsplash.com/photo-1473425990767-8324e48b48b5?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000",
  "heissgetränke":
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1500&q=80",
  "shisha":
    "https://images.unsplash.com/photo-1630175772812-3368aad7982d?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpc2hhfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "187 strassenbande":
    "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=1500&q=80",
  "musthave":
    "https://images.unsplash.com/photo-1623398047089-74b8a93e06e3?auto=format&fit=crop&w=1500&q=80",
  "adalya":
    "https://images.unsplash.com/photo-1615485290342-77b8f26cfb3e?auto=format&fit=crop&w=1500&q=80",
};

// Hilfsfunktionen
const GOLD = "#d4af37";
const BORDER_GOLD = "rgba(212,175,55,0.25)";
const normalize = (s) => (s || "").toString().trim().toLowerCase();
const getImage = (key) => IMAGE_MAP[normalize(key)] || FALLBACK_IMG;
const groupBy = (arr, key) =>
  arr.reduce((acc, x) => {
    const k = x[key] || "Sonstiges";
    (acc[k] = acc[k] || []).push(x);
    return acc;
  }, {});
const currency = (n) => (typeof n === "number" ? `${n.toFixed(n % 1 ? 2 : 0)} CHF` : "");

// Demo-Daten
const DATA = {
  drinks: [
    { category: "Cocktails", name: "Mojito", price: 15.5, note: "Rum · Limette · Minze" },
    { category: "Cocktails", name: "Espresso Martini", price: 15.5, note: "Vodka · Espresso" },
    { category: "Cocktails", name: "Long Island Iced Tea", price: 18 },
    { category: "Bier", name: "Feldschlösschen 0.5 l", price: 6 },
    { category: "Bier", name: "Heineken 0.33 l", price: 5.5 },
    { category: "Softdrinks", name: "Cola 0.33 l", price: 4.5 },
    { category: "Softdrinks", name: "Red Bull", price: 6 },
    { category: "Heissgetränke", name: "Café Crème", price: 4 },
  ],
  shisha: [
    { brand: "187 Strassenbande", flavor: "Beach Vibez", price: 25, note: "Himbeere · Limette" },
    { brand: "Musthave", flavor: "Pinkman", price: 25, note: "Beerenmix" },
    { brand: "Adalya", flavor: "Love 66", price: 25, note: "Honigmelone · Maracuja · Minze" },
  ],
};

export default function VibesWilTV() {
  const ROTATE_MS = 5000;
  const FADE_MS = 400;
  const [fontScale, setFontScale] = useState(1.05);

  const drinkGroups = useMemo(() => groupBy(DATA.drinks, "category"), []);
  const drinkCategories = Object.keys(drinkGroups);
  const shishaGroups = useMemo(() => groupBy(DATA.shisha, "brand"), []);

  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  // automatische Rotation
  useEffect(() => {
    if (drinkCategories.length === 0) return;
    let fade, next;
    const loop = () => {
      fade = setTimeout(() => setFading(true), ROTATE_MS - FADE_MS);
      next = setTimeout(() => {
        setIdx((i) => (i + 2) % drinkCategories.length);
        setFading(false);
        loop();
      }, ROTATE_MS);
    };
    loop();
    return () => {
      clearTimeout(fade);
      clearTimeout(next);
    };
  }, [drinkCategories.length]);

  const leftCat = drinkCategories.length ? drinkCategories[idx % drinkCategories.length] : "";
  const rightCat = drinkCategories.length ? drinkCategories[(idx + 1) % drinkCategories.length] : "";

  return (
    <div className="min-h-screen text-white bg-black">
      <Header fontScale={fontScale} setFontScale={setFontScale} />

      {/* Drei Spalten */}
      <div className="grid grid-cols-3 h-[85vh]" style={{ fontSize: `${fontScale}rem` }}>
        <FullBgColumn title={leftCat || "—"} bg={getImage(leftCat)} fading={fading}>
          <MenuList items={drinkGroups[leftCat] || []} />
        </FullBgColumn>

        <FullBgColumn title={rightCat || "—"} bg={getImage(rightCat)} fading={fading}>
          <MenuList items={drinkGroups[rightCat] || []} />
        </FullBgColumn>

        <FullBgColumn title="Shisha · Tabak" bg={getImage("shisha")} fading={false}>
          <div className="space-y-6">
            {Object.entries(shishaGroups).map(([brand, items]) => (
              <div key={brand}>
                <h3 className="text-2xl mb-2 font-serif" style={{ color: GOLD, fontWeight: 700 }}>
                  {brand}
                </h3>
                <ul className="divide-y" style={{ borderColor: BORDER_GOLD }}>
                  {items.map((t, i) => (
                    <MenuRow key={`${brand}-${i}`} label={t.flavor} price={t.price} note={t.note} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FullBgColumn>
      </div>

      <Footer />
    </div>
  );
}

/* ------------------ UI-Komponenten ------------------ */

function Header({ fontScale, setFontScale }) {
  return (
    <div className="border-b px-6 py-4" style={{ borderColor: BORDER_GOLD }}>
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <h1 className="text-4xl font-serif" style={{ color: GOLD, fontWeight: 800 }}>
          VIBES WIL
        </h1>
        <div className="text-white/70 text-base">· Menü Display</div>
        <div className="ml-auto flex items-center gap-4 text-sm">
          <span className="text-white/70 hidden md:inline">Textgröße</span>
          <input
            type="range"
            min={0.9}
            max={1.6}
            step={0.05}
            value={fontScale}
            onChange={(e) => setFontScale(Number(e.target.value))}
            className="accent-white"
          />
          <span
            className="font-mono px-2 py-0.5 rounded"
            style={{
              border: `1px solid ${BORDER_GOLD}`,
              background: "rgba(255,255,255,0.06)",
            }}
          >
            {fontScale.toFixed(2)}×
          </span>
        </div>
      </div>
    </div>
  );
}

/* --- Hauptspalte mit dunklem Overlay und Top-Alignment --- */
function FullBgColumn({ title, bg, children, fading }) {
  const [src, setSrc] = useState(bg || FALLBACK_IMG);
  useEffect(() => setSrc(bg || FALLBACK_IMG), [bg]);

  return (
    <div className="relative overflow-hidden">
      {/* Bild */}
      <img
        src={src}
        alt={normalize(title)}
        onError={() => setSrc(FALLBACK_IMG)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dunkles Overlay + Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_70%,rgba(0,0,0,0.95)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95" />
      </div>

      {/* Inhalt oben */}
      <div className="relative z-10 h-full flex flex-col items-start justify-start px-8 py-8">
        <h2
          className="text-3xl mb-4 font-serif drop-shadow-[0_3px_8px_rgba(0,0,0,1)]"
          style={{ color: GOLD, fontWeight: 800 }}
        >
          {title}
        </h2>
        <div className="w-full">{children}</div>
      </div>

      {/* Spaltentrenner */}
      <div className="absolute top-0 right-0 h-full" style={{ width: 1, background: BORDER_GOLD }} />
    </div>
  );
}

function MenuList({ items }) {
  if (!items || items.length === 0)
    return <div className="text-white/60">Keine Einträge</div>;

  return (
    <ul className="divide-y" style={{ borderColor: BORDER_GOLD }}>
      {items.map((d, i) => (
        <MenuRow key={i} label={d.name} price={d.price} note={d.note} />
      ))}
    </ul>
  );
}

function MenuRow({ label, price, note }) {
  return (
    <li className="py-2">
      <div className="flex items-baseline">
        <span className="text-lg md:text-xl font-medium truncate">{label}</span>
        <span
          className="flex-1 mx-3 border-b border-dotted"
          style={{ borderColor: BORDER_GOLD }}
        />
        <span className="text-lg md:text-xl font-semibold" style={{ color: GOLD }}>
          {currency(price)}
        </span>
      </div>
      {note && <div className="text-sm text-white/70 mt-1">{note}</div>}
    </li>
  );
}

function Footer() {
  return (
    <div className="text-center py-6 text-white/50 text-sm">
      © {new Date().getFullYear()} Vibes Wil · Black & Gold Display
    </div>
  );
}
