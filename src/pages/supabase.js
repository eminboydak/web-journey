import PageLayout from "@/components/layout/PageLayout";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

export default function Supabase() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();

    const productsChannel = supabase
      .channel("products-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        () => {
          fetchProducts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(productsChannel);
    };
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Data fetch error:", error);
    } else {
      setProducts(data);
    }
  };

  return (
    <PageLayout>
      <div>
        <h1 className="text-xl">Ürün Listesi</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.price} TL - Stok:{" "}
              {product.stock}
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
