import Featured from "@/components/featured";
import Header from "@/components/header";
import { SUPPLIER_API_ROUTE } from "@/utils/constant";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/utils/types";
import Products from "@/components/products";
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${SUPPLIER_API_ROUTE}/products/`, {});

      setProducts(data.products);
    } catch (err) {
      console.log(err);
      setProducts([]);
    }
  };
  return (
    <div>
      <Header />
      <Featured products={products} />
      <Products products={products} />
    </div>
  );
}
