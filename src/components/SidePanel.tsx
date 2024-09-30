import Profile from "./Profile/Profile";
import Skills from "./Skills";

export default function SidePanel(): JSX.Element {
   return <div className="w-full h-full border-2 p-4">
      <Profile />
      <Skills />
    </div>
};