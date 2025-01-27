import { Row, Table } from "antd";
import { Container } from "modules";
import { useHooks } from "hooks";

const Student = () => {
  const { t } = useHooks();
  const columns = [
    {
      title: t("First Name"),
      dataIndex: "firstName",
      key: "firstName",
      ellipsis: true,
    },
    {
      title: t("Last Name"),
      dataIndex: "lastName",
      key: "lastName",
      ellipsis: true,
    },
    {
      title: t("Username"),
      dataIndex: "username",
      key: "username",
      ellipsis: true,
    },
    {
      title: t("Balance"),
      dataIndex: "balance",
      key: "balance",
      ellipsis: true,
    },
  ];

  return (
    <Container.All name="students" url="/students/top/balance">
      {({ items }) => (
        <Row>
          <Table
            columns={columns}
            dataSource={items}
            rowKey="_id"
            pagination={{ pageSize: 10 }}
          />
        </Row>
      )}
    </Container.All>
  );
};

export default Student;
