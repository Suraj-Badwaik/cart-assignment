import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [prod, setProd] = useState({});
  console.log('prod:', prod)
  const { articleCode } = useParams();
  console.log('articleCode:', articleCode)

  useEffect(() => {
    if (articleCode) {
      fetch(
        `http://localhost:3030/Men/${articleCode}`
      )
        .then((r) =>{
          return r.json()
        })
        .then((d) => {
          console.log("d",d)
         return setProd(d)
        });
    }
  }, [articleCode]);

  return <div>Product Id : {articleCode}
  <div>{prod.title}</div>
  </div>;
};

export default Product;
