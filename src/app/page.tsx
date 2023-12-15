import Image from 'next/image'
import { notFound } from 'next/navigation'


export default function Home() {
  notFound();
  return <h1>메인 페이지입니다.</h1>
}
