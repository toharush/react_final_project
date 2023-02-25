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
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useState } from "react";
import Authentication from "../features/authentication/authentication";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logout } from "../services/authentication";
import useNavbarPrefrences from "../hooks/useNavbarPrefrences";
import { isAdmin } from "../store/selectors/selectors";
import NavbarPageMenu from "../components/navbarPageMenu/navbarPageMenu";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const admin = useSelector(isAdmin);
  const navbarPrefrences = useNavbarPrefrences();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [login, setLogin] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting.name === "Login") {
      setLogin(true);
    }
    if (setting.name === "Logout") {
      dispatch(logout());
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      variant="elevation"
      style={{ backgroundColor: "#191A19" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavbarPageMenu admin={admin} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
