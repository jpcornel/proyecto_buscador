import React from "react";
import "./page-home.css";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";
class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };

  handleChange = (e) => {
    console.log("me pincharon");
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
    modal: false,
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <div id="logo-pop-home">Find POP</div>
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="form"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  value={this.props.busqueda}
                  id="buscar"
                  placeholder="Busca artistas"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search similar Artist
                </button>
                <button className="btng" onClick={this.handleClick}>
                  Lo que está por venir!
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <div className="texto-modal">
              <h2>Proximamente!</h2>
              <p>Buscador de espacios LGBTIQA+</p>
            </div>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
