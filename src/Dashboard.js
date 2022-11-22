import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div class="container p-lg-5 my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">Web Scraper</h1>
        <p class="lead">
          An application to know about the price difference of products among the famous ecommerce websites like Amazon,FlipKart
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <Link
          class="btn btn-primary btn-lg px-4"
          to={"/search"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
        <i class="fas fa-search fa-sm"></i>
          <span>  Search Item</span>
        </Link>
        <Link
          class="btn btn-outline-secondary btn-lg px-4"
          to={"/create"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-edit fa-sm"></i>
          <span>  Create Item</span>
        </Link>
          
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 shadow-lg">
        <img class="rounded-lg-3" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhi3xJuLdCJpp6cRZuFYsy0CZ5J3o6A1qqYA&usqp=CAU"} alt="banner" width={"400px"} height={"400px"} />
      </div>
    </div>
  </div>
  )
}

export default Dashboard