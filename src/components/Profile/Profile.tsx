
import FadeUp from "../FadeUp/FadeUp";
import { ProfileContact } from "./ProfileContact";import { ProfileNameAndOccupation } from "./ProfileNameAnDescription";
import { ProfilePicture } from "./ProfilePicture";



export default function Profile(): JSX.Element {
    return <FadeUp cascade className="flex flex-col px-4 py-0">
    <ProfilePicture />
    <ProfileNameAndOccupation />
    <ProfileContact />
  </FadeUp>
}