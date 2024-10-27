/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState, lazy } from "react";
import { black, sand } from "../../constants/color";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const SearchDailog = lazy(() => import("../specific/Search"));
const NewNotification = lazy(() => import("../specific/Notifications"));
const NewGroup = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isNewGroupOpen, setNewGroupOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    console.log("Mobile Menu Opened");
    setMobileMenuOpen((prev) => !prev);
  };

  const handleSearch = () => {
    console.log("Search Clicked");
    setSearchOpen((prev) => !prev);
  };

  const handleAdd = () => {
    console.log("Add Clicked");
    setNewGroupOpen((prev) => !prev);
  };

  const navigatetoGroup = () => {
    navigate("/group");
  };

  const handleLogout = () => {
    console.log("Log Out");
  };

  const handleNotification = () => {
    console.log("Notification Clicked");
    setNotificationOpen((prev) => !prev);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
        height={"4rem"}
      >
        <AppBar
          position="static"
          sx={{
            bgcolor: sand,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              color={black}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              Chatopia
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              <IconButton color="inherit" onClick={handleMobileMenuOpen}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn
                tooltip="Search"
                onClick={handleSearch}
                icon={<SearchIcon />}
              />
              <IconBtn
                tooltip="New Group"
                onClick={handleAdd}
                icon={<AddIcon />}
              />
              <IconBtn
                tooltip="Manage Group"
                onClick={navigatetoGroup}
                icon={<GroupIcon />}
              />
              <IconBtn
                tooltip="Notifications"
                onClick={handleNotification}
                icon={<NotificationsIcon />}
              />
              <IconBtn
                tooltip="Logout"
                onClick={handleLogout}
                icon={<LogoutIcon />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearchOpen && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDailog />
        </Suspense>
      )}
       {isNotificationOpen && (
        <Suspense fallback={<Backdrop open />}>
          <NewNotification />
        </Suspense>
      )}
       {isNewGroupOpen && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroup />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ icon, onClick, tooltip }) => {
  return (
    <Tooltip title={tooltip} arrow>
      <IconButton
        color="inherit"
        size="large"
        sx={{
          color: black,
        }}
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
