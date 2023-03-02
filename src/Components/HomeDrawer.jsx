import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function HomeDrawer() {
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Drawer variant="persistent" anchor="left" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            width: 240,
            justifyContent: "space-between",
          }}
        >
          <Avatar sx={{ bgcolor: "#757ce8" }}>FW</Avatar>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Start", "Todo List", "Collector"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Button type="primary" onClick={handleDrawerOpen}>
        Open
      </Button>
    </Box>
  );
}

export default HomeDrawer;
