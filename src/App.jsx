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
  "rotwein": "https://images.unsplash.com/photo-1544776527-68e63addedf7?auto=format&fit=crop&w=2000&q=80",
  "weisswein": "https://images.unsplash.com/photo-1696081248263-af609cc61ffa?auto=format&fit=crop&w=2000&q=80",
  "cocktails": "https://images.unsplash.com/photo-1748674758581-2afc6adebc19?auto=format&fit=crop&w=2000&q=80",
  "mocktails": "https://images.unsplash.com/photo-1610515660473-c11d4f3f7d37?auto=format&fit=crop&w=2000&q=80",
  "shots": "https://images.unsplash.com/photo-1681555597955-9d478f4dbf69?auto=format&fit=crop&w=2000&q=80",
  "aperitifs": "https://images.unsplash.com/photo-1607687332053-ef831d0775ad?auto=format&fit=crop&w=2000&q=80",
  "spirituosen · vodka": "https://images.unsplash.com/photo-1550985543-f47f38aeee65?auto=format&fit=crop&w=2000&q=80",
  "spirituosen · gin": "https://images.unsplash.com/photo-1623408859815-22534357b3db?auto=format&fit=crop&w=2000&q=80",
  "spirituosen · whiskey": "https://images.unsplash.com/photo-1713742137866-cdeb0b0f5705?auto=format&fit=crop&w=2000&q=80",
  "spirituosen · rum": "https://images.unsplash.com/photo-1692455129272-60299bc2b1a8?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "liköre": "https://images.unsplash.com/photo-1692455129272-60299bc2b1a8?auto=format&fit=crop&w=2000&q=80",
  "spritz & weincocktails": "https://images.unsplash.com/photo-1756522075789-46fe38a0ac14?auto=format&fit=crop&w=2000&q=80",
  "schaumwein & champagner": "https://images.unsplash.com/photo-1682071308321-19127e9bd8ba?auto=format&fit=crop&w=2000&q=80",
  "bier": "https://images.unsplash.com/photo-1615332579037-3c44b3660b53?auto=format&fit=crop&w=2000&q=80",
  "kalte getränke": "https://images.unsplash.com/photo-1629654613528-5d0a2e4166de?auto=format&fit=crop&w=2000&q=80",
  "warme getränke": "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=2000&q=80",
  "shisha": "https://images.unsplash.com/photo-1630175772812-3368aad7982d?auto=format&fit=crop&w=2000&q=80",
  "hookah": "https://images.unsplash.com/photo-1630175772812-3368aad7982d?auto=format&fit=crop&w=2000&q=80"
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
const currency = (n) => (typeof n === "number" ? `${n.toFixed(2)} CHF` : "");

//  const currency = (n) => (typeof n === "number" ? `${n.toFixed(n % 1 ? 2 : 0)} CHF` : "");

// Demo-Daten
// Vollständige Menü-Daten von VIBES WIL
const DATA = {
  drinks: [
    // --- Wein ---
    { category: "Rotwein", name: "Pinot Noir", price: 7.5, note: "1 dl · Flasche 70 cl / 57.00 CHF" },
    { category: "Rotwein", name: "Primitivo", price: 8.0, note: "1 dl · Flasche 70 cl / 62.00 CHF" },
    { category: "Weisswein", name: "Pinot Grigio", price: 6.5, note: "1 dl · Flasche 70 cl / 44.00 CHF" },
    { category: "Weisswein", name: "Chardonnay", price: 7.0, note: "1 dl · Flasche 70 cl / 53.00 CHF" },

    // --- Cocktails mit Alkohol ---
    { category: "Cocktails", name: "Good Vibes", price: 15.5, note: "Vodka · Himbeerenpüree · Cranberrysaft · Limette · Rohrzucker" },
    { category: "Cocktails", name: "Caipirinha", price: 15.5, note: "Cachaça · Lime Juice · Limette · Rohrzucker" },
    { category: "Cocktails", name: "Cuba Libre", price: 15.5, note: "Rum · Coca Cola / Zero · Limette · Rohrzucker" },
    { category: "Cocktails", name: "Long Island Iced Tea", price: 19.5, note: "Vodka · Gin · Rum · Tequila · Triple Sec · Coca Cola · Lime Juice" },
    { category: "Cocktails", name: "Mojito", price: 15.5, note: "Rum · Soda · Limette · Minze · Rohrzucker" },
    { category: "Cocktails", name: "Pina Colada", price: 15.5, note: "Rum · Kokosnuss-Sirup · Ananassaft · Rahm" },
    { category: "Cocktails", name: "Sex on the Beach", price: 15.5, note: "Vodka · White Peach · Orangensaft · Cranberrysaft" },
    { category: "Cocktails", name: "Amaretto Sour", price: 15.5, note: "Amaretto · Orangensaft · Lime Juice · Rohrzucker" },

    // --- Cocktails ohne Alkohol ---
    { category: "Mocktails", name: "Berry Vibes", price: 12.5, note: "Himbeerenpüree · Cranberrysaft · Limette · Rohrzucker" },
    { category: "Mocktails", name: "Coconut Vibes", price: 12.5, note: "Ananassaft · Orangensaft · Rahm · Kokosnuss-Sirup · Grenadine" },
    { category: "Mocktails", name: "Hawaii Surfer", price: 12.5, note: "Ananassaft · Orangensaft · Passionssaft · Cranberrysaft" },
    { category: "Mocktails", name: "Virgin Mojito", price: 12.5, note: "Ginger Ale · Limette · Minze · Rohrzucker" },

    // --- Shots ---
    { category: "Shots", name: "Appenzeller", price: 6.5, note: "34%" },
    { category: "Shots", name: "Berliner Luft", price: 5.5, note: "18%" },
    { category: "Shots", name: "Hierbas Ibiza", price: 6.0, note: "26%" },
    { category: "Shots", name: "Jose Cuervo Classico", price: 6.5, note: "38%" },
    { category: "Shots", name: "Jose Cuervo Especial", price: 7.0, note: "38%" },
    { category: "Shots", name: "Jägermeister", price: 6.5, note: "35%" },
    { category: "Shots", name: "Liquor 43", price: 6.0, note: "31%" },
    { category: "Shots", name: "Saurer Apfel", price: 5.0, note: "16%" },
    { category: "Shots", name: "Süsser Apfel", price: 5.0, note: "18%" },
    { category: "Shots", name: "Shaker", price: 35.0, note: "Serviert in Karaffe" },

    // --- Aperitifs ---
    { category: "Aperitifs", name: "Martini Blanco", price: 9.5, note: "4 cl · 15%" },
    { category: "Aperitifs", name: "Aperol", price: 9.5, note: "4 cl · 11%" },
    { category: "Aperitifs", name: "Campari", price: 9.5, note: "4 cl · 23%" },
    { category: "Aperitifs", name: "Appenzeller", price: 9.5, note: "4 cl · 29%" },
    { category: "Aperitifs", name: "Jägermeister", price: 9.5, note: "4 cl · 35%" },
    { category: "Aperitifs", name: "Zusätze", note: "Red Bull +3 CHF · Cola/Tonic/Bitter Lemon +2.50 CHF · Fruchtsäfte +2 CHF" },

    // --- Spirituosen ---
    { category: "Spirituosen · Vodka", name: "Absolut Vodka", price: 12.0, note: "4 cl · Flasche 70 cl / 140 CHF · 40%" },
    { category: "Spirituosen · Vodka", name: "Belvedere", price: 14.0, note: "4 cl · Flasche 70 cl / 220 CHF · 40%" },
    { category: "Spirituosen · Vodka", name: "Grey Goose", price: 14.0, note: "4 cl · Flasche 70 cl / 220 CHF · 40%" },
    { category: "Spirituosen · Vodka", name: "Trojka Red", price: 11.0, note: "4 cl · Flasche 70 cl / 130 CHF · 24%" },
    { category: "Spirituosen · Vodka", name: "Trojka Green", price: 11.0, note: "4 cl · Flasche 70 cl / 130 CHF · 17%" },
    { category: "Spirituosen · Vodka", name: "Trojka Black", price: 11.0, note: "4 cl · Flasche 70 cl / 130 CHF · 17%" },
    { category: "Spirituosen · Vodka", name: "Trojka Weiss", note: "Flasche 70 cl / 130 CHF · 40%" },

    { category: "Spirituosen · Gin", name: "Gordons Gin", price: 12.0, note: "4 cl · Flasche 70 cl / 130 CHF · 38%" },
    { category: "Spirituosen · Gin", name: "Bombay Sapphire", price: 13.0, note: "4 cl · Flasche 70 cl / 140 CHF · 40%" },
    { category: "Spirituosen · Gin", name: "Hendrick’s", price: 14.0, note: "4 cl · Flasche 70 cl / 160 CHF · 41%" },

    { category: "Spirituosen · Whiskey", name: "Jack Daniels Old No. 7", price: 13.0, note: "4 cl · Flasche 70 cl / 140 CHF · 40%" },
    { category: "Spirituosen · Whiskey", name: "Chivas Regal 12 Years", price: 16.0, note: "4 cl · Flasche 70 cl / 160 CHF · 40%" },
    { category: "Spirituosen · Whiskey", name: "Chivas Regal 18 Years", price: 18.0, note: "4 cl · Flasche 70 cl / 190 CHF · 40%" },
    { category: "Spirituosen · Whiskey", name: "Ballantine’s", note: "Flasche 70 cl / 130 CHF · 40%" },
    { category: "Spirituosen · Whiskey", name: "Gentleman Jack", note: "Flasche 70 cl / 140 CHF · 40%" },

    { category: "Spirituosen · Rum", name: "Havana Club Añejo 3 Años", price: 12.0, note: "4 cl · Flasche 70 cl / 130 CHF · 40%" },
    { category: "Spirituosen · Rum", name: "Havana Club Reserva", price: 13.0, note: "4 cl · Flasche 70 cl / 140 CHF · 40%" },
    { category: "Spirituosen · Rum", name: "Havana Club 7 Años", price: 14.0, note: "4 cl · Flasche 70 cl / 150 CHF · 40%" },
    { category: "Spirituosen · Rum", name: "Bacardi Superior", price: 13.0, note: "4 cl · Flasche 70 cl / 140 CHF · 38%" },
    { category: "Spirituosen · Rum", name: "Bacardi Black", price: 13.0, note: "4 cl · Flasche 70 cl / 140 CHF · 38%" },
    { category: "Spirituosen · Rum", name: "Zusätze", note: "Red Bull +3 CHF · Cola/Tonic/Bitter Lemon +2.50 CHF · Fruchtsäfte +2 CHF" },

    // --- Liköre ---
    { category: "Liköre", name: "Baileys Irish Cream", price: 11.0, note: "4 cl · 17%" },
    { category: "Liköre", name: "Hierbas Ibicencas", price: 11.0, note: "4 cl · 16%" },
    { category: "Liköre", name: "Amaretto Disaronno", price: 11.0, note: "4 cl · 28%" },
    { category: "Liköre", name: "Kahlúa", price: 11.0, note: "4 cl · 20%" },
    { category: "Liköre", name: "Malibu", price: 11.0, note: "4 cl · 21%" },
    { category: "Liköre", name: "Passoã", price: 11.0, note: "4 cl · 17%" },
    { category: "Liköre", name: "Zusätze", note: "Red Bull +3 CHF · Cola/Tonic/Bitter Lemon +2.50 CHF · Fruchtsäfte +2 CHF" },

    // --- Spritz & Champagner ---
    { category: "Spritz & Weincocktails", name: "Gespritzter Weisswein", price: 8.5, note: "Süss / Sauer · 20 cl" },
    { category: "Spritz & Weincocktails", name: "Hugo", price: 12.5, note: "Prosecco · Holunder · Limette · Minze · Soda · 20 cl" },
    { category: "Spritz & Weincocktails", name: "Aperol Spritz", price: 12.5, note: "Prosecco · Aperol · Soda · 20 cl" },
    { category: "Spritz & Weincocktails", name: "Campari Spritz", price: 12.5, note: "20 cl" },
    { category: "Spritz & Weincocktails", name: "Lillet Blanc", price: 12.5, note: "20 cl" },
    { category: "Spritz & Weincocktails", name: "Lillet Rosé", price: 12.5, note: "20 cl" },
    { category: "Spritz & Weincocktails", name: "Apricot Spritz", price: 12.5, note: "20 cl" },
    { category: "Schaumwein & Champagner", name: "Prosecco Spumante", price: 9.0, note: "10 cl · Flasche 75 cl / 80.00 CHF" },
    { category: "Schaumwein & Champagner", name: "Champagne Moët", note: "Flasche 75 cl / 125.00 CHF" },
    { category: "Schaumwein & Champagner", name: "Chandon Brut Imperial", note: "Flasche 75 cl / 125.00 CHF" },
    { category: "Schaumwein & Champagner", name: "Moët Ice", note: "Flasche 75 cl / 125.00 CHF" },
    { category: "Schaumwein & Champagner", name: "Chandon Ice", note: "Flasche 75 cl / 125.00 CHF" },

    // --- Bier ---
    { category: "Bier", name: "Haldengut Lager", price: 5.5, note: "30 cl · 5%" },
    { category: "Bier", name: "Haldengut Lager Süss/Sauer", price: 5.5, note: "30 cl · 5%" },
    { category: "Bier", name: "Haldengut Lager Gross", price: 8.0, note: "50 cl · 5%" },
    { category: "Bier", name: "Corona", price: 8.0, note: "35 cl · 4.6%" },
    { category: "Bier", name: "Heineken Premium", price: 7.0, note: "33 cl · 5%" },
    { category: "Bier", name: "Heineken Alkoholfrei", price: 6.5, note: "33 cl · alkoholfrei" },
    { category: "Bier", name: "Smirnoff Ice", price: 8.0, note: "275 ml · 4%" },
    { category: "Bier", name: "Bomonti", price: 8.0, note: "500 ml" },

    // --- Kalte Getränke ---
    { category: "Kalte Getränke", name: "Mineral ohne Kohlensäure", price: 5.5, note: "33 cl" },
    { category: "Kalte Getränke", name: "Mineral mit Kohlensäure", price: 5.5, note: "33 cl" },
    { category: "Kalte Getränke", name: "Coca Cola", price: 5.5, note: "33 cl" },
    { category: "Kalte Getränke", name: "Coca Cola Zero", price: 5.5, note: "33 cl" },
    { category: "Kalte Getränke", name: "Fanta", price: 6.0, note: "33 cl" },
    { category: "Kalte Getränke", name: "Sprite", price: 5.0, note: "33 cl" },
    { category: "Kalte Getränke", name: "Rivella Rot", price: 5.0, note: "33 cl" },
    { category: "Kalte Getränke", name: "Rivella Blau", price: 5.0, note: "33 cl" },
    { category: "Kalte Getränke", name: "Ice Tea Lemon", price: 6.0, note: "33 cl" },
    { category: "Kalte Getränke", name: "Ice Tea Peach", price: 6.0, note: "33 cl" },
    { category: "Kalte Getränke", name: "Schorle", price: 5.0, note: "33 cl" },
    { category: "Kalte Getränke", name: "Elephant Bay", price: 7.5, note: "Lemon · Peach · Blueberry · Himbeere · Wassermelone · Granatapfel · u.v.m. · 33 cl" },
    { category: "Kalte Getränke", name: "Red Bull", price: 7.5, note: "Classic · Sugar Free · White · Blue · Green · Red · Apricot · Yellow · Summer · 25 cl" },
    { category: "Kalte Getränke", name: "Moloko", price: 7.5, note: "Limette-Minze · Cranberry · Blueberry · 25 cl" },
    { category: "Kalte Getränke", name: "Schweppes", price: 5.5, note: "Bitter Lemon · Tonic · Ginger Ale · Rose · 20 cl" },
    { category: "Kalte Getränke", name: "Fruchtsäfte", price: 6.0, note: "Ananas · Orange · Cranberry · Maracuja · 30 cl" },

    // --- Warme Getränke ---
    { category: "Warme Getränke", name: "Kaffee", price: 5.5 },
    { category: "Warme Getränke", name: "Milchkaffee", price: 6.0 },
    { category: "Warme Getränke", name: "Espresso", price: 5.0 },
    { category: "Warme Getränke", name: "Doppelter Espresso", price: 6.5 },
    { category: "Warme Getränke", name: "Cappuccino", price: 6.5 },
    { category: "Warme Getränke", name: "Latte Macchiato", price: 6.5 },
    { category: "Warme Getränke", name: "Warme Schokolade", price: 6.0 },
    { category: "Warme Getränke", name: "Tee", price: 5.5, note: "Schwarz · Grün · Pfefferminz · Kamille · Fruchtmix" },
  ],

  // --- SHISHA ---
  shisha: [
    { brand: "Hookah", flavor: "Eine Mischung deiner Wahl", price: 29.0 },
    { brand: "Hookah", flavor: "Hausmischung mit/ohne Minze", price: 29.0 },
    { brand: "Hookah", flavor: "African Queen", price: 29.0 },
    { brand: "Hookah", flavor: "Ananas", price: 29.0 },
    { brand: "Hookah", flavor: "Baja Blue", price: 29.0 },
    { brand: "Hookah", flavor: "Balkan Night", price: 29.0 },
    { brand: "Hookah", flavor: "Blacknana", price: 29.0 },
    { brand: "Hookah", flavor: "Blaulicht", price: 29.0 },
    { brand: "Hookah", flavor: "Blue Ice", price: 29.0 },
    { brand: "Hookah", flavor: "Blueberry", price: 29.0 },
    { brand: "Hookah", flavor: "Doppelapfel", price: 29.0 },
    { brand: "Hookah", flavor: "Grüne Minze", price: 29.0 },
    { brand: "Hookah", flavor: "Grüne Moloko", price: 29.0 },
    { brand: "Hookah", flavor: "Gurke", price: 29.0 },
    { brand: "Hookah", flavor: "Ice Caktuz", price: 29.0 },
    { brand: "Hookah", flavor: "Ice Lime", price: 29.0 },
    { brand: "Hookah", flavor: "Icebonbon", price: 29.0 },
    { brand: "Hookah", flavor: "Ladykiller", price: 29.0 },
    { brand: "Hookah", flavor: "Lemonchill", price: 29.0 },
    { brand: "Hookah", flavor: "Love 66", price: 29.0 },
    { brand: "Hookah", flavor: "Mango Tango", price: 29.0 },
    { brand: "Hookah", flavor: "Orange", price: 29.0 },
    { brand: "Hookah", flavor: "Pearchill", price: 29.0 },
    { brand: "Hookah", flavor: "Persischer Apfel", price: 29.0 },
    { brand: "Hookah", flavor: "Pfirsich", price: 29.0 },
    { brand: "Hookah", flavor: "Schwarze Traube", price: 29.0 },
    { brand: "Hookah", flavor: "Swissbonbon", price: 29.0 },
    { brand: "Hookah", flavor: "Tropical", price: 29.0 },
    { brand: "Hookah", flavor: "Watermelon", price: 29.0 },
    { brand: "Hookah", flavor: "Watermelonchill", price: 29.0 },
    { brand: "Hookahkopf", flavor: "Neuer Kopf", price: 20.0 },
  ],
};


export default function VibesWilTV() {
  const ROTATE_MS = 10000;
  const FADE_MS = 400;
  const [fontScale, setFontScale] = useState(0.9);

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
          <MenuList items={drinkGroups[leftCat] || []} showPrice={false} />
        </FullBgColumn>

        <FullBgColumn title={rightCat || "—"} bg={getImage(rightCat)} fading={fading}>
          <MenuList items={drinkGroups[rightCat] || []} showPrice={false} />
        </FullBgColumn>

        <FullBgColumn title="Shisha · Tabak" bg={getImage("shisha")} fading={false}>
          <div className="space-y-6">
            {Object.entries(shishaGroups).map(([brand, items]) => (
              <div key={brand} className="mb-6">
                {/* Preis-Hinweis nur für normale Hookahs */}
                {brand.toLowerCase() === "hookah" && (
                  <div
                    className="mb-3 text-base font-medium tracking-wide"
                    style={{ color: GOLD }}
                  >
                    Preis für alle Shishas:{" "}
                    <span className="font-semibold">29.00 CHF</span>
                  </div>
                )}

                <ul className="divide-y" style={{ borderColor: BORDER_GOLD }}>
                  {items.map((t, i) => {
                    const isEinzelkopf =
                      t.flavor.toLowerCase().includes("einzelner kopf") ||
                      brand.toLowerCase() === "hookahkopf";

                    // Preislogik:
                    // - Einzelner Kopf => 20 CHF
                    // - Alle anderen Hookahs => kein Preis (da oben angezeigt)
                    const itemPrice = isEinzelkopf ? 20.0 : undefined;

                    return (
                      <MenuRow
                        key={`${brand}-${i}`}
                        label={t.flavor}
                        price={itemPrice}
                        note={t.note}
                      />
                    );
                  })}
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
        <div className="text-white/70 text-base">· Getränke- & Shishakarte</div>
        {/*<div className="ml-auto flex items-center gap-4 text-sm">
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
        */}
      </div>
    </div>
  );
}

/* --- Hauptspalte mit dunklem Overlay und Top-Alignment --- */
function FullBgColumn({ title, bg, children, fading }) {
  const [src, setSrc] = useState(bg || FALLBACK_IMG);
  const scrollRef = React.useRef(null);

  useEffect(() => setSrc(bg || FALLBACK_IMG), [bg]);

  // automatisches Scrollen
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 0) return;

    const SCROLL_DURATION = 4000; // schnellere Scrollzeit
    const HOLD_TIME = 1000;

    let direction = 1;
    let start = performance.now();

    const tick = (t) => {
      const elapsed = t - start;
      const progress = Math.min(elapsed / SCROLL_DURATION, 1);
      const pos = direction === 1 ? progress * maxScroll : maxScroll - progress * maxScroll;
      el.scrollTop = pos;

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        direction *= -1;
        start = performance.now();
        setTimeout(() => {
          raf = requestAnimationFrame(tick);
        }, HOLD_TIME);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [title]);

  return (
    <div className="relative overflow-hidden">
      {/* --- Hintergrundbild --- */}
      <div className="absolute inset-0">
        <img
          src={src}
          alt={normalize(title)}
          onError={() => setSrc(FALLBACK_IMG)}
          className={`w-full h-full object-center object-cover transition-opacity duration-700 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
          style={{ filter: "brightness(35%) contrast(110%)" }} // <— dunkler, aber sichtbar!
        />
      </div>

      {/* --- Stärkere Abdunkelung + Verlauf --- */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/95" />
      </div>

      {/* --- Inhalt --- */}
      <div className="relative z-10 h-full flex flex-col items-start justify-start px-8 py-8">
        <h2
          className="text-3xl mb-4 font-serif drop-shadow-[0_3px_8px_rgba(0,0,0,1)]"
          style={{ color: GOLD, fontWeight: 800 }}
        >
          {title}
        </h2>

        {/* Scrollbarer Bereich */}
        <div
          ref={scrollRef}
          className="w-full flex-1 overflow-y-auto pr-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {children}
        </div>
      </div>

      {/* --- Spaltentrenner --- */}
      <div
        className="absolute top-0 right-0 h-full"
        style={{ width: 1, background: BORDER_GOLD }}
      />
    </div>
  );
}

function MenuList({ items, showPrice }) {
  if (!items || items.length === 0)
    return <div className="text-white/60">Keine Einträge</div>;

  return (
    <ul className="divide-y" style={{ borderColor: BORDER_GOLD }}>
      {items.map((d, i) => (
        <MenuRow key={i} label={d.name} price={showPrice ? d.price : undefined} note={d.note} />
      ))}
    </ul>
  );
}

function MenuRow({ label, price, note }) {
  return (
    <li className="py-2">
      <div className="flex items-baseline">
        <span className="text-lg md:text-xl font-medium truncate">{label}</span>

        {/* Linie nur, wenn es eine Beschreibung (note) gibt */}
        {note ? (
          <span
            className="flex-1 mx-3 border-b border-dotted"
            style={{ borderColor: BORDER_GOLD }}
          />
        ) : (
          <span className="flex-1 mx-3" />
        )}

        {typeof price === 'number' && (
          <span className="text-lg md:text-xl font-semibold" style={{ color: GOLD }}>
            {currency(price)}
          </span>
        )}
      </div>

      {/* Beschreibung (note) */}
      {note && <div className="text-sm text-white/70 mt-1">{note}</div>}
    </li>
  );
}

function Footer() {
  return (
    <div className="text-center py-6 text-white/50 text-sm">
      © {new Date().getFullYear()} Vibes Wil · Created by Daniel Sevinc
    </div>
  );
}
