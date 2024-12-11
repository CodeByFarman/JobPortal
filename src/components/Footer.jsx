import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  Container,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "aliceblue", // Alice Blue background
        padding: "40px 0",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Description Section */}
          <Grid item xs={12} md={8}>
            <Link href="/" underline="none">
              <img
                src="WF_logo-0001.jpg"
                alt="jobhub"
                width="138"
                height="43"
              />
            </Link>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginTop: 2, lineHeight: 1.8 }}
            >
              Welcome to WorkFindz Consultants, Your Gateway to Top Talent and
              Career Opportunities. At WorkFindz Consultants, we connect skilled
              professionals with leading companies to drive mutual success.
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginTop: 2, fontWeight: 500 }}
            >
              Copyright ©2021{" "}
              <Link href="/" underline="hover" color="inherit">
                <strong>WorkFindz</strong>
              </Link>
              . All Rights Reserved.
            </Typography>
          </Grid>

          {/* Company Links Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "right" } }}
          >
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Box
              component="ul"
              sx={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              <li>
                <Link href="/about" underline="hover" color="inherit">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/About#team" underline="hover" color="inherit">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/Contact" underline="hover" color="inherit">
                  Contact Us
                </Link>
              </li>
            </Box>
          </Grid>
        </Grid>

        {/* Social Media Icons */}
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 4,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="textSecondary">
              Stay connected with us on social media!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
