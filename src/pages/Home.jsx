
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Nfts from "../components/Nfts";
import Main from "../components/Main";
import Bottom from "../components/Bottom";
import Footer from "../components/Footer";

function Home() {
    return <div className="home">
        <Navbar/>
        <Search/>
        <Nfts/>
        <Main/>
        <Bottom/>
        <Footer/>

    </div>;
  }

export default Home;