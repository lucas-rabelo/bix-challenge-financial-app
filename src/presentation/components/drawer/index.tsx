import {
  List,
  ListItemButton,
  ListItemText,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { Sidebar } from "./styles";
import { useAuth } from "@/presentation/hooks/use-auth";
import { useRouter } from "next/navigation";

export type DrawerProps = MuiDrawerProps;

export function Drawer({ ...rest }: DrawerProps) {
  const { logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace("/login");
}

  return(
    <MuiDrawer {...rest}>
      <Sidebar>
        <List>
          <ListItemButton>
            <HomeIcon sx={{ mr: 1 }} />
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton onClick={handleLogout}>
            <LogoutIcon sx={{ mr: 1 }} />
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Sidebar>
    </MuiDrawer>
    
  )
}