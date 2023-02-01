import { Store } from "@/components";
import { fetchProducts } from "@/store/http";
import { IProduct, setProducts } from "@/store/reducers/productSlice";
import { useAppDispatch } from "@/store/store";
import styles from "@/styles/Home.module.scss";
import { useEffect } from "react";

export default function Home({ data }: { data: Array<IProduct> }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProducts(data));
  }, []);
  return (
    <div className={styles.main}>
      <Store />
    </div>
  );
}
export async function getServerSideProps() {
  const data = await fetchProducts();

  return { props: { data } };
}
