const products = [
  {
    _id: "d0975326-7b43-479e-a109-cb818abec62d",
    title: "Chocolate Mousse Torte Cake",
    description:
      "Two rich, chocolate cake layers are filled with luscious chocolate whipped cream mousse, then covered with milk chocolate frosting and a dark chocolate glaze. This best selling delight is then garnished with fudge rosettes and dark chocolate shaves. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",
    category: "Bakery",
    brand: "Gaston's Bakery",
    expDate: "05/15/2017",
    mfdDate: "05/10/2017",
    size: "7 inches in diameter",
    price: 42.95,
    stock: "5",
    images: ["/images/chocolate-mousse-torte-cake.png"],
    suggestion: ["Serves 6 to 8", "Ships Nationwide in Refrigerated Packaging", "Certified Kof-K Kosher"],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    _id: "ebed34eb-7533-49f5-91cb-37c12f20d4b1",
    title: "Triple Chocolate Enrobed Brownie Cake",
    description:
      "This is the perfect cake for the true chocolate lover. Our dense, moist brownie cake is covered in not one, but three layers of decadent chocolate. The cake is coated with a rich chocolate fondant icing, showered with dark chocolate shavings and then finally drizzled with milk and dark chocolate glazes. This triple-chocolate delight is sure to satisfy any sweet tooth. Each cake is delivered in an elegant gift box with a chocolate occasion plaque and personalized greeting card to celebrate any occasion.",
    category: "Bakery",
    brand: "Gaston's Bakery",
    expDate: "05/16/2017",
    mfdDate: "05/12/2017",
    size: "7 inches in diameter",
    price: 39.95,
    stock: "2",
    images: ["/images/triple-chocolate-enrobed-brownie-cake.png"],
    suggestion: ["Serves 6 to 8", "Certified KOF-K Kosher"],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    _id: "fb79562d-e470-4445-990b-06aa875d3e97",
    title: "Reddi Wip Dairy Whipped Topping Extra Creamy Aerosol Refrigerated",
    description:
      "Reddi Wip® Extra Creamy Sweetened Dairy Whipped Topping. Milk from cows. Not treated with artificial growth hormone*. Made with real cream. No artificial flavors or sweeteners. 15 calories per 2 tbsp. Ultra-pasteurized.",
    category: "Dairy",
    brand: "Daiya Dairy",
    expDate: "05/14/2017",
    mfdDate: "08/14/2017",
    size: "6.5 oz can",
    price: 3.19,
    stock: "7",
    images: [
      "/images/reddi-wip-dairy-whipped-topping-extra-creamy-aerosol-refrigerated-1.jpg",
      "/images/reddi-wip-dairy-whipped-topping-extra-creamy-aerosol-refrigerated-2.jpg",
      "/images/reddi-wip-dairy-whipped-topping-extra-creamy-aerosol-refrigerated-3.jpg",
    ],
    suggestion: [
      " Shake it! Shake it! 4 times before use then remove cap.",
      "Turn can completely upside down and press nozzle sideways with finger.",
      "Rinse nozzle thoroughly with warm water. ",
    ],
    allegations: [
      "Contains: milk.",
      "Deliberately concentrating and inhaling the contents can be harmful or fatal.",
      "Contents under pressure.",
      "Do not expose to temperatures above 120 degrees F.",
      "Do not puncture or incinerate can.",
      "Keep out of the reach of children.",
      "Choking hazard, cap contains small parts.",
    ],
  },
  {
    _id: "61c79187-76f6-4747-a5cf-d7e26dcea535",
    title: "Red Velvet Chocolate Cake",
    description:
      "A truly decadent southern classic: two rich layers of red chocolate cake, fill and covered with the finest, pure cream cheese frosting, and then garnished with white chocolate sprinkles around the sides. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",
    category: "Bakery",
    brand: "Cake Factory",
    expDate: "05/18/2017",
    mfdDate: "05/15/2017",
    size: "7 inches in diameter",
    price: 42.95,
    stock: "4",
    images: ["/images/red-velvet-chocolate-cake.png"],
    suggestion: ["Serves 6 to 8", "Certified KOF-K Kosher", "Ships Nationwide in Refrigerated Packaging"],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    _id: "b72f5d8e-e586-47cd-aba7-202814ca6609",
    title: "Rice Dream Original Non-Dairy Beverage Organic",
    description:
      "Rice Dream® Organic Original Enriched Rice Drink. Value size. Calcium & vitamin D. Easy to digest. USDA Organic. Non GMO project.",
    category: "Dairy",
    brand: "Rice Dream",
    expDate: "05/14/2017",
    mfdDate: "05/17/2017",
    size: "64 oz ctn",
    price: 5.19,
    stock: "21",
    images: [
      "/images/rice-dream-original-non-dairy-beverage-organic-1.jpg",
      "/images/rice-dream-original-non-dairy-beverage-organic-2.jpg",
    ],
    suggestion: ["Shake well.", "Serve chilled.", "Stays fresh 7-10 days in refrigerator after opening."],
    allegations: ["Not for use as an infant formula.", "For children under age 5, consult your child's doctor."],
  },
  {
    _id: "5ffd3e0b-2a31-4d97-aced-e242b5061b24",
    title: "Member's Mark Mini Plain Sliced Bagels",
    description:
      "Kettle boiled like they do in the Big Apple, these heat-and-serve mini bagels are made with premium ingredients like real yeast and triple-filtered water.",
    category: "Bakery",
    brand: "Member's Mark",
    expDate: "05/28/2017",
    mfdDate: "05/15/2017",
    size: "12ct",
    price: 20.99,
    stock: "3",
    images: ["/images/members-mark-mini-plain-sliced-bagels.jpg"],
    suggestion: [
      "Authentic New York-style kettle boiled bagels",
      "Soft, chewy and delicious",
      "The taste and quality you'd expect from your local bagel shop",
      "Mini sized for snacking",
    ],
    allegations: [],
  },
  {
    _id: "b7399b85-6860-4b86-b169-3dc068d444ae",
    title: "Daiya Dairy Free Greek Yogurt Black Cherry",
    description:
      "Daiya Dairy Free Black Cherry Greek Yogurt Style. New. Rich & creamy & lots of fruit. Deliciously Dairy-Free®. Soy free. 8g protein*. 3g* fiber. Excellent source of calcium. Probiotics. Excellent source of Vitamin B12.",
    category: "Dairy",
    brand: "Daiya Dairy",
    expDate: "05/13/2017",
    mfdDate: "05/15/2017",
    size: "5.3 oz cup",
    price: 1.95,
    stock: "15",
    images: [
      "/images/daiya-dairy-free-greek-yogurt-black-cherry-1.jpg",
      "/images/daiya-dairy-free-greek-yogurt-black-cherry-2.jpg",
      "/images/daiya-dairy-free-greek-yogurt-black-cherry-3.jpg",
    ],
    suggestion: ["Keep refrigerated."],
    allegations: ["Contains coconut."],
  },
  {
    _id: "c8d5c1c3-15e8-4112-a043-a0d33a8de28d",
    title: "Daily Chef Mini Candy Cookies",
    description: "Delicious mini candy cookies baked fresh in Club.",
    category: "Bakery",
    brand: "Daily Chef",
    expDate: "05/30/2017",
    mfdDate: "05/15/2017",
    size: "36ct",
    price: 28.99,
    stock: "12",
    images: ["/images/daily-chef-mini-candy-cookies.jpg"],
    suggestion: [],
    allegations: [],
  },
  {
    _id: "74835a8d-b17b-4653-b1b1-fc58b4df19b9",
    title: "So Delicious Cultured Coconut Milk Yogurt Vanilla Dairy & Soy Free Organic",
    description:
      "So Delicious® Dairy Free Coconut Milk Yogurt Alternative Vanilla. Made with organic coconut. Net Wt. 5.3 oz (150 g). Certified Vegan. Certified Gluten-Free®.",
    category: "Dairy",
    brand: "So Delicious",
    expDate: "05/14/2017",
    mfdDate: "05/18/2017",
    size: "5.3 oz cup",
    price: 2.09,
    stock: "15",
    images: [
      "/images/so-delicious-cultured-coconut-milk-yogurt-vanilla-dairy-soy-free-organic-1.jpg",
      "/images/so-delicious-cultured-coconut-milk-yogurt-vanilla-dairy-soy-free-organic-2.jpg",
    ],
    suggestion: ["Keep refrigerated."],
    allegations: [
      "Contains coconut.",
      "Produced in a facility that also processes other tree nuts and soy.",
      "We apply strict quality control measures to prevent contamination by undeclared food allergens",
    ],
  },
  {
    _id: "92de4c84-2f09-43c3-88e2-c0a000b93037",
    title: "Gaston's Bakery Small Puff Pastry Squares",
    description:
      "Easily create delicious pies, savory hors d'oeuvres, tarts, baklava and more with these ready-to-use puff pastry squares. Puff pastry bakes up light and flaky and pairs perfectly with a wide range of toppings and fillings.",
    category: "Bakery",
    brand: "Gaston's Bakery",
    expDate: "05/18/2017",
    mfdDate: "05/13/2017",
    size: "32 pieces",
    price: 39.95,
    stock: "2",
    images: ["/images/gastons-bakery-small-puff-pastry-squares.jpg"],
    suggestion: [],
    allegations: ["Not available to ship to Hawaii or Alaska.", "Contains wheat and milk"],
  },
  {
    _id: "df52c530-a741-4eb7-9558-d2faaacec380",
    title: "Signature Bakery Assortment",
    description:
      "Our Signature Bakery Assortment is ideal when you need a cookie delivery. This bakery gift is filled with baked goods such as lemon poppyseed coffee cake and baklava handcrafted in our own bakery. We've added some of our most popular cookie types, from raspberry galettes to Moose Munch® Cookies, to round out this generous collection.",
    category: "Bakery",
    brand: "Signature Bakery",
    expDate: "05/24/2017",
    mfdDate: "05/14/2017",
    size: "Large",
    price: 59.99,
    stock: "6",
    images: ["/images/signature-bakery-assortment.jpg"],
    suggestion: [],
    allegations: [
      "Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.",
      "Our facility is not Gluten Free.",
    ],
  },
  {
    _id: "334d5358-3cdf-473b-b894-5115b0df7c6f",
    title: "Gaston's Bakery Croissants",
    description:
      "Our vendor will ship directly to you. Allow 5-7 business days for delivery. Not available to ship to Hawaii or Alaska. $7.50 handling and shipping fee applied in cart to ensure freshness.",
    category: "Bakery",
    brand: "Gaston's Bakery",
    expDate: "05/25/2017",
    mfdDate: "05/15/2017",
    size: "Set of 15",
    price: 34.95,
    stock: "8",
    images: [
      "/images/gastons-bakery-croissants-1.jpg",
      "/images/gastons-bakery-croissants-2.jpg",
      "/images/gastons-bakery-croissants-3.jpg",
    ],
    suggestion: ["15 ready-to-bake croissants"],
    allegations: [],
  },
  {
    _id: "f3b3a260-f7e4-45c8-86b2-d6f48a1024d1",
    title: "Daiya Dairy Free Greek Yogurt Black Cherry",
    description:
      "Daiya Dairy Free Black Cherry Greek Yogurt Style. New. Rich & creamy & lots of fruit. Deliciously Dairy-Free®. Soy free. 8g protein*. 3g* fiber. Excellent source of calcium. Probiotics. Excellent source of Vitamin B12.",
    category: "Dairy",
    brand: "Daiya Dairy",
    expDate: "05/13/2017",
    mfdDate: "05/15/2017",
    size: "5.3 oz cup",
    price: 1.92,
    stock: "15",
    images: [
      "/images/so-delicious-cultured-coconut-milk-yogurt-vanilla-dairy-soy-free-organic-1.jpg",
      "/images/so-delicious-cultured-coconut-milk-yogurt-vanilla-dairy-soy-free-organic-2.jpg",
    ],
    suggestion: ["Keep refrigerated."],
    allegations: ["Contains coconut."],
  },
  {
    _id: "f82c6b8a-2c6a-45e2-887f-ad5f34631439",
    title: "Celeste Pizza For One Vegetable Frozen",
    description:
      "Celeste® Pizza For One™ Vegetable. Authentic Italian Since 1930. Microwaves In Minutes. Truecookplus®. With Green & Red Peppers, Mushrooms, Onions & Olives.",
    category: "Frozen",
    brand: "Celeste Pizza",
    expDate: "03/14/2017",
    mfdDate: "03/14/2018",
    size: "5.6 oz box",
    price: 1,
    stock: "102",
    images: [
      "/images/celeste-pizza-for-one-vegetable-frozen-1.jpg",
      "/images/celeste-pizza-for-one-vegetable-frozen-2.jpg",
    ],
    suggestion: [
      "Do not put microwave disk in conventional oven.",
      "Place baking sheet on center oven rack; preheat oven to 400°F.",
      "Remove frozen pizza from carton; unwrap.",
    ],
    allegations: [],
  },
  {
    _id: "7b862543-876f-4bac-b56a-630f6e239079",
    title: "Nestle Coffee-mate Powder Coffee Creamer Original",
    description:
      "Nestle® Coffee-Mate® The Original Coffee Creamer. Easy-grip handle. This product is non-dairy, lactose-free, cholesterol-free and gluten-free. Please recycle. Gluten free. Lactose free. Per 1 tsp: 10 calories. 0.5g sat fat, 3% DV. 0mg sodium, 0% DV. 0g sugars.",
    category: "Dairy",
    brand: "Nestle",
    expDate: "03/14/2017",
    mfdDate: "9/14/2017",
    size: "35.3 oz can",
    price: 6.99,
    stock: "12",
    images: [
      "/images/nestle-coffee-matepowder-coffee-creamer-original-1.jpg",
      "/images/nestle-coffee-matepowder-coffee-creamer-original-2.jpg",
      "/images/nestle-coffee-matepowder-coffee-creamer-original-3.jpg",
    ],
    suggestion: ["Spoon Coffee-Mate into prepared coffee, tea, or cocoa.", "Stir and enjoy!"],
    allegations: ["Contains: a milk derivative."],
  },
  {
    _id: "b971e50a-8a61-4c0c-b5ab-94289dabcf92",
    title: "Nature's Promise Free from Vanilla Almond Milk Refrigerated",
    description:
      "Nature's Promise™ Vanilla Almondmilk. Free from: Artificial colors. Artificial flavors. Artificial preservatives. Naturally flavored. Calcium enriched. Excellent source of vitamin D. Lactose & dairy free.",
    category: "Dairy",
    brand: "Nature's Promise",
    expDate: "05/14/2017",
    mfdDate: "05/16/2017",
    size: "32 oz ctn",
    price: 2.02,
    stock: "1",
    images: [
      "/images/natures-promise-free-from-vanilla-almond-milk-refrigerated-1.jpg",
      "/images/natures-promise-free-from-vanilla-almond-milk-refrigerated-2.jpg",
    ],
    suggestion: ["Shake well + serve chilled.", "Refrigerate after opening and use within 7-10 days."],
    allegations: [],
  },
  {
    _id: "4a8913f9-29a1-40e0-81bc-c37b564e0b5d",
    title: "Weight Watchers Smart Ones Thin Crust Pizza Pepperoni",
    description:
      "Weight Watchers Smart Ones® Thin Crust Pepperoni Pizza. Savory Italian recipes. With tomato sauce and reduced fat cheese. 17g of protein. U.S. inspected and passed by Department of Agriculture.",
    category: "Frozen",
    brand: "Weight Watchers",
    expDate: "05/14/2017",
    mfdDate: "01/14/2018",
    size: "4.4 oz box",
    price: 2.39,
    stock: "51",
    images: [
      "/images/weight-watchers-smart-ones-thin-crust-pizza-pepperoni-1.jpg",
      "/images/weight-watchers-smart-ones-thin-crust-pizza-pepperoni-2.jpg",
    ],
    suggestion: [
      "Keep frozen.",
      "Do not put microwave disk in conventional oven.",
      "Open carton at perforated strip.",
      "Remove frozen pizza from carton; unwrap.",
    ],
    allegations: [],
  },
  {
    _id: "cc1f83c1-70cd-4d7e-b204-ec79011ffa8d",
    title: "Kellogg's Special K Flatbread Breakfast Sandwich, Sausage, Egg, and Cheese",
    description:
      "Craving something warm and delicious to help you start your morning? Add a breakfast revelation to your morning routine. Special K Flatbread Breakfast Sandwiches are a mouthwatering way to start your day on the right track. Multigrain flatbread, real eggs, sausage and cheese will help keep your taste buds very happy.",
    category: "Frozen",
    brand: "Kellogg's",
    expDate: "04/11/2017",
    mfdDate: "04/10/2018",
    size: "4 ct",
    price: 7.49,
    stock: "11",
    images: ["/images/kelloggs-special-k-flatbread-breakfast-sandwich-sausage-egg-and-cheese.jpg"],
    suggestion: ["Keep frozen."],
    allegations: ["Contains Eggs", "Contains Wheat", "Contains Milk Ingredients"],
  },
  {
    _id: "5d3611cb-2140-4984-8535-0e40920fbd68",
    title: "Kellogg's Eggo Chocolate Chip Waffles",
    description:
      "Get a sweet start to your morning with Eggo® Chocolate Chip waffles. They have a light, crispy texture and a yummy chocolatey taste that makes eating breakfast a real delight! (from Kellogg's)",
    category: "Frozen",
    brand: "Kellogg's",
    expDate: "05/14/2017",
    mfdDate: "08/14/2017",
    size: "10 ct",
    price: 3.32,
    stock: "11",
    images: ["/images/kelloggs-eggo-chocolate-chip-waffles.jpg"],
    suggestion: ["Keep frozen."],
    allegations: ["Contains Eggs", "Contains Wheat", "Contains Milk Ingredients", "Contains Soy"],
  },
  {
    _id: "55a25e37-f9b1-4d63-b088-4c461f675009",
    title: "Deep Cocktail Samosa (Potato & Pea)",
    description: "Crispy triangles filled with spicy potatoes and peas.",
    category: "Frozen",
    brand: "Deep",
    expDate: "03/21/2017",
    mfdDate: "08/03/2017",
    size: "40 pcs",
    price: 4.99,
    stock: "6",
    images: ["/images/deep-cocktail-samosa-potato-pea.jpg"],
    suggestion: ["Keep frozen."],
    allegations: ["Contains Eggs", "High Spices", "Contains Preservatives"],
  },
]

async function importProducts() {
  try {
    console.log("🚀 Starting product import...")

    const response = await fetch("http://localhost:3000/api/products/bulk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log("✅ Products imported successfully!")
    console.log(`📦 Added ${result.products.length} products to the database`)

    // Show summary by category
    const categories = {}
    result.products.forEach((product) => {
      categories[product.category] = (categories[product.category] || 0) + 1
    })

    console.log("\n📊 Products by category:")
    Object.entries(categories).forEach(([category, count]) => {
      console.log(`  ${category}: ${count} products`)
    })

    console.log("\n📁 Make sure to place your product images in the 'public/images/' folder!")
    console.log("   Example: public/images/chocolate-mousse-torte-cake.png")
  } catch (error) {
    console.error("❌ Failed to import products:", error.message)
    console.log("Make sure your server is running on http://localhost:3000")
  }
}

// Run the import
importProducts()
