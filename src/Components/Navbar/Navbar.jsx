import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DrawerComp from "../DrawerComp/DrawerComp";
import "./Navbar.css";
import logoimage from '../../Images/RRDigitalHorizontal.png'

function Navbar() {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery("(max-width:480px)");

  const PAGES = [
    "Home", 
    "About Us", 
    "Contact Us", 
    "Services"
  ];
  const LINKS = [
    "/", 
    "/about-us", 
    "/contact-us", 
    "/services"
  ];

  const [navbarTransparent, setNavbarTransparent] = useState("transparent");
  const [currentURL, setCurrentURL] = useState(localStorage.getItem('active-page') && '/' );

  useEffect(() => {
    if (currentURL === "/") {
      window.onscroll = function () {
        var scrollLimit = 800;
        if (window.scrollY >= scrollLimit) {
          setNavbarTransparent(theme.palette.primary.main);
        } else {
          setNavbarTransparent("transparent");
        }
      };
    } else {
      setNavbarTransparent(theme.palette.primary.main);
    }
  }, []);

  const getaquotebgc = (currentURL === '/get-a-quote' ? 'white' : '')
  const getaquotetxt = (currentURL === '/get-a-quote' ? '#002868' : 'white')
  return (
    <React.Fragment>
      <AppBar
        style={{
          backgroundColor: navbarTransparent,
          boxShadow: "none",
          background:
            "linear-gradient(rgb(26 79 163), rgb(7 35 83)) rgb(227 228 229)",
          borderRadius: "1px",
          height: isMatch ? "64px" : "77px",
        }}
      >
        <Toolbar style={{width: '100%'}}>
          {isMatch ? (
            <>
              <DrawerComp pages={PAGES} links={LINKS} />
              <img src={logoimage} width={"100px"} />
            </>
          ) : (
            <>
              <img src={logoimage} width={"200px"} />
              <Tabs textColor="white" value={1} style={{width: '100%', paddingLeft: '200px'}}>
                {PAGES.map((page, key) => {
                  function functionGetClass() {
                    if (currentURL === LINKS[key]) {
                      return 'Mui-selected active-button'
                    } else {
                      return 'Mui-selected'
                    }
                  }
                  return(
                  <Link to={LINKS[key]} className="tablinks">
                    <Tab
                      
                      style={{ textTransform: "capitalize",width:'8rem',justifyContent:'space-evenly' }}
                      label={<span style={{ color: "white",fontSize:'1rem' }}>{page}</span>}
                      key={key}
                      className={functionGetClass()} // changes dimed color to bright colors
                      onClick={() => {
                        setCurrentURL(LINKS[key])
                        localStorage.setItem('active-page', LINKS[key])
                      }}
                    />
                  </Link>
                )})}
                <Link to={'/get-a-quote'} className="tablinks">
                  <Tab
                    
                    style={{ textTransform: "capitalize",width:'11rem',justifyContent:'space-evenly', position: 'absolute', right: '50px', border: '2px solid white', backgroundColor: `${getaquotebgc}` }}
                    label={<span style={{ color: `${getaquotetxt}`,fontSize:'1rem' }}>Get A Quote</span>}
                    className="Mui-selected" // changes dimed color to bright colors
                    onClick={() => setCurrentURL('/get-a-quote')}
                    
                  />
                </Link>
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
