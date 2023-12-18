import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/component/MeowArticle";
import clothesImage from '../../../public/images/clothes.jpg';
import Image from "next/image";
// 이미지를 스태틱하게 임포트 해서 가져오는 것이 좋다.
//export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지입니다!</h1>
      <Image src={clothesImage} alt='Clothes'/>
      <ul>
        { products.map((product, index) => 
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        )}
      </ul>
      <MeowArticle />
    </>
  )
}
