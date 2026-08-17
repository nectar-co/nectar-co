/**
 * NECTAR PARFUMS — CATÁLOGO MAESTRO DE PERFUMES ORIGINALES
 * 
 * 💡 CÓMO EDITAR O AGREGAR PRODUCTOS:
 * Cada producto tiene sus datos entre llaves { ... }.
 * Solo modifica el nombre, precio, stock o la foto según lo que necesites.
 */

window.NECTAR_CATALOG = {
  "store": {
    "name": "Nectar Parfums",
    "tagline": "Perfumería Árabe 100% Original Sellada",
    "whatsappNumber": "573014972011",
    "whatsappDisplay": "+57 301 4972011",
    "currency": "COP",
    "currencySymbol": "$",
    "quoteValidityDays": 3,
    "shippingText": "Envíos asegurados a toda Colombia | Pagos contraentrega en ciudades principales",
    "bannerAnnouncement": "✨ Perfumes Árabes 100% Originales Sellados • Envío Seguro a Toda Colombia • Asesoría directa al WhatsApp"
  },
  "sections": [
    { "id": "all", "name": "Todos los Perfumes", "icon": "✨" },
    { "id": "bestsellers", "name": "🔥 Más Vendidos", "icon": "🔥" },
    { "id": "new", "name": "⭐ Novedades", "icon": "⭐" },
    { "id": "deals", "name": "🏷️ En Promoción", "icon": "🏷️" }
  ],
  "genders": [
    { "id": "all", "label": "Todos" },
    { "id": "unisex", "label": "Unisex" },
    { "id": "hombre", "label": "Para Él" },
    { "id": "mujer", "label": "Para Ella" }
  ],
  "products": [
    {
      "id": "nec-001",
      "name": "Khamrah Qahwa",
      "brand": "Lattafa",
      "gender": "unisex",
      "bottleSize": "Botella Sellada 100 ml",
      "concentration": "Eau de Parfum",
      "description": "Una deliciosa apertura de café árabe tostado, jengibre y cardamomo, envuelto en un corazón de praliné dulce y fondo licoroso de vainilla Bourbon.",
      "notes": "Café Tostado, Praliné, Canela, Vainilla Bourbon, Benjuí",
      "price": 265000,
      "originalPrice": 300000,
      "stock": 4,
      "isFeatured": true,
      "isNew": true,
      "isBestseller": true,
      "promoBadge": "12% OFF",
      "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80"
    },
    {
      "id": "nec-002",
      "name": "Khamrah Original",
      "brand": "Lattafa",
      "gender": "unisex",
      "bottleSize": "Botella Sellada 100 ml",
      "concentration": "Eau de Parfum",
      "description": "Opulento acorde de dátiles caramelizados, canela ardiente, nuez moscada y una base de licor de vainilla con haba tonka.",
      "notes": "Dátiles Caramelizados, Canela, Vainilla, Haba Tonka, Mirra",
      "price": 245000,
      "originalPrice": 0,
      "stock": 2,
      "isFeatured": true,
      "isNew": false,
      "isBestseller": true,
      "promoBadge": "TOP VENTAS",
      "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80"
    },
    {
      "id": "nec-003",
      "name": "Club de Nuit Intense Man",
      "brand": "Armaf",
      "gender": "hombre",
      "bottleSize": "Botella Pure Parfum 150 ml",
      "concentration": "Pure Parfum",
      "description": "La bestia negra de la perfumería masculina. Cítricos ahumados de grosella negra y manzana con un fondo magistral de abedul ahumado y ámbar gris.",
      "notes": "Limón, Grosella Negra, Abedul Ahumado, Ámbar Gris, Almizcle",
      "price": 290000,
      "originalPrice": 0,
      "stock": 5,
      "isFeatured": true,
      "isNew": false,
      "isBestseller": true,
      "promoBadge": "MÁS VENDIDO",
      "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
