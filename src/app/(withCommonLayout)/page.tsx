import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "../../components/ui/HomePage/WhyUs/WhyUs";
import HowItWorks from "../../components/ui/HomePage/HowItWorks/HowItWorks";
import Stats from "@/components/ui/HomePage/Stats/Stats";


const HomePage = () => {
  return (
    <>
       <HeroSection/>
       <Specialist/>
       <TopRatedDoctors/>
       <WhyUs/>
       <HowItWorks/>
       <Stats/>
    </>
  );
};

export default HomePage;