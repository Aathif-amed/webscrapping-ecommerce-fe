import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Dispproducts from "./Dispproducts";
import { Link } from "react-router-dom";
function Searchbar() {
  const [isloading, setLoading] = useState(false);
  const [productData, setProductdata] = useState({
    query: "iphone",
    amazon: {
      product_website: "https://www.amazon.in/s?k=iphone",
      product_title: "Apple iPhone 13 (128GB) - Starlight",
      product_offer_price: "65,999",
      product_actual_price: "79,900",
      product_rating: "4.6 out of 5 stars",
      product_imgurl:
        "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg",
    },
    flipkart: {
      product_website: "https://www.flipkart.com/search?q=iphone",
      product_title: "APPLE iPhone 13 (Starlight, 128 GB)",
      product_offer_price: "₹65,999",
      product_actual_price: "₹69,900",
      product_rating: "4.7",
      product_imgurl:
        "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
    },
  });
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const data = await axios.get(
          `https://web-scrapping-zdg3.onrender.com/product/display/${values.search}`
        );
        setProductdata(data?.data);
        console.log(data);
        console.log(productData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });
  return (
    <>
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <form
          class="d-none d-sm-inline-block form-inline mr-auto ml-auto my-2 my-md-0 mw-100 navbar-search "
          onSubmit={formik.handleSubmit}
        >
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              name="search"
              onChange={formik.handleChange}
              value={formik.values.search}
              aria-label="search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
          <small id="Help" class="form-text text-muted ml-4">
            Suggestion : type vivo to begin search
          </small>
        </form>
      </nav>

      {isloading ? (
        <>
          <div class="text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          {productData ? (
            <Dispproducts props={productData} />
          ) : (
            <div class="container p-lg-5 my-5">
              <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col p-3 p-lg-5 pt-lg-3">
                  <h1 class="display-4 fw-bold lh-1 text-center">
                    Sorry..Product Not Found
                  </h1>
                  <div class="d-grid gap-2 d-md-flex justify-content-center mt-3 mb-4 mb-lg-3">
                    <Link
                      class="btn btn-primary  btn-lg px-5 mx-3"
                      to={"/create"}
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <i class="fas fa-edit fa-sm"></i>
                      <span> Create Item</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Searchbar;
