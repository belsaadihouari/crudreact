import Header from "../header/header";
import Footer from "../footer/footer";
import { ReactNode } from "react";


interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
