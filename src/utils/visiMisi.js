import MisiMSN from "../assets/images/VisiMisiImg/misi.svg";
import LayananMSN from "../assets/images/VisiMisiImg/layanan.svg";
import VisiMSN from "../assets/images/VisiMisiImg/visi.svg";

const visionMission = [
  {
    id: 1,
    title: "Mission",
    icon: <img src={MisiMSN} alt="MSN PRODUCTION mission" />,
    description:
      "To become a reliable private company in providing services and trading according to the KBLI held.",
  },
  {
    id: 2,
    title: "Services",
    icon: <img src={LayananMSN} alt="MSN PRODUCTION services" />,
    description:
      "Earn customer loyalty by providing them with memorable experiences and creating mutually beneficial relationships.",
  },
  {
    id: 3,
    title: "Vision",
    icon: <img src={VisiMSN} alt="MSN PRODUCTION vision" />,
    description:
      "In carrying out its duties, Mulia Sejati Nusantara Production always maintains professionalism, honesty, togetherness, orderliness, and work health, resulting in quality work.",
  },
];

export default visionMission;
