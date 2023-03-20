import classNames from "classnames";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrement, increment } from "./productSclice";

export const Counter = () => {
  const [isDisableTrue, setIsDisabletrue] = useState(true);
  const navigateBuy = useNavigate();
  const count = useSelector((state) => {
    // console.log(state);
    return state.productData.data;
  });
  const dispatch = useDispatch();

  function handInc() {
    dispatch(increment());
  }
  function handDec() {
    dispatch(decrement());
  }

  useEffect(() => {
    if (count.value === 5) {
      setIsDisabletrue(false);
    } else {
      setIsDisabletrue(true);
    }
  }, [count.value]);

  return (
    <div className="d-flex align-items-center">
      <div>
        <img src={count.product} alt="img" />
      </div>
      <div>
        <div className="mx-2">
          <h5>count:{count.value}</h5>
        </div>
        <Button
          aria-label="Decrement value"
          onClick={handDec}
          className={classNames("mx-2", count.value === 0 && "disabled")}
        >
          -
        </Button>
        <Button
          aria-label="Increment value"
          onClick={handInc}
          className={classNames(count.value === 5 && "disabled")}
        >
          +
        </Button>
        <div className="my-5">
          <Button className="me-2">Cancel</Button>
          <Button disabled={isDisableTrue} onClick={() => navigateBuy("/buy")}>
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};
