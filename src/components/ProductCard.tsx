import React, { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  children: (args: ProductCardHandlers) => JSX.Element;
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, reset, isMaxCountReached } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });

  const maxCount = initialValues?.maxCount;
  const properties = {
    counter,
    increaseBy,
    product,
    maxCount,
  };

  return (
    <Provider value={{ ...properties }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          increaseBy,
          reset,
          product,
        })}
      </div>
    </Provider>
  );
};
