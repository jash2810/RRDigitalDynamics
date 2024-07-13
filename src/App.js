import { Route, Routes } from 'react-router-dom'
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ContactUs from './Pages/ContactUs/ContactUs';
import GetAQuote from './Pages/GetAQuote/GetAQuote';
import Services from './Pages/Services/Services';
import Seo from './Pages/Services/SEO/SEO';
import Ppc from './Pages/Services/PPC/PPC';
import SocialMediaMarketing from './Pages/Services/SocialMediaMarketing/SocialMediaMarketing';
import KnowAboutTeam from './Pages/Home/KnowAboutTeam/KnowAboutTeam';
import Blog from './Pages/Blog/Blog'
import { useEffect, useState } from 'react';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import rrwhite from './Images/RRWhite.png';


const font = "Poppins"

const theme = createTheme({
  typography: {
    fontFamily: font
  },
  palette: {
    primary: { main: '#002868', light: 'rgb(233 241 255)' },
    secondary: { main: '#BF0A30' }
  }
})

function App() {
  const [isVisible, setIsVisible] = useState(window.location.href.split('/').reverse()[0] ? false : true)

  useEffect(() => {
    // Use setTimeout to trigger the fade-out effect after 4 seconds
    const timeoutId = setTimeout(() => {
      console.log(window.location.href.split('/').reverse()[0])
      setIsVisible(false)
    }, 1500); // 4 seconds in milliseconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <div style={{backgroundColor: theme.palette.primary.main, position: 'absolute', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems :'center'}} className={`fade-out ${isVisible ? 'z-index-up' : 'fade-out-hidden z-index-down'}`}>
          <div className='loader-image-div'>
          <img src={rrwhite} style={{width: '100%'}} />
          </div>
        </div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={
            <>
              <Services top={80} />
              <KnowAboutTeam />
            </>

          } />
          <Route path='/services/SEO' element={<Seo />} />
          <Route path='/services/PPC' element={<Ppc />} />
          <Route path='/services/SocialMediaMarketing' element={<SocialMediaMarketing />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/get-a-quote' element={<GetAQuote />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
