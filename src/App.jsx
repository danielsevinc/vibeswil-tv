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
  "rotwein": "https://images.unsplash.com/photo-1544776527-68e63addedf7?auto=format&fit=crop&w=800&h=1080&q=80",
  "weisswein": "https://images.unsplash.com/photo-1696081248263-af609cc61ffa?auto=format&fit=crop&w=800&h=1080&q=80",
  "cocktails": "https://images.unsplash.com/photo-1748674758581-2afc6adebc19?auto=format&fit=crop&w=800&h=1080&q=80",
  "mocktails": "https://images.unsplash.com/photo-1610515660473-c11d4f3f7d37?auto=format&fit=crop&w=800&h=1080&q=80",
  "shots": "https://images.unsplash.com/photo-1681555597955-9d478f4dbf69?auto=format&fit=crop&w=800&h=1080&q=80",
  "aperitifs": "https://images.unsplash.com/photo-1607687332053-ef831d0775ad?auto=format&fit=crop&w=800&h=1080&q=80",
  "spirituosen · vodka": "https://images.unsplash.com/photo-1550985543-f47f38aeee65?auto=format&fit=crop&w=800&h=1080&q=80",
  "spirituosen · gin": "https://images.unsplash.com/photo-1623408859815-22534357b3db?auto=format&fit=crop&w=800&h=1080&q=80",
  "spirituosen · whiskey": "https://images.unsplash.com/photo-1713742137866-cdeb0b0f5705?auto=format&fit=crop&w=800&h=1080&q=80",
  "spirituosen · rum": "https://images.unsplash.com/photo-1692455129272-60299bc2b1a8?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000&h=1080",
  "liköre": "https://images.unsplash.com/photo-1692455129272-60299bc2b1a8?auto=format&fit=crop&w=800&h=1080&q=80",
  "spritz & weincocktails": "https://images.unsplash.com/photo-1756522075789-46fe38a0ac14?auto=format&fit=crop&w=800&h=1080&q=80",
  "schaumwein & champagner": "https://images.unsplash.com/photo-1682071308321-19127e9bd8ba?auto=format&fit=crop&w=800&h=1080&q=80",
  "bier": "https://images.unsplash.com/photo-1615332579037-3c44b3660b53?auto=format&fit=crop&w=800&h=1080&q=80",
  "kalte getränke": "https://images.unsplash.com/photo-1629654613528-5d0a2e4166de?auto=format&fit=crop&w=800&h=1080&q=80",
  "warme getränke": "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&h=1080&q=80",
  "shisha": "https://images.unsplash.com/photo-1630175772812-3368aad7982d?auto=format&fit=crop&w=800&h=1080&q=80",
  "hookah": "https://images.unsplash.com/photo-1630175772812-3368aad7982d?auto=format&fit=crop&w=800&h=1080&q=80"
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
  

const DATA = {
  drinks: [
    // ...existing code...
    // --- Warme Getränke ---
    { category: "Warme Getränke", name: "Kaffee", price: 5.5 },
    { category: "Warme Getränke", name: "Milchkaffee", price: 6.0 },
    { category: "Warme Getränke", name: "Espresso", price: 5.0 },
    { category: "Warme Getränke", name: "Doppelter Espresso", price: 6.5 },
    { category: "Warme Getränke", name: "Cappuccino", price: 6.5 },
    { category: "Warme Getränke", name: "Latte Macchiato", price: 6.5 },
    { category: "Warme Getränke", name: "Warme Schokolade", price: 6.0 },
    { category: "Warme Getränke", name: "Tee", price: 5.5, note: "Schwarz · Grün · Pfefferminz · Kamille · Fruchtmix" }
  ],
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
    { brand: "Hookahkopf", flavor: "Neuer Kopf", price: 20.0 }
  ]
};


function App() {
    // Video/Karten-Modus
    const [showVideo, setShowVideo] = useState(false);
    // Wie lange das Video angezeigt wird (in ms)
    const VIDEO_DURATION = 35000; // 35 Sekunden (Instagram Reel-Länge anpassen!)
    // Zähler für vollständige Rotationen
    const [rotationCount, setRotationCount] = useState(0);
  // Vollbildmodus
  const [isFullscreen, setIsFullscreen] = useState(false);
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);
  const ROTATE_MS = 10000;
  const FADE_MS = 400;
  const [fontScale, setFontScale] = useState(1.5);

  const drinkGroups = useMemo(() => groupBy(DATA.drinks, "category"), []);
  const drinkCategories = Object.keys(drinkGroups);
  const shishaGroups = useMemo(() => groupBy(DATA.shisha, "brand"), []);

  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  // automatische Rotation
  useEffect(() => {
    if (drinkCategories.length === 0) return;
    let fade, next;
    let localIdx = idx;
    let localRotation = rotationCount;
    const loop = () => {
      fade = setTimeout(() => setFading(true), ROTATE_MS - FADE_MS);
      next = setTimeout(() => {
        // Nächste Kategorie
        setIdx((i) => {
          const nextIdx = (i + 2) % drinkCategories.length;
          // Wenn wir wieder am Anfang sind, Rotation hochzählen
          if (nextIdx === 0) {
            setRotationCount((r) => r + 1);
          }
          return nextIdx;
        });
        setFading(false);
        loop();
      }, ROTATE_MS);
    };
    if (!showVideo) loop();
    return () => {
      clearTimeout(fade);
      clearTimeout(next);
    };
  }, [drinkCategories.length, showVideo]);

  // Wenn Rotation gezählt wurde, Video anzeigen
  useEffect(() => {
    if (rotationCount > 0 && !showVideo) {
      setShowVideo(true);
    }
  }, [rotationCount, showVideo]);

  // Nach Video wieder Karte anzeigen
  useEffect(() => {
    if (showVideo) {
      const t = setTimeout(() => {
        setShowVideo(false);
        setRotationCount(0); // Zähler zurücksetzen, damit nach nächster Rotation wieder Video kommt
      }, VIDEO_DURATION);
      return () => clearTimeout(t);
    }
  }, [showVideo]);

  const leftCat = drinkCategories.length ? drinkCategories[idx % drinkCategories.length] : "";
  const rightCat = drinkCategories.length ? drinkCategories[(idx + 1) % drinkCategories.length] : "";

  return (
    <div className="min-h-screen text-white bg-black pr-8 md:pr-16" style={{ paddingRight: '2cm' }}>
      {/* Vollbild-Button oben rechts, nur wenn nicht im Vollbild */}
      {!isFullscreen && (
        <button
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 2000,
            padding: "10px 18px",
            background: GOLD,
            color: "#222",
            border: "none",
            borderRadius: "8px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }}
          onClick={toggleFullscreen}
        >
          Vollbild
        </button>
      )}
      {showVideo ? (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.95)',
          zIndex: 5000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Instagram Reel als iFrame */}
          <iframe
            src="https://www.instagram.com/reel/DHx-njMNgHd/embed"
            width="420"
            height="750"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
            style={{ borderRadius: 16, boxShadow: '0 4px 32px #000' }}
            title="Vibes Wil Instagram Reel"
          />
        </div>
      ) : (
        <>
          <Header fontScale={fontScale} setFontScale={setFontScale} />
          {/* Drei Spalten */}
          <div className="grid grid-cols-3 h-[85vh]" style={{ fontSize: `${fontScale}rem`, paddingLeft: '2cm' }}>
            <FullBgColumn title={leftCat || "—"} bg={getImage(leftCat)} fading={fading}>
              <MenuList items={drinkGroups[leftCat] || []} showPrice={false} />
            </FullBgColumn>
            <FullBgColumn title={rightCat || "—"} bg={getImage(rightCat)} fading={fading}>
              <MenuList items={drinkGroups[rightCat] || []} showPrice={false} />
            </FullBgColumn>
            <FullBgColumn title="Shisha · Tabak" bg={getImage("shisha")}
              fading={false}>
              <div className="space-y-6">
                {Object.entries(shishaGroups).map(([brand, items]) => (
                  <div key={brand} className="mb-6">
                    {/* Kein Preis-Hinweis mehr */}
                    <ul className="divide-y" style={{ borderColor: BORDER_GOLD }}>
                        {items.map((t, i) => {
                          // Entferne Unterstreichung für "Eine Mischung deiner Wahl"
                          if (t.flavor === "Eine Mischung deiner Wahl") {
                            return (
                              <li key={`${brand}-${i}`} className="py-2">
                                <div className="flex items-baseline">
                                  <span className="text-lg md:text-xl font-bold" style={{ color: GOLD }}>{t.flavor}</span>
                                  <span className="flex-1 mx-3" />
                                </div>
                              </li>
                            );
                          }
                          return (
                            <MenuRow
                              key={`${brand}-${i}`}
                              label={t.flavor}
                              price={undefined}
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
        </>
      )}
    </div>
  );
}

export default App;

function Header({ fontScale, setFontScale }) {
  return (
    <div className="border-b px-0 py-4" style={{ borderColor: BORDER_GOLD }}>
      <div className="max-w-7xl flex items-center gap-6 pr-8 md:pr-16">
        <h1
          className="text-4xl font-serif mr-12 md:mr-32"
          style={{ color: GOLD, fontWeight: 800, paddingLeft: '2cm' }}
        >
          VIBES WIL
        </h1>
        <div className="text-white/70 text-base">· Getränke- & Shishakarte</div>
        {/*<div className="ml-auto flex items-center gap-4 text-sm">
          <span className="text-white/70 hidden md:inline">Textgröße</span>
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
  }, []);

  return (
      <div className="min-h-screen text-white bg-black pr-8 md:pr-16" style={{ paddingRight: '2cm', position: 'relative' }}>
        {showVideo ? (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.95)',
            zIndex: 5000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Instagram Reel als iFrame */}
            <iframe
              src="https://www.instagram.com/reel/DHx-njMNgHd/embed"
              width="420"
              height="750"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
              style={{ borderRadius: 16, boxShadow: '0 4px 32px #000' }}
              title="Vibes Wil Instagram Reel"
            />
          </div>
        ) : (
          <>
            <Header fontScale={fontScale} setFontScale={setFontScale} />
            {/* Drei Spalten */}
            <div className="grid grid-cols-3 h-[85vh]" style={{ fontSize: `${fontScale}rem`, paddingLeft: '2cm' }}>
              <FullBgColumn title={leftCat || "—"} bg={getImage(leftCat)} fading={fading}>
                <MenuList items={drinkGroups[leftCat] || []} showPrice={false} />
              </FullBgColumn>

              <FullBgColumn title={rightCat || "—"} bg={getImage(rightCat)} fading={fading}>
                <MenuList items={drinkGroups[rightCat] || []} showPrice={false} />
              </FullBgColumn>

              <FullBgColumn title="Shisha · Tabak" bg={getImage("shisha")}
                fading={false}>
                <div className="space-y-6">
                  {Object.entries(shishaGroups).map(([brand, items]) => (
                    <div key={brand} className="mb-6">
                      {/* Kein Preis-Hinweis mehr */}
                      <ul className="divide-y" style={{ borderColor: BORDER_GOLD }}>
                          {items.map((t, i) => {
                            // Entferne Unterstreichung für "Eine Mischung deiner Wahl"
                            if (t.flavor === "Eine Mischung deiner Wahl") {
                              return (
                                <li key={`${brand}-${i}`} className="py-2">
                                  <div className="flex items-baseline">
                                    <span className="text-lg md:text-xl font-bold" style={{ color: GOLD }}>{t.flavor}</span>
                                    <span className="flex-1 mx-3" />
                                  </div>
                                </li>
                              );
                            }
                            return (
                              <MenuRow
                                key={`${brand}-${i}`}
                                label={t.flavor}
                                price={undefined}
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
        </>
      )}
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
  // Für "Eine Mischung deiner Wahl" keine Linie anzeigen
  const isSpecial = label === "Eine Mischung deiner Wahl";
  return (
    <li className="py-2">
      <div className="flex items-baseline">
        <span className={`text-lg md:text-xl font-${isSpecial ? "bold" : "medium"} truncate`} style={isSpecial ? { color: GOLD } : {}}>{label}</span>
        {/* Linie nur, wenn es eine Beschreibung (note) gibt und nicht der Spezialtitel */}
        {note && !isSpecial ? (
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