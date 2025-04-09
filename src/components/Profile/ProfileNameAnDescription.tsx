import { profileData } from "../../data/text";

export function ProfileNameAndOccupation(): JSX.Element {
    return (
      <div className="text-center mb-2 animate-fadeUp">
        <h1 className="text-3xl font-bold uppercase">{profileData.name}</h1>
        <h4 className="text-md font-light uppercase">
          {profileData.occupationPrimary} | {profileData.occupationSecondary}
        </h4>
      </div>
    );
  }
