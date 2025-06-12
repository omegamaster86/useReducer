'use client'

import { useState } from 'react'
import ChildComponent from '@/app/components/callback/child-component'

export default function CallbackPage() {
  const [message, setMessage] = useState<string>('初期メッセージ')
  const [count, setCount] = useState<number>(0)

  const handleMessageChange = (newMessage: string) => {
    setMessage(newMessage)
    console.log('親コンポーネントでメッセージを受信:', newMessage)
  }

  const handleCountChange = (newCount: number) => {
    setCount(newCount)
    console.log('親コンポーネントでカウントを受信:', newCount)
  }

  const handleMultipleValues = (name: string, age: number) => {
    console.log(`名前: ${name}, 年齢: ${age}`)
    alert(`受信データ - 名前: ${name}, 年齢: ${age}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Callback関数の学習</h1>
      
      {/* 親コンポーネントの状態表示 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">親コンポーネントの状態</h2>
        <p className="mb-2"><strong>メッセージ:</strong> {message}</p>
        <p><strong>カウント:</strong> {count}</p>
      </div>

      <ChildComponent 
        onMessageChange={handleMessageChange}
        onCountChange={handleCountChange}
        onMultipleValues={handleMultipleValues}
      />
    </div>
  )
} 