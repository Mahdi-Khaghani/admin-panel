import { useEffect, useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";
import { getCategoriesServices } from "../../services/category";
import { Alert } from "../../utils/alert";
import ShowInMenu from "./tableAdditions/ShowInMenu";
import Actions from "./tableAdditions/Actions";
import { Outlet, useParams } from "react-router-dom";
import { dateToJalali } from "../../utils/convertDate";

const CategoryTable = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const handleGetCategories = async () => {
    try {
      const res = await getCategoriesServices(params.categoryId);
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
    console.log(params);
    handleGetCategories();
  }, [params]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
  ];

  const additionField = [
    {
      title: "تاریخ",
      elements: (rowData) => dateToJalali(rowData.created_At),
    },
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };
  return (
    <>
      <Outlet />

      {data.length ? (
        <PaginatedTable
          data={data}
          dataInfo={dataInfo}
          additionField={additionField}
          searchParams={searchParams}
        >
          <AddCategory />
        </PaginatedTable>
      ) : (
        <h5 className="my-5 text-center text-danger">هیچ دسته‌بندی یافت نشد</h5>
      )}
    </>
  );
};

export default CategoryTable;
