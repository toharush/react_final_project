import {
    Box,
    IconButton,
    Typography,
    Menu,
    Button,
    MenuItem,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import AdbIcon from "@mui/icons-material/Adb";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  
  const NavbarPageMenu = ({ admin }) => {
    const pages = [
      { name: "Browse", route: "products" },
      { name: "Cart", route: "cart" },
    ];
    const adminPages = [{ name: "Admin Panel", route: "admin" }];
    const [anchorElNav, setAnchorElNav] = useState(null);
  
    return (
      <>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Terminal
        </Typography>
  
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={(event) => setAnchorElNav(event.currentTarget)}
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
            onClose={() => setAnchorElNav(null)}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <Link to={page.route} key={page.route}>
                <MenuItem key={page.route}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              </Link>
            ))}
            {Boolean(admin) &&
              adminPages.map((page) => (
                <Link to={page.route} key={page.route}>
                  <MenuItem key={page.route}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
          }}
        >
          Terminal
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button key={page.route}>
              <Link to={page.route}>{page.name}</Link>
            </Button>
          ))}
          {Boolean(admin) &&
            adminPages.map((page) => (
              <Button key={page.route}>
                <Link to={page.route}>{page.name}</Link>
              </Button>
            ))}
        </Box>
      </>
    );
  };
  
  export default NavbarPageMenu;
  