import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import Authentication from "../features/authentication/authentication";
import useNavbarPrefrences from "../hooks/useNavbarPrefrences";
import { SearchProducts } from "../features/productsList";
import { signout } from "../services/authentication";
import useWs from "../hooks/useWs";
import { getCurrentUser, isAdmin } from "../store/selectors/selectors";
import { useSelector } from "react-redux";
import ProfileImage from "../components/profileImage/profileImage";

const Navbar = () => {
  const navbarPrefrences = useNavbarPrefrences();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [login, setLogin] = useState(false);
  const user = useSelector(getCurrentUser);
  const admin = useSelector(isAdmin);
  useWs({ isAdmin: admin });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting.name === "Login") {
      setLogin(true);
    }
    if (setting.name === "Logout") {
      signout();
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      variant="elevation"
      style={{ backgroundColor: "#191A19" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navbarPrefrences.pages.map((page) => (
                <Link
                  to={page.route}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navbarPrefrences.pages.map((page) => (
              <Button
                key={page.route}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  to={page.route}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          <SearchProducts />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ProfileImage id={user?.uid} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {navbarPrefrences.settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Authentication isOpen={login} setIsOpen={() => setLogin(false)} />
    </AppBar>
  );
};
export default Navbar;
