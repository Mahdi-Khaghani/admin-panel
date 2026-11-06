const SetAttributes = () => {
  return (
    <div
      className="modal fade"
      id="add_product_attr_modal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title flex-fill" id="exampleModalLabel">
              افزودن ویژگی به دسته محصول
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-8">
                  <div className="input-group my-3 dir_ltr">
                    <span className="input-group-text w_6rem justify-content-center">
                      عدد
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                    <span className="input-group-text w_8rem justify-content-center">
                      ویژگی اول
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                  <div className="input-group my-3 dir_ltr">
                    <span className="input-group-text w_6rem justify-content-center">
                      کیلو
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                    <span className="input-group-text w_8rem justify-content-center">
                      ویژگی دوم
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                  <div className="input-group my-3 dir_ltr">
                    <span className="input-group-text w_6rem justify-content-center">
                      مگاهرتز
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                    <span className="input-group-text w_8rem justify-content-center">
                      ویژگی سوم
                    </span>
                  </div>
                </div>
                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                  <button className="btn btn-primary ">ذخیره</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              انصراف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetAttributes;
