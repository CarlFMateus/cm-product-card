import { ButtonsProps } from "../components/ProductButtons";
import { ProductCardProps } from "../components/ProductCard";
import { ImageProps } from "../components/ProductImage";
import { TitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  maxCount?: number;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (props: TitleProps) => JSX.Element;
  Image: (props: ImageProps) => JSX.Element;
  Buttons: ({ className }: ButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product,
  count: number
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
