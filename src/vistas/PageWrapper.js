const PageWrapper = (props) => {
  return (
    <div>
      <div id="preloader">
        <img
          className="logo"
          src="images/logo2.png"
          alt=""
          width="119"
          height="58"
        />
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="login-wrapper" id="login-content">
        <div className="login-content">
          <a href="#" className="close">
            x
          </a>
          <h3>Login</h3>
          <form method="post" action="#">
            <div className="row">
              <label for="username">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Hugh Jackman"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label for="password">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
          </form>
          <div className="row">
            <p>Or via social</p>
            <div className="social-btn-2">
              <a className="fb" href="#">
                <i className="ion-social-facebook"></i>Facebook
              </a>
              <a className="tw" href="#">
                <i className="ion-social-twitter"></i>twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="login-wrapper" id="signup-content">
        <div className="login-content">
          <a href="#" className="close">
            x
          </a>
          <h3>sign up</h3>
          <form method="post" action="#">
            <div className="row">
              <label for="username-2">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username-2"
                  placeholder="Hugh Jackman"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label for="email-2">
                your email:
                <input
                  type="password"
                  name="email"
                  id="email-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label for="password-2">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label for="repassword-2">
                re-type Password:
                <input
                  type="password"
                  name="password"
                  id="repassword-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <button type="submit">sign up</button>
            </div>
          </form>
        </div>
      </div>

      <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
              <div
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <a href="index_light.html">
                <img
                  className="logo"
                  src="images/logo1.png"
                  alt=""
                  width="119"
                  height="58"
                />
              </a>
            </div>

            <div
              className="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" href="/">
                    Inicio
                  </a>
                </li>
                <li className="dropdown first">
                  <a
                    className="btn btn-default dropdown-toggle lv1"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav flex-child-menu menu-right"></ul>
            </div>
          </nav>
        </div>
      </header>

      <div className="buster-light">
        <div className="hero common-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-ct">
                  <h1>Listado de Películas</h1>
                  <ul className="breadcumb">
                    <li className="active">
                      <a href="#">Inicio</a>
                    </li>
                    <li>
                      {" "}
                      <span className="ion-ios-arrow-right"></span> Listado
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-single movie_list">
          <div className="container">
            <div className="row ipad-width2">
              <div className="col-md-8 col-sm-12 col-xs-12">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageWrapper;
