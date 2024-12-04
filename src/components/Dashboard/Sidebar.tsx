import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "@/assets/svgs/logo.svg";
import Image from "next/image";
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        component={Link}
        href="/"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Image src={logo} width={40} height={40} alt="logo" />
        <Typography variant="h6" component="h1">
          Health Care
        </Typography>
      </Stack>
      <div>
        <List>
          {["Inbox", "Starre", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default Sidebar;
