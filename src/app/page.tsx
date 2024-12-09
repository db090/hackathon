import TopHeader from "./components/topHeader";
import Header from "./components/header";
import Hero from "./components/hero";
import Featured from "./components/featured";
import DontMiss from "./components/dontMiss";
import Essentials from "./components/essentials";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Best from "./components/best";
import Gear from "./components/gear";
import MobTopHeader from "./mobileComponents/mobTopHeader";
import MobHero from "./mobileComponents/mobHero";
import MobBest from "./mobileComponents/mobBest";
import MobFeatured from "./mobileComponents/mobFeatured";
import MobGear from "./mobileComponents/mobGear";
import MobDont from "./mobileComponents/mobDont";
import MobEssentials from "./mobileComponents/mobEssentials";
import MobNavigation from "./mobileComponents/mobNavigation";
import MobFooter from "./mobileComponents/mobFooter";

export default function Home() {
  return (
    <>
  {/* Desktop View */}
  <div className="hidden sm:block">
    <TopHeader />
    <Header />
    <Hero />
    <Best />
    <Featured />
    <Gear />
    <DontMiss />
    <Essentials />
    <Navigation />
    <Footer />
  </div>

  {/* Mobile View */}
  <div className="sm:hidden">
    <MobTopHeader />
    <MobHero />
    <MobBest />
    <MobFeatured />
    <MobGear />
    <MobDont />
    <MobEssentials />
    <MobNavigation />
    <MobFooter />
  </div>
</>

  );
}
