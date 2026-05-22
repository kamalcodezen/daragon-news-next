import Navbar from "@/components/shared/Navbar";
import { poppins } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${poppins.className}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
