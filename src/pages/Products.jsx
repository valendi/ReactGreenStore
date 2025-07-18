import '../styles/products.css'

const productsList = [
  {
    id: 1,
    name: "Cretona",
    price: 350,
    category: "decorative",
    image: "/img/cret.jpg", // Coloca esta imagen en public/images
  },
  {
    id: 2,
    name: "Suculenta",
    price: 200,
    category: "decorative",
    image: "/img/sucul.jpg",
  },
  {
    id: 3,
    name: "Menta",
    price: 150,
    category: "aromatic",
    image: "/img/ment.jpg",
  },
  {
    id: 4,
    name: "Romero",
    price: 200,
    category: "aromatic",
    image: "/img/romero.jpg",
  },
  {
    id: 5,
    name: "Clavel",
    price: 600,
    category: "floral",
    image: "/img/clav.jpg",
  },
  {
    id: 6,
    name: "Orquidea",
    price: 850,
    category: "floral",
    image: "/img/orquid.jpg",
  },

];

function Products() {

  const categories=["decorative", "aromatic", "floral"];
  return (    
    <div>
      {categories.map((cat) => (
        <div className='cat-container' key={cat}>
          <h2>{cat.toUpperCase()}</h2>
          <div className="products">
            {productsList
              .filter((item) => item.category === cat)
              .map((item) => (
                <div className="product-card" key={item.id}>
                  <img src={item.image} alt={item.name} width={300} height={350} />
                  <div className='product-info'>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <button id='cartBTN'>Add to cart</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
