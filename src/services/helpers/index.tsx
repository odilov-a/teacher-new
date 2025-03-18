import { AppstoreOutlined } from "@ant-design/icons";

interface MenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
  route?: string;
}

const menuItems: MenuItem[] = [
  {
    key: "problems",
    label: "Masalalar",
    icon: <AppstoreOutlined />,
    route: "/problems",
  },
  {
    key: "test",
    label: "Testlar",
    icon: <AppstoreOutlined />,
    route: "/test",
  },
  {
    key: "students",
    label: "Talabalar",
    icon: <AppstoreOutlined />,
    route: "/students",
  },
  {
    key: "resources",
    label: "Resurslar",
    icon: <AppstoreOutlined />,
    route: "/resources",
  },
  {
    key: "feedbacks",
    label: "Fikrlar",
    icon: <AppstoreOutlined />,
    route: "/feedbacks",
  },
];

function gen4() {
  return Math.random()
    .toString(16)
    .slice(-4);
}

export { menuItems, gen4 };
