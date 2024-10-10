import PageLayout from "@/components/layout/PageLayout";
import { supabase } from "@/utils/supabaseClient";

export default function Supabase({ data }) {
  return (
    <PageLayout>
      <div>
        <h1>Ürün Listesi</h1>
        <ul>
          {data.map((product) => (
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

export async function getServerSideProps() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Data fetch error:", error);
    return { props: { data: [] } };
  }

  return { props: { data } };
}
