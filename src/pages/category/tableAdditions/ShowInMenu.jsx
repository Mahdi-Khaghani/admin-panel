const ShowInMenu = ({ rowData }) => {
  return (
    <span className={rowData.show_in_menu ? "text-success" : "text-danger"}>
      {rowData.show_in_menu ? "فعال" : "غیرفعال"}
    </span>
  );
};

export default ShowInMenu;