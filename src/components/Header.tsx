import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        {/* <!-- Begin Nav================================================== --> */}
        <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
            {/* <!-- Begin Logo --> */}
            <a className="navbar-brand" href="index.html">
              <img src="./img/logo.png" alt="logo" />
            </a>
            {/* <!-- End Logo --> */}
            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              {/* <!-- Begin Menu --> */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Stories <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="post.html">
                    Post
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="author.html">
                    Author
                  </a>
                </li>
              </ul>
              {/* <!-- End Menu --> */}
              {/* <!-- Begin Search --> */}
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <span className="search-icon">
                  <svg
                    className="svgIcon-use"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
                  </svg>
                </span>
              </form>
              {/* <!-- End Search --> */}
            </div>
          </div>
        </nav>
        {/* <!-- End Nav================================================== --> */}

        {/* <!-- Begin Site Title================================================== --> */}
        <div className="container" />
        <div className="mainheading">
          <h1 className="sitetitle">Mediumish</h1>
          <p className="lead">
            Bootstrap theme, medium style, simply perfect for bloggers
          </p>
        </div>
        {/* <!-- End Site Title================================================== --></div> */}
      </header>
    );
  }
}
export default Header;
