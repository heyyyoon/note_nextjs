import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export default async function ProductPage({params: {slug}}: Props) {
  const product = await getProduct(slug);

  if(!product) {
    // 제품을 찾지 못했다면 nofound 페이지를 보여줘도 되지만, 
    //notFound();
    // 만약 사용자가 존재하지 않는 product을 입력했다면
    redirect('/products');
    // products로 이동하도록 redirect 시켜줌

  }
  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image 
        src={`/images/${product.image}`} 
        alt={product.name}
        width='300'
        height='300'
      />
    </>
  )
  
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(product => ({
    slug: product.id,
  }));
}