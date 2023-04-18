import "../../App.css";
function HeaderMain() {
  return (
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container"></div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <section href="#" class="navbar-brand d-flex align-items-center">
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
