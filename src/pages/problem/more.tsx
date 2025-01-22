import { useHooks } from "hooks";

const More = ({ showMoreModal, moreModal }: any) => {
  const data = moreModal?.data;
  const { t } = useHooks();
  if (!data) {
    return <p>{t("Loading...")}</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left">
              {t("Field")}
            </th>
            <th className="border border-gray-300 p-2 text-left">
              {t("Value")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">{t("title")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.title}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("description")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.description}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("difficulty")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.difficulty.title}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("subject")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.subject.title}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("Limits")}:</td>
            <td className="border border-gray-300 p-2">
              {t("time")}:{" "}
              <b>
                {data.timeLimit} {t("ms")}
              </b><br/>
              {t("memory")}:{" "}
              <b>
                {data.memoryLimit} {t("MB")}
              </b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("point")}:</td>
            <td className="border border-gray-300 p-2">
              <b>
                {data.point} {t("ball")}
              </b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("tutorials")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.tutorials}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("testCases")}:</td>
            <td className="border border-gray-300 p-2">
              {data.testCases.map((testCase: any, index: number) => (
                <div key={index}>
                  <b>
                    <a href={testCase.inputFileUrl} target="_blank">
                      {t("Input file")} {index + 1}
                    </a>{" "}
                    <br />
                    <a href={testCase.outputFileUrl} target="_blank">
                      {t("Output file")} {index + 1}
                    </a>
                  </b>
                  {index < data.testCases.length - 1 && <br />}
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default More;
