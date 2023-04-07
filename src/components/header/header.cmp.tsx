import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import { config } from "../../configs/config";

const Header = () => {
  return (
    <div className="header-container">
      <AppBar position="static">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Box>
            <Typography variant="h6" noWrap>
              Project Page
            </Typography>
          </Box>
          <Box>
            <Avatar src={config.header.avatarUrl}></Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
