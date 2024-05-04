import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Admin: Facebook- Connects with friends and world around you",
  description: "Admin: Facebook is a social utlity that connects poeple with friends",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <div className="text-violet-500">Admin Navbar</div>
      {children}
    </>
  );
}
