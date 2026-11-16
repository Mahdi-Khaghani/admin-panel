import { useEffect, useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";
import { getCategoriesServices } from "../../services/category";
import { Alert } from "../../utils/alert";
import ShowInMenu from "./tableAdditions/ShowInMenu";
import Actions from "./tableAdditions/Actions";

const CategoryTable = () => {
  const [data, setData] = useState([]);
  const handleGetCategories = async () => {
    try {
      const res = await getCategoriesServices();
      if (res.status == 200) {
        setData(res.data.data);
      } else {
        Alert("متاسفم!", res.data.message, "error");
      }
    } catch {
      Alert("متاسفم!", "متاسفم مشکلی از سمت سرور رخ داده است!", "error");
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
    { field: "created_at", title: "تاریخ" },
  ];

  const additionField = [
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData}/>,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData}/>,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };
  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
      >
        <AddCategory />
      </PaginatedTable>
    </>
  );
};

export default CategoryTable;
