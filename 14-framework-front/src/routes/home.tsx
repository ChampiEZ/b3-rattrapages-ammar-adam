import { useContext, useState } from "react"
import { AppContext } from "../app.provider"
import { Category } from "../declarations"
import style from './home.module.css'

export default function Home() {
  const [app, setApp] = useContext(AppContext)
  const [category, setCategory] = useState<Category>("all")

  function onChange(e: any) {
    setCategory(e.target.value)
  }

  function onSubmit(e: any, uuid: string) {
    e.preventDefault()
    const next = [...app.products]
    if(+e.target.rating.value > 5 || +e.target.rating.value < 0) return
    next.find(p => p.uuid === uuid)!.rating = [...next.find(p => p.uuid === uuid)!.rating, +e.target.rating.value]
    console.log(next.find(p => p.uuid === uuid)!.rating)
    setApp({...app, products: next})
  }

  return <>
    <div>
      <div className="filters">
        <select value={category} onChange={onChange}>
          <option value="all">tout</option>
          <option value="food">nourriture</option>
          <option value="drink">boisson</option>
          <option value="other">autre</option>
        </select>
      </div>
      <ul className={style.products}>
        {
          app.products.filter(product => category === "all" ? true : product.category === category).map((product, i) => (
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
                <li>quantité: {product.quantity}</li>
                <li>note: {!product.rating.length ? "N/A" : product.rating.reduce((a, b) => a + b, 0) / product.rating.length}</li>
                <li>
                  <form onSubmit={(e) => onSubmit(e, product.uuid)}>
                    <input name="rating" type="number" max={5} min={0} />
                    <input type="submit" value="Noter" />
                  </form>
                </li>
                <li>disponibilité: {product.disponibility ? "disponible" : "indisponible"}</li>
                <li>date d'expiration: {`${product.expirationDate.getDate()}/${product.expirationDate.getMonth()}`}</li>
                <li>date de creation: {`${product.createdAt.getDate()}/${product.createdAt.getMonth()}`}</li>
                <li>categorie: {product.category}</li>
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  </>
}