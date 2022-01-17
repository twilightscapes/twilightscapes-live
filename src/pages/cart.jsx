import * as React from "react"
// import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { StoreContext } from "../context/store-context"
import { LineItem } from "../components/line-item"
import { formatPrice } from "../utils/format-price"
import { FaHandPointDown } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'

import { Helmet } from "react-helmet"

import {
  table,
  wrap,
  totals,
  grandTotal,
  summary,
  checkoutButton,
  collapseColumn,
  labelColumn,
  imageHeader,
  productHeader,
  emptyStateContainer,
  emptyStateHeading,
  // emptyStateLink,
  title,
} from "./cart.module.css"

export default function CartPage() {
  const { checkout, loading } = React.useContext(StoreContext)
  const emptyCart = checkout.lineItems.length === 0

  const handleCheckout = () => {
    window.location.replace(checkout.webUrl)


  }

  return (
<>
<Helmet>
    <body className="carto" />
</Helmet>




    <Layout>
      <div className={wrap} style={{minHeight:'100vh' }}>
        {emptyCart ? (
          <div className={emptyStateContainer} style={{paddingTop:'5rem'}}>
            <h1 className={emptyStateHeading}>Your cart is empty</h1>
            <p>
              Looks like you haven’t found anything yet. We understand that
              sometimes it’s hard to choose — maybe this helps:
            </p>
            {/* <Link to="/search?s=BEST_SELLING" className={emptyStateLink}>
              View trending Twilightscapes
            </Link> */}

            <h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'10vh auto 0 auto'}}>Pre-order questions?</h3>

<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation>

          </div>

        ) : (
          <>
            <h1 className={title}>Your cart</h1>
            <div className="has-app promocode1" style={{textAlign:'center', fontSize:'30px', margin:'0 0 2rem 0'}}>
30% OFF CODE: <span style={{color:'var(--primary-color)', fontWeight:'bold'}}>LoveTheNight</span>
</div>
            <table className={table} style={{border:''}}>
              <thead>
                <tr>
                  <th className={imageHeader}>Image</th>
                  <th className={productHeader}>Your New Twilightscape:</th>
                  <th className={collapseColumn}>Price</th>
                  <th></th>
                  <th className={[totals, collapseColumn].join(" ")}>Total</th>
                </tr>
              </thead>
              <tbody>
                {checkout.lineItems.map((item) => (
                  <LineItem item={item} key={item.id} />
                ))}

                <tr className={summary}>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={labelColumn}>Subtotal</td>
                  <td className={totals}>
                    {formatPrice(
                      checkout.subtotalPriceV2.currencyCode,
                      checkout.subtotalPriceV2.amount
                    )}
                  </td>
                </tr>
                <tr className={summary}>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={labelColumn}>Taxes</td>
                  <td className={totals}>
                    {formatPrice(
                      checkout.totalTaxV2.currencyCode,
                      checkout.totalTaxV2.amount
                    )}
                  </td>
                </tr>
                {/* <tr className={summary}>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={labelColumn}>Shipping</td>
                  <td className={totals}>Calculated at checkout</td>
                </tr> */}
                <tr className={grandTotal}>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={collapseColumn}></td>
                  <td className={labelColumn}>Total Price</td>
                  <td className={totals}>
                    {formatPrice(
                      checkout.totalPriceV2.currencyCode,
                      checkout.totalPriceV2.amount
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className={checkoutButton}
            >
              Checkout
            </button>

            
          </>
        )}
      </div>
      <div className="spacer66"></div>
      <br /><br />
    </Layout>
    </>
  )
}
