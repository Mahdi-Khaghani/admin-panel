import { useEffect, useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";
import { getCategoriesServices } from "../../services/category";
import ShowInMenu from "./tableAdditions/ShowInMenu";
import Actions from "./tableAdditions/Actions";
import { Outlet, useParams } from "react-router-dom";
import { dateToJalali } from "../../utils/convertDate";

const CategoryTable = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(0);
  const [loading,setLoading] = useState(false)
  const handleGetCategories = async () => {
    setLoading(true)
    try {
      const res = await getCategoriesServices(params.categoryId);
      if (res.status == 200) {
        setData(res.data.data);
      }
    } catch (error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    console.log(params);
    handleGetCategories();
  }, [params,forceRender]);

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

        <PaginatedTable
          data={data}
          dataInfo={dataInfo}
          additionField={additionField}
          searchParams={searchParams}
          loading={loading}
        >
          <AddCategory setForceRender={setForceRender}/>
        </PaginatedTable>
    </>
  );
};

export default CategoryTable;
