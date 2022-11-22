import React from "react";

function Dispproducts({ props }) {
  console.log({ props }, "Ff");
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div
          class="card bg- mb-3 h-100 mt-3"
          style={{"max-width":" 18rem"}}
        >
          <div class="card-header ">
            <h4 class="text-center">Amazon</h4>
          </div>
          <div class="card-body text-center" >
            <img
              src={props.amazon.product_imgurl}
              class="card-img-top mb-2"
              alt="..."
              height={"152px"}
              width={"252px"}
             
            />
            <div class="card-text">Name: {props.amazon.product_title}</div>
            <div class="card-text">Offer Price:{props.amazon.product_offer_price}</div>
            <div class="card-text">Actual Price:{props.amazon.product_actual_price}</div>
            <div class="card-text">Customer Rating:{props.amazon.product_rating}</div>
            <div class="card-text">Website:{props.amazon.product_website}</div>
          </div>
        </div>
        </div><div className="col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div
          class="card bg- mb-3 h-100 mt-3"
          style={{"max-width":" 18rem"}}
        >
          <div class="card-header ">
            <h4 class="text-center">FlipKart</h4>
          </div>
          <div class="card-body text-center" >
            <img
              src={props.flipkart.product_imgurl}
              class="card-img-top mb-2"
              alt="..."
              height={"152px"}
              width={"252px"}
             
            />
            <div class="card-text">Name: {props.flipkart.product_title}</div>
            <div class="card-text">Offer Price:{props.flipkart.product_offer_price}</div>
            <div class="card-text">Actual Price:{props.flipkart.product_actual_price}</div>
            <div class="card-text">Customer Rating:{props.flipkart.product_rating}</div>
            <div class="card-text">Website:{props.flipkart.product_website}</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dispproducts;
