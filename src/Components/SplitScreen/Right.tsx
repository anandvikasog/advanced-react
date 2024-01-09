import { useEffect, useState } from "react";
import { getData } from "../../utils/helpers";
import RagularList from "../../Layouts/List/RagularList";

const Left = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData(setApiData);
  }, []);
  return (
    <RagularList
      items={apiData}
      size="large"
      columns={["name", "gender", "age", "birthplace", "residence"]}
    />
  );
};

export default Left;
