import Image from "next/image";
import React from "react";
import HomeProd from "../../assets/home_prod.png";

type Prop = {
  productImage: string[];
  name: string;
  price: number;
};

const ProductCard = ({ productImage, name, price}: Prop) => {
  console.log(productImage,name,price);
  
  const image = productImage[0];
  console.log(image);

  return (
    // <Link href=``>
      <div className="w-full md:hover:scale-110 transition my-5 md:my-0 py-7">
        <Image
          src={image}
          alt="home product"
          width={400}
          height={400}
          className="w-72 h-80 object-fill"
        />
        <p className="text-xl font-bold my-2">{name}</p>
        <p className="text-xl font-bold">${price}</p>
      </div>
    // </Link>
  );
};

export default ProductCard;
