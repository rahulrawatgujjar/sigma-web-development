import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Admin-Logout: Facebook- Connects with friends and world around you",
  description: "Admin-Logout: Facebook is a social utlity that connects poeple with friends",
};

export default function AdminLogoutLayout({ children }) {
  return (
    <>
      <div className="text-violet-500">Logout Navbar</div>
      {children}
    </>
  );
}
