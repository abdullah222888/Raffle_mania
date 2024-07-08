import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MessageIcon from "@mui/icons-material/Message";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        width: { xs: "100%", md: "100%", lg: "100%" },
        height: { xs: "auto", md: "auto", lg: "10rem" },
        backgroundColor: "#070917",
        flexDirection: { xs: "column", md: "column", lg: "row" },
        gap: "1rem",
        justifyContent: { xs: "center", md: "center" },
        alignItems: { xs: "center", md: "center" },
      }}
    >
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "100%", lg: "35%" },
          height: { xs: "auto", md: "auto", lg: "100%" },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "30px",
          paddingLeft: "20px",
        }}
      >
        <Typography color={"white"}>STAY CONNECTED</Typography>
        <Stack
          sx={{
            color: "white",
            gap: "0.7rem",
            flexDirection: "row",
            marginTop: "0.5rem",
          }}
        >
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <MessageIcon />
          <WhatsAppIcon />
        </Stack>
        <Typography sx={{ color: "white" }}>
          Copyright@2010-2021 Raffle Mania.All rights reserved
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "100%", lg: "20%" },
          gap: "0.3rem",
          height: "auto",
          flexDirection: "column",
          color: "white",
          paddingTop: "20px",
          // Changes start here
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Changes end here
        }}
      >
        <Typography>SHOPPING WITH US</Typography>
        <Typography fontSize={"14px"}>Marketing Options</Typography>
        <Typography fontSize={"14px"}>Delivery Options</Typography>
        <Typography fontSize={"14px"}>Buyer Options</Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "100%", lg: "20%" },
          gap: "0.3rem",
          height: "auto",
          flexDirection: "column",
          color: "white",
          paddingTop: "20px",
          // Changes start here
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Changes end here
        }}
      >
        <Typography>CUSTOMER SERVICE</Typography>
        <Typography fontSize={"14px"}>Customer Service</Typography>
        <Typography fontSize={"14px"}>Transaction Service</Typography>
        <Typography fontSize={"14px"}>Take our feedback service</Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: "100%", md: "100%", lg: "20%" },
          gap: "0.3rem",
          height: "auto",
          flexDirection: "column",
          color: "white",
          paddingTop: "20px",
          // Changes start here
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Changes end here
        }}
      >
        <Typography>COLLABORATE WITH US</Typography>
        <Typography fontSize={"14px"}>Partnerships</Typography>
        <Typography fontSize={"14px"}>Affiliate Program</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
