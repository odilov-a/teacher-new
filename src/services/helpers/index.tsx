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
  { id: 1, flag: <FlagUz />, title: "O'zbekcha", shortName: "O'z" },
  { id: 2, flag: <FlagRu />, title: "Русский", shortName: "Ру" },
  { id: 3, flag: <FlagEn />, title: "English", shortName: "En" },
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

export { menuItems, langlist, gen4 };
