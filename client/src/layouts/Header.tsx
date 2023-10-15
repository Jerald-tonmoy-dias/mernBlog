// import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  IconButton,
  Toolbar,
  Typography,
  Container,
  AppBar,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
export default function Header() {
  const menuList = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/blog", name: "Blog" },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 700,
              }}
            >
              MBlog
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {menuList &&
                menuList.map((ml, idx) => (
                  <NavLink
                    key={idx}
                    to={ml.path}
                    className={({ isActive, isPending }) => {
                      let classes = "header-menu-link"; // Always include this class

                      if (isPending) {
                        classes += " pending"; // Add "pending" class if isPending is true
                      } else if (isActive) {
                        classes += " active"; // Add "active" class if isActive is true
                      }

                      return classes;
                    }}
                  >
                    {ml.name}
                  </NavLink>
                ))}
            </Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
