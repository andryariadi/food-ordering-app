import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Notifications from "@/components/Notification";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <main>
        <Notifications />
        <Navbar />
        <Slider />
        <Featured />
        <Offer />
        <Footer />
      </main>
    </>
  );
}
