import React, { useContext } from "react";

import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ImageProps {
  className?: string;
  img?: string;
  style?: React.CSSProperties
}

export const ProductImage = ({ img = "", className, style }: ImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string = noImage;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product"
      style={style}
    />
  );
};
