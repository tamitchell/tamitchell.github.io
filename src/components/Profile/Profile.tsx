
import FadeUp from "../FadeUp/FadeUp";
import { ProfileContact } from "./ProfileContact";import { ProfileNameAndOccupation } from "./ProfileNameAnDescription";
import { ProfilePicture } from "./ProfilePicture";



export default function Profile(): JSX.Element {
    return <FadeUp cascade className="flex flex-col p-4">
    <ProfilePicture />
    <ProfileNameAndOccupation />
    <ProfileContact />
  </FadeUp>
}