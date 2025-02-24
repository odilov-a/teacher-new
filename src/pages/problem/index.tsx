import { Modal, notification, Pagination, Table } from "antd";
import { useState } from "react";

import { Button, DotBtn } from "components";
import { useHooks, useDebounce, usePost } from "hooks";
import Container from "modules/container";
import { CreateDoc } from "assets/images/icons";
import Fields from "components/fields";

const Problems = () => {
  const { t, qs, get, location, queryClient, navigate } = useHooks();
  const { mutate } = usePost();
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState("");
  const searchQuery = useDebounce(query, 600);

  const params = qs.parse(location.search, { ignoreQueryPrefix: true });

  const onDeleteHandler = (row: any) => {
    const id = get(row, "_id");
    Modal.confirm({
      title: t("O'chirishni tasdiqlaysizmi") + "?",
      cancelText: t("yo'q"),
      okType: "danger",
      okText: t("ha"),
      onOk: () => deleteAction(id),
    });
  };

  const deleteAction = (id: any) => {
    if (id) {
      mutate(
        { method: "delete", url: `/problems/${id}`, data: null },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [`problems`],
            });
            notification["success"]({
              message: t("Успешно удален!"),
              duration: 2,
            });
          },
          onError: (error: any) => {
            notification["error"]({
              message: t(
                get(error, "response.data.error", "Произошло ошибка!")
              ),
              duration: get(error, "response.data.message") ? 4 : 2,
            });
          },
        }
      );
    }
  };

  return (
    <>
      <div className="content-panel">
        <div>
          <Container.All
            url="/problems/teacher/problems"
            name="problems"
            // params={{
            //   limit: 5,
            //   page,
            //   extra: {
            //     search: searchQuery,
            //     start: params.start && params.start,
            //     end: params.end && params.end
            //   }
            // }}
          >
            {({ meta, items }) => {
              return (
                <div>
                  <div className="page-heading">
                    {/* <p className="page-heading__title">
                      {t("FAQ")}
                      <p className="page-heading__subtitle">{items.length} {t("FAQ")}</p>
                    </p> */}
                    <div className="page-heading__right">
                      {/* <Fields.Search
                        type="text"
                        text={t("Qidiruv")}
                        onSearch={setQuery}
                        className="mr-[20px] w-[50%!important]"
                        value={query}
                        {...{ setPage }}
                      /> */}
                      <Button
                        icon={<CreateDoc />}
                        title={t("Qo'shish")}
                        onClick={() => navigate("/problems/create")}
                      />
                    </div>
                  </div>
                  <Table
                    dataSource={items}
                    pagination={{ pageSize: 12 }}
                    columns={[
                      {
                        key: "title",
                        align: "left",
                        title: t("title"),
                        dataIndex: "title",
                        className: "w-[80px]",
                        render: (value) => (
                          <div className="flex items-center">{value}</div>
                        ),
                      },
                      {
                        key: "description",
                        align: "left",
                        title: t("description"),
                        dataIndex: "description",
                        className: "w-[180px]",
                        render: (value) => (
                          <span
                            className="dark:text-[#e5e7eb] line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: value }}
                          />
                        ),
                      },
                      {
                        title: t("Amallar"),
                        align: "center",
                        className: "w-[1px]",
                        render: (value, row) => (
                          <DotBtn
                            row={row}
                            editFunction={() =>
                              navigate(`/problems/update/${get(row, "_id")}`)
                            }
                            deleteFunction={() => onDeleteHandler(row)}
                          />
                        ),
                      },
                    ]}
                  />
                  {/* {meta && meta.perPage && (
                    <div className="pt-[20px] flex justify-end">
                      <Pagination
                        current={meta.currentPage}
                        pageSize={meta.perPage}
                        total={meta.totalCount}
                        onChange={setPage}
                      />
                    </div>
                  )} */}
                </div>
              );
            }}
          </Container.All>
        </div>
      </div>
    </>
  );
};

export default Problems;
