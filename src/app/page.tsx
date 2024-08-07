import Hero from '../components/Hero/Hero';
import CompanyOverview from '../components/CompanyOverview/CompanyOverview';
import ProductsServices from '../components/ProductsServices/ProductsServices';
import Testimonials from '../components/Testimonials/Testimonial'; // Pastikan nama komponen benar
import VideoSection from '../components/VideoSection/VideoSection'; // Import the VideoSection component
import ContactUs from '../components/contact/contactUs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductsServices />
      <Testimonials />
      <VideoSection />
      <ContactUs/>
    </>
  );
};

export default HomePage;
