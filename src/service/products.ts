import path from "path";
import {promises as fs} from 'fs';

export type Product = {
  id: string;
  name: string;
  price: number;
}

export async function getProducts(): Promise<Product[]> {
  // node에서 제공해주는 path를 사용해서 경로 읽어오기
  for(let i=0; i<1000000000; i++) {

  }
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(filePath, 'utf-8');

  return JSON.parse(data);  // json object로 변환
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find(item => item.id === id);
}