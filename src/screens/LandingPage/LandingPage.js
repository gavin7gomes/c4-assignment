import React, { Component } from "react";
import LoaderWrapper from "../../components/LoaderWrapper/LoaderWrapper";
import style from "./Landing.module.css";

export class LandingPage extends Component {
  render() {
    return (
      <LoaderWrapper>
        <div className={style.container}>
          <div className={style.innerContainer}>Products</div>
          <div>
            {[].map((product) => {
              return (
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </LoaderWrapper>
    );
  }
}

export default LandingPage;
