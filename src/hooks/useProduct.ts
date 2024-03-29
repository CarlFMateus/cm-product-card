import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces";

interface useProductProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count ?? value);
  const isMounted = useRef(false);
  const isMaxCountReached =
    !!initialValues?.maxCount && counter === initialValues?.maxCount;

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount && newValue > initialValues.maxCount) return;

    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    else {
      isMounted.current = true;
    }

    setCounter(value);
  }, [value]);

  return { counter, increaseBy, isMaxCountReached, reset };
};
