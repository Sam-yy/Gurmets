const texts = {
  en: {
    siteTitle: "World Kitchen Recipes",
    btnAll: "All",
    btnMyanmar: "🇲🇲 Myanmar",
    btnJapan: "🇯🇵 Japan",
    btnItaly: "🇮🇹 Italy",
    btnFrance: "🇫🇷 France",
    btnIndia: "🇮🇳 India",
    recipes: [
      {
        id: "mohinga",
        country: "Myanmar",
        name: "Mohinga",
        image: "mohinga.jpg",
        introduction: "Mohinga is Myanmar's national dish – a comforting fish noodle soup often enjoyed for breakfast. Its savory broth, flavored with lemongrass and banana stem, brings a taste of home to every Burmese household.",
        ingredients: "Rice noodles, fish broth, banana stem, lemongrass, garlic, onion, chickpea powder, fish sauce, boiled egg.",
        steps: [
          "Prepare the fish broth with lemongrass and banana stem.",
          "Boil the rice noodles until soft.",
          "Pour the broth over the noodles and garnish with egg and coriander.",
          "Serve hot with crispy fritters or chili flakes."
        ]
      },
      {
        id: "braised-pork",
        country: "Myanmar",
        name: "Secret Braised Pork",
        image: "Pork.jpg",
        introduction: "A traditional Burmese-style braised pork dish with rich, deep flavors. The meat is slowly cooked until tender in a sweet and savory sauce made from soy, garlic, and sugar.",
        ingredients: "Pork belly, minced garlic, soy sauce, water, sugar, salt.",
        steps: [
          "Wash and cut pork belly into small pieces. Blanch in boiling water, then rinse with cold water.",
          "Sauté garlic in oil until fragrant. Add pork and stir-fry until slightly browned.",
          "Add soy sauces, sugar, and water. Simmer gently for 30–40 minutes.",
          "Add boiled eggs or potatoes and cook for another 20 minutes."
        ]
      },
      {
        id: "tempura",
        country: "Japan",
        name: "Tempura",
        image: "Tempura.jpg",
        introduction: "Tempura is a beloved Japanese dish where seafood and vegetables are coated in a light batter and deep-fried to crispy perfection. It's a perfect balance of crunch and delicacy.",
        ingredients: "Shrimp, squid, pumpkin, eggplant, carrot, sweet potato, flour, egg, cold water, oil.",
        steps: [
          "Mix egg and cold water in a bowl, then add flour lightly without overmixing.",
          "Heat oil to 170°C (335°F). Dip ingredients in the batter and fry until golden.",
          "Drain on a wire rack to keep crisp.",
          "Serve with tentsuyu dipping sauce and grated daikon."
        ]
      },
      {
        id: "sushi",
        country: "Japan",
        name: "Sushi",
        image: "sushi.jpg",
        introduction: "Sushi is Japan’s most iconic dish — vinegared rice rolled with fresh fish and seaweed, symbolizing balance and artistry in every bite.",
        ingredients: "Sushi rice, nori seaweed, fresh fish, rice vinegar, sugar, salt.",
        steps: [
          "Cook rice and season with rice vinegar, sugar, and salt.",
          "Lay nori on a bamboo mat and spread rice evenly.",
          "Add fish and roll tightly.",
          "Slice and serve with soy sauce, wasabi, and pickled ginger."
        ]
      },
      {
        id: "pizza-margherita",
        country: "Italy",
        name: "Pizza Margherita",
        image: "pizza.jpg",
        introduction: "A symbol of Italian simplicity and flavor, Pizza Margherita combines fresh tomato sauce, mozzarella cheese, and basil for a timeless favorite loved around the world.",
        ingredients: "Flour, tomato sauce, mozzarella cheese, basil leaves, olive oil, salt.",
        steps: [
          "Make pizza dough and let it rise for 1 hour.",
          "Spread tomato sauce evenly on the dough.",
          "Add mozzarella and basil leaves on top.",
          "Bake in the oven at 220°C (428°F) for 10–12 minutes."
        ]
      },
      {
        id: "ratatouille",
        country: "France",
        name: "Ratatouille",
        image: "ratatouille.jpg",
        introduction: "Ratatouille is a colorful French Provençal vegetable stew, celebrated for its rich, rustic flavors and beautiful presentation of layered vegetables.",
        ingredients: "Zucchini, eggplant, bell pepper, tomato sauce, olive oil, garlic, thyme, basil, salt, pepper.",
        steps: [
          "Preheat oven to 190°C.",
          "Mix olive oil, thyme, basil, and garlic together.",
          "Spread tomato sauce in the base of a baking dish.",
          "Layer sliced vegetables neatly in a circle.",
          "Season and brush with olive oil mixture.",
          "Cover with foil and bake for 40 minutes.",
          "Garnish with fresh basil before serving."
        ]
      },
      {
        id: "grilled-chicken",
        country: "American",
        name: "Grilled Whole Chicken",
        image: "chicken.jpg",
        introduction: "Sink your fork into this juicy, smoky grilled whole chicken — a classic American favorite. Marinated with herbs and spices, it’s flame-kissed to golden perfection, perfect for family gatherings.",
        ingredients: "Whole chicken, olive oil, garlic, rosemary, salt, pepper, lemon juice.",
        steps: [
          "Clean and pat dry the chicken.",
          "Mix olive oil, garlic, rosemary, salt, pepper, and lemon juice for the marinade.",
          "Coat the chicken evenly and refrigerate for 2 hours.",
          "Grill over medium heat until cooked through and golden brown.",
          "Let rest for 10 minutes before serving."
        ]
      },
      {
        id: "biryani",
        country: "Indian",
        name: "Biryani",
        image: "Biryani.jpg",
        introduction: "Biryani is a flavorful Indian rice dish made with layers of fragrant rice, spiced meat, and caramelized onions — a dish that celebrates warmth and tradition.",
        ingredients: "Basmati rice, chicken, onion, garlic, ginger, yogurt, spices, saffron, ghee.",
        steps: [
          "Marinate chicken with yogurt, spices, and salt for 30 minutes.",
          "Fry onions until golden and add marinated chicken.",
          "Add soaked rice and enough water or broth.",
          "Cover and cook on low heat until rice is fluffy.",
          "Garnish with fried onions and coriander before serving."
        ]
      }
    ]
  },

  jp: {
    siteTitle: "世界の料理レシピ",
    btnAll: "全部",
    btnMyanmar: "🇲🇲 ミャンマー",
    btnJapan: "🇯🇵 日本",
    btnItaly: "🇮🇹 イタリア",
    recipes: [
      {
        id: "mohinga",
        country: "ミャンマー",
        name: "モヒンガー",
        image: "mohinga.jpg",
        introduction: "ミャンマーの国民食、モヒンガーは魚とレモングラスの香りが特徴の温かいスープ麺料理です。",
        ingredients: "米の麺、魚のスープ、レモングラス、バナナの茎、にんにく、たまねぎ。",
        steps: [
          "スープを作る。",
          "麺を茹でる。",
          "スープを注ぎ、ゆで卵を添える。",
          "熱いうちに提供。"
        ]
      },
      {
        id: "sushi",
        country: "日本",
        name: "寿司",
        image: "sushi.jpg",
        introduction: "日本を代表する料理の一つである寿司は、酢飯と新鮮な魚を使い、美しさと味を楽しむ料理です。",
        ingredients: "米、海苔、生魚、酢、砂糖、塩。",
        steps: [
          "酢飯を作る。",
          "海苔の上に酢飯を広げる。",
          "魚をのせて巻く。",
          "切ってしょうゆと一緒に提供。"
        ]
      },
      {
        id: "pizza-margherita",
        country: "イタリア",
        name: "ピザマルゲリータ",
        image: "pizza.jpg",
        introduction: "トマト、モッツァレラチーズ、バジルを使ったイタリアの代表的なピザです。",
        ingredients: "小麦粉、トマトソース、モッツァレラチーズ、バジル、オリーブオイル。",
        steps: [
          "生地をこねて発酵させる。",
          "トマトソースを塗る。",
          "チーズとバジルをのせる。",
          "オーブンで焼く。"
        ]
      }
    ]
  },

  my: {
    siteTitle: "ကမ္ဘာ့ဟင်းချက်နည်းများ",
    btnAll: "အားလုံး",
    btnMyanmar: "🇲🇲 မြန်မာ",
    btnJapan: "🇯🇵 ဂျပန်",
    btnItaly: "🇮🇹 အီတလီ",
    recipes: [
      {
        id: "mohinga",
        country: "မြန်မာ",
        name: "မုန့်ဟင်းခါး",
        image: "mohinga.jpg",
        introduction: "မုန့်ဟင်းခါးဟာ မြန်မာနိုင်ငံရဲ့ အမျိုးသားအစားအစာဖြစ်ပြီး နံနက်စာအနေနဲ့အထူးအချစ်ကြီးခံရတဲ့ ငါးရည်ခေါက်ဆွဲဖြစ်ပါတယ်။",
        ingredients: "ဆန်ခေါက်ဆွဲ၊ ငါးရည်၊ ငှက်ပျောပင်၊ ချိုင့်၊ ငရုပ်သီးအမှုန့်။",
        steps: [
          "ရည်ပြင်ဆင်ပါ။",
          "ခေါက်ဆွဲပြုတ်ပါ။",
          "ရည်သွင်းပြီး ငရုပ်သီးအမှုန့်ဖြင့်ပေးပါ။"
        ]
      },
      {
        id: "sushi",
        country: "ဂျပန်",
        name: "ဆူရှီ",
        image: "sushi.jpg",
        introduction: "ဆူရှီဟာ ဂျပန်အစားအစာတွင် အဓိကအရာဖြစ်ပြီး ဆန်နှင့် အသားကောင်းတို့ကို ပေါင်းစပ်ထားတဲ့ လှပသောအစားအစာဖြစ်ပါတယ်။",
        ingredients: "ဆန်၊ နို့ရီ၊ အသားကောင်း၊ ဗိုင်နီဂါ။",
        steps: [
          "ဆန်ချက်ပါ။",
          "ဗိုင်နီဂါထည့်ပါ။",
          "အသားနှင့်လှုပ်ပါ။"
        ]
      },
      {
        id: "pizza-margherita",
        country: "အီတလီ",
        name: "ပီဇာမာဂေရိတာ",
        image: "pizza.jpg",
        introduction: "ပီဇာမာဂေရိတာဟာ အီတလီရဲ့ အမိုက်စားအစားအစာဖြစ်ပြီး ချိစ်နဲ့ ခရမ်းချဥ်တို့ပေါင်းထားတဲ့ ပေါ့ပါးသည့်အရသာရှိပါတယ်။",
        ingredients: "ပုံပြင်မှုန့်၊ ခရမ်းချဥ်၊ ချိစ်၊ ဘာဆစ်။",
        steps: [
          "ထမင်းပြုလုပ်ပါ။",
          "ဆော့စ်ထည့်ပါ။",
          "မီးဖိုမှာချက်ပါ။"
        ]
      }
    ]
  },

  fr: { siteTitle: "Recettes du Monde", recipes: [] },
  in: { siteTitle: "World Kitchen Recipes - India", recipes: [] }
};
