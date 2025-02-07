import { Spin, notification, Upload } from "antd";
import { Field, FieldArray } from "formik";
import { useHooks } from "hooks";
import { Container } from "modules";
import { Fields, Button } from "components";
import { UploadOutlined } from "@ant-design/icons";

const Problem = ({ showCreateModal, createModal }: any): JSX.Element => {
  const { t, get } = useHooks();
  let data = createModal.data && createModal?.data;

  const handleFileUpload = async (
    file: any,
    setFieldValue: any,
    field: string,
    index: number,
    type: "input" | "output"
  ) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("http://localhost:5001/api/tests/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await response.json();
      if (response.ok && result.data) {
        setFieldValue(`testCases.${index}.${type}FileUrl`, result.data.fileUrl);
        notification.success({
          message: t("File upload successful"),
          description: t("The file was uploaded successfully"),
        });
      } else {
        notification.error({
          message: t("File upload failed"),
          description: result.message || t("Something went wrong"),
        });
      }
    } catch (error) {
      notification.error({
        message: t("File upload error"),
        description: (error as Error).message,
      });
    }
  };

  return (
    <div>
      <Container.Form
        url={data._id ? `/problems/${get(data, "_id")}` : "/problems"}
        method={data._id ? "put" : "post"}
        name="problems"
        fields={[
          {
            type: "string",
            required: true,
            name: "titleUz",
            value: get(data, "titleUz"),
          },
          {
            type: "string",
            required: true,
            name: "descriptionUz",
            value: get(data, "descriptionUz"),
          },
          {
            type: "string",
            required: true,
            name: "titleRu",
            value: get(data, "titleRu"),
          },
          {
            type: "string",
            required: true,
            name: "descriptionRu",
            value: get(data, "descriptionRu"),
          },
          {
            type: "string",
            required: true,
            name: "titleEn",
            value: get(data, "titleEn"),
          },
          {
            type: "string",
            required: true,
            name: "descriptionEn",
            value: get(data, "descriptionEn"),
          },
          {
            name: "point",
            required: true,
            type: "number",
            value: get(data, "point"),
          },
          {
            type: "string",
            required: true,
            name: "tutorials",
            value: get(data, "tutorials"),
          },
          {
            type: "number",
            required: true,
            name: "timeLimit",
            value: get(data, "timeLimit"),
          },
          {
            type: "number",
            required: true,
            name: "memoryLimit",
            value: get(data, "memoryLimit"),
          },
          {
            type: "any",
            required: true,
            name: "subject",
            value: get(data, "subject"),
          },
          {
            type: "any",
            required: true,
            name: "difficulty",
            value: get(data, "difficulty"),
          },
          {
            type: "array",
            required: true,
            name: "testCases",
            value: get(data, "testCases", []),
          },
        ]}
        onSuccess={(data, resetForm, query) => {
          query.invalidateQueries({ queryKey: ["problems"] });
          resetForm();
          showCreateModal(false);
        }}
        onError={(error) => {
          notification.error({
            message: get(error, "errorMessage", t("All fields must be filled")),
            duration: 2,
          });
        }}
      >
        {({ isLoading, setFieldValue, values }) => {
          return (
            <Spin spinning={isLoading} tip={t("Verifying")}>
              <div className="mt-5">
                <div className="flex">
                  <div className="mr-[15px] w-[50%]">
                    <Field
                      required
                      name="titleUz"
                      label={t("titleUz")}
                      component={Fields.Input}
                      placeholder={t("titleUz")}
                    />
                    <Field
                      required
                      name="titleRu"
                      label={t("titleRu")}
                      component={Fields.Input}
                      placeholder={t("titleRu")}
                    />
                    <Field
                      required
                      name="titleEn"
                      label={t("titleEn")}
                      component={Fields.Input}
                      placeholder={t("titleEn")}
                    />
                    <Field
                      required
                      name="difficulty"
                      url="/difficulties"
                      optionValue="_id"
                      optionLabel="title"
                      label={t("difficulty")}
                      placeholder={t("difficulty")}
                      component={Fields.AsyncSelect}
                      onChange={(value: any) => {
                        setFieldValue("difficulty", value);
                      }}
                    />
                    <Field
                      name="subject"
                      url="/subjects"
                      optionValue="_id"
                      optionLabel="title"
                      label={t("subjects")}
                      placeholder={t("subjects")}
                      component={Fields.AsyncSelect}
                      onChange={(value: any) => {
                        setFieldValue("subject", value);
                      }}
                    />
                  </div>
                  <div className="w-[50%]">
                    <Field
                      required
                      rows={4}
                      name="descriptionUz"
                      label={t("descriptionUz")}
                      component={Fields.Textarea}
                      placeholder={t("descriptionUz")}
                    />
                    <Field
                      required
                      rows={4}
                      name="descriptionRu"
                      label={t("descriptionRu")}
                      component={Fields.Textarea}
                      placeholder={t("descriptionRu")}
                    />
                    <Field
                      required
                      rows={4}
                      name="descriptionEn"
                      label={t("descriptionEn")}
                      component={Fields.Textarea}
                      placeholder={t("descriptionEn")}
                    />
                  </div>
                </div>
                <div className="flex">
                  <Field
                    required
                    name="point"
                    label={t("point")}
                    component={Fields.Input}
                    placeholder={t("point")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                  <Field
                    required
                    name="timeLimit"
                    label={t("timeLimit")}
                    component={Fields.Input}
                    placeholder={t("timeLimit")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                  <Field
                    required
                    name="memoryLimit"
                    label={t("memoryLimit")}
                    component={Fields.Input}
                    placeholder={t("memoryLimit")}
                    rootClassName="mb-[10px] w-full mr-[10px]"
                  />
                  <Field
                    required
                    name="tutorials"
                    label={t("tutorial link")}
                    component={Fields.Input}
                    placeholder={t("tutorial")}
                    rootClassName="mb-[10px] w-full"
                  />
                </div>
                <FieldArray name="testCases">
                  {({ push, remove }) => (
                    <div>
                      <Button
                        title={t("Add Test Case")}
                        onClick={() =>
                          push({ inputFileUrl: "", outputFileUrl: "" })
                        }
                        className="mb-[10px]"
                      />
                      {values.testCases.map((testCase: any, index: number) => (
                        <div key={index} className="flex mb-[10px]">
                          <div className="mr-[10px]">
                            <p className="text-[#9EA3B5] px-[12px] py-[6px] bg-[#E6ECFE] dark:bg-[#454d70] rounded-[6px] inline-block mb-[12px] mr-[10px]">
                              {index + 1}
                            </p>
                            <Upload
                              beforeUpload={(file) => {
                                handleFileUpload(
                                  file,
                                  setFieldValue,
                                  "testCases",
                                  index,
                                  "input"
                                );
                                return false;
                              }}
                              showUploadList={false}
                            >
                              <Button
                                icon={<UploadOutlined />}
                                title={t("Upload Input File")}
                              />
                            </Upload>
                          </div>
                          <div>
                            <p className="text-[#9EA3B5] px-[12px] py-[6px] bg-[#E6ECFE] dark:bg-[#454d70] rounded-[6px] inline-block mb-[12px] mr-[10px]">
                              {index + 1}
                            </p>
                            <Upload
                              beforeUpload={(file) => {
                                handleFileUpload(
                                  file,
                                  setFieldValue,
                                  "testCases",
                                  index,
                                  "output"
                                );
                                return false;
                              }}
                              showUploadList={false}
                            >
                              <Button
                                icon={<UploadOutlined />}
                                title={t("Upload Output File")}
                              />
                            </Upload>
                          </div>
                          <Button
                            title={t("Remove")}
                            onClick={() => remove(index)}
                            className="ml-[10px]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
                <Button
                  size="large"
                  title={t("Save")}
                  htmlType="submit"
                  className="w-full mt-[10px]"
                />
              </div>
            </Spin>
          );
        }}
      </Container.Form>
    </div>
  );
};

export default Problem;
