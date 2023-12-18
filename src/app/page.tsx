import Counter from '@/component/Counter';
import Image from 'next/image'
import os from 'os' // 노드 APIs
export default function Home() {
  console.log(os.hostname());
  return (
    <>
      <h1>메인 페이지입니다.</h1>
      <Counter />
      <Image 
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  )}
