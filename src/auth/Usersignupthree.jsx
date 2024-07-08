import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const Usersignupthree = () => {
  return (
    <Grid
      container
      sx={{
        width: { xs: "100%", md: "100%", lg: "100%" },
        height: { xs: "100%", md: "100%", lg: "90vh" },
      }}
    >
      <Grid
        container
        item
        sx={{
          width: { xs: "100%", md: "100%", lg: "55%" },
          height: { xs: "auto", md: "auto", lg: "100%" },
          alignitems: { xs: "center", md: "center" },
          justifyContent: { xs: "center", md: "center" },
        }}
      >
        <Box
          component="img"
          src="signup1pic.png"
          alt=""
          sx={{
            width: { xs: "70%", md: "70%", lg: "100%" },
            height: { md: "auto", xs: "auto", lg: "90%" },
            padding: 2,
            boxSizing: "border-box",
            alignSelf: { xs: "center", md: "center" },
            justifySelf: { xs: "center", md: "center" },
          }}
        />
      </Grid>
      <Grid
        container
        item
        sx={{ width: { xs: "100%", md: "100%", lg: "45%" }, height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            width: { xs: "80%", md: "80%", lg: "50%" },
            height: "auto",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "center", lg: "start" },
            justifyContent: { xs: "center", md: "center" },
            gap: 2,
            padding: 2,
            marginLeft: "2rem",
          }}
        >
          <Typography variant="h4" color={"white"} align="left">
            RAFFLE MANIA
          </Typography>
          <Typography color={"white"} align="left">
            SIGNUP
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="myimg.png"
            sx={{ width: "80px", height: "80px", alignSelf: "center" }}
          />

          <TextField
            id="input-with-icon-textfield"
            label="Date of birth"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ width: "100%" }}
          />
          <TextField
            id="input-with-icon-textfield"
            label="Phone"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ width: "100%" }}
          />
          <TextField
            id="input-with-icon-textfield"
            label="Postal Address"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ width: "100%" }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              variant="outlined"
              sx={{ width: "48%", borderRadius: "50px" }} // Adjusted width and border radius
            >
              Back
            </Button>
            <Button
              variant="contained"
              sx={{ width: "48%", borderRadius: "50px" }} // Adjusted width and border radius
            >
              Next
            </Button>
          </Box>

          <Typography
            color={"white"}
            align="center"
            sx={{ width: "100%", marginTop: 2 }}
          >
            Already Have an account? SignIn
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Usersignupthree;
