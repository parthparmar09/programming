import BodyType from "../components/Home/BodyTypes";
import Brands from "../components/Home/Brands";
import BuyGuide from "../components/Home/BuyGuide";
import Faqs from "../components/Home/Faqs";
import Price from "../components/Home/Price";
import ContactUs from "../components/Home/ContactUs";

export default function Home() {
  return (
    <>
      <BuyGuide />
      <Brands />
      <Price />
      <BodyType />
      <Faqs />
      <ContactUs />
    </>
  );
}
