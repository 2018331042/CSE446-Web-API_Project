import { SUPPLIER_API_ROUTE } from "@/utils/constant";
import axios from "axios";

export default async function handler(req, res) {
  console.log(req.body);
  const { cartProducts } = req.body;
  try {
    const { data } = await axios.get(`${SUPPLIER_API_ROUTE}/getProducts/`, {
      ids: cartProducts,
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
