
import { Nav, Footer, Hero, Services, Subscribe, SuperQuality, PopularProducts, CustomerReviews, SpecialOffer  } from './sections'


const App = () => (
  <main>
  < Nav />
    <section className="xl:paddig-l wide:padding-r padding-b">
   <  Hero />
      </section>
    <section className="padding">
    <  PopularProducts/>
      </section>
    <section className="padding">
    <  SuperQuality/>
      </section>
    <section className="padding">
    <  Services/>
      </section>
    <section>
    <  SpecialOffer/>
      </section>
    <section className="bg-pale-blue padding">
    <  CustomerReviews/>
      </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <  Subscribe/>
      </section>
    <section className="bg-black padding-x padding-t pb-8">
    <  Footer/>
      </section>

  </main>
)

export default App
