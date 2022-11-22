import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Web Scraper</div>
      </a>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link to={""} class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Search</div>

      <li class="nav-item">
        <Link
          class="nav-link collapsed"
          to={"/search"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Search</span>
        </Link>
              </li>

      <hr class="sidebar-divider" />
      <div class="sidebar-heading">Create</div>

      <li class="nav-item">
        <Link
          class="nav-link collapsed"
          to={"/create"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Create</span>
        </Link>
              </li>
    </ul>
  );
}

export default Sidebar;
