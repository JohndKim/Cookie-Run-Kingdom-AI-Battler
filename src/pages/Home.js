import Navbar from '../components/universal/Navbar';
import Banner from '../components/banner/Banner';
import BannerImage from '../components/banner/BannerImage'


export default function Home() {
  return (
    <>
      <div>
        <Navbar/>
        {/* <BannerImage /> */}
        <Banner />
      </div>
    </>
  );
}