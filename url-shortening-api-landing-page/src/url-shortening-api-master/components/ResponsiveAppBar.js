import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { ReactComponent as Logo } from "../images/logo.svg";

const pages = ["Features", "Pricing", "Resources"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="secondary" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* desktop screen */}
          <IconButton sx={{ display: { xs: "none", sm: "flex" }, mr: 2 }}>
            <Logo fill="hsl(260, 8%, 14%)" />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, color: "inherit", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button sx={{ color: "inherit", mr: 2 }}>Login</Button>
            <Button variant="cyanBg" sx={{ borderRadius: 5 }}>
              SignUp
            </Button>
          </Box>

          {/* mobile screen */}
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ display: { xs: "flex", sm: "none" }, pt: 2, width: "100%" }}
          >
            <IconButton sx={{ display: { xs: "flex", sm: "none" }, mr: 1 }}>
              <Logo fill="hsl(260, 8%, 14%)" />
            </IconButton>
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton
                sx={{ fontSize: "2.1rem", p: 0 }}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: {
                    width: "90%",
                    backgroundColor: "hsl(257, 27%, 26%)",
                    borderRadius: 3,
                    // py: 2,
                    p: 2,
                  },
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "flex", sm: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography textAlign="center" color="#fff">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
                <Divider sx={{ borderColor: "neutral.lightGray" }} />
                {/* TODO: 
								insert login&signup buttons
								*/}
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Button sx={{ fontSize: "1rem" }}>Login</Button>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="cyanBg"
                    fullWidth
                    sx={{ borderRadius: 5, fontSize: "1rem" }}
                  >
                    SignUp
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
