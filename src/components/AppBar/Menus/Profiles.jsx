import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

function Profiles() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{ width: 34, height: 34 }}
            alt="tung"
            src="data:image/jpeg;base64,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"
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profiles;
