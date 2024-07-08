import React, { useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";

const UserSignupverify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);
  };

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
          src="signupverify.png"
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
          <Typography color={"white"} align="left">
            A 4-digit code is sent to your number. Kindly enter that code here
            to activate your account. Thanks
          </Typography>

          {/* OTP Input */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
            mb={2}
          >
            {otp.map((value, index) => (
              <TextField
                key={index}
                value={value}
                onChange={(e) => handleChange(index, e)}
                inputProps={{ maxLength: 1 }}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 0.5rem",
                  fontSize: "2rem",
                  textAlign: "center",
                  backgroundColor: "white", // Set background color to white
                  color: "black", // Set text color to black
                }}
              />
            ))}
          </Box>
          <Typography color={"white"} align="left">
            Resend confirmation code (1:07)
          </Typography>

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
              Verify Code
            </Button>
            <Button
              variant="contained"
              sx={{ width: "48%", borderRadius: "50px" }} // Adjusted width and border radius
            >
              Save
            </Button>
          </Box>

          <Typography
            color={"white"}
            align="start"
            sx={{ width: "100%", marginTop: 2 }}
          >
            Already Have an account? SignIn
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserSignupverify;
