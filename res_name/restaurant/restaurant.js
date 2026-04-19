/* ═══════════════════════════════════════════════════════════════
   restaurant.js  –  OtakuEats Restaurant Page
   Works for ALL 10 restaurants. Place this file once in:
     res_name/<folder>/restaurant.js   (one copy per restaurant)
   or share a single copy and import it.
   ═══════════════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────────────────
   1.  RESTAURANT DATABASE
   ──────────────────────────────────────────────────────────────── */
const RESTAURANTS = {

  "murugan": {
    name: "Murugan Idli Shop",
    meta: "South Indian • Multiple Outlets • Chennai",
    rating: 4.5,
    reviews: 2840,
    tags: ["Breakfast", "South Indian", "Budget Friendly", "Veg"],
    hero: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1400&q=80",
    badge: "⭐ Chennai's Favourite",
    offers: [
      { pct: "20% OFF", desc: "On orders above ₹300", code: "IDLI20" },
      { pct: "FREE", desc: "Sambar with every Idli order", code: "SAMBAR" },
      { pct: "₹50 OFF", desc: "First order discount", code: "FIRST50" },
      { pct: "2+1", desc: "Buy 2 Vadas, Get 1 Free", code: "VADA3" }
    ],
    categories: ["Idlis & Dosas", "Vadas", "Rice & Curries", "Beverages", "Sweets", "Combos"],
    menu: [
      { id:1,  name:"Plain Idli (2 pcs)",      cat:"Idlis & Dosas",    price:60,  mrp:70,  img:"../images/murgan/plain-idli.jpg",  veg:true,  tag:"bestseller", desc:"Soft steamed rice cakes served with sambar and chutney." },
      { id:2,  name:"Ghee Idli",               cat:"Idlis & Dosas",    price:90,  mrp:100, img:"../images/murgan/ghee-idli.jpg",  veg:true,  tag:"",          desc:"Idli drizzled with pure ghee — a rich classic." },
      { id:3,  name:"Rava Idli",               cat:"Idlis & Dosas",    price:80,  mrp:90,  img:"../images/murgan/rava-idli.jpg",  veg:true,  tag:"",          desc:"Fluffy semolina idli with cashews and curry leaves." },
      { id:4,  name:"Paper Dosa",              cat:"Idlis & Dosas",    price:70,  mrp:80,  img:"../images/murgan/paper-dosa.jpg",  veg:true,  tag:"famous",    desc:"Extra-crispy paper-thin dosa, a crowd favourite." },
      { id:5,  name:"Masala Dosa",             cat:"Idlis & Dosas",    price:90,  mrp:100, img:"../images/murgan/masala-dosa.jpg",  veg:true,  tag:"bestseller", desc:"Golden dosa with spiced potato filling." },
      { id:6,  name:"Set Dosa (3 pcs)",        cat:"Idlis & Dosas",    price:80,  mrp:90,  img:"../images/murgan/set-dosa.jpg",  veg:true,  tag:"",          desc:"Soft spongy mini dosas served in a trio." },
      { id:7,  name:"Podi Dosa",               cat:"Idlis & Dosas",    price:95,  mrp:110, img:"../images/murgan/podi-dosa.jpg",  veg:true,  tag:"spicy",     desc:"Dosa smeared with spicy gun-powder masala." },
      { id:8,  name:"Uttapam",                 cat:"Idlis & Dosas",    price:85,  mrp:95,  img:"../images/murgan/uttapam.jpg",  veg:true,  tag:"",          desc:"Thick pancake with onions, tomatoes and green chilli." },
      { id:9,  name:"Plain Vada",              cat:"Vadas",             price:30,  mrp:35,  img:"../images/murgan/plain-vada.jpg",  veg:true,  tag:"",          desc:"Crispy urad dal vada, perfect with sambar." },
      { id:10, name:"Sambar Vada",             cat:"Vadas",             price:50,  mrp:60,  img:"../images/murgan/sambar-vada.jpg",  veg:true,  tag:"bestseller", desc:"Vadas soaked in piping hot sambar." },
      { id:11, name:"Curd Vada",               cat:"Vadas",             price:55,  mrp:65,  img:"../images/murgan/curd-vada.jpg",  veg:true,  tag:"",          desc:"Vadas dunked in chilled sweetened curd." },
      { id:12, name:"Idli Sambar Bowl",        cat:"Combos",            price:120, mrp:140, img:"../images/murgan/idli-sambar-bowl.jpg",  veg:true,  tag:"new",       desc:"4 idlis with a generous bowl of sambar and 2 chutneys." },
      { id:13, name:"Pongal",                  cat:"Rice & Curries",    price:80,  mrp:90,  img:"../images/murgan/pongal.jpg",  veg:true,  tag:"",          desc:"Comforting rice-lentil dish with ghee and pepper." },
      { id:14, name:"Sambar Rice",             cat:"Rice & Curries",    price:90,  mrp:100, img:"../images/murgan/sambar-rice.jpg",  veg:true,  tag:"",          desc:"Steamed rice mixed with flavourful sambar." },
      { id:15, name:"Curd Rice",               cat:"Rice & Curries",    price:80,  mrp:90,  img:"../images/murgan/curd-rice.jpg",  veg:true,  tag:"",          desc:"Cool creamy curd rice with mustard and curry leaves." },
      { id:16, name:"Lemon Rice",              cat:"Rice & Curries",    price:80,  mrp:90,  img:"../images/murgan/lemon-rice.jpg",  veg:true,  tag:"",          desc:"Tangy turmeric-tinted rice with peanuts." },
      { id:17, name:"Filter Coffee",           cat:"Beverages",         price:40,  mrp:50,  img:"../images/murgan/filter-coffee.jpg",  veg:true,  tag:"famous",    desc:"Authentic South Indian decoction coffee." },
      { id:18, name:"Masala Chai",             cat:"Beverages",         price:35,  mrp:40,  img:"../images/murgan/masala-chai.jpg",  veg:true,  tag:"",          desc:"Ginger-cardamom spiced tea." },
      { id:19, name:"Buttermilk",              cat:"Beverages",         price:30,  mrp:35,  img:"../images/murgan/buttermilk.jpg",  veg:true,  tag:"",          desc:"Chilled salted buttermilk with curry leaves." },
      { id:20, name:"Mango Lassi",             cat:"Beverages",         price:70,  mrp:80,  img:"../images/murgan/mango-lassi.jpg",  veg:true,  tag:"new",       desc:"Thick mango-infused yoghurt drink." },
      { id:21, name:"Kesari",                  cat:"Sweets",            price:60,  mrp:70,  img:"../images/murgan/kesari.jpg",  veg:true,  tag:"",          desc:"Saffron semolina halwa with cashews." },
      { id:22, name:"Payasam",                 cat:"Sweets",            price:70,  mrp:80,  img:"../images/murgan/payasam.jpg",  veg:true,  tag:"",          desc:"Creamy vermicelli payasam with cardamom." },
      { id:23, name:"Palkova",                 cat:"Sweets",            price:80,  mrp:90,  img:"../images/murgan/palkova.jpg",  veg:true,  tag:"",          desc:"Traditional milk-based sweet made in-house." },
      { id:24, name:"Dosa + Vada Combo",       cat:"Combos",            price:130, mrp:150, img:"../images/murgan/dosa-vada-combo.jpg",  veg:true,  tag:"bestseller", desc:"Masala dosa + 2 vadas + sambar + 2 chutneys." },
      { id:25, name:"Breakfast Thali",         cat:"Combos",            price:180, mrp:210, img:"../images/murgan/breakfast-thali.jpg",  veg:true,  tag:"famous",    desc:"2 Idlis + Dosa + Vada + Pongal + Coffee. Full meal!" }
    ]
  },

  "annalakshmi": {
    name: "Annalakshmi",
    meta: "Pure Vegetarian • Fine Dining • Chennai",
    rating: 4.3,
    reviews: 1620,
    tags: ["Pure Veg", "Fine Dining", "Jain Friendly"],
    hero: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1400&q=80",
    badge: "🌿 Pure Vegetarian",
    offers: [
      { pct: "15% OFF", desc: "Weekday lunch special", code: "LUNCH15" },
      { pct: "FREE", desc: "Dessert on orders above ₹500", code: "SWEET" },
      { pct: "₹100 OFF", desc: "Group orders (4+ people)", code: "GROUP100" },
      { pct: "25% OFF", desc: "Festival special offer", code: "FEST25" }
    ],
    categories: ["Starters", "Mains", "Breads", "Rice", "Desserts", "Beverages"],
    menu: [
      { id:1,  name:"Paneer Tikka",            cat:"Starters",   price:220, mrp:260, img:"../images/annalakshmi/paneer-tikka.jpg",  veg:true,  tag:"bestseller", desc:"Smoky tandoor-grilled cottage cheese cubes with peppers." },
      { id:2,  name:"Hara Bhara Kebab",        cat:"Starters",   price:180, mrp:210, img:"../images/annalakshmi/hara-bhara-kebab.jpg",  veg:true,  tag:"",          desc:"Spinach and potato patties with green chutney." },
      { id:3,  name:"Veg Manchurian",          cat:"Starters",   price:200, mrp:230, img:"../images/annalakshmi/veg-manchurian.jpg",  veg:true,  tag:"spicy",     desc:"Crispy veg balls in tangy manchurian sauce." },
      { id:4,  name:"Dahi Puri",               cat:"Starters",   price:140, mrp:160, img:"../images/annalakshmi/dahi-puri.jpg",  veg:true,  tag:"",          desc:"Crispy puris with curd, tamarind and chutneys." },
      { id:5,  name:"Palak Paneer",            cat:"Mains",      price:280, mrp:320, img:"../images/annalakshmi/palak-paneer.jpg",  veg:true,  tag:"famous",    desc:"Creamy spinach curry with soft cottage cheese." },
      { id:6,  name:"Dal Makhani",             cat:"Mains",      price:260, mrp:300, img:"../images/annalakshmi/dal-makhani.jpg",  veg:true,  tag:"bestseller", desc:"Slow-cooked black lentils in buttery tomato gravy." },
      { id:7,  name:"Paneer Butter Masala",    cat:"Mains",      price:300, mrp:340, img:"../images/annalakshmi/paneer-butter-masala.jpg",  veg:true,  tag:"bestseller", desc:"Rich, creamy orange tomato-based paneer curry." },
      { id:8,  name:"Chana Masala",            cat:"Mains",      price:240, mrp:270, img:"../images/annalakshmi/chana-masala.jpg",  veg:true,  tag:"",          desc:"Hearty chickpea curry with aromatic spices." },
      { id:9,  name:"Aloo Gobi",               cat:"Mains",      price:220, mrp:250, img:"../images/annalakshmi/aloo-gobi.jpg",  veg:true,  tag:"",          desc:"Dry potato and cauliflower stir-fry." },
      { id:10, name:"Navratan Korma",          cat:"Mains",      price:320, mrp:360, img:"../images/annalakshmi/navratan-korma.jpg",  veg:true,  tag:"",          desc:"Nine-jewel mixed vegetable curry in rich gravy." },
      { id:11, name:"Butter Naan",             cat:"Breads",     price:60,  mrp:70,  img:"../images/annalakshmi/butter-naan.jpg",  veg:true,  tag:"",          desc:"Soft tandoor-baked naan brushed with butter." },
      { id:12, name:"Garlic Naan",             cat:"Breads",     price:70,  mrp:80,  img:"../images/annalakshmi/garlic-naan.jpg",  veg:true,  tag:"famous",    desc:"Naan topped with minced garlic and butter." },
      { id:13, name:"Stuffed Paratha",         cat:"Breads",     price:90,  mrp:100, img:"../images/annalakshmi/stuffed-paratha.jpg",  veg:true,  tag:"",          desc:"Whole wheat flatbread stuffed with spiced potato." },
      { id:14, name:"Puri (3 pcs)",            cat:"Breads",     price:70,  mrp:80,  img:"../images/annalakshmi/puri.jpg",  veg:true,  tag:"",          desc:"Golden puffed fried bread — comfort food." },
      { id:15, name:"Jeera Rice",              cat:"Rice",       price:160, mrp:180, img:"../images/annalakshmi/jeera-rice.jpg",  veg:true,  tag:"",          desc:"Fragrant cumin-tempered basmati rice." },
      { id:16, name:"Biryani (Veg)",           cat:"Rice",       price:280, mrp:320, img:"../images/annalakshmi/veg-biryani.jpg",  veg:true,  tag:"bestseller", desc:"Aromatic basmati layered with vegetables and saffron." },
      { id:17, name:"Pulao",                   cat:"Rice",       price:200, mrp:230, img:"../images/annalakshmi/pulao.jpg",  veg:true,  tag:"",          desc:"Mild mixed vegetable rice dish." },
      { id:18, name:"Gulab Jamun",             cat:"Desserts",   price:100, mrp:120, img:"../images/annalakshmi/gulab-jamun.jpg",  veg:true,  tag:"famous",    desc:"Soft milk-solid dumplings in rose-flavoured syrup." },
      { id:19, name:"Rasgulla",                cat:"Desserts",   price:100, mrp:120, img:"../images/annalakshmi/rasgulla.jpg",  veg:true,  tag:"",          desc:"Spongy cottage cheese balls in light sugar syrup." },
      { id:20, name:"Kheer",                   cat:"Desserts",   price:120, mrp:140, img:"../images/annalakshmi/kheer.jpg",  veg:true,  tag:"",          desc:"Slow-cooked rice pudding with cardamom and dry fruits." },
      { id:21, name:"Jalebi",                  cat:"Desserts",   price:90,  mrp:110, img:"../images/annalakshmi/jalebi.jpg",  veg:true,  tag:"",          desc:"Crispy swirls soaked in saffron-sugar syrup." },
      { id:22, name:"Lassi (Sweet)",           cat:"Beverages",  price:90,  mrp:100, img:"../images/annalakshmi/sweet-lassi.jpg",  veg:true,  tag:"",          desc:"Thick chilled yoghurt drink." },
      { id:23, name:"Rose Sherbet",            cat:"Beverages",  price:80,  mrp:90,  img:"../images/annalakshmi/rose-sherbet.jpg",  veg:true,  tag:"",          desc:"Refreshing rose-flavoured drink." },
      { id:24, name:"Thandai",                 cat:"Beverages",  price:100, mrp:120, img:"../images/annalakshmi/thandai.jpg",  veg:true,  tag:"new",       desc:"Traditional spiced milk with nuts and saffron." },
      { id:25, name:"Veg Thali (Full)",        cat:"Mains",      price:450, mrp:520, img:"../images/annalakshmi/veg-thali.jpg",  veg:true,  tag:"famous",    desc:"Full thali: dal, 2 sabzis, rice, 2 rotis, raita, dessert." }
    ]
  },

  "barbeque": {
    name: "Barbeque Nation",
    meta: "BBQ • Live Grill • Multi-Cuisine",
    rating: 4.4,
    reviews: 3210,
    tags: ["BBQ", "Live Grill", "Non-Veg", "Buffet"],
    hero: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1400&q=80",
    badge: "🔥 Grill Masters",
    offers: [
      { pct: "30% OFF", desc: "Weekend dinner buffet", code: "BBQWKND" },
      { pct: "FREE", desc: "Mocktail with every combo", code: "MOCK" },
      { pct: "₹200 OFF", desc: "Orders above ₹1000", code: "BBQ200" },
      { pct: "2+1", desc: "Live grill starters", code: "GRILL3" }
    ],
    categories: ["Grill Starters", "Main Course", "Biryani", "Desserts", "Mocktails", "Combos"],
    menu: [
      { id:1,  name:"Chicken Tangdi Kebab",    cat:"Grill Starters", price:380, mrp:440, img:"../images/barbeque/chicken-tangdi-kebab.jpg",  veg:false, tag:"bestseller", desc:"Juicy chicken drumsticks marinated in spiced yoghurt, grilled to perfection." },
      { id:2,  name:"Mutton Seekh Kebab",      cat:"Grill Starters", price:420, mrp:480, img:"../images/barbeque/mutton-seekh-kebab.jpg",  veg:false, tag:"famous",    desc:"Minced lamb on skewers with herbs and spices." },
      { id:3,  name:"Prawn Koliwada",          cat:"Grill Starters", price:460, mrp:520, img:"../images/barbeque/prawn-koliwada.jpg",  veg:false, tag:"spicy",     desc:"Crispy fried prawns in a fiery coastal marinade." },
      { id:4,  name:"Fish Tikka",              cat:"Grill Starters", price:400, mrp:460, img:"../images/barbeque/fish-tikka.jpg",  veg:false, tag:"",          desc:"Tender fish marinated with ajwain and mustard oil." },
      { id:5,  name:"Paneer Hariyali Tikka",   cat:"Grill Starters", price:320, mrp:370, img:"../images/barbeque/paneer-hariyali-tikka.jpg",  veg:true,  tag:"",          desc:"Green herb-marinated paneer on the grill." },
      { id:6,  name:"Veg Seekh Kebab",         cat:"Grill Starters", price:280, mrp:320, img:"../images/barbeque/veg-seekh-kebab.jpg",  veg:true,  tag:"",          desc:"Mixed vegetable and cheese seekh on skewers." },
      { id:7,  name:"Chicken Butter Masala",   cat:"Main Course",    price:380, mrp:430, img:"../images/barbeque/chicken-butter-masala.jpg",  veg:false, tag:"bestseller", desc:"Rich, creamy tomato-butter chicken curry." },
      { id:8,  name:"Mutton Rogan Josh",       cat:"Main Course",    price:440, mrp:500, img:"../images/barbeque/mutton-rogan-josh.jpg",  veg:false, tag:"famous",    desc:"Slow-cooked lamb in Kashmiri-style aromatic gravy." },
      { id:9,  name:"Dal Tadka",               cat:"Main Course",    price:260, mrp:300, img:"../images/barbeque/dal-tadka.jpg",  veg:true,  tag:"",          desc:"Yellow lentils tempered with ghee, garlic and cumin." },
      { id:10, name:"Chicken Biryani",         cat:"Biryani",        price:420, mrp:480, img:"../images/barbeque/chicken-biryani.jpg",  veg:false, tag:"bestseller", desc:"Dum-cooked biryani with succulent chicken pieces." },
      { id:11, name:"Mutton Biryani",          cat:"Biryani",        price:480, mrp:540, img:"../images/barbeque/mutton-biryani.jpg",  veg:false, tag:"famous",    desc:"Royal slow-cooked mutton biryani." },
      { id:12, name:"Veg Biryani",             cat:"Biryani",        price:320, mrp:360, img:"../images/barbeque/veg-biryani.jpg",  veg:true,  tag:"",          desc:"Fragrant basmati with mixed vegetables." },
      { id:13, name:"Shahi Tukda",             cat:"Desserts",       price:160, mrp:190, img:"../images/barbeque/shahi-tukda.jpg",  veg:true,  tag:"famous",    desc:"Fried bread soaked in saffron rabdi and syrup." },
      { id:14, name:"Gulab Jamun (2 pcs)",     cat:"Desserts",       price:120, mrp:140, img:"../images/barbeque/gulab-jamun.jpg",  veg:true,  tag:"",          desc:"Classic milk dumplings in rose syrup." },
      { id:15, name:"Brownie with Ice Cream",  cat:"Desserts",       price:200, mrp:240, img:"../images/barbeque/brownie-ice-cream.jpg",  veg:true,  tag:"new",       desc:"Warm chocolate brownie with vanilla ice cream." },
      { id:16, name:"Virgin Mojito",           cat:"Mocktails",      price:160, mrp:190, img:"../images/barbeque/virgin-mojito.jpg",  veg:true,  tag:"",          desc:"Refreshing mint-lime mocktail." },
      { id:17, name:"Blue Lagoon",             cat:"Mocktails",      price:160, mrp:190, img:"../images/barbeque/blue-lagoon.jpg",  veg:true,  tag:"",          desc:"Blue curaçao-flavoured fizzy mocktail." },
      { id:18, name:"Watermelon Cooler",       cat:"Mocktails",      price:140, mrp:160, img:"../images/barbeque/watermelon-cooler.jpg",  veg:true,  tag:"new",       desc:"Fresh watermelon with a hint of mint." },
      { id:19, name:"BBQ Feast (Non-Veg)",     cat:"Combos",         price:899, mrp:999, img:"../images/barbeque/bbq-feast-nonveg.jpg",  veg:false, tag:"bestseller", desc:"4 grill starters + 2 mains + biryani + dessert + mocktail." },
      { id:20, name:"BBQ Feast (Veg)",         cat:"Combos",         price:699, mrp:799, img:"../images/barbeque/bbq-feast-veg.jpg",  veg:true,  tag:"",          desc:"4 veg grill starters + 2 mains + biryani + dessert." },
      { id:21, name:"Chicken 65",              cat:"Grill Starters", price:340, mrp:390, img:"../images/barbeque/chicken-65.jpg",  veg:false, tag:"spicy",     desc:"Deep-fried spicy chicken — the original Chennai favourite." },
      { id:22, name:"Crispy Calamari",         cat:"Grill Starters", price:420, mrp:480, img:"../images/barbeque/crispy-calamari.jpg",  veg:false, tag:"new",       desc:"Lightly battered and fried squid rings." },
      { id:23, name:"Peshwari Naan",           cat:"Main Course",    price:90,  mrp:100, img:"../images/barbeque/peshwari-naan.jpg",  veg:true,  tag:"",          desc:"Stuffed with nuts and coconut — a sweet bread." },
      { id:24, name:"Paneer Lababdar",         cat:"Main Course",    price:360, mrp:410, img:"../images/barbeque/paneer-lababdar.jpg",  veg:true,  tag:"",          desc:"Paneer in rich, tangy onion-tomato gravy." },
      { id:25, name:"Prawn Biryani",           cat:"Biryani",        price:520, mrp:590, img:"../images/barbeque/prawn-biryani.jpg",  veg:false, tag:"famous",    desc:"Coastal-style prawn biryani with whole spices." }
    ]
  },

  "absolute": {
    name: "Absolute Barbeques",
    meta: "BBQ Buffet • Live Counter • Chennai",
    rating: 4.2,
    reviews: 2100,
    tags: ["BBQ", "Buffet", "Live Counter", "Non-Veg"],
    hero: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&q=80",
    badge: "🍖 Live BBQ",
    offers: [
      { pct: "20% OFF", desc: "Lunch buffet Mon-Thu", code: "ABLUNCH" },
      { pct: "FREE", desc: "Starter round on birthday", code: "BDAY" },
      { pct: "₹150 OFF", desc: "Corporate group discount", code: "CORP150" },
      { pct: "BOGO", desc: "Kids eat free on Sundays", code: "KIDSFREE" }
    ],
    categories: ["Live Grill", "Kebabs", "Mains", "Biryani", "Desserts", "Drinks"],
    menu: [
      { id:1,  name:"Chicken Malai Tikka",     cat:"Live Grill",  price:360, mrp:420, img:"../images/absolute/chicken-malai-tikka.jpg",  veg:false, tag:"bestseller", desc:"Creamy cashew-yoghurt marinated chicken on skewers." },
      { id:2,  name:"Lamb Chops",              cat:"Live Grill",  price:500, mrp:580, img:"../images/absolute/lamb-chops.jpg",  veg:false, tag:"famous",    desc:"Grilled lamb chops with herb rub." },
      { id:3,  name:"Peri Peri Chicken",       cat:"Live Grill",  price:380, mrp:440, img:"../images/absolute/peri-peri-chicken.jpg",  veg:false, tag:"spicy",     desc:"Fiery peri-peri marinated whole chicken." },
      { id:4,  name:"Veg Tikka Platter",       cat:"Kebabs",      price:280, mrp:320, img:"../images/absolute/veg-tikka-platter.jpg",  veg:true,  tag:"",          desc:"Assorted veg kebabs — paneer, mushroom, baby corn." },
      { id:5,  name:"Galouti Kebab",           cat:"Kebabs",      price:380, mrp:440, img:"../images/absolute/galouti-kebab.jpg",  veg:false, tag:"famous",    desc:"Melt-in-your-mouth mutton patties from Lucknow." },
      { id:6,  name:"Burrah Kebab",            cat:"Kebabs",      price:440, mrp:500, img:"../images/absolute/burrah-kebab.jpg",  veg:false, tag:"",          desc:"Whole mutton chop marinated overnight, char-grilled." },
      { id:7,  name:"Kadai Chicken",           cat:"Mains",       price:380, mrp:440, img:"../images/absolute/kadai-chicken.jpg",  veg:false, tag:"bestseller", desc:"Spicy chicken cooked in a wok with capsicum and tomato." },
      { id:8,  name:"Mutton Keema",            cat:"Mains",       price:420, mrp:480, img:"../images/absolute/mutton-keema.jpg",  veg:false, tag:"",          desc:"Minced mutton cooked with peas and spices." },
      { id:9,  name:"Fish Curry",              cat:"Mains",       price:400, mrp:460, img:"../images/absolute/fish-curry.jpg",  veg:false, tag:"",          desc:"Tangy coastal fish curry with coconut milk." },
      { id:10, name:"Chicken Dum Biryani",     cat:"Biryani",     price:440, mrp:500, img:"../images/absolute/chicken-dum-biryani.jpg",  veg:false, tag:"bestseller", desc:"Authentic dum-sealed chicken biryani." },
      { id:11, name:"Mutton Biryani",          cat:"Biryani",     price:500, mrp:560, img:"../images/absolute/mutton-biryani.jpg",  veg:false, tag:"famous",    desc:"Tender mutton pieces in fragrant basmati." },
      { id:12, name:"Egg Biryani",             cat:"Biryani",     price:320, mrp:370, img:"../images/absolute/egg-biryani.jpg",  veg:false, tag:"new",       desc:"Boiled eggs cooked with spiced biryani rice." },
      { id:13, name:"Caramel Custard",         cat:"Desserts",    price:160, mrp:190, img:"../images/absolute/caramel-custard.jpg",  veg:true,  tag:"famous",    desc:"Silky baked custard with caramel top." },
      { id:14, name:"Chocolate Fondant",       cat:"Desserts",    price:200, mrp:240, img:"../images/absolute/chocolate-fondant.jpg",  veg:true,  tag:"bestseller", desc:"Molten-centre dark chocolate cake." },
      { id:15, name:"Kulfi Falooda",           cat:"Desserts",    price:180, mrp:210, img:"../images/absolute/kulfi-falooda.jpg",  veg:true,  tag:"",          desc:"Pistachio kulfi with rose falooda and basil seeds." },
      { id:16, name:"Mango Shake",             cat:"Drinks",      price:140, mrp:160, img:"../images/absolute/mango-shake.jpg",  veg:true,  tag:"",          desc:"Thick Alphonso mango milkshake." },
      { id:17, name:"Cold Coffee",             cat:"Drinks",      price:130, mrp:150, img:"../images/absolute/cold-coffee.jpg",  veg:true,  tag:"",          desc:"Chilled coffee with cream." },
      { id:18, name:"Lemonade",                cat:"Drinks",      price:90,  mrp:110, img:"../images/absolute/lemonade.jpg",  veg:true,  tag:"",          desc:"Fresh lime soda — sweet, salty, or mixed." },
      { id:19, name:"BBQ Non-Veg Combo",       cat:"Mains",       price:999, mrp:1199,img:"../images/absolute/bbq-nonveg-combo.jpg",  veg:false, tag:"bestseller", desc:"Full BBQ spread: grill + kebab + main + biryani + dessert." },
      { id:20, name:"Chicken Wings",           cat:"Live Grill",  price:360, mrp:420, img:"../images/absolute/chicken-wings.jpg",  veg:false, tag:"spicy",     desc:"Charcoal-grilled hot wings with BBQ sauce." },
      { id:21, name:"Tandoori Pomfret",        cat:"Live Grill",  price:480, mrp:560, img:"../images/absolute/tandoori-pomfret.jpg",  veg:false, tag:"famous",    desc:"Whole pomfret marinated and cooked in tandoor." },
      { id:22, name:"Dahi Kebab",              cat:"Kebabs",      price:280, mrp:320, img:"../images/absolute/dahi-kebab.jpg",  veg:true,  tag:"new",       desc:"Soft hung curd and cheese kebabs." },
      { id:23, name:"Prawn Masala",            cat:"Mains",       price:460, mrp:520, img:"../images/absolute/prawn-masala.jpg",  veg:false, tag:"",          desc:"Tiger prawns in fiery chettinad masala." },
      { id:24, name:"Lal Maas",               cat:"Mains",       price:480, mrp:540, img:"../images/absolute/lal-maas.jpg",  veg:false, tag:"spicy",     desc:"Rajasthani fiery red mutton curry." },
      { id:25, name:"Moong Dal Halwa",         cat:"Desserts",    price:150, mrp:180, img:"../images/absolute/moong-dal-halwa.jpg",  veg:true,  tag:"",          desc:"Rich moong lentil halwa with ghee and dry fruits." }
    ]
  },

  "the_marina": {
    name: "The Marina",
    meta: "Seafood • Coastal • Sea View",
    rating: 4.1,
    reviews: 980,
    tags: ["Seafood", "Coastal", "Non-Veg"],
    hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
    badge: "🌊 Coastal Flavours",
    offers: [
      { pct: "15% OFF", desc: "Fresh catch of the day", code: "CATCH15" },
      { pct: "FREE", desc: "Soup with every seafood platter", code: "SOUPP" },
      { pct: "₹100 OFF", desc: "Dinner bookings", code: "MARINE100" },
      { pct: "25% OFF", desc: "Sunday family meals", code: "FAMILY25" }
    ],
    categories: ["Starters", "Seafood Mains", "Chicken", "Rice & Bread", "Soups", "Desserts"],
    menu: [
      { id:1,  name:"Prawn Cocktail",          cat:"Starters",       price:320, mrp:380, img:"../images/marina/prawn-cocktail.jpg",  veg:false, tag:"famous",    desc:"Chilled prawns with tangy cocktail sauce." },
      { id:2,  name:"Calamari Fry",            cat:"Starters",       price:380, mrp:440, img:"../images/marina/calamari-fry.jpg",  veg:false, tag:"bestseller", desc:"Golden crispy squid rings with lemon dip." },
      { id:3,  name:"Fish and Chips",          cat:"Starters",       price:360, mrp:420, img:"../images/marina/fish-and-chips.jpg",  veg:false, tag:"",          desc:"Classic battered fish with thick-cut fries." },
      { id:4,  name:"Crab Cake",               cat:"Starters",       price:420, mrp:480, img:"../images/marina/crab-cake.jpg",  veg:false, tag:"new",       desc:"Pan-fried crab cakes with chipotle mayo." },
      { id:5,  name:"Lobster Bisque",          cat:"Soups",          price:300, mrp:360, img:"../images/marina/lobster-bisque.jpg",  veg:false, tag:"famous",    desc:"Creamy lobster soup with a hint of brandy." },
      { id:6,  name:"Tomato Shorba",           cat:"Soups",          price:180, mrp:210, img:"../images/marina/tomato-shorba.jpg",  veg:true,  tag:"",          desc:"Spiced Indian-style tomato consommé." },
      { id:7,  name:"Grilled Tiger Prawns",    cat:"Seafood Mains",  price:580, mrp:660, img:"../images/marina/grilled-tiger-prawns.jpg",  veg:false, tag:"bestseller", desc:"Jumbo tiger prawns marinated in garlic-herb butter." },
      { id:8,  name:"Butter Garlic Crab",      cat:"Seafood Mains",  price:680, mrp:780, img:"../images/marina/butter-garlic-crab.jpg",  veg:false, tag:"famous",    desc:"Blue swimmer crab sautéed in garlic butter sauce." },
      { id:9,  name:"Fish Moilee",             cat:"Seafood Mains",  price:440, mrp:500, img:"../images/marina/fish-moilee.jpg",  veg:false, tag:"",          desc:"Kerala-style fish in mild coconut milk gravy." },
      { id:10, name:"Prawn Thokku",            cat:"Seafood Mains",  price:460, mrp:520, img:"../images/marina/prawn-thokku.jpg",  veg:false, tag:"spicy",     desc:"Tamil-style dry spiced prawn preparation." },
      { id:11, name:"Chettinad Fish Curry",    cat:"Seafood Mains",  price:420, mrp:480, img:"../images/marina/chettinad-fish-curry.jpg",  veg:false, tag:"spicy",     desc:"Fiery whole-spice fish curry from Chettinad." },
      { id:12, name:"Grilled Fish Steak",      cat:"Seafood Mains",  price:500, mrp:570, img:"../images/marina/grilled-fish-steak.jpg",  veg:false, tag:"",          desc:"Lemon-herb marinated fish steak, oven-roasted." },
      { id:13, name:"Chicken Cafreal",         cat:"Chicken",        price:380, mrp:440, img:"../images/marina/chicken-cafreal.jpg",  veg:false, tag:"famous",    desc:"Goan-style green-spiced whole chicken." },
      { id:14, name:"Chicken Xacuti",          cat:"Chicken",        price:360, mrp:420, img:"../images/marina/chicken-xacuti.jpg",  veg:false, tag:"",          desc:"Complex Goan chicken curry with poppy seeds." },
      { id:15, name:"Seafood Rice",            cat:"Rice & Bread",   price:480, mrp:540, img:"../images/marina/seafood-rice.jpg",  veg:false, tag:"bestseller", desc:"Aromatic rice cooked with prawns, crab and fish." },
      { id:16, name:"Appam & Stew",            cat:"Rice & Bread",   price:240, mrp:280, img:"../images/marina/appam-stew.jpg",  veg:false, tag:"",          desc:"Lacy Kerala pancakes with coconut chicken stew." },
      { id:17, name:"Garlic Bread",            cat:"Rice & Bread",   price:120, mrp:140, img:"../images/marina/garlic-bread.jpg",  veg:true,  tag:"",          desc:"Toasted baguette with herb-garlic butter." },
      { id:18, name:"Coconut Panna Cotta",     cat:"Desserts",       price:180, mrp:210, img:"../images/marina/coconut-panna-cotta.jpg",  veg:true,  tag:"famous",    desc:"Silky coconut milk panna cotta with mango coulis." },
      { id:19, name:"Chocolate Mousse",        cat:"Desserts",       price:190, mrp:220, img:"../images/marina/chocolate-mousse.jpg",  veg:true,  tag:"",          desc:"Airy dark chocolate mousse with chocolate shavings." },
      { id:20, name:"Seafood Platter (2 pax)", cat:"Seafood Mains",  price:1400,mrp:1600,img:"../images/marina/seafood-platter.jpg",  veg:false, tag:"bestseller", desc:"Lobster, crab, prawns, fish — the ultimate spread." },
      { id:21, name:"Mango Sorbet",            cat:"Desserts",       price:160, mrp:190, img:"../images/marina/mango-sorbet.jpg",  veg:true,  tag:"new",       desc:"Refreshing house-made mango sorbet." },
      { id:22, name:"Prawn Fried Rice",        cat:"Rice & Bread",   price:360, mrp:420, img:"../images/marina/prawn-fried-rice.jpg",  veg:false, tag:"",          desc:"Wok-tossed fried rice with garlic prawns." },
      { id:23, name:"Squid Masala",            cat:"Seafood Mains",  price:420, mrp:480, img:"../images/marina/squid-masala.jpg",  veg:false, tag:"spicy",     desc:"Tender squid in a fiery chettinad masala." },
      { id:24, name:"Fish Soup",               cat:"Soups",          price:220, mrp:260, img:"../images/marina/fish-soup.jpg",  veg:false, tag:"",          desc:"Light, clear fish broth with herbs." },
      { id:25, name:"Grilled Lobster",         cat:"Seafood Mains",  price:1200,mrp:1400,img:"../images/marina/grilled-lobster.jpg",  veg:false, tag:"famous",    desc:"Half lobster grilled in garlic-lemon butter." }
    ]
  },

  "a2b": {
    name: "A2B - Adyar Ananda Bhavan",
    meta: "South Indian • Sweets • Pan-India Chain",
    rating: 4.3,
    reviews: 4200,
    tags: ["Veg", "South Indian", "Sweets & Snacks"],
    hero: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1400&q=80",
    badge: "🍬 Sweet Legacy",
    offers: [
      { pct: "10% OFF", desc: "Sweets box orders above ₹500", code: "SWEET10" },
      { pct: "FREE", desc: "Halwa with every thali", code: "HALWA" },
      { pct: "₹75 OFF", desc: "Weekend family combos", code: "FAM75" },
      { pct: "20% OFF", desc: "Festival sweet boxes", code: "FEST20" }
    ],
    categories: ["Dosas", "Idlis & Vadas", "Meals", "Sweets", "Snacks", "Beverages"],
    menu: [
      { id:1,  name:"Ghee Roast Dosa",         cat:"Dosas",         price:100, mrp:120, img:"../images/a2b/ghee-roast-dosa.jpg",  veg:true,  tag:"bestseller", desc:"Super crispy ghee-roasted dosa — A2B signature." },
      { id:2,  name:"Onion Rava Dosa",          cat:"Dosas",         price:100, mrp:115, img:"../images/a2b/onion-rava-dosa.jpg",  veg:true,  tag:"famous",    desc:"Lacy, crispy rava dosa with onions." },
      { id:3,  name:"Paneer Dosa",              cat:"Dosas",         price:130, mrp:150, img:"../images/a2b/paneer-dosa.jpg",  veg:true,  tag:"new",       desc:"Crispy dosa filled with spiced paneer bhurji." },
      { id:4,  name:"Plain Idli (2 pcs)",       cat:"Idlis & Vadas", price:60,  mrp:70,  img:"../images/a2b/plain-idli.jpg",  veg:true,  tag:"",          desc:"Fluffy steamed idlis with chutney and sambar." },
      { id:5,  name:"Medu Vada",                cat:"Idlis & Vadas", price:45,  mrp:55,  img:"../images/a2b/medu-vada.jpg",  veg:true,  tag:"bestseller", desc:"Crispy urad dal doughnut-shaped vada." },
      { id:6,  name:"Mini Idli Sambar (12 pcs)",cat:"Idlis & Vadas", price:90,  mrp:110, img:"../images/a2b/mini-idli-sambar.jpg",  veg:true,  tag:"famous",    desc:"12 bite-sized idlis dunked in sambar." },
      { id:7,  name:"Full Meals",               cat:"Meals",         price:160, mrp:190, img:"../images/a2b/full-meals.jpg",  veg:true,  tag:"bestseller", desc:"Rice, sambar, rasam, 2 curries, papad, pickle, payasam." },
      { id:8,  name:"Mini Meals",               cat:"Meals",         price:110, mrp:130, img:"../images/a2b/mini-meals.jpg",  veg:true,  tag:"",          desc:"Smaller portion: rice, sambar, 1 curry, curd." },
      { id:9,  name:"Kaju Katli (250g)",        cat:"Sweets",        price:300, mrp:350, img:"../images/a2b/kaju-katli.jpg",  veg:true,  tag:"famous",    desc:"Silky cashew barfi — A2B's most gifted sweet." },
      { id:10, name:"Motichoor Ladoo (200g)",   cat:"Sweets",        price:160, mrp:190, img:"../images/a2b/motichoor-ladoo.jpg",  veg:true,  tag:"",          desc:"Fine boondi spheres bound in ghee syrup." },
      { id:11, name:"Mysore Pak (200g)",        cat:"Sweets",        price:180, mrp:210, img:"../images/a2b/mysore-pak.jpg",  veg:true,  tag:"bestseller", desc:"Ghee-rich besan fudge — the Mysore classic." },
      { id:12, name:"Jangiri (200g)",           cat:"Sweets",        price:160, mrp:190, img:"../images/a2b/jangiri.jpg",  veg:true,  tag:"",          desc:"Urad dal jalebi soaked in saffron syrup." },
      { id:13, name:"Badam Halwa",              cat:"Sweets",        price:90,  mrp:110, img:"../images/a2b/badam-halwa.jpg",  veg:true,  tag:"",          desc:"Warm almond halwa per serving." },
      { id:14, name:"Mixture (200g)",           cat:"Snacks",        price:80,  mrp:95,  img:"../images/a2b/mixture.jpg",  veg:true,  tag:"",          desc:"Crunchy South Indian spiced mixture." },
      { id:15, name:"Murukku (200g)",           cat:"Snacks",        price:70,  mrp:85,  img:"../images/a2b/murukku.jpg",  veg:true,  tag:"famous",    desc:"Crispy spiral rice-lentil crackers." },
      { id:16, name:"Boondi",                   cat:"Snacks",        price:60,  mrp:75,  img:"../images/a2b/boondi.jpg",  veg:true,  tag:"",          desc:"Tiny fried chickpea flour balls, salted." },
      { id:17, name:"Filter Coffee",            cat:"Beverages",     price:45,  mrp:55,  img:"../images/a2b/filter-coffee.jpg",  veg:true,  tag:"bestseller", desc:"Strong South Indian decoction coffee." },
      { id:18, name:"Badam Milk",               cat:"Beverages",     price:80,  mrp:95,  img:"../images/a2b/badam-milk.jpg",  veg:true,  tag:"",          desc:"Sweet almond-saffron flavoured milk." },
      { id:19, name:"Mango Juice",              cat:"Beverages",     price:70,  mrp:80,  img:"../images/a2b/mango-juice.jpg",  veg:true,  tag:"",          desc:"Fresh mango pulp juice." },
      { id:20, name:"Paal Payasam",             cat:"Sweets",        price:80,  mrp:95,  img:"../images/a2b/paal-payasam.jpg",  veg:true,  tag:"famous",    desc:"Slow-cooked rice and milk kheer." },
      { id:21, name:"Pongal",                   cat:"Meals",         price:80,  mrp:95,  img:"../images/a2b/pongal.jpg",  veg:true,  tag:"",          desc:"Ghee-spiced rice and moong dal comfort dish." },
      { id:22, name:"Uttapam",                  cat:"Dosas",         price:90,  mrp:105, img:"../images/a2b/uttapam.jpg",  veg:true,  tag:"",          desc:"Thick rice pancake with vegetable toppings." },
      { id:23, name:"Poori Masala",             cat:"Meals",         price:90,  mrp:105, img:"../images/a2b/poori-masala.jpg",  veg:true,  tag:"",          desc:"3 fluffy puris with potato masala." },
      { id:24, name:"Idli Vada Combo",          cat:"Idlis & Vadas", price:100, mrp:120, img:"../images/a2b/idli-vada-combo.jpg",  veg:true,  tag:"bestseller", desc:"2 Idlis + 1 Vada + sambar + chutney." },
      { id:25, name:"Sweet Box (Assorted 500g)",cat:"Sweets",        price:450, mrp:520, img:"../images/a2b/sweet-box.jpg",  veg:true,  tag:"famous",    desc:"Mixed A2B sweets gift box — perfect for gifting." }
    ]
  },

  "flying": {
    name: "The Flying Elephant",
    meta: "Multi-Cuisine • Rooftop Bar • Park Hyatt",
    rating: 4.6,
    reviews: 1480,
    tags: ["Fine Dining", "Multi-Cuisine", "Rooftop"],
    hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
    badge: "✨ Fine Dining",
    offers: [
      { pct: "20% OFF", desc: "Pre-theatre dinner (6-7 PM)", code: "EARLY20" },
      { pct: "FREE", desc: "Amuse-bouche on arrival", code: "AMUSE" },
      { pct: "₹500 OFF", desc: "Chef's tasting menu", code: "TASTING" },
      { pct: "15% OFF", desc: "Lunch menu Mon-Fri", code: "BIZ15" }
    ],
    categories: ["Appetisers", "Soups & Salads", "Mains", "Pasta & Risotto", "Desserts", "Cocktails"],
    menu: [
      { id:1,  name:"Burrata & Heirloom Tomato",cat:"Appetisers",       price:680, mrp:800, img:"../images/flying/burrata-heirloom-tomato.jpg",  veg:true,  tag:"famous",    desc:"Creamy burrata with heirloom tomatoes and basil oil." },
      { id:2,  name:"Foie Gras Torchon",        cat:"Appetisers",       price:1200,mrp:1400,img:"../images/flying/foie-gras-torchon.jpg",  veg:false, tag:"",          desc:"Classic French foie gras with brioche and chutney." },
      { id:3,  name:"Tiger Prawn Carpaccio",    cat:"Appetisers",       price:880, mrp:1000,img:"../images/flying/tiger-prawn-carpaccio.jpg",  veg:false, tag:"new",       desc:"Thinly sliced tiger prawns with yuzu dressing." },
      { id:4,  name:"Truffle Mushroom Soup",    cat:"Soups & Salads",   price:480, mrp:560, img:"../images/flying/truffle-mushroom-soup.jpg",  veg:true,  tag:"famous",    desc:"Velvety wild mushroom velouté with truffle oil." },
      { id:5,  name:"Caesar Salad",             cat:"Soups & Salads",   price:420, mrp:500, img:"../images/flying/caesar-salad.jpg",  veg:true,  tag:"",          desc:"Romaine, parmesan, anchovies, croutons, house dressing." },
      { id:6,  name:"Beef Tenderloin",          cat:"Mains",            price:1800,mrp:2100,img:"../images/flying/beef-tenderloin.jpg",  veg:false, tag:"bestseller", desc:"120-day aged tenderloin, truffle jus, dauphinoise." },
      { id:7,  name:"Pan-seared Duck",          cat:"Mains",            price:1400,mrp:1600,img:"../images/flying/pan-seared-duck.jpg",  veg:false, tag:"famous",    desc:"Duck breast with cherry jus and roasted vegetables." },
      { id:8,  name:"Lobster Thermidor",        cat:"Mains",            price:2200,mrp:2600,img:"../images/flying/lobster-thermidor.jpg",  veg:false, tag:"famous",    desc:"Classic lobster baked in rich cognac cream sauce." },
      { id:9,  name:"Herb-Crusted Salmon",      cat:"Mains",            price:1200,mrp:1400,img:"../images/flying/herb-crusted-salmon.jpg",  veg:false, tag:"",          desc:"Atlantic salmon with herb crust and beurre blanc." },
      { id:10, name:"Mushroom Risotto",         cat:"Pasta & Risotto",  price:860, mrp:1000,img:"../images/flying/mushroom-risotto.jpg",  veg:true,  tag:"bestseller", desc:"Arborio rice with porcini, parmesan and truffle." },
      { id:11, name:"Seafood Linguine",         cat:"Pasta & Risotto",  price:980, mrp:1140,img:"../images/flying/seafood-linguine.jpg",  veg:false, tag:"",          desc:"Prawn, squid and clam linguine in white wine sauce." },
      { id:12, name:"Truffle Pasta",            cat:"Pasta & Risotto",  price:1100,mrp:1280,img:"../images/flying/truffle-pasta.jpg",  veg:true,  tag:"new",       desc:"Tagliatelle with black truffle, butter and parmesan." },
      { id:13, name:"Crème Brûlée",             cat:"Desserts",         price:480, mrp:560, img:"../images/flying/creme-brulee.jpg",  veg:true,  tag:"famous",    desc:"Classic vanilla custard with caramelised sugar top." },
      { id:14, name:"Chocolate Soufflé",        cat:"Desserts",         price:580, mrp:680, img:"../images/flying/chocolate-souffle.jpg",  veg:true,  tag:"bestseller", desc:"Warm dark chocolate soufflé with crème anglaise." },
      { id:15, name:"Mango Tart",               cat:"Desserts",         price:420, mrp:500, img:"../images/flying/mango-tart.jpg",  veg:true,  tag:"",          desc:"Buttery tart shell with pastry cream and fresh mango." },
      { id:16, name:"Signature Elephant",       cat:"Cocktails",        price:780, mrp:900, img:"../images/flying/signature-elephant.jpg",  veg:true,  tag:"famous",    desc:"House cocktail — gin, elderflower, blue curaçao." },
      { id:17, name:"Virgin Sangria",           cat:"Cocktails",        price:480, mrp:560, img:"../images/flying/virgin-sangria.jpg",  veg:true,  tag:"",          desc:"Alcohol-free red-wine style fruit punch." },
      { id:18, name:"Espresso Martini",         cat:"Cocktails",        price:680, mrp:800, img:"../images/flying/espresso-martini.jpg",  veg:true,  tag:"",          desc:"Coffee-forward cocktail with kahlúa and espresso." },
      { id:19, name:"Chef's Tasting Menu",      cat:"Mains",            price:3500,mrp:4200,img:"../images/flying/chefs-tasting-menu.jpg",  veg:false, tag:"famous",    desc:"7-course meal with wine pairing by the executive chef." },
      { id:20, name:"Vegan Tasting Menu",       cat:"Mains",            price:2800,mrp:3300,img:"../images/flying/vegan-tasting-menu.jpg",  veg:true,  tag:"new",       desc:"7-course plant-based tasting experience." },
      { id:21, name:"Grilled Octopus",          cat:"Appetisers",       price:780, mrp:900, img:"../images/flying/grilled-octopus.jpg",  veg:false, tag:"",          desc:"Spanish-style charred octopus with paprika oil." },
      { id:22, name:"Wagyu Burger",             cat:"Mains",            price:1400,mrp:1600,img:"../images/flying/wagyu-burger.jpg",  veg:false, tag:"bestseller", desc:"A5 wagyu patty, truffle mayo, brioche bun." },
      { id:23, name:"Burrata Arancini",         cat:"Appetisers",       price:580, mrp:680, img:"../images/flying/burrata-arancini.jpg",  veg:true,  tag:"",          desc:"Fried risotto balls with burrata centre." },
      { id:24, name:"Nicoise Salad",            cat:"Soups & Salads",   price:460, mrp:540, img:"../images/flying/nicoise-salad.jpg",  veg:false, tag:"",          desc:"Tuna, olives, egg, green beans, classic dressing." },
      { id:25, name:"Ice Cream Trio",           cat:"Desserts",         price:360, mrp:420, img:"../images/flying/ice-cream-trio.jpg",  veg:true,  tag:"",          desc:"Three house-churned flavours with tuile." }
    ]
  },

  "ponnusamy": {
    name: "Ponnusamy Hotel",
    meta: "Chettinad • Non-Veg Specialist • Chennai",
    rating: 4.3,
    reviews: 2650,
    tags: ["Chettinad", "Non-Veg", "Spicy", "Local Favourite"],
    hero: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1400&q=80",
    badge: "🌶 Chettinad Specialist",
    offers: [
      { pct: "15% OFF", desc: "Chettinad feast for 2+", code: "CHETT15" },
      { pct: "FREE", desc: "Rasam with every biryani", code: "RASAM" },
      { pct: "₹80 OFF", desc: "Lunch combos", code: "PONNLUNCH" },
      { pct: "20% OFF", desc: "Sunday family thali", code: "SUNDAY20" }
    ],
    categories: ["Starters", "Chettinad Mains", "Biryani", "Breads", "Rice", "Desserts"],
    menu: [
      { id:1,  name:"Chicken 65",              cat:"Starters",          price:280, mrp:320, img:"../images/ponnusamy/chicken-65.jpg",  veg:false, tag:"bestseller", desc:"Iconic spicy deep-fried chicken — Chennai's own." },
      { id:2,  name:"Mutton Chukka",           cat:"Starters",          price:360, mrp:420, img:"../images/ponnusamy/mutton-chukka.jpg",  veg:false, tag:"famous",    desc:"Dry-roasted mutton with whole Chettinad spices." },
      { id:3,  name:"Pepper Chicken Dry",      cat:"Starters",          price:300, mrp:350, img:"../images/ponnusamy/pepper-chicken-dry.jpg",  veg:false, tag:"spicy",     desc:"Fiery black pepper chicken — dry stir-fry." },
      { id:4,  name:"Egg Podimas",             cat:"Starters",          price:180, mrp:210, img:"../images/ponnusamy/egg-podimas.jpg",  veg:false, tag:"",          desc:"Scrambled spiced eggs with onion and chilli." },
      { id:5,  name:"Chettinad Chicken Curry", cat:"Chettinad Mains",   price:340, mrp:390, img:"../images/ponnusamy/chettinad-chicken-curry.jpg",  veg:false, tag:"bestseller", desc:"The original Chettinad chicken — kalpasi, marathi mokku." },
      { id:6,  name:"Mutton Kuzhambu",         cat:"Chettinad Mains",   price:380, mrp:440, img:"../images/ponnusamy/mutton-kuzhambu.jpg",  veg:false, tag:"famous",    desc:"Slow-cooked mutton in tamarind-based Chettinad gravy." },
      { id:7,  name:"Prawn Masala",            cat:"Chettinad Mains",   price:400, mrp:460, img:"../images/ponnusamy/prawn-masala.jpg",  veg:false, tag:"spicy",     desc:"Prawns in robust Chettinad masala." },
      { id:8,  name:"Fish Kuzhambu",           cat:"Chettinad Mains",   price:340, mrp:390, img:"../images/ponnusamy/fish-kuzhambu.jpg",  veg:false, tag:"",          desc:"Tangy tamarind fish curry with raw mango." },
      { id:9,  name:"Chicken Biryani",         cat:"Biryani",           price:380, mrp:440, img:"../images/ponnusamy/chicken-biryani.jpg",  veg:false, tag:"bestseller", desc:"Ambur-style biryani — light, fragrant, legendary." },
      { id:10, name:"Mutton Biryani",          cat:"Biryani",           price:440, mrp:500, img:"../images/ponnusamy/mutton-biryani.jpg",  veg:false, tag:"famous",    desc:"Mutton on-the-bone biryani with salna." },
      { id:11, name:"Egg Biryani",             cat:"Biryani",           price:280, mrp:320, img:"../images/ponnusamy/egg-biryani.jpg",  veg:false, tag:"",          desc:"Full egg biryani with spiced basmati." },
      { id:12, name:"Parotta (2 pcs)",         cat:"Breads",            price:60,  mrp:70,  img:"../images/ponnusamy/parotta.jpg",  veg:true,  tag:"bestseller", desc:"Flaky layered South Indian flatbread." },
      { id:13, name:"Roomali Roti",            cat:"Breads",            price:50,  mrp:60,  img:"../images/ponnusamy/roomali-roti.jpg",  veg:true,  tag:"",          desc:"Thin cloth-like soft roti." },
      { id:14, name:"Plain Rice",              cat:"Rice",              price:40,  mrp:50,  img:"../images/ponnusamy/plain-rice.jpg",  veg:true,  tag:"",          desc:"Steamed Sona Masoori rice." },
      { id:15, name:"Curd Rice",               cat:"Rice",              price:80,  mrp:90,  img:"../images/ponnusamy/curd-rice.jpg",  veg:true,  tag:"",          desc:"Cooling curd rice — the perfect finish." },
      { id:16, name:"Chicken Parotta Combo",   cat:"Chettinad Mains",   price:180, mrp:210, img:"../images/ponnusamy/chicken-parotta-combo.jpg",  veg:false, tag:"bestseller", desc:"2 parottas + Chettinad chicken curry." },
      { id:17, name:"Mutton Parotta Combo",    cat:"Chettinad Mains",   price:220, mrp:260, img:"../images/ponnusamy/mutton-parotta-combo.jpg",  veg:false, tag:"famous",    desc:"2 parottas + Mutton kuzhambu." },
      { id:18, name:"Rasam",                   cat:"Rice",              price:40,  mrp:50,  img:"../images/ponnusamy/rasam.jpg",  veg:true,  tag:"",          desc:"Thin peppery tomato broth, classic digestive." },
      { id:19, name:"Payasam",                 cat:"Desserts",          price:70,  mrp:85,  img:"../images/ponnusamy/payasam.jpg",  veg:true,  tag:"",          desc:"Warm vermicelli payasam with cardamom." },
      { id:20, name:"Halwa",                   cat:"Desserts",          price:80,  mrp:95,  img:"../images/ponnusamy/halwa.jpg",  veg:true,  tag:"",          desc:"Carrot or wheat halwa served warm." },
      { id:21, name:"Kari Dosa",               cat:"Starters",          price:120, mrp:140, img:"../images/ponnusamy/kari-dosa.jpg",  veg:false, tag:"new",       desc:"Dosa stuffed with minced meat masala." },
      { id:22, name:"Chettinad Fish Fry",      cat:"Starters",          price:320, mrp:370, img:"../images/ponnusamy/chettinad-fish-fry.jpg",  veg:false, tag:"spicy",     desc:"Whole fish marinated in Chettinad spice paste, fried." },
      { id:23, name:"Nandu Masala",            cat:"Chettinad Mains",   price:460, mrp:530, img:"../images/ponnusamy/nandu-masala.jpg",  veg:false, tag:"famous",    desc:"Blue swimmer crab in Chettinad coconut gravy." },
      { id:24, name:"Veg Kurma",               cat:"Chettinad Mains",   price:220, mrp:260, img:"../images/ponnusamy/veg-kurma.jpg",  veg:true,  tag:"",          desc:"Mixed vegetable coconut korma." },
      { id:25, name:"Non-Veg Thali",           cat:"Chettinad Mains",   price:380, mrp:440, img:"../images/ponnusamy/nonveg-thali.jpg",  veg:false, tag:"bestseller", desc:"Rice, biryani, chicken, mutton, fish, papad, payasam." }
    ]
  },

  "saravana": {
    name: "Saravana Bhavan",
    meta: "Pure Vegetarian • World-Famous • Chennai",
    rating: 4.5,
    reviews: 5800,
    tags: ["Pure Veg", "World Famous", "South Indian"],
    hero: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1400&q=80",
    badge: "🌍 World's Favourite",
    offers: [
      { pct: "10% OFF", desc: "All orders via OtakuEats", code: "SVBE10" },
      { pct: "FREE", desc: "Payasam with full meals", code: "PAYASAM" },
      { pct: "₹50 OFF", desc: "Morning breakfast combo", code: "BFAST50" },
      { pct: "20% OFF", desc: "Party orders (10+ items)", code: "PARTY20" }
    ],
    categories: ["Tiffin", "Meals", "Chaat", "Sweets", "Juices", "Special"],
    menu: [
      { id:1,  name:"Ghee Pongal",             cat:"Tiffin",    price:90,  mrp:105, img:"../images/saravana/ghee-pongal.jpg",  veg:true,  tag:"bestseller", desc:"Signature ghee-soaked pongal — world's best." },
      { id:2,  name:"Masala Dosa",             cat:"Tiffin",    price:90,  mrp:105, img:"../images/saravana/masala-dosa.jpg",  veg:true,  tag:"famous",    desc:"Golden dosa with signature potato filling." },
      { id:3,  name:"Idli (3 pcs)",            cat:"Tiffin",    price:70,  mrp:82,  img:"../images/saravana/idli.jpg",  veg:true,  tag:"",          desc:"Feather-light SB idlis with coconut chutney." },
      { id:4,  name:"Vada (2 pcs)",            cat:"Tiffin",    price:60,  mrp:70,  img:"../images/saravana/vada.jpg",  veg:true,  tag:"",          desc:"Perfectly crispy medu vada." },
      { id:5,  name:"Rava Kitchadi",           cat:"Tiffin",    price:85,  mrp:100, img:"../images/saravana/rava-kitchadi.jpg",  veg:true,  tag:"",          desc:"Upma-style semolina with vegetables." },
      { id:6,  name:"Full Meals",              cat:"Meals",     price:180, mrp:210, img:"../images/saravana/full-meals.jpg",  veg:true,  tag:"bestseller", desc:"Complete SB thali — iconic and unlimited." },
      { id:7,  name:"Special Thali",           cat:"Meals",     price:260, mrp:300, img:"../images/saravana/special-thali.jpg",  veg:true,  tag:"famous",    desc:"Premium thali with special curry and dessert." },
      { id:8,  name:"Pani Puri (6 pcs)",       cat:"Chaat",     price:80,  mrp:95,  img:"../images/saravana/pani-puri.jpg",  veg:true,  tag:"famous",    desc:"Crispy puris with spiced tamarind water." },
      { id:9,  name:"Bhel Puri",               cat:"Chaat",     price:90,  mrp:105, img:"../images/saravana/bhel-puri.jpg",  veg:true,  tag:"",          desc:"Puffed rice, sev, chutneys — Mumbai street style." },
      { id:10, name:"Sev Puri",                cat:"Chaat",     price:90,  mrp:105, img:"../images/saravana/sev-puri.jpg",  veg:true,  tag:"",          desc:"Flat puris topped with potatoes and chutneys." },
      { id:11, name:"Aloo Tikki Chaat",        cat:"Chaat",     price:110, mrp:130, img:"../images/saravana/aloo-tikki-chaat.jpg",  veg:true,  tag:"",          desc:"Crispy potato patties with curd and chutneys." },
      { id:12, name:"Kesari (100g)",           cat:"Sweets",    price:60,  mrp:70,  img:"../images/saravana/kesari.jpg",  veg:true,  tag:"famous",    desc:"Saffron-orange coloured semolina halwa." },
      { id:13, name:"Mysore Pak (100g)",       cat:"Sweets",    price:80,  mrp:95,  img:"../images/saravana/mysore-pak.jpg",  veg:true,  tag:"bestseller", desc:"Ghee-rich besan sweet." },
      { id:14, name:"Palkova (100g)",          cat:"Sweets",    price:90,  mrp:110, img:"../images/saravana/palkova.jpg",  veg:true,  tag:"",          desc:"Traditional milk-reduced sweet." },
      { id:15, name:"Fresh Lime Soda",         cat:"Juices",    price:60,  mrp:70,  img:"../images/saravana/fresh-lime-soda.jpg",  veg:true,  tag:"",          desc:"Sweet or salty lime soda." },
      { id:16, name:"Fresh Fruit Juice",       cat:"Juices",    price:80,  mrp:95,  img:"../images/saravana/fresh-fruit-juice.jpg",  veg:true,  tag:"",          desc:"Seasonal fresh-pressed fruit juice." },
      { id:17, name:"Sugarcane Juice",         cat:"Juices",    price:60,  mrp:70,  img:"../images/saravana/sugarcane-juice.jpg",  veg:true,  tag:"famous",    desc:"Fresh pressed sugarcane juice with ginger." },
      { id:18, name:"Filter Coffee",           cat:"Juices",    price:50,  mrp:60,  img:"../images/saravana/filter-coffee.jpg",  veg:true,  tag:"bestseller", desc:"The legendary SB filter coffee." },
      { id:19, name:"SB Special Dosa",         cat:"Special",   price:150, mrp:180, img:"../images/saravana/sb-special-dosa.jpg",  veg:true,  tag:"famous",    desc:"Triple-stuffed special dosa — cheese, onion, potato." },
      { id:20, name:"Family Meals Pack",       cat:"Special",   price:700, mrp:820, img:"../images/saravana/family-meals-pack.jpg",  veg:true,  tag:"bestseller", desc:"4 full thalis packed for home — family bundle." },
      { id:21, name:"Curd Vada",               cat:"Tiffin",    price:70,  mrp:82,  img:"../images/saravana/curd-vada.jpg",  veg:true,  tag:"",          desc:"Vadas dunked in sweet curd with tempering." },
      { id:22, name:"Poori Masala",            cat:"Tiffin",    price:90,  mrp:105, img:"../images/saravana/poori-masala.jpg",  veg:true,  tag:"",          desc:"Soft puris with potato masala." },
      { id:23, name:"Uttapam",                 cat:"Tiffin",    price:90,  mrp:105, img:"../images/saravana/uttapam.jpg",  veg:true,  tag:"",          desc:"Thick rice cake with toppings." },
      { id:24, name:"Lemon Rice",              cat:"Meals",     price:90,  mrp:105, img:"../images/saravana/lemon-rice.jpg",  veg:true,  tag:"",          desc:"Peanut-infused tangy lemon rice." },
      { id:25, name:"Kheer",                   cat:"Sweets",    price:80,  mrp:95,  img:"../images/saravana/kheer.jpg",  veg:true,  tag:"",          desc:"Rich rice pudding in cardamom milk." }
    ]
  },

  "dakshin": {
    name: "Dakshin",
    meta: "Regional South Indian • ITC Hotels • Fine Dining",
    rating: 4.7,
    reviews: 1240,
    tags: ["Fine Dining", "Regional South Indian", "Award-Winning"],
    hero: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1400&q=80",
    badge: "🏆 Award-Winning",
    offers: [
      { pct: "20% OFF", desc: "Degustation menu", code: "DAKSH20" },
      { pct: "FREE", desc: "Amuse-bouche tasting", code: "TASTE" },
      { pct: "₹300 OFF", desc: "Festival special thali", code: "FTHALI" },
      { pct: "15% OFF", desc: "Lunch menu all weekdays", code: "DLUNCH" }
    ],
    categories: ["Signature Starters", "Regional Curries", "Biryani & Rice", "Breads", "Desserts", "Beverages"],
    menu: [
      { id:1,  name:"Kozhi Varuval",           cat:"Signature Starters", price:580, mrp:680, img:"../images/dakshin/kozhi-varuval.jpg",  veg:false, tag:"famous",    desc:"Signature Chettinad dry-fried chicken with curry leaves." },
      { id:2,  name:"Meen Pollichathu",        cat:"Signature Starters", price:640, mrp:740, img:"../images/dakshin/meen-pollichathu.jpg",  veg:false, tag:"bestseller", desc:"Fish wrapped and cooked in banana leaf — Kerala style." },
      { id:3,  name:"Sundal",                  cat:"Signature Starters", price:280, mrp:330, img:"../images/dakshin/sundal.jpg",  veg:true,  tag:"",          desc:"Chickpea sundal tempered with coconut and mustard." },
      { id:4,  name:"Prawn Thokku",            cat:"Signature Starters", price:620, mrp:720, img:"../images/dakshin/prawn-thokku.jpg",  veg:false, tag:"spicy",     desc:"Fiery dry prawn stir-fry — Tamil Nadu classic." },
      { id:5,  name:"Avial",                   cat:"Regional Curries",   price:380, mrp:440, img:"../images/dakshin/avial.jpg",  veg:true,  tag:"famous",    desc:"Kerala mixed vegetable curry in coconut and curd." },
      { id:6,  name:"Kori Gassi",              cat:"Regional Curries",   price:540, mrp:630, img:"../images/dakshin/kori-gassi.jpg",  veg:false, tag:"",          desc:"Mangalorean chicken curry in coconut-red chilli gravy." },
      { id:7,  name:"Chettinad Mutton Curry",  cat:"Regional Curries",   price:620, mrp:720, img:"../images/dakshin/chettinad-mutton-curry.jpg",  veg:false, tag:"bestseller", desc:"Complex spiced mutton curry with 32 ingredients." },
      { id:8,  name:"Kerala Fish Curry",       cat:"Regional Curries",   price:560, mrp:660, img:"../images/dakshin/kerala-fish-curry.jpg",  veg:false, tag:"",          desc:"Kudampuli-based fish curry — coastal Kerala." },
      { id:9,  name:"Andhra Ulavacharu",       cat:"Regional Curries",   price:520, mrp:610, img:"../images/dakshin/andhra-ulavacharu.jpg",  veg:false, tag:"",          desc:"Horse gram broth chicken — Andhra rustic speciality." },
      { id:10, name:"Hyderabadi Biryani",      cat:"Biryani & Rice",     price:680, mrp:790, img:"../images/dakshin/hyderabadi-biryani.jpg",  veg:false, tag:"bestseller", desc:"The definitive Hyderabadi dum biryani." },
      { id:11, name:"Chettinad Biryani",       cat:"Biryani & Rice",     price:640, mrp:750, img:"../images/dakshin/chettinad-biryani.jpg",  veg:false, tag:"famous",    desc:"Earthy whole-spice Chettinad biryani." },
      { id:12, name:"Thakkali Sadam",          cat:"Biryani & Rice",     price:340, mrp:400, img:"../images/dakshin/thakkali-sadam.jpg",  veg:true,  tag:"",          desc:"Tamil-style tomato rice with mustard tempering." },
      { id:13, name:"Appam",                   cat:"Breads",             price:160, mrp:190, img:"../images/dakshin/appam.jpg",  veg:true,  tag:"",          desc:"Lacy fermented rice hoppers." },
      { id:14, name:"Pesarattu",               cat:"Breads",             price:180, mrp:210, img:"../images/dakshin/pesarattu.jpg",  veg:true,  tag:"famous",    desc:"Andhra moong dal crepe with ginger chutney." },
      { id:15, name:"Neer Dosa",               cat:"Breads",             price:160, mrp:190, img:"../images/dakshin/neer-dosa.jpg",  veg:true,  tag:"",          desc:"Delicate rice crepe from coastal Karnataka." },
      { id:16, name:"Elaneer Payasam",         cat:"Desserts",           price:340, mrp:400, img:"../images/dakshin/elaneer-payasam.jpg",  veg:true,  tag:"famous",    desc:"Tender coconut milk payasam — Dakshin's signature." },
      { id:17, name:"Jhangri",                 cat:"Desserts",           price:260, mrp:310, img:"../images/dakshin/jhangri.jpg",  veg:true,  tag:"",          desc:"South Indian jalebi in saffron syrup." },
      { id:18, name:"Paal Ice",                cat:"Desserts",           price:220, mrp:260, img:"../images/dakshin/paal-ice.jpg",  veg:true,  tag:"new",       desc:"Traditional milk popsicle with cardamom." },
      { id:19, name:"Nannari Sarbat",          cat:"Beverages",          price:160, mrp:190, img:"../images/dakshin/nannari-sarbat.jpg",  veg:true,  tag:"famous",    desc:"Indian sarsaparilla root cooler — ancient remedy." },
      { id:20, name:"Panakam",                 cat:"Beverages",          price:120, mrp:140, img:"../images/dakshin/panakam.jpg",  veg:true,  tag:"",          desc:"Jaggery, ginger and cardamom drink." },
      { id:21, name:"Regional Tasting Menu",   cat:"Biryani & Rice",     price:2800,mrp:3300,img:"../images/dakshin/regional-tasting-menu.jpg",  veg:false, tag:"bestseller", desc:"9-course journey through 4 South Indian states." },
      { id:22, name:"Vegetarian Tasting Menu", cat:"Biryani & Rice",     price:2200,mrp:2600,img:"../images/dakshin/vegetarian-tasting-menu.jpg",  veg:true,  tag:"famous",    desc:"9-course vegetarian regional South Indian experience." },
      { id:23, name:"Rasam",                   cat:"Beverages",          price:120, mrp:140, img:"../images/dakshin/rasam.jpg",  veg:true,  tag:"",          desc:"Pepper-tomato rasam served as a warm drink." },
      { id:24, name:"Veppampoo Rasam",         cat:"Beverages",          price:140, mrp:165, img:"../images/dakshin/veppampoo-rasam.jpg",  veg:true,  tag:"new",       desc:"Neem flower rasam — bitter, healthy, unique." },
      { id:25, name:"Grand South Thali",       cat:"Biryani & Rice",     price:980, mrp:1140,img:"../images/dakshin/grand-south-thali.jpg",  veg:false, tag:"famous",    desc:"The ultimate grand South Indian thali experience." }
    ]
  }
};

/* ────────────────────────────────────────────────────────────────
   2.  DETECT CURRENT RESTAURANT FROM URL
   ──────────────────────────────────────────────────────────────── */
function detectRestaurant() {
  /* ── 1. URL query param ?r=key  (PRIMARY) ── */
  const params = new URLSearchParams(window.location.search);
  const qKey   = params.get("r");
  if (qKey && RESTAURANTS[qKey]) return RESTAURANTS[qKey];

  /* ── 2. SessionStorage (set when user was redirected via login) ── */
  const sKey = sessionStorage.getItem("oe_pendingKey");
  if (sKey && RESTAURANTS[sKey]) {
    sessionStorage.removeItem("oe_pendingKey");
    return RESTAURANTS[sKey];
  }

  /* ── 3. Fallback — invalid/missing ?r= param, send home ── */
  console.warn("OtakuEats: no valid restaurant key found in URL. Redirecting home.");
  window.location.replace("../../index.html");
  return null;
}

const RES = detectRestaurant();
if (!RES) throw new Error("Redirecting — no restaurant key."); // stops further JS execution

/* ────────────────────────────────────────────────────────────────
   3.  CART STATE
   ──────────────────────────────────────────────────────────────── */
let cart = [];
let activeCategory = "All";

/* ────────────────────────────────────────────────────────────────
   4.  INIT
   ──────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initPage();
  initNav();
  initTabs();
  initCart();
  initHomeTab();
  initMenuTab();
  initOrdersTab();
  initMenuSearch();
});

/* ── PAGE META ── */
function initPage() {
  document.title = `${RES.name} - OtakuEats`;

  // Hero background
  const hero = document.getElementById("resHero");
  const bgDiv = document.createElement("div");
  bgDiv.className = "res-hero-bg";
  bgDiv.style.backgroundImage = `url('${RES.hero}')`;
  hero.prepend(bgDiv);

  document.getElementById("resBadge").textContent = RES.badge;
  document.getElementById("resName").textContent = RES.name;
  document.getElementById("resMeta").textContent = RES.meta;

  // Rating stars
  const ratingEl = document.getElementById("resRating");
  ratingEl.innerHTML = buildStars(RES.rating) +
    `<span style="margin-left:8px;font-size:15px;font-weight:600">${RES.rating}</span>
     <span style="margin-left:4px;font-size:13px;opacity:0.7">(${RES.reviews.toLocaleString()} reviews)</span>`;

  // Tags
  const tagsEl = document.getElementById("resTags");
  tagsEl.innerHTML = RES.tags.map(t => `<span class="res-tag">${t}</span>`).join("");
}

/* ── STAR BUILDER ── */
function buildStars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += `<span style="color:#ffc107;font-size:16px">★</span>`;
    else if (rating >= i - 0.5) html += `<span style="color:#ffc107;font-size:16px">☆</span>`;
    else html += `<span style="color:rgba(255,255,255,0.3);font-size:16px">★</span>`;
  }
  return html;
}

/* ────────────────────────────────────────────────────────────────
   5.  NAVBAR AUTH
   ──────────────────────────────────────────────────────────────── */
function initNav() {
  const loggedIn = localStorage.getItem("oe_loggedIn") === "true";
  const email    = localStorage.getItem("oe_loggedInEmail") || "";

  // Inject res-nav-tabs into the navbar (replacing the old tab-bar)
  const nav = document.getElementById("mainNav");
  const tabsEl = document.createElement("div");
  tabsEl.className = "res-nav-tabs";
  tabsEl.innerHTML = `
    <button class="res-nav-tab active" data-tab="home">🏠 Home</button>
    <button class="res-nav-tab" data-tab="menu">🍽 Menu</button>
    <button class="res-nav-tab" data-tab="orders">📦 My Orders</button>
  `;
  nav.appendChild(tabsEl);

  tabsEl.querySelectorAll(".res-nav-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      tabsEl.querySelectorAll(".res-nav-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      // also keep old tab-btn in sync for switchTab
      switchTab(btn.dataset.tab);
    });
  });

  if (loggedIn) {
    document.getElementById("navLoginLi").style.display = "none";
    const profileWrap = document.getElementById("navProfileLi");
    profileWrap.style.display = "flex";

    // Show display name: stored name → fallback to part before @ in email
    const storedName = localStorage.getItem("oe_loggedInName") || "";
    const displayName = storedName || email.split("@")[0];
    document.getElementById("profileEmail").textContent = displayName;
    document.getElementById("profileEmailFull").textContent = email;

    const profileBtn = document.getElementById("profileBtn");
    const dropdown   = document.getElementById("profileDropdown");

    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => dropdown.classList.remove("open"));

    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("oe_loggedIn");
      localStorage.removeItem("oe_loggedInEmail");
      localStorage.removeItem("oe_loggedInName");
      document.body.classList.add("page-exit");
      setTimeout(() => window.location.href = "../../index.html", 380);
    });
  }
}

/* ────────────────────────────────────────────────────────────────
   6.  TABS
   ──────────────────────────────────────────────────────────────── */
function initTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });
}

function switchTab(tab) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.toggle("active", c.id === `tab-${tab}`));
}

/* ────────────────────────────────────────────────────────────────
   7.  HOME TAB
   ──────────────────────────────────────────────────────────────── */
function initHomeTab() {
  buildOffers();
  buildFamous();
  buildRecommended();
}

/* OFFERS */
function buildOffers() {
  const strip = document.getElementById("offersStrip");
  strip.innerHTML = RES.offers.map(o => `
    <div class="offer-card">
      <div class="offer-pct">${o.pct}</div>
      <div class="offer-desc">${o.desc}</div>
      <div class="offer-code">Use code: <strong>${o.code}</strong></div>
    </div>
  `).join("");
}

/* MOST FAMOUS */
function buildFamous() {
  const grid = document.getElementById("famousGrid");
  const famous = RES.menu.filter(i => i.tag === "famous" || i.tag === "bestseller").slice(0, 4);
  grid.innerHTML = famous.map(item => `
    <div class="famous-card" onclick="addToCart(${item.id})">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="famous-card-body">
        <h4>${item.name}</h4>
        <div class="famous-card-price">₹${item.price}</div>
      </div>
    </div>
  `).join("");
}

/* RECOMMENDED */
function buildRecommended() {
  const strip = document.getElementById("recommendedStrip");
  const shuffled = [...RES.menu].sort(() => 0.5 - Math.random()).slice(0, 8);
  strip.innerHTML = shuffled.map(item => `
    <div class="rec-card" onclick="addToCart(${item.id})">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="rec-card-body">
        <h4>${item.name}</h4>
        <div class="rec-price">₹${item.price}</div>
      </div>
    </div>
  `).join("");
}

/* ────────────────────────────────────────────────────────────────
   8.  MENU TAB
   ──────────────────────────────────────────────────────────────── */
function initMenuTab() {
  buildCategoryPills();
  renderMenuGrid();
}

function buildCategoryPills() {
  const pills = document.getElementById("categoryPills");
  const cats = ["All", ...RES.categories];
  pills.innerHTML = cats.map(c =>
    `<button class="cat-pill ${c === "All" ? "active" : ""}" onclick="filterCategory('${c}')">${c}</button>`
  ).join("");
}

function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.textContent === cat));
  renderMenuGrid();
}

function renderMenuGrid(search = "") {
  const grid = document.getElementById("menuGrid");
  const noRes = document.getElementById("noResults");

  let items = RES.menu;
  if (activeCategory !== "All") items = items.filter(i => i.cat === activeCategory);
  if (search) items = items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()) || i.desc.toLowerCase().includes(search.toLowerCase()));

  if (items.length === 0) {
    grid.innerHTML = "";
    noRes.style.display = "block";
    return;
  }

  noRes.style.display = "none";
  grid.innerHTML = items.map(item => buildMenuCard(item)).join("");
}

function buildMenuCard(item) {
  const qty = getQty(item.id);
  const tagLabel = item.tag === "bestseller" ? "⭐ Bestseller"
                 : item.tag === "spicy"      ? "🌶 Spicy"
                 : item.tag === "new"        ? "✨ New"
                 : item.tag === "famous"     ? "🔥 Famous"
                 : "";
  return `
    <div class="menu-item-card">
      <div class="menu-item-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        ${tagLabel ? `<span class="item-badge ${item.tag}">${tagLabel}</span>` : ""}
        <span class="veg-dot ${item.veg ? "veg" : "non-veg"}"></span>
      </div>
      <div class="menu-item-body">
        <h4>${item.name}</h4>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-item-footer">
          <div class="menu-item-price">
            ₹${item.price}
            ${item.mrp > item.price ? `<small>₹${item.mrp}</small>` : ""}
          </div>
          <div class="add-control" id="ctrl-${item.id}">
            ${qty === 0
              ? `<button class="oe-add-btn" onclick="addToCart(${item.id})">+ Add</button>`
              : `<div class="oe-stepper">
                   <button class="oe-step-btn" onclick="changeQty(${item.id},-1)">−</button>
                   <span class="oe-step-qty">${qty}</span>
                   <button class="oe-step-btn" onclick="changeQty(${item.id},1)">+</button>
                 </div>`
            }
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ────────────────────────────────────────────────────────────────
   9.  MENU SEARCH (inside nav bar)
   ──────────────────────────────────────────────────────────────── */
function initMenuSearch() {
  const input = document.getElementById("menuSearchInput");
  const dropdown = document.getElementById("menuSearchDropdown");

  input.addEventListener("input", () => {
    const q = input.value.trim();
    if (!q) { dropdown.classList.remove("open"); return; }

    const results = RES.menu.filter(i => i.name.toLowerCase().includes(q.toLowerCase())).slice(0, 5);

    if (results.length === 0) {
      dropdown.innerHTML = `<div class="search-no-result">No dishes found</div>`;
    } else {
      dropdown.innerHTML = results.map(r => `
        <div class="search-item" onclick="goToMenuItem(${r.id})">
          <img src="${r.img}" alt="${r.name}">
          <span>${r.name}</span>
          <span style="margin-left:auto;color:#ff8731;font-weight:600">₹${r.price}</span>
        </div>
      `).join("");
    }
    dropdown.classList.add("open");
  });

  document.addEventListener("click", e => {
    if (!input.contains(e.target)) dropdown.classList.remove("open");
  });

  // Menu tab search
  document.getElementById("menuTabSearch").addEventListener("input", e => {
    renderMenuGrid(e.target.value.trim());
  });
}

function goToMenuItem(id) {
  switchTab("menu");
  document.getElementById("menuSearchDropdown").classList.remove("open");
  document.getElementById("menuSearchInput").value = "";
  setTimeout(() => {
    const card = document.querySelector(`[id='ctrl-${id}']`);
    if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 200);
}

/* ────────────────────────────────────────────────────────────────
   10.  CART
   ──────────────────────────────────────────────────────────────── */
function initCart() {
  document.getElementById("cartIcon").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);
  document.getElementById("placeOrderBtn").addEventListener("click", placeOrder);
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  document.body.classList.add("cart-open");
  document.documentElement.classList.add("cart-open");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  document.body.classList.remove("cart-open");
  document.documentElement.classList.remove("cart-open");
}

function getQty(id) {
  const item = cart.find(c => c.id === id);
  return item ? item.qty : 0;
}

function addToCart(id) {
  const item = RES.menu.find(m => m.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  updateCart();
  refreshMenuCard(id);
}

function changeQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCart();
  refreshMenuCard(id);
}

function refreshMenuCard(id) {
  const ctrl = document.getElementById(`ctrl-${id}`);
  if (!ctrl) return;
  const qty = getQty(id);
  ctrl.innerHTML = qty === 0
    ? `<button class="oe-add-btn" onclick="addToCart(${id})">+ Add</button>`
    : `<div class="oe-stepper">
         <button class="oe-step-btn" onclick="changeQty(${id},-1)">−</button>
         <span class="oe-step-qty">${qty}</span>
         <button class="oe-step-btn" onclick="changeQty(${id},1)">+</button>
       </div>`;
}

function updateCart() {
  /* ── 1. Badge ───────────────────────────────────────────── */
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const badge = document.getElementById("cartBadge");
  badge.textContent = totalItems;
  badge.classList.toggle("visible", totalItems > 0);

  /* ── 2. Drawer header ───────────────────────────────────── */
  document.getElementById("cartResName").textContent =
    totalItems > 0 ? `Ordering from ${RES.name}` : "";

  /* ── 3. Cart line items ─────────────────────────────────── */
  // We render into a stable child div so emptyCart is never destroyed
  const cartItemsEl = document.getElementById("cartItems");
  const emptyCart   = document.getElementById("emptyCart");
  const cartFooter  = document.getElementById("cartFooter");

  // Ensure emptyCart is always inside cartItemsEl (first run safety)
  if (!cartItemsEl.contains(emptyCart)) cartItemsEl.prepend(emptyCart);

  // Get or create the lines container
  let linesEl = document.getElementById("cartLines");
  if (!linesEl) {
    linesEl = document.createElement("div");
    linesEl.id = "cartLines";
    cartItemsEl.appendChild(linesEl);
  }

  if (cart.length === 0) {
    linesEl.innerHTML = "";
    emptyCart.style.display = "flex";
    cartFooter.style.display = "none";
    return;
  }

  emptyCart.style.display = "none";
  cartFooter.style.display = "block";

  linesEl.innerHTML = cart.map(c => `
    <div class="cart-line">
      <img src="${c.img}" alt="${c.name}" onerror="this.style.display='none'">
      <div class="cart-line-info">
        <h5 class="cart-line-name">${c.name}</h5>
        <span class="cart-line-unit">₹${c.price} each</span>
      </div>
      <div class="cart-line-right">
        <div class="oe-cart-stepper">
          <button class="oe-cart-btn" onclick="changeQty(${c.id},-1)">−</button>
          <span class="oe-cart-qty">${c.qty}</span>
          <button class="oe-cart-btn" onclick="changeQty(${c.id},1)">+</button>
        </div>
        <span class="cart-line-total">₹${c.price * c.qty}</span>
      </div>
    </div>
  `).join("");

  /* ── 4. Totals ──────────────────────────────────────────── */
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tax = Math.round(sub * 0.05);
  const del = 40;
  document.getElementById("cartSubtotal").textContent = `₹${sub}`;
  document.getElementById("cartTaxes").textContent    = `₹${tax}`;
  document.getElementById("cartDelivery").textContent = `₹${del}`;
  document.getElementById("cartTotal").textContent    = `₹${sub + tax + del}`;

  /* ── 5. Re-sync ALL visible menu card controls ──────────── */
  // This is what makes every card on screen show the correct stepper
  document.querySelectorAll("[id^='ctrl-']").forEach(ctrl => {
    const itemId = parseInt(ctrl.id.replace("ctrl-", ""), 10);
    const qty = getQty(itemId);
    ctrl.innerHTML = qty === 0
      ? `<button class="oe-add-btn" onclick="addToCart(${itemId})">+ Add</button>`
      : `<div class="oe-stepper">
           <button class="oe-step-btn" onclick="changeQty(${itemId},-1)">−</button>
           <span class="oe-step-qty">${qty}</span>
           <button class="oe-step-btn" onclick="changeQty(${itemId},1)">+</button>
         </div>`;
  });
}

/* ────────────────────────────────────────────────────────────────
   11.  PLACE ORDER
   ──────────────────────────────────────────────────────────────── */
function placeOrder() {
  if (cart.length === 0) return;
  const loggedIn = localStorage.getItem("oe_loggedIn") === "true";
  if (!loggedIn) {
    sessionStorage.setItem("pendingRestaurant", RES.name);
    document.body.classList.add("page-exit");
    setTimeout(() => window.location.href = "../../login/login.html", 380);
    return;
  }

  // Save to order history
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tax = Math.round(sub * 0.05);
  const order = {
    id: Date.now(),
    restaurant: RES.name,
    items: cart.map(c => ({ name: c.name, qty: c.qty, price: c.price })),
    total: sub + tax + 40,
    time: new Date().toLocaleString(),
    status: "Preparing"
  };

  const orders = JSON.parse(localStorage.getItem("oe_orders") || "[]");
  orders.unshift(order);
  localStorage.setItem("oe_orders", JSON.stringify(orders));

  // Clear cart
  cart = [];
  updateCart();
  closeCart();

  // Re-render menu
  renderMenuGrid();

  // Toast
  const toast = document.getElementById("orderToast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);

  // Update orders tab
  renderOrderHistory();
}

/* ────────────────────────────────────────────────────────────────
   12.  ORDERS TAB
   ──────────────────────────────────────────────────────────────── */
function initOrdersTab() {
  renderOrderHistory();
}

function renderOrderHistory() {
  const orders = JSON.parse(localStorage.getItem("oe_orders") || "[]")
    .filter(o => o.restaurant === RES.name);

  const listEl = document.getElementById("ordersList");
  const emptyEl = document.getElementById("emptyOrders");

  if (orders.length === 0) {
    emptyEl.style.display = "block";
    listEl.innerHTML = "";
    return;
  }

  emptyEl.style.display = "none";
  listEl.innerHTML = orders.map(o => `
    <div class="order-history-card">
      <div class="order-history-header">
        <h4>Order #${String(o.id).slice(-4)}</h4>
        <span class="order-status">${o.status}</span>
      </div>
      <div class="order-items-list">
        ${o.items.map(i => `${i.qty}× ${i.name}`).join(" &nbsp;·&nbsp; ")}
      </div>
      <div class="order-total-row">
        <span>${o.time}</span>
        <span>₹${o.total}</span>
      </div>
    </div>
  `).join("");
}
