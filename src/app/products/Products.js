import React from "react";
import Price from "./Price";
import "./products.css";
import Title from "./Title";
import Image from "./Image";
import Button from "./Button";

const Products = () => {
  return (
    <div className="block">
      <div className="products">
        <div className="content">
          <div className="cart">
            <Image src="https://intocode.ru/d/react-project-1/images/1.jpg" />
            <Price price="80000 ₽" oldprice="100000 ₽" />
            <Title name="MacBook" />
            <Button button="Купить" />
          </div>
          <div className="cart">
            <Image src="https://intocode.ru/d/react-project-1/images/3.jpg" />
            <Price price="140000 ₽" oldprice="110000 ₽" />
            <Title name="Скутер" />
            <Button button="Купить" />
          </div>
          <div className="cart">
            <Image src="https://intocode.ru/d/react-project-1/images/2.jpg" />
            <Price price="20000 ₽" oldprice="30000 ₽" />
            <Title name="Galaxy" />
            <Button button="Купить" />
          </div>
        </div>
        <div className="content2">
          <div className="cart">
            <Image src="https://intocode.ru/d/react-project-1/images/4.jpg" />
            <Price price="50000 ₽" oldprice="60000 ₽" />
            <Title name="TV" />
            <Button button="Купить" />
          </div>
          <div className="cart">
            <Image src="https://intocode.ru/d/react-project-1/images/5.jpg" />
            <Price price="100 ₽" oldprice="500 ₽" />
            <Title name="Респераторная маска" />
            <Button button="Купить" />
          </div>
          <div className="cart">
            <Image src="https://intocode.ru/d/react-project-1/images/6.jpg" />
            <Price price="35000 ₽" oldprice="40000 ₽" />
            <Title
              name="Стиральная машина
"
            />
            <Button button="Купить" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
