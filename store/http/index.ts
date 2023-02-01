import { instance } from "@/utils/instance";

export const fetchProducts = async () => {
  try {
    const response = await instance.get("/products/?limit=9");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
