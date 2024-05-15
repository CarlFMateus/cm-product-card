# CM-Product-Card

Este es un paquete de pruebas de despliegue de NPM

## Ejemplo

```js
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from 'cm-product-card';
```

```jsx
<ProductCard product={product} initialValues={{ count: 6, maxCount: 15 }}>
  {({ count, reset, increaseBy, isMaxCountReached, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```

## Carl Mateus
