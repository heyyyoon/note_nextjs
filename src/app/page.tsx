import Counter from '@/component/Counter';
import Image from 'next/image'
import os from 'os' // 노드 APIs
export default function Home() {
  console.log(os.hostname());
  return (
    <>
      <h1>메인 페이지입니다.</h1>
      <Counter />
    </>
  )}
