const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
];
// get parent element
const menuContainer = document.querySelector(".menu");
const btnContainer = document.querySelector(".btn-container");

const category = document.querySelector(".category");
// display all items when page loads

const generateCategory = () => {
  const categoryItems = menu.reduce(
    (categoryList, element) => {
      if (!categoryList.includes(element.category)) {
        categoryList.push(element.category);
      }
      return categoryList;
    },
    ["all"]
  );
  return categoryItems;
};

const generateFilter = (id) => {
  let datasetId = id;
  let filtered = [];
  if (id == "all") {
    filtered = menu.map((element) => element);
  } else {
    filtered = menu.filter((element) => element.category === datasetId);
  }

  //   console.log([1, 2, 3, 4, 5].filter((element) => element > 3));
  //   console.log(filtered);
  //   console.log(menu);
  const filteredMenu = filtered.map((element) => {
    return `<article class="menuItem">
                    <img src=${element.img} alt=${element.title} class="photo" />
                    <div class="itemInfo">
                        <header>
                            <h4>${element.title}</h4>
                            <h4 class="price">$${element.price}</h4>
                        </header>
                        <br />
                        <p class="item-text">
                        ${element.desc}
                        </p>
                        <br />
                        <button class="orderBtn">order now</button>
                    </div>
                </article>`;
  });
  return filteredMenu.join("");
};

// };

window.addEventListener("DOMContentLoaded", function () {
  const categoryList = generateCategory();
  const categoryBtns = categoryList.map((element) => {
    return `<button class="btn" data-id=${element}>${element}</button>`;
  });
  console.log(categoryList);
  category.innerHTML = categoryBtns.join("");
  const filterBtns = document.querySelectorAll(".btn");
  const all = menu.map((element) => {
    return `<article class="menuItem">
                <img src=${element.img} alt=${element.title} class="photo" />
                <div class="itemInfo">
                    <header>
                        <h4>${element.title}</h4>
                        <h4 class="price">$${element.price}</h4>
                    </header>
                    <br />
                    <p class="item-text">
                    ${element.desc}
                    </p>
                    <br />
                    <button class="orderBtn">order now</button>
                </div>
            </article>`;
  });
  menuContainer.innerHTML = all.join("");
  filterBtns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener("click", (e) => {
      console.log(e.target.dataset.id);
      menuContainer.innerHTML = generateFilter(e.target.dataset.id);
    });
  });

  //   filterBtn();
});
// console.log(filterBtns);
