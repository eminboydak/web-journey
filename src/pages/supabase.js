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

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("products").insert([
      {
        name,
        price,
        stock,
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted:", data);
      setName("");
      setPrice("");
      setStock("");
    }
  };

  return (
    <PageLayout>
      <div className="bg-slate-600">
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
        <div className="text-black">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
