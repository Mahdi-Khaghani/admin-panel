import PaginatedTable from "../../components/PaginatedTable";
import AddProduct from "./AddProduct";

const TableProduct = () => {
  const data = [
    {
      id: "1",
      categoty: "aaa",
      title: "bbb",
      price: "1111",
      stock: "5",
      like_count: "2",
      status: "1",
    },
    {
      id: "2",
      categoty: "ccc",
      title: "ddd",
      price: "2222",
      stock: "7",
      like_count: "2",
      status: "1",
    },
    {
      id: "3",
      categoty: "ggg",
      title: "nnn",
      price: "232",
      stock: "14",
      like_count: "9",
      status: "1",
    },
    {
      id: "4",
      categoty: "mmm",
      title: "www",
      price: "666",
      stock: "24",
      like_count: "3",
      status: "1",
    },
    {
      id: "5",
      categoty: "zzz",
      title: "rrr",
      price: "455",
      stock: "3",
      like_count: "10",
      status: "1",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
  ];

  const additionalElemets = (itemId) => {
    console.log(itemId);
    return (
      <>
        <i
          className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
          title="زیرمجموعه"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش دسته"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#add_product_modal"
        ></i>
        <i
          className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
          title="افزودن ویژگی"
          data-bs-toggle="modal"
          data-bs-target="#add_product_attr_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف دسته"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
      </>
    );
  };

  const additionField = {
    title: "عملیات",
    elements: (itemId) => additionalElemets(itemId),
  };

  const searchParams = {
    title : "جستجو",
    placeholder:"قسمتی از عنوان را وارد کنید",
    searchField:"title"
  }
  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
      >
        <AddProduct/>
      </PaginatedTable>
    </>
  );
};

export default TableProduct;
