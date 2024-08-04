import { useContext } from "react"
import { AppContext } from "../app.provider"
import style from './admin.module.css'

export default function Admin() {
  const [app, setApp] = useContext(AppContext)

  function onSubmit(e: any) {
    e.preventDefault();

    const { target } = e

    const formData = {
      uuid: crypto.randomUUID(),
      name: target.name.value,
      description: target.description.value,
      price: +target.price.value,
      quantity: +target.quantity.value,
      disponibility: target.disponibility.value === "on",
      illustration: target.illustration.value,
      expirationDate: new Date(target.expirationDate.value),
      category: target.category.value,
      rating: [],
      createdAt: new Date(),
    }

    setApp({...app, products: [formData, ...app.products]})
  }

  function onclick(uuid: string) {
    setApp({...app, products: app.products.filter((product) => product.uuid !== uuid)})
  }

  function add1(uuid: string) {
    const next = [...app.products]
    next.find(p => p.uuid === uuid)!.quantity += 1
    setApp({...app, products: next})
  }

  function remove1(uuid: string) {
    const next = [...app.products]
    if(next.find(p => p.uuid === uuid)!.quantity === 0) return
    next.find(p => p.uuid === uuid)!.quantity -= 1
    setApp({...app, products: next})
  }

  return <>
    <div>
      <form className={style.form} onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="description">
            Description
          </label>
          <textarea name="description" cols={30} rows={4}></textarea>
        </div>
        <div>
          <label htmlFor="price">
            Prix
          </label>
          <input type="number" name="price" />
        </div>
        <div>
          <label htmlFor="quantity">
            Quantité
          </label>
          <input type="number" name="quantity" />
        </div>
        <div>
          <label htmlFor="disponibility">
            Disponibilité
          </label>
          <input type="checkbox" name="disponibility" />
        </div>
        <div>
          <label htmlFor="illustration">
            Illustration
          </label>
          <input type="text" name="illustration" />
        </div>
        <div>
          <label htmlFor="expirationDate">
            Date d'expiration
          </label>
          <input type="date" name="expirationDate" />
        </div>
        <div>
          <label htmlFor="category">Catégorie</label>
          <select name="category">
            <option value="food">nourriture</option>
            <option value="drink">boisson</option>
            <option value="other">autre</option>
          </select>
        </div>
        <input type="submit" value="submit" />
      </form>

      <ul className={style.products}>
        {
          app.products.map((product, i) => (
            <li key={product.uuid} className={style.product}>
              <div className={style.top}>
                <img src={product.illustration} alt="product illustration" />
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </div>
              </div>
              <ul>
                <li>prix: {product.price}</li>
                <li>quantité: {product.quantity}<span><button onClick={() => add1(product.uuid)}>+</button><button onClick={() => remove1(product.uuid)}>-</button></span></li>
                <li>note: {!product.rating.length ? "N/A" : product.rating.reduce((a, b) => a + b, 0) / product.rating.length}</li>
                <li>disponibilité: {product.disponibility ? "disponible" : "indisponible"} </li>
                <li>date d'expiration: {`${product.expirationDate.getDate()}/${product.expirationDate.getMonth()}`}</li>
                <li>date de creation: {`${product.createdAt.getDate()}/${product.createdAt.getMonth()}`}</li>
                <li>categorie: {product.category}</li>
              </ul>

              <button onClick={() => onclick(product.uuid)}>SUPPRIMER</button>
            </li>
          ))
        }
      </ul>
    </div>


  </>
}