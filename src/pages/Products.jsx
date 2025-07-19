import '../styles/products.css'
import Header from '../components/Header';

const productsList = [
  {
    id: 1,
    name: "Cretonne",
    price: 350,
    category: "decorative",
    image: "./img/cret.jpg",
  },
  {
    id: 2,
    name: "Succulent",
    price: 200,
    category: "decorative",
    image: "./img/sucul.jpg",
  },
  {
    id: 3,
    name: "Mint",
    price: 150,
    category: "aromatic",
    image: "./img/ment.jpg",
  },
  {
    id: 4,
    name: "Rosemary",
    price: 200,
    category: "aromatic",
    image: "./img/romero.jpg",
  },
  {
    id: 5,
    name: "Carnation",
    price: 600,
    category: "floral",
    image: "./img/clav.jpg",
  },
  {
    id: 6,
    name: "Orchid",
    price: 850,
    category: "floral",
    image: "./img/orquid.jpg",
  },

];

function Products() {

  const categories=["decorative", "aromatic", "floral"];
  return (    
    <div>
      <Header/>
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