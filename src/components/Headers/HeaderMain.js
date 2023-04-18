import "../../App.css";
function HeaderMain() {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container"></div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <section href="#" className="navbar-brand d-flex align-items-center">
            <subtitle>built by Sam Tefera</subtitle>
          </section>
          {/* <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;
