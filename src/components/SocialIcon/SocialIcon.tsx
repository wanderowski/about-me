import Image from "next/image";
import Link from "next/link";
import GmailIcon from "public/icon_gmail.png";
import TelegramIcon from "public/icon_telegram.png";
import LinkedIcon from "public/icon_linkedib.png";

interface ISocialIconProps {
  type: string;
  href: string;
}

function SocialIcon(props: ISocialIconProps) {
  const { type, href } = props;

  const getSource = () => {
    if (type === "gm") {
      return GmailIcon;
    }
    if (type === "tg") {
      return TelegramIcon;
    }

    return LinkedIcon;
  };
  return (
    <Link href={href} target="_blank">
      <Image
        src={getSource()}
        alt="logo"
        width={20}
        height={20}
        style={{ filter: "invert(100%)" }}
      />
    </Link>
  );
}

export default SocialIcon;
