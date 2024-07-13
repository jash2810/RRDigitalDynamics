import { Menu } from "@mui/icons-material";
import { Drawer, IconButton, List, Tab, Tabs, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DrawerComp.css";
import logoimage from '../../Images/RRDigitalHorizontal.png'

function DrawerComp({ pages, links }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(pages, links);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="left"

      >
        <List style={{ paddingTop: "0px" }}>
          <Tabs
            orientation="vertical"
            textColor="white"
            value={value}
            onChange={handleChange}
          >
            {/* <Tab
              label={"RRDigitalDynamics"}
              style={{
                alignItems: "flex-start",
                backgroundColor: "rgb(1, 24, 61)",
                minHeight: "56px",
                width: "190px",
                color: "white",
                textTransform: "capitalize"
              }}
              onClick={() => {
                setOpenDrawer(false);
                navigate("/home");
              }}
              //   disabled={true}
            /> */}
            <div style={{backgroundColor: theme.palette.primary.main, padding: '13px 10px'}}>
            <img src={logoimage} width={'150px'} />
            </div>
            {pages.map((page, key) => (
              <Tab
                style={{
                  alignItems: "flex-start",
                  textTransform: "capitalize",
                }}
                key={key}
                label={page}
                onClick={() => {
                  navigate(links[key]);
                  setOpenDrawer(false);
                  //   const interval = setInterval(() => {
                  //     setOpenDrawer(false);
                  //   }, 500);
                  //   return () => clearInterval(interval);
                }}
              />
            ))}
            <Tab
                style={{
                  alignItems: "flex-start",
                  textTransform: "capitalize",
                }}
                label={'Get A Quote'}
                onClick={() => {
                  navigate('/get-a-quote');
                  setOpenDrawer(false);
                  //   const interval = setInterval(() => {
                  //     setOpenDrawer(false);
                  //   }, 500);
                  //   return () => clearInterval(interval);
                }}
              />
          </Tabs>

          {/* {pages.map((page, key) => (
            <ListItemButton key={key}>
              <ListItemText>{page}</ListItemText>
            </ListItemButton>
          ))} */}
        </List>
      </Drawer>
      <IconButton
        className="menuIcon"
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Menu className="menuButton" />
      </IconButton>
    </>
  );
}

export default DrawerComp;
