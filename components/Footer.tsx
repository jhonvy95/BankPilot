import { logoutAccount } from "@/lib/actions/user.actions";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push("/sign-in");
  };

  return (
    <div>
      <Separator className="bg-gray-300" />
      <footer className="footer">
        <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
          <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
        </div>
        <div className={type === "mobile" ? "footer_email-mobile" : "footer_email"}>
          <h1 className="text-14 truncate text-gray-700 font-semibold">{user?.firstName}</h1>
          <p className="text-14 truncate font-normal text-gray-600">{user?.email}</p>
        </div>
        <Button variant="outline" size="icon" onClick={handleLogOut} className="hover:bg-gray-100">
          <LogOut className="h-4 w-4 text-red-400" />
        </Button>
      </footer>
    </div>
  );
};

export default Footer;
