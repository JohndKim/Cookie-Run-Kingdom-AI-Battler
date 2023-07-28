import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import BannerImage from '../components/BannerImage'


export default function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <BannerImage />
        {/* <Banner /> */}
      </div>
    </>
  );
}