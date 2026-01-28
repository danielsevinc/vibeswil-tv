<?php
// VIBES WIL · TV Display - PHP Single Page Application
// Konvertiert von React zu PHP Single Page App

// Menu data
$DATA = [
    'drinks' => [
        // --- Wein ---
        ['category' => 'Rotwein', 'name' => 'Pinot Noir', 'price' => 7.5, 'note' => '1 dl · Flasche 70 cl / 57.00 CHF'],
        ['category' => 'Rotwein', 'name' => 'Primitivo', 'price' => 8.0, 'note' => '1 dl · Flasche 70 cl / 62.00 CHF'],
        ['category' => 'Weisswein', 'name' => 'Pinot Grigio', 'price' => 6.5, 'note' => '1 dl · Flasche 70 cl / 44.00 CHF'],
        ['category' => 'Weisswein', 'name' => 'Chardonnay', 'price' => 7.0, 'note' => '1 dl · Flasche 70 cl / 53.00 CHF'],

        // --- Cocktails mit Alkohol ---
        ['category' => 'Cocktails', 'name' => 'Good Vibes', 'price' => 15.5, 'note' => 'Vodka · Himbeerenpüree · Cranberrysaft · Limette · Rohrzucker'],
        ['category' => 'Cocktails', 'name' => 'Caipirinha', 'price' => 15.5, 'note' => 'Cachaça · Lime Juice · Limette · Rohrzucker'],
        ['category' => 'Cocktails', 'name' => 'Cuba Libre', 'price' => 15.5, 'note' => 'Rum · Coca Cola / Zero · Limette · Rohrzucker'],
        ['category' => 'Cocktails', 'name' => 'Long Island Iced Tea', 'price' => 19.5, 'note' => 'Vodka · Gin · Rum · Tequila · Triple Sec · Coca Cola · Lime Juice'],
        ['category' => 'Cocktails', 'name' => 'Mojito', 'price' => 15.5, 'note' => 'Rum · Soda · Limette · Minze · Rohrzucker'],
        ['category' => 'Cocktails', 'name' => 'Pina Colada', 'price' => 15.5, 'note' => 'Rum · Kokosnuss-Sirup · Ananassaft · Rahm'],
        ['category' => 'Cocktails', 'name' => 'Sex on the Beach', 'price' => 15.5, 'note' => 'Vodka · White Peach · Orangensaft · Cranberrysaft'],
        ['category' => 'Cocktails', 'name' => 'Amaretto Sour', 'price' => 15.5, 'note' => 'Amaretto · Orangensaft · Lime Juice · Rohrzucker'],

        // --- Cocktails ohne Alkohol ---
        ['category' => 'Mocktails', 'name' => 'Berry Vibes', 'price' => 12.5, 'note' => 'Himbeerenpüree · Cranberrysaft · Limette · Rohrzucker'],
        ['category' => 'Mocktails', 'name' => 'Coconut Vibes', 'price' => 12.5, 'note' => 'Ananassaft · Orangensaft · Rahm · Kokosnuss-Sirup · Grenadine'],
        ['category' => 'Mocktails', 'name' => 'Hawaii Surfer', 'price' => 12.5, 'note' => 'Ananassaft · Orangensaft · Passionssaft · Cranberrysaft'],
        ['category' => 'Mocktails', 'name' => 'Virgin Mojito', 'price' => 12.5, 'note' => 'Ginger Ale · Limette · Minze · Rohrzucker'],

        // --- Shots ---
        ['category' => 'Shots', 'name' => 'Appenzeller', 'price' => 6.5, 'note' => '34%'],
        ['category' => 'Shots', 'name' => 'Berliner Luft', 'price' => 5.5, 'note' => '18%'],
        ['category' => 'Shots', 'name' => 'Hierbas Ibiza', 'price' => 6.0, 'note' => '26%'],
        ['category' => 'Shots', 'name' => 'Jose Cuervo Classico', 'price' => 6.5, 'note' => '38%'],
        ['category' => 'Shots', 'name' => 'Jose Cuervo Especial', 'price' => 7.0, 'note' => '38%'],
        ['category' => 'Shots', 'name' => 'Jägermeister', 'price' => 6.5, 'note' => '35%'],
        ['category' => 'Shots', 'name' => 'Liquor 43', 'price' => 6.0, 'note' => '31%'],
        ['category' => 'Shots', 'name' => 'Saurer Apfel', 'price' => 5.0, 'note' => '16%'],
        ['category' => 'Shots', 'name' => 'Süsser Apfel', 'price' => 5.0, 'note' => '18%'],
        ['category' => 'Shots', 'name' => 'Shaker', 'price' => 35.0, 'note' => 'Serviert in Karaffe'],

        // --- Aperitifs ---
        ['category' => 'Aperitifs', 'name' => 'Martini Blanco', 'price' => 9.5, 'note' => '4 cl · 15%'],
        ['category' => 'Aperitifs', 'name' => 'Aperol', 'price' => 9.5, 'note' => '4 cl · 11%'],
        ['category' => 'Aperitifs', 'name' => 'Campari', 'price' => 9.5, 'note' => '4 cl · 23%'],
        ['category' => 'Aperitifs', 'name' => 'Appenzeller', 'price' => 9.5, 'note' => '4 cl · 29%'],
        ['category' => 'Aperitifs', 'name' => 'Jägermeister', 'price' => 9.5, 'note' => '4 cl · 35%'],
        ['category' => 'Aperitifs', 'name' => 'Zusätze', 'price' => null, 'note' => 'Red Bull +3 CHF · Cola/Tonic/Bitter Lemon +2.50 CHF · Fruchtsäfte +2 CHF'],

        // --- Spirituosen ---
        ['category' => 'Spirituosen · Vodka', 'name' => 'Absolut Vodka', 'price' => 12.0, 'note' => '4 cl · Flasche 70 cl / 140 CHF · 40%'],
        ['category' => 'Spirituosen · Vodka', 'name' => 'Belvedere', 'price' => 14.0, 'note' => '4 cl · Flasche 70 cl / 220 CHF · 40%'],
        ['category' => 'Spirituosen · Vodka', 'name' => 'Grey Goose', 'price' => 14.0, 'note' => '4 cl · Flasche 70 cl / 220 CHF · 40%'],
        ['category' => 'Spirituosen · Vodka', 'name' => 'Trojka Red', 'price' => 11.0, 'note' => '4 cl · Flasche 70 cl / 130 CHF · 24%'],
        ['category' => 'Spirituosen · Vodka', 'name' => 'Trojka Green', 'price' => 11.0, 'note' => '4 cl · Flasche 70 cl / 130 CHF · 17%'],
        ['category' => 'Spirituosen · Vodka', 'name' => 'Trojka Black', 'price' => 11.0, 'note' => '4 cl · Flasche 70 cl / 130 CHF · 17%'],
        ['category' => 'Spirituosen · Vodka', 'name' => 'Trojka Weiss', 'price' => null, 'note' => 'Flasche 70 cl / 130 CHF · 40%'],

        ['category' => 'Spirituosen · Gin', 'name' => 'Gordons Gin', 'price' => 12.0, 'note' => '4 cl · Flasche 70 cl / 130 CHF · 38%'],
        ['category' => 'Spirituosen · Gin', 'name' => 'Bombay Sapphire', 'price' => 13.0, 'note' => '4 cl · Flasche 70 cl / 140 CHF · 40%'],
        ['category' => 'Spirituosen · Gin', 'name' => 'Hendrick\'s', 'price' => 14.0, 'note' => '4 cl · Flasche 70 cl / 160 CHF · 41%'],

        ['category' => 'Spirituosen · Whiskey', 'name' => 'Jack Daniels Old No. 7', 'price' => 13.0, 'note' => '4 cl · Flasche 70 cl / 140 CHF · 40%'],
        ['category' => 'Spirituosen · Whiskey', 'name' => 'Chivas Regal 12 Years', 'price' => 16.0, 'note' => '4 cl · Flasche 70 cl / 160 CHF · 40%'],
        ['category' => 'Spirituosen · Whiskey', 'name' => 'Chivas Regal 18 Years', 'price' => 18.0, 'note' => '4 cl · Flasche 70 cl / 190 CHF · 40%'],
        ['category' => 'Spirituosen · Whiskey', 'name' => 'Ballantine\'s', 'price' => null, 'note' => 'Flasche 70 cl / 130 CHF · 40%'],
        ['category' => 'Spirituosen · Whiskey', 'name' => 'Gentleman Jack', 'price' => null, 'note' => 'Flasche 70 cl / 140 CHF · 40%'],

        ['category' => 'Spirituosen · Rum', 'name' => 'Havana Club Añejo 3 Años', 'price' => 12.0, 'note' => '4 cl · Flasche 70 cl / 130 CHF · 40%'],
        ['category' => 'Spirituosen · Rum', 'name' => 'Havana Club Reserva', 'price' => 13.0, 'note' => '4 cl · Flasche 70 cl / 140 CHF · 40%'],
        ['category' => 'Spirituosen · Rum', 'name' => 'Havana Club 7 Años', 'price' => 14.0, 'note' => '4 cl · Flasche 70 cl / 150 CHF · 40%'],
        ['category' => 'Spirituosen · Rum', 'name' => 'Bacardi Superior', 'price' => 13.0, 'note' => '4 cl · Flasche 70 cl / 140 CHF · 38%'],
        ['category' => 'Spirituosen · Rum', 'name' => 'Bacardi Black', 'price' => 13.0, 'note' => '4 cl · Flasche 70 cl / 140 CHF · 38%'],
        ['category' => 'Spirituosen · Rum', 'name' => 'Zusätze', 'price' => null, 'note' => 'Red Bull +3 CHF · Cola/Tonic/Bitter Lemon +2.50 CHF · Fruchtsäfte +2 CHF'],

        // --- Liköre ---
        ['category' => 'Liköre', 'name' => 'Baileys Irish Cream', 'price' => 11.0, 'note' => '4 cl · 17%'],
        ['category' => 'Liköre', 'name' => 'Hierbas Ibicencas', 'price' => 11.0, 'note' => '4 cl · 16%'],
        ['category' => 'Liköre', 'name' => 'Amaretto Disaronno', 'price' => 11.0, 'note' => '4 cl · 28%'],
        ['category' => 'Liköre', 'name' => 'Kahlúa', 'price' => 11.0, 'note' => '4 cl · 20%'],
        ['category' => 'Liköre', 'name' => 'Malibu', 'price' => 11.0, 'note' => '4 cl · 21%'],
        ['category' => 'Liköre', 'name' => 'Passoã', 'price' => 11.0, 'note' => '4 cl · 17%'],
        ['category' => 'Liköre', 'name' => 'Zusätze', 'price' => null, 'note' => 'Red Bull +3 CHF · Cola/Tonic/Bitter Lemon +2.50 CHF · Fruchtsäfte +2 CHF'],

        // --- Spritz & Champagner ---
        ['category' => 'Spritz & Weincocktails', 'name' => 'Gespritzter Weisswein', 'price' => 8.5, 'note' => 'Süss / Sauer · 20 cl'],
        ['category' => 'Spritz & Weincocktails', 'name' => 'Hugo', 'price' => 12.5, 'note' => 'Prosecco · Holunder · Limette · Minze · Soda · 20 cl'],
        ['category' => 'Spritz & Weincocktails', 'name' => 'Aperol Spritz', 'price' => 12.5, 'note' => 'Prosecco · Aperol · Soda · 20 cl'],
        ['category' => 'Spritz & Weincocktails', 'name' => 'Campari Spritz', 'price' => 12.5, 'note' => '20 cl'],
        ['category' => 'Spritz & Weincocktails', 'name' => 'Lillet Blanc', 'price' => 12.5, 'note' => '20 cl'],
        ['category' => 'Spritz & Weincocktails', 'name' => 'Lillet Rosé', 'price' => 12.5, 'note' => '20 cl'],
        ['category' => 'Spritz & Weincocktails', 'name' => 'Apricot Spritz', 'price' => 12.5, 'note' => '20 cl'],
        ['category' => 'Schaumwein & Champagner', 'name' => 'Prosecco Spumante', 'price' => 9.0, 'note' => '10 cl · Flasche 75 cl / 80.00 CHF'],
        ['category' => 'Schaumwein & Champagner', 'name' => 'Champagne Moët', 'price' => null, 'note' => 'Flasche 75 cl / 125.00 CHF'],
        ['category' => 'Schaumwein & Champagner', 'name' => 'Chandon Brut Imperial', 'price' => null, 'note' => 'Flasche 75 cl / 125.00 CHF'],
        ['category' => 'Schaumwein & Champagner', 'name' => 'Moët Ice', 'price' => null, 'note' => 'Flasche 75 cl / 125.00 CHF'],
        ['category' => 'Schaumwein & Champagner', 'name' => 'Chandon Ice', 'price' => null, 'note' => 'Flasche 75 cl / 125.00 CHF'],

        // --- Bier ---
        ['category' => 'Bier', 'name' => 'Haldengut Lager', 'price' => 5.5, 'note' => '30 cl · 5%'],
        ['category' => 'Bier', 'name' => 'Haldengut Lager Süss/Sauer', 'price' => 5.5, 'note' => '30 cl · 5%'],
        ['category' => 'Bier', 'name' => 'Haldengut Lager Gross', 'price' => 8.0, 'note' => '50 cl · 5%'],
        ['category' => 'Bier', 'name' => 'Corona', 'price' => 8.0, 'note' => '35 cl · 4.6%'],
        ['category' => 'Bier', 'name' => 'Heineken Premium', 'price' => 7.0, 'note' => '33 cl · 5%'],
        ['category' => 'Bier', 'name' => 'Heineken Alkoholfrei', 'price' => 6.5, 'note' => '33 cl · alkoholfrei'],
        ['category' => 'Bier', 'name' => 'Smirnoff Ice', 'price' => 8.0, 'note' => '275 ml · 4%'],
        ['category' => 'Bier', 'name' => 'Bomonti', 'price' => 8.0, 'note' => '500 ml'],

        // --- Kalte Getränke ---
        ['category' => 'Kalte Getränke', 'name' => 'Mineral ohne Kohlensäure', 'price' => 5.5, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Mineral mit Kohlensäure', 'price' => 5.5, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Coca Cola', 'price' => 5.5, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Coca Cola Zero', 'price' => 5.5, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Fanta', 'price' => 6.0, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Sprite', 'price' => 5.0, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Rivella Rot', 'price' => 5.0, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Rivella Blau', 'price' => 5.0, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Ice Tea Lemon', 'price' => 6.0, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Ice Tea Peach', 'price' => 6.0, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Schorle', 'price' => 5.0, 'note' => '33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Elephant Bay', 'price' => 7.5, 'note' => 'Lemon · Peach · Blueberry · Himbeere · Wassermelone · Granatapfel · u.v.m. · 33 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Red Bull', 'price' => 7.5, 'note' => 'Classic · Sugar Free · White · Blue · Green · Red · Apricot · Yellow · Summer · 25 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Moloko', 'price' => 7.5, 'note' => 'Limette-Minze · Cranberry · Blueberry · 25 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Schweppes', 'price' => 5.5, 'note' => 'Bitter Lemon · Tonic · Ginger Ale · Rose · 20 cl'],
        ['category' => 'Kalte Getränke', 'name' => 'Fruchtsäfte', 'price' => 6.0, 'note' => 'Ananas · Orange · Cranberry · Maracuja · 30 cl'],

        // --- Warme Getränke ---
        ['category' => 'Warme Getränke', 'name' => 'Kaffee', 'price' => 5.5, 'note' => ''],
        ['category' => 'Warme Getränke', 'name' => 'Milchkaffee', 'price' => 6.0, 'note' => ''],
        ['category' => 'Warme Getränke', 'name' => 'Espresso', 'price' => 5.0, 'note' => ''],
        ['category' => 'Warme Getränke', 'name' => 'Doppelter Espresso', 'price' => 6.5, 'note' => ''],
        ['category' => 'Warme Getränke', 'name' => 'Cappuccino', 'price' => 6.5, 'note' => ''],
        ['category' => 'Warme Getränke', 'name' => 'Latte Macchiato', 'price' => 6.5, 'note' => ''],
        ['category' => 'Warme Getränke', 'name' => 'Warme Schokolade', 'price' => 6.0, 'note' => ''],
        ['category' => 'Warme Getränke', 'name' => 'Tee', 'price' => 5.5, 'note' => 'Schwarz · Grün · Pfefferminz · Kamille · Fruchtmix'],
    ],
    
    'shisha' => [
        ['brand' => 'Hookah', 'flavor' => 'Eine Mischung deiner Wahl', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Hausmischung mit/ohne Minze', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'African Queen', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Ananas', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Baja Blue', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Balkan Night', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Blacknana', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Blaulicht', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Blue Ice', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Blueberry', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Doppelapfel', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Grüne Minze', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Grüne Moloko', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Gurke', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Ice Caktuz', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Ice Lime', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Icebonbon', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Ladykiller', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Lemonchill', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Love 66', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Mango Tango', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Orange', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Pearchill', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Persischer Apfel', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Pfirsich', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Schwarze Traube', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Swissbonbon', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Tropical', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Watermelon', 'price' => 29.0],
        ['brand' => 'Hookah', 'flavor' => 'Watermelonchill', 'price' => 29.0],
        ['brand' => 'Hookahkopf', 'flavor' => 'Neuer Kopf', 'price' => 20.0],
    ]
];

// Image mapping
$IMAGE_MAP = [
    'rotwein' => 'https://images.unsplash.com/photo-1544776527-68e63addedf7?auto=format&fit=crop&w=2000&q=80',
    'weisswein' => 'https://images.unsplash.com/photo-1696081248263-af609cc61ffa?auto=format&fit=crop&w=2000&q=80',
    'cocktails' => 'https://images.unsplash.com/photo-1748674758581-2afc6adebc19?auto=format&fit=crop&w=2000&q=80',
    'mocktails' => 'https://images.unsplash.com/photo-1610515660473-c11d4f3f7d37?auto=format&fit=crop&w=2000&q=80',
    'shots' => 'https://images.unsplash.com/photo-1681555597955-9d478f4dbf69?auto=format&fit=crop&w=2000&q=80',
    'aperitifs' => 'https://images.unsplash.com/photo-1607687332053-ef831d0775ad?auto=format&fit=crop&w=2000&q=80',
    'spirituosen · vodka' => 'https://images.unsplash.com/photo-1550985543-f47f38aeee65?auto=format&fit=crop&w=2000&q=80',
    'spirituosen · gin' => 'https://images.unsplash.com/photo-1623408859815-22534357b3db?auto=format&fit=crop&w=2000&q=80',
    'spirituosen · whiskey' => 'https://images.unsplash.com/photo-1713742137866-cdeb0b0f5705?auto=format&fit=crop&w=2000&q=80',
    'spirituosen · rum' => 'https://images.unsplash.com/photo-1692455129272-60299bc2b1a8?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
    'liköre' => 'https://images.unsplash.com/photo-1692455129272-60299bc2b1a8?auto=format&fit=crop&w=2000&q=80',
    'spritz & weincocktails' => 'https://images.unsplash.com/photo-1756522075789-46fe38a0ac14?auto=format&fit=crop&w=2000&q=80',
    'schaumwein & champagner' => 'https://images.unsplash.com/photo-1682071308321-19127e9bd8ba?auto=format&fit=crop&w=2000&q=80',
    'bier' => 'https://images.unsplash.com/photo-1615332579037-3c44b3660b53?auto=format&fit=crop&w=2000&q=80',
    'kalte getränke' => 'https://images.unsplash.com/photo-1629654613528-5d0a2e4166de?auto=format&fit=crop&w=2000&q=80',
    'warme getränke' => 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=2000&q=80',
    'shisha' => 'https://images.unsplash.com/photo-1630175772812-3368aad7982d?auto=format&fit=crop&w=2000&q=80',
    'hookah' => 'https://images.unsplash.com/photo-1630175772812-3368aad7982d?auto=format&fit=crop&w=2000&q=80'
];

$FALLBACK_IMG = 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1500&q=80';

// Helper functions
function groupBy($array, $key) {
    $result = [];
    foreach ($array as $item) {
        $groupKey = $item[$key] ?? 'Sonstiges';
        $result[$groupKey][] = $item;
    }
    return $result;
}

function getImage($key, $imageMap, $fallback) {
    $normalizedKey = strtolower(trim($key));
    return $imageMap[$normalizedKey] ?? $fallback;
}

function currency($price) {
    return is_numeric($price) ? number_format($price, 2, '.', '') . ' CHF' : '';
}

// Group data
$drinkGroups = groupBy($DATA['drinks'], 'category');
$drinkCategories = array_keys($drinkGroups);
$shishaGroups = groupBy($DATA['shisha'], 'brand');
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VIBES WIL · Menü Display</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #000;
            color: #fff;
            min-height: 100vh;
        }
        
        .header {
            border-bottom: 1px solid rgba(212,175,55,0.25);
            padding: 1rem 1.5rem;
        }
        
        .header-content {
            max-width: 80rem;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        
        .header-title {
            font-size: 2.25rem;
            font-family: serif;
            color: #d4af37;
            font-weight: 800;
        }
        
        .header-subtitle {
            color: rgba(255,255,255,0.7);
            font-size: 1rem;
        }
        
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            height: 85vh;
            font-size: 0.9rem;
        }
        
        .column {
            position: relative;
            overflow: hidden;
        }
        
        .column-bg {
            position: absolute;
            inset: 0;
        }
        
        .column-bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            filter: brightness(35%) contrast(110%);
            transition: opacity 0.7s;
        }
        
        .column-overlay {
            position: absolute;
            inset: 0;
        }
        
        .overlay-dark {
            position: absolute;
            inset: 0;
            background-color: rgba(0,0,0,0.75);
        }
        
        .overlay-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.85), rgba(0,0,0,0.95));
        }
        
        .column-content {
            position: relative;
            z-index: 10;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 2rem;
        }
        
        .column-title {
            font-size: 1.875rem;
            margin-bottom: 1rem;
            font-family: serif;
            color: #d4af37;
            font-weight: 800;
            text-shadow: 0 3px 8px rgba(0,0,0,1);
        }
        
        .scroll-area {
            width: 100%;
            flex: 1;
            overflow-y: auto;
            padding-right: 1rem;
            scrollbar-width: none;
            -ms-overflow-style: none;
        }
        
        .scroll-area::-webkit-scrollbar {
            display: none;
        }
        
        .menu-list {
            border-color: rgba(212,175,55,0.25);
        }
        
        .menu-item {
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(212,175,55,0.25);
        }
        
        .menu-item:last-child {
            border-bottom: none;
        }
        
        .menu-item-row {
            display: flex;
            align-items: baseline;
        }
        
        .menu-item-name {
            font-size: 1.25rem;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .menu-item-dots {
            flex: 1;
            margin: 0 0.75rem;
            border-bottom: 1px dotted rgba(212,175,55,0.25);
        }
        
        .menu-item-price {
            font-size: 1.25rem;
            font-weight: 600;
            color: #d4af37;
            white-space: nowrap;
        }
        
        .menu-item-note {
            font-size: 0.875rem;
            color: rgba(255,255,255,0.7);
            margin-top: 0.25rem;
        }
        
        .shisha-price-note {
            margin-bottom: 0.75rem;
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: 0.025em;
            color: #d4af37;
        }
        
        .shisha-price-note span {
            font-weight: 600;
        }
        
        .column-divider {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 1px;
            background: rgba(212,175,55,0.25);
        }
        
        .footer {
            text-align: center;
            padding: 1.5rem;
            color: rgba(255,255,255,0.5);
            font-size: 0.875rem;
        }
        
        .fade-out {
            opacity: 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <h1 class="header-title">VIBES WIL</h1>
            <div class="header-subtitle">· Getränke- & Shishakarte</div>
        </div>
    </div>
    
    <div class="grid-container">
        <!-- Left Column -->
        <div class="column" id="column-left">
            <div class="column-bg">
                <img id="img-left" src="<?php echo htmlspecialchars(getImage($drinkCategories[0] ?? '', $IMAGE_MAP, $FALLBACK_IMG)); ?>" alt="">
            </div>
            <div class="column-overlay">
                <div class="overlay-dark"></div>
                <div class="overlay-gradient"></div>
            </div>
            <div class="column-content">
                <h2 class="column-title" id="title-left"><?php echo htmlspecialchars($drinkCategories[0] ?? '—'); ?></h2>
                <div class="scroll-area" id="scroll-left">
                    <div class="menu-list" id="menu-left"></div>
                </div>
            </div>
            <div class="column-divider"></div>
        </div>
        
        <!-- Middle Column -->
        <div class="column" id="column-middle">
            <div class="column-bg">
                <img id="img-middle" src="<?php echo htmlspecialchars(getImage($drinkCategories[1] ?? '', $IMAGE_MAP, $FALLBACK_IMG)); ?>" alt="">
            </div>
            <div class="column-overlay">
                <div class="overlay-dark"></div>
                <div class="overlay-gradient"></div>
            </div>
            <div class="column-content">
                <h2 class="column-title" id="title-middle"><?php echo htmlspecialchars($drinkCategories[1] ?? '—'); ?></h2>
                <div class="scroll-area" id="scroll-middle">
                    <div class="menu-list" id="menu-middle"></div>
                </div>
            </div>
            <div class="column-divider"></div>
        </div>
        
        <!-- Right Column (Shisha - Static) -->
        <div class="column">
            <div class="column-bg">
                <img src="<?php echo htmlspecialchars(getImage('shisha', $IMAGE_MAP, $FALLBACK_IMG)); ?>" alt="Shisha">
            </div>
            <div class="column-overlay">
                <div class="overlay-dark"></div>
                <div class="overlay-gradient"></div>
            </div>
            <div class="column-content">
                <h2 class="column-title">Shisha · Tabak</h2>
                <div class="scroll-area">
                    <?php foreach ($shishaGroups as $brand => $items): ?>
                        <div style="margin-bottom: 1.5rem;">
                            <?php if (strtolower($brand) === 'hookah'): ?>
                                <div class="shisha-price-note">
                                    Preis für alle Shishas: <span>29.00 CHF</span>
                                </div>
                            <?php endif; ?>
                            
                            <div class="menu-list">
                                <?php foreach ($items as $item): ?>
                                    <?php 
                                        $isEinzelkopf = stripos($item['flavor'], 'einzelner kopf') !== false || strtolower($brand) === 'hookahkopf';
                                        $itemPrice = $isEinzelkopf ? 20.0 : null;
                                    ?>
                                    <div class="menu-item">
                                        <div class="menu-item-row">
                                            <span class="menu-item-name"><?php echo htmlspecialchars($item['flavor']); ?></span>
                                            <?php if ($itemPrice !== null): ?>
                                                <span class="menu-item-dots"></span>
                                                <span class="menu-item-price"><?php echo currency($itemPrice); ?></span>
                                            <?php endif; ?>
                                        </div>
                                        <?php if (!empty($item['note'])): ?>
                                            <div class="menu-item-note"><?php echo htmlspecialchars($item['note']); ?></div>
                                        <?php endif; ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        &copy; <?php echo date('Y'); ?> Vibes Wil · Created by Daniel Sevinc
    </div>
    
    <script>
        // Data and configuration
        const ROTATE_MS = 10000;
        const FADE_MS = 400;
        const SCROLL_DURATION = 4000;
        const HOLD_TIME = 1000;
        
        const drinkGroups = <?php echo json_encode($drinkGroups); ?>;
        const drinkCategories = <?php echo json_encode($drinkCategories); ?>;
        const imageMap = <?php echo json_encode($IMAGE_MAP); ?>;
        const fallbackImg = <?php echo json_encode($FALLBACK_IMG); ?>;
        
        let currentIndex = 0;
        
        function getImage(key) {
            const normalized = key.toLowerCase().trim();
            return imageMap[normalized] || fallbackImg;
        }
        
        function currency(price) {
            return typeof price === 'number' ? price.toFixed(2) + ' CHF' : '';
        }
        
        function renderMenuItems(items) {
            if (!items || items.length === 0) {
                return '<div style="color: rgba(255,255,255,0.6);">Keine Einträge</div>';
            }
            
            let html = '';
            items.forEach(item => {
                html += '<div class="menu-item">';
                html += '<div class="menu-item-row">';
                html += '<span class="menu-item-name">' + escapeHtml(item.name) + '</span>';
                if (item.note) {
                    html += '<span class="menu-item-dots"></span>';
                }
                html += '<span class="menu-item-price">' + currency(item.price) + '</span>';
                html += '</div>';
                if (item.note) {
                    html += '<div class="menu-item-note">' + escapeHtml(item.note) + '</div>';
                }
                html += '</div>';
            });
            return html;
        }
        
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        function updateColumn(side, categoryIndex) {
            const category = drinkCategories[categoryIndex];
            const items = drinkGroups[category] || [];
            const img = getImage(category);
            
            const imgEl = document.getElementById('img-' + side);
            const titleEl = document.getElementById('title-' + side);
            const menuEl = document.getElementById('menu-' + side);
            
            // Update content
            titleEl.textContent = category || '—';
            menuEl.innerHTML = renderMenuItems(items);
            
            // Update image
            imgEl.src = img;
            
            // Reset scroll position
            const scrollEl = document.getElementById('scroll-' + side);
            scrollEl.scrollTop = 0;
            
            // Start auto-scroll for this column
            startAutoScroll(scrollEl);
        }
        
        function startAutoScroll(element) {
            if (!element) return;
            
            // Cancel any existing animation
            if (element._scrollRaf) {
                cancelAnimationFrame(element._scrollRaf);
            }
            
            const maxScroll = element.scrollHeight - element.clientHeight;
            if (maxScroll <= 0) return;
            
            let direction = 1;
            let startTime = performance.now();
            
            function tick(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / SCROLL_DURATION, 1);
                const position = direction === 1 
                    ? progress * maxScroll 
                    : maxScroll - progress * maxScroll;
                
                element.scrollTop = position;
                
                if (progress < 1) {
                    element._scrollRaf = requestAnimationFrame(tick);
                } else {
                    direction *= -1;
                    startTime = performance.now();
                    setTimeout(() => {
                        element._scrollRaf = requestAnimationFrame(tick);
                    }, HOLD_TIME);
                }
            }
            
            element._scrollRaf = requestAnimationFrame(tick);
        }
        
        function rotateCategories() {
            // Fade out
            const imgLeft = document.getElementById('img-left');
            const imgMiddle = document.getElementById('img-middle');
            
            setTimeout(() => {
                imgLeft.classList.add('fade-out');
                imgMiddle.classList.add('fade-out');
            }, ROTATE_MS - FADE_MS);
            
            setTimeout(() => {
                // Update to next categories
                currentIndex = (currentIndex + 2) % drinkCategories.length;
                const leftIndex = currentIndex;
                const middleIndex = (currentIndex + 1) % drinkCategories.length;
                
                updateColumn('left', leftIndex);
                updateColumn('middle', middleIndex);
                
                // Fade in
                imgLeft.classList.remove('fade-out');
                imgMiddle.classList.remove('fade-out');
                
                // Schedule next rotation
                setTimeout(rotateCategories, ROTATE_MS);
            }, ROTATE_MS);
        }
        
        // Initialize
        window.addEventListener('DOMContentLoaded', () => {
            // Initial render
            updateColumn('left', 0);
            updateColumn('middle', 1);
            
            // Start rotation
            if (drinkCategories.length > 0) {
                setTimeout(rotateCategories, ROTATE_MS);
            }
        });
    </script>
</body>
</html>
