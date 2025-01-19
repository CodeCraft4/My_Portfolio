import { Box } from "@mui/material";
import NavigationBar from "../Navbar/NavigationBar";
import Footer from "../Footer/Footer";

const AppLayout = ({ children }: any) => {
  return (
    <Box>
      <NavigationBar />
      {children}
      <Footer />
    </Box>
  );
};

export default AppLayout;
