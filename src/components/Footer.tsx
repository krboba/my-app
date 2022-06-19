import React from "react";
class Footer extends React.Component {
  render() {
    return (
      // <!-- Begin Footer================================================== -->
      <div className="footer">
        <p className="pull-left">Copyright &copy; 2017 Your Website Name</p>
        <p className="pull-right">
          Mediumish Theme by{" "}
          <a target="_blank" href="https://www.wowthemes.net">
            WowThemes.net
          </a>
        </p>
        <div className="clearfix"></div>
      </div>
      // <!-- End Footer================================================== -->
    );
  }
}

export default Footer;
