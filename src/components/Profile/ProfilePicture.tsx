import { profilePic } from "../../data/text";

export function ProfilePicture(): JSX.Element {
    return (
      <div className="w-[12em] h-[12em] self-center rounded-full overflow-hidden border-4 border-blue-cornflower mb-4 animate-fadeUp">
        <img
          onContextMenu={(e) => e.preventDefault()}
          src={profilePic}
          alt="The developer"
          className="object-cover w-full h-full"
        />
      </div>
    );
  }