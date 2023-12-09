import AcUnitIcon from "@mui/icons-material/AcUnit";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { blueGrey } from "@mui/material/colors";
import { FunctionComponent } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: blueGrey[100],
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <AcUnitIcon />
          </Avatar>
          <Typography
            component="h5"
            variant="subtitle1"
            sx={{
              mx: "1em",
              fontWeight: "bold",
            }}
          >
            Project Name
          </Typography>
        </Box>

        <Box
          sx={{
            minHeight: 0,
            overflow: "hidden auto",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton to="/" component={Link}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton to="/booking" component={Link}>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="Session Booking" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            m: 1,
          }}
        >
          <IconButton
            onClick={handleLogout}
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <LogoutIcon />
          </IconButton>
          <Typography
            component="h5"
            variant="subtitle1"
            sx={{
              mx: "1em",
              fontWeight: "bold",
            }}
          >
            Log out
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
