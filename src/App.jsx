import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/Nav";
import PopularProducts from "./components/popProducts";
import Services from "./components/services";
import SpecOffer from "./components/specOffer";
import Subs from "./components/subs";
import SupQuality from "./components/supQuality";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SupQuality />
    </section>
    <section className="padding padding-x py-10">
      <Services />
    </section>

    <section className="padding">
      <SpecOffer />
    </section>

    <section className="padding sm:py-32 py-16">
      <Subs />
    </section>
    <section className="padding bg-black paddin-x padding-t pb:8">
      <Footer />
    </section>
  </main>
);

export default App;
