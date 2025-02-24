import { FlagUz, FlagRu, FlagEn } from "assets/images/icons";
import {
  AppstoreOutlined,
  UserAddOutlined,
  BellOutlined,
} from "@ant-design/icons";

interface MenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
  route?: string;
}

const langlist = [
  { id: 1, title: "O'zbekcha", shortName: "O'z" },
  { id: 2, title: "Русский", shortName: "Ру" },
  { id: 3, title: "English", shortName: "En" },
];

const settingslist = [
  { id: 1, title: "O'zbekcha", shortName: "O'z" },
  { id: 2, title: "Русский", shortName: "Ру" },
  { id: 3, title: "English", shortName: "En" },
  { id: 4, title: "Settings", shortName: "St" },
  { id: 5, title: "Tests", shortName: "TC" },
];


const menuItems: MenuItem[] = [
  {
    key: "problems",
    label: "Masalalar",
    icon: <AppstoreOutlined />,
    route: "/problems",
  },
  {
    key: "students",
    label: "Talabalar",
    icon: <UserAddOutlined />,
    route: "/students",
  },
  {
    key: "feedbacks",
    label: "Fikrlar",
    icon: <BellOutlined />,
    route: "/feedbacks",
  },
];

function gen4() {
  return Math.random()
    .toString(16)
    .slice(-4);
}

export { menuItems, langlist, gen4, settingslist };
