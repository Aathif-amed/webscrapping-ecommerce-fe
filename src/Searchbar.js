import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Dispproducts from "./Dispproducts";
function Searchbar() {
  const[isloading,setLoading]=useState(false)
  const[productData,setProductdata]=useState({
    "query": "iphone",
    "amazon": {
        "product_website": "https://www.amazon.in/s?k=iphone",
        "product_title": "Apple iPhone 13 (128GB) - Starlight",
        "product_offer_price": "65,999",
        "product_actual_price": "79,900",
        "product_rating": "4.6 out of 5 stars",
        "product_imgurl": "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg"
    },
    "flipkart": {
        "product_website": "https://www.flipkart.com/search?q=iphone",
        "product_title": "APPLE iPhone 13 (Starlight, 128 GB)",
        "product_offer_price": "₹65,999",
        "product_actual_price": "₹69,900",
        "product_rating": "4.7",
        "product_imgurl": "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70"
    },
})
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: async (values) => {
      try {
       setLoading(true);
        const data = await axios.get(
          `https://webscraping-ecommerce.herokuapp.com/product/display/${values.search}`
        );
        setProductdata(data.data);
       setLoading(false);
        console.log(data.data);
        console.log(values.search);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
<>
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >

      <form class="d-none d-sm-inline-block form-inline mr-auto ml-auto my-2 my-md-0 mw-100 navbar-search " onSubmit={formik.handleSubmit}>
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
          <small id="Help" class="form-text text-muted ml-4">Suggestion : type vivo to begin search</small>
      </form>

    </nav>
  
    {isloading ?<><div class="text-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div></>:<><Dispproducts props={productData}/></>}
    </>
  );
}

export default Searchbar;
