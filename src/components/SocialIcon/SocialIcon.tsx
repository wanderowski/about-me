import Image from "next/image";
import Link from "next/link";

interface ISocialIconProps {
  type: string;
  href: string;
}

function SocialIcon(props: ISocialIconProps) {
  const { type, href } = props;

  const getTitle = () => {
    if (type === "gm") {
      return "/icon_gmail.png";
    }
    if (type === "tg") {
      return "/icon_telegram.png";
    }

    return "/icon_linkedib.png";
  };
  return (
    <Link href={href} target="_blank">
      <Image
        src={getTitle()}
        alt="logo"
        width={20}
        height={20}
        style={{ filter: "invert(100%)" }}
      />
    </Link>
  );
}

export default SocialIcon;
