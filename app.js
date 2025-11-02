let balance = 100000000000;
const balanceEl = document.getElementById("balance");
const productsEl = document.getElementById("products");
const receiptEl = document.getElementById("receipt");
const totalEl = document.getElementById("total");

const products = [
  { name: "Big Mac", price: 20, count: 0, image: "images/big-mac.avif" },
  { name: "Book", price: 30, count: 0, image: "images/book.jpg.avif" },
  {
    name: "Coca-Cola Pack",
    price: 40,
    count: 0,
    image: "images/coca-cola.jpeg",
  },

  {
    name: "Lobster Dinner",
    price: 50,
    count: 0,
    image: "images/lobster.jpg",
  },
  { name: "Flip Flops", price: 99, count: 0, image: "images/flip.jpg" },
  { name: "Airpods", price: 199, count: 0, image: "images/airpods.jpg" },
  { name: "Drone", price: 350, count: 0, image: "images/drone.webp.jpeg" },
  { name: "Gaming Console", price: 800, count: 0, image: "images/gaming.jpeg" },
  { name: "Rolex", price: 15000, count: 0, image: "images/watch.jpg.webp" },
  { name: "Ferrari", price: 250000, count: 0, image: "images/ferrari.webp" },
  {
    name: "Tesla Car",
    price: 95000,
    count: 0,
    image: "images/tesla.jpg",
  },

  { name: "House", price: 350000, count: 0, image: "images/house.jpg" },
  {
    name: "Sephora Franchise",
    price: 1500000,
    count: 0,
    image: "images/sephora.jpg.avif",
  },

  {
    name: "Make a Movie",
    price: 100000000,
    count: 0,
    image: "images/movie.jpg",
  },

  { name: "Mansion", price: 450000000, count: 0, image: "images/mansion.webp" },

  {
    name: "Skyscraper",
    price: 850000000,
    count: 0,
    image: "images/skyline.jpg",
  },
  {
    name: "Cruise Ship",
    price: 930000000,
    count: 0,
    image: "images/yachts.png",
  },
  { name: "NBA Team", price: 2120000000, count: 0, image: "images/nba.jpeg" },
];

function render() {
  productsEl.innerHTML = products
    .map(
      (p, i) => `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>$${p.price.toLocaleString()}</p>
        <button onclick="sell(${i})" ${
        p.count === 0 ? "disabled" : ""
      }>Sell</button>
        <span>${p.count}</span>
        <button onclick="buy(${i})" ${
        p.price > balance ? "disabled" : ""
      }>Buy</button>
      </div>`
    )
    .join("");

  balanceEl.textContent = `$${balance.toLocaleString()}`;

  const bought = products.filter((p) => p.count > 0);
  receiptEl.innerHTML = bought
    .map(
      (p) =>
        `<li>${p.name} x${p.count} — $${(
          p.price * p.count
        ).toLocaleString()}</li>`
    )
    .join("");

  const total = bought.reduce((acc, p) => acc + p.price * p.count, 0);
  totalEl.textContent = total ? `TOTAL: $${total.toLocaleString()}` : "";
}

function buy(index) {
  const p = products[index];
  if (balance >= p.price) {
    balance -= p.price;
    p.count++;
    render();
  }
}

function sell(index) {
  const p = products[index];
  if (p.count > 0) {
    balance += p.price;
    p.count--;
    render();
  }
}

render();
