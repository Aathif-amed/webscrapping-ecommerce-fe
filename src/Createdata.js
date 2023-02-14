import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";

function Createdata() {
  const [isloading, setLoading] = useState(false);
  const [isCreated, setisCreated] = useState("");

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const data = await axios.get(
          `https://web-scrapping-zdg3.onrender.com/scrapData/create/${values.search}`
        );
        setLoading(false);
        setisCreated(data.data.message);

      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div class="container p-5">
        <form class="m-5 p-5 rounded shadow-lg" onSubmit={formik.handleSubmit}>
          <h1 class="text-center mt-5">Create Product</h1>
          <div class="m-5">
            <label for="staffId" class="form-label">
              Enter Product Keyword
            </label>
            <input
              type="text"
              class="form-control border-0 shadow-sm"
              name="search"
              placeholder="iphone"
              onChange={formik.handleChange}
              value={formik.values.name}
              aria-autocomplete="off"
              required
            />
          </div>
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
              <div class="text-center">
                <h4 class="text-success">{isCreated} </h4>
              </div>
            </>
          )}

          <button
            type="submit"
            class="btn btn-primary bg-gradient m-5 mt-3 shadow-sm"
            name="submit"
          >
            <i class="fa-solid fa-right-to-bracket"></i> Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Createdata;
