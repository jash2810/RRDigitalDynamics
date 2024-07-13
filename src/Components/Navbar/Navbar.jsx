import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState, useRef, createRef } from "react";
import { Link } from "react-router-dom";
import DrawerComp from "../DrawerComp/DrawerComp";
import "./Navbar.css";
import logoimage from "../../Images/RRDigitalHorizontal.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
function Navbar() {
  const PAGES = ["Home", "Services", "About Us", "Contact Us"];
  const items = [
    {
      name: "Home ",
      color: "#6082B6",
      href: "/",
    },
    {
      name: "Services",
      color: "#6082B6",
      href: "/services",
    },
    {
      name: "About Us",
      color: "#6082B6",
      href: "/about-us",
    },
    {
      name: "Contact Us",
      color: "#6082B6",
      href: "/contact-us",
    },
    {
      name: "Blog",
      color: "#6082B6",
      href: "/blog",
    },
  ];
  const LINKS = ["/", "/services", "/about-us", "/contact-us","/blog"];
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = useTheme();
  const isMatch = useMediaQuery("(max-width:480px)");

  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(createRef));
  const [navbarTransparent, setNavbarTransparent] = useState("transparent");
  const [currentURL, setCurrentURL] = useState('');
  const getaquotebgc = currentURL === "/get-a-quote" ? "#008080" : "";
  const getaquotetxt = currentURL === "/get-a-quote" ? "#002868" : "#008080";
  // active page = ''
  const [active, setActive] = useState(
    LINKS.indexOf('/'+window.location.href.split('/').reverse()[0]) || 5
  );
  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();
    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: "elastic.out(.7, .7)",
      duration: 0.8,
    };

    gsap.to($indicator1.current, {
      ...settings,
    });

    gsap.to($indicator2.current, {
      ...settings,
      duration: 1,
    });
  };
  useEffect(() => {
    setCurrentIndex(LINKS.indexOf('/'+window.location.href.split('/').reverse()[0]))
    setActive(LINKS.indexOf('/'+window.location.href.split('/').reverse()[0]))
    setCurrentURL(window.location.href.split('/').reverse()[0] ? '/'+window.location.href.split('/').reverse()[0] : '')
    // setting current url to HOME
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
  useEffect(() => {
    localStorage.clear();
    if (active !== 5) {
      animate();
      window.addEventListener("resize", animate);
      return () => {
        window.removeEventListener("resize", animate);
      };
    }
  }, [active]);

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
        <Toolbar style={{ width: "100%" }}>
          {isMatch ? (
            // when mobile screen
            <>
              <DrawerComp pages={PAGES} links={LINKS} />
              <img src={logoimage} width={"100px"} />
            </>
          ) : (
            // when full screen
            <>
              <Link to={"/"}>
                <img src={logoimage} width={"200px"} />
              </Link>
              <div ref={$root} className="menu">
                {items.map((item, index) => (
                  <a
                    key={item.name}
                    ref={$items.current[index]}
                    className={`item ${active === index ? "active" : ""}`}
                    onMouseEnter={() => {
                      setActive(index);
                    }}
                    onMouseLeave={() => {
                      setActive(currentIndex);
                    }}
                    onClick={() => {
                      setActive(index);
                      setCurrentIndex(index)
                      localStorage.setItem("active-page", index);
                    }}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                ))}
                <div ref={$indicator1} className="indicator" />
                <div ref={$indicator2} className="indicator" />
              </div>
              <Link to={"/get-a-quote"} className="tablinks">
                <Tab
                  style={{
                    textTransform: "capitalize",
                    width: "9rem",
                    justifyContent: "space-evenly",
                    right: "50px",
                    border: "0.75px solid #008080",
                    borderRadius: "3px",
                    backgroundColor: `${getaquotebgc}`,
                  }}
                  label={
                    <span style={{ color: `#ffff`, fontSize: "1rem" }}>
                      Get A Quote
                    </span>
                  }
                  className="Mui-selected" // changes dimed color to bright colors
                  onClick={() => {
                    setCurrentURL("/get-a-quote");
                    setActive(5);
                  }}
                />
              </Link>

              {/* <Tabs textColor="white" value={1} style={{width: '100%', paddingLeft: '200px'}}>
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
              </Tabs> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
