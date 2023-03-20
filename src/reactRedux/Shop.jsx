import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Buy = () => {
  const [isDisable, setIsDisable] = useState(true);
  const product = useSelector((state) => {
    return state.productData.data;
  });
  //   console.log(product);
  useEffect(() => {
    if (product.value === 5) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [product.value]);
  return (
    <div>
      <figure>
        <img src={product.product} alt="products" />
      </figure>
      <div className="p-8"></div>
      <div>
        <Button className="" disabled={isDisable}>
          cheak out
        </Button>
        {/* <Button className="ms-2">cheak in</Button> */}
      </div>
    </div>
  );
};
