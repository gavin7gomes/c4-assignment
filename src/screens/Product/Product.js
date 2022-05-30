import React, { Component } from "react";
import LoaderWrapper from "../../components/LoaderWrapper/LoaderWrapper";
import style from "./Product.module.css";

export class Product extends Component {
  state = {
    loading: false,
  };

  setLoading = (loading) => {
    this.setState({ loading });
  };

  render() {
    const { loading, currentProduct } = this.state;

    return (
      <LoaderWrapper loading={loading}>
        <div className={style.container}>
          <div className={style.leftContainer}>
            <div className={style.imageContainer}>
              <img src={currentProduct.image} alt={currentProduct.name} />
            </div>
            <div className={style.detailsContainer}>
              <p className={style.productName}>{currentProduct.title}</p>
              {/* <p className={style.productBrand}>{currentProduct.brand}</p> */}
              {/* <p className={style.productSupplier}>
                  {`By ${currentProduct.supplier}`}
                </p> */}
              <p className={style.productPrice}>
                {`MRP Rs. ${currentProduct.price}/-`}
              </p>
              {/* <div className={style.ratingsContainer}>
                  <p className={style.productdescription}>
                    {`Ratings: ${currentProduct.ratings}`}
                  </p>
                  {currentProduct.in_stock > 0 && (
                    <div className={style.quantityContainer}>
                      <p>Choose Quantity: </p>
                      <select
                        name="quantity"
                        id="quantity"
                        onChange={this.onSelect}
                      >
                        {Array.from(
                          { length: currentProduct.in_stock },
                          (_, i) => i + 1
                        ).map((q) => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div> */}
            </div>
          </div>
        </div>
        <div className={style.secondComponent}>
          <p className={style.productdescription}>
            {currentProduct.description}
          </p>
        </div>
      </LoaderWrapper>
    );
  }
}

export default Product;
