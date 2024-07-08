import React, { useState } from "react";
import {
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <List
      sx={{ width: 250 }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {["HOME", "MY ORDERS", "MESSAGE", "SIGN IN"].map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          height: "60px",
          backgroundColor: "#050A30",
          padding: "0.7rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "100%", md: "auto" },
            justifyContent: { xs: "space-between", md: "flex-start" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="raffle-logo.png" alt="Logo" />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <NotificationsIcon />
            <ShoppingCartIcon />
            <PersonIcon />
          </Box>
        </Grid>
        <Grid
          container
          sx={{
            display: { xs: "none", md: "flex" },
            width: "50%",
            color: "white",
            listStyleType: "none",
            gap: "2rem",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <li>HOME</li>
          <li>MY ORDERS</li>
          <li>MESSAGE</li>
          <li>SIGN IN</li>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", md: "flex" },
            color: "white",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <NotificationsIcon />
          <ShoppingCartIcon />
          <PersonIcon />
        </Grid>
      </Grid>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default Navbar;
