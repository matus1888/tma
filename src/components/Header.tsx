import { Box } from "@mui/material";
import { useUserInfo } from "../hooks";

export const Header = () => {
  const userManager = useUserInfo();
  if (!userManager) {
    return null
  }
  return <Box display="flex">
    <Box>
      hello user {userManager.getUserName()}
    </Box>
    <Box>
      <img src={userManager.getUserAvatar()} />
    </Box>
  </Box>
}
