/**
 * Central Menu Data & Overrides
 * consolidate menu items here to keep menu.html and order.html in sync.
 */

const menuData = {
    essaouira: {
        burgers: [
            { name: "Crispy Fish Burger", price: "100 DH", desc: "Crispy filet of fish, lettuce, coleslaw, chipotle sauce 🌶️, salsa verde, tartar & cornichons", note: "Best Seller - Includes 1 side and 1 drink of your choice", mini: "80 DH", image: "menu/crispyburger.jpeg" },
            { name: "Sardine Burger", price: "90 DH", desc: "2 Grilled sardine in-house patties, cheese, lettuce, tomatoes, tartar, caramelized onions & salsa verde", note: "Signature - Includes 1 side and 1 drink of your choice", mini: "70 DH", image: "menu/sardineburger.jpeg" },
            { name: "Spicy Shrimp Burger", price: "110 DH", desc: "Crispy Shrimp, lettuce, coleslaw, cornichons and chipotle sauce 🌶️", note: "Includes 1 side and 1 drink of your choice", mini: "90 DH" },
            { name: "Calamari* Burger", price: "110 DH", desc: "Crispy calamari rings, lettuce, cornichons & tartar", note: "Includes 1 side and 1 drink of your choice", mini: "90 DH" },
            { name: "Octopus Burger", price: "110 DH", desc: "Crispy chopped octopus legs, lettuce, tomatoes, cornichons & salsa verde", note: "Includes 1 side and 1 drink of your choice", mini: "90 DH" },
            { name: "Double Crispy Fish Burger", price: "130 DH", desc: "2 Crispy fish filets, lettuce, coleslaw, chipotle salsa verde, tartar & cornichons 🌶️", note: "Includes 1 side and 1 drink of your choice", mini: "110 DH", image: "menu/doblecrispy.PNG" },
            { name: "Tofu Burger", price: "90 DH", desc: "Crispy tofu, cheese, lettuce, tomatoes, salsa verde and chipotle sauce 🌶️", veg: true, note: "Vegetarian - Includes 1 side and 1 drink of your choice", mini: "70 DH" },
        ],
        sides: [
            { name: "Potato Wedges", price: "20 DH", desc: "", image: "menu/pitatos.jpeg" },
            { name: "Onion Rings", price: "20 DH", desc: "", image: "menu/Onion Rings.jpeg" },
            { name: "Guacamole", price: "20 DH", desc: "" },
            { name: "Coleslaw", price: "20 DH", desc: "", image: "menu/coleslaw.jpeg" },
        ],
        tapas: [
            { name: "Summer Salad", price: "45 DH", desc: "Lettuce, tomatoes, onions, avocados cucumbers & vinaigrette" },
            { name: "Fancy Sardines", price: "35 DH", desc: "3 crispy fresh sardines, with sharmoula", note: "Original" },
            { name: "Seafood Basket", price: "70 DH", desc: "Fried mixed seafood & potato wedges" },
            { name: "Nachos", price: "55 DH", desc: "Golden tortilla chips, guacamole, pico de gallo, chipotle sauce 🌶️, salsa verde" },
            { name: "Msemmen Fish Tacos", price: "50 DH", desc: "2 Moroccan tortilla, crispy white fish, veggies, salsa verde and chipotle sauce 🌶️", note: "Original", image: "menu/Msemmen Fish Tacos.jpeg" },
            { name: "Sardine Croquettes", price: "40 DH", desc: "3 crispy sardine balls, cheese stuffed", note: "Original", image: "menu/Sardine Croquettes.jpeg" },
            { name: "Calamari* Rings", price: "50 DH", desc: "5 crispy rings & tartar sauce" },
            { name: "Fish Nuggets", price: "35 DH", desc: "3 crispy fish nuggets & tartar sauce" },
            { name: "Mozzarella Sticks", price: "45 DH", desc: "5 sticks & marinara sauce" },
            { name: "Fried Octopus", price: "55 DH", desc: "Crispy octopus slices", image: "menu/Fried Octopus.jpeg" },
        ],
        globe: [
            { name: "Fish & Chips", price: "90 DH", desc: "Crispy fish fillets, potato wedges, coleslaw & tartar", image: "menu/Fish & Chips.jpeg" },
            { name: "Fish Burrito", price: "100 DH", desc: "Crispy white fish, guacamole, rice, lettuce, coleslaw, salsa verde & chipotle sauce 🌶️" },
            { name: "Po' Boy Sandwich", price: "80 DH", desc: "Crispy white fish, lettuce, tomatoes & tartar" },
            { name: "Bocadillo de Calamares", price: "80 DH", desc: "Crispy calamari rings, lettuce, tomatoes, onions & tartar" },
            { name: "Octopus Sandwich", price: "90 DH", desc: "Marinated octopus, marinara, pico de gallo & chipotle sauce 🌶️" },
            { name: "Spicy Seafood Sandwich", price: "90 DH", desc: "Spicy crevettes, calamari, pico de gallo, cilantro, chipotle sauce 🌶️" },
        ],
        desserts: [
            { name: "Cinnabun Crumble Topped Icecream", price: "35 DH", desc: "" },
            { name: "Ice Cream Cookie-Burger", price: "40 DH", desc: "" },
            { name: "2 Chocolate Chip Cookies", price: "20 DH", desc: "" },
        ],
        drinks: [
            { name: "Soda", price: "20 DH", desc: "" },
            { name: "Still Water 33cl", price: "15 DH", desc: "" },
            { name: "Still Water 1.5L", price: "30 DH", desc: "" },
            { name: "Sparkling Water 33cl", price: "20 DH", desc: "" },
            { name: "Ginger Mint Lemonade", price: "20 DH", desc: "" },
            { name: "Espresso", price: "20 DH", desc: "" },
            { name: "Americano", price: "20 DH", desc: "" },
            { name: "Iced Coffee", price: "25 DH", desc: "" },
            { name: "Iced Tea", price: "20 DH", desc: "" },
        ]
    }
};

function getMenuData(location) {
    return menuData.essaouira;
}


/**
 * Applies robust image overrides to ensure new photography is always used.
 * @param {Object} item The menu item object to refine.
 * @returns {Object} The refined item object.
 */
function applyMenuOverrides(item) {
    const photofixes = {
        "Sardine Burger": "menu/sardineburger.jpeg",
        "Crispy Fish Burger": "menu/crispyburger.jpeg",
        "Potato Fries": "menu/pitatos.jpeg",
        "Coleslaw": "menu/coleslaw.jpeg",
        "Sardine Croquettes": "menu/Sardine Croquettes.jpeg",
        "Fried Octopus": "menu/Fried Octopus.jpeg",
        "Onion Rings": "menu/Onion Rings.jpeg",
        "Fish & Chips": "menu/Fish & Chips.jpeg",
        "Msemmen Fish Tacos": "menu/Msemmen Fish Tacos.jpeg",
        "Burger of the Month": "menu/burgerofmonth.PNG",
        "Double Crispy Fish Burger": "menu/doblecrispy.PNG"
    };

    if (photofixes[item.name]) {
        item.image = photofixes[item.name];
    }
    return item;
}

// Export for use in order.html and menu.html
if (typeof window !== 'undefined') {
    window.menuData = menuData;
    window.applyMenuOverrides = applyMenuOverrides;
}
