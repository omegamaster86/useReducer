import { useState } from 'react'

// 子コンポーネントのProps型定義
interface ChildComponentProps {
  onMessageChange: (message: string) => void
  onCountChange: (count: number) => void
  onMultipleValues: (name: string, age: number) => void
}

export default function ChildComponent({ 
  onMessageChange, 
  onCountChange, 
  onMultipleValues 
}: ChildComponentProps) {
  const [inputValue, setInputValue] = useState<string>('')
  const [localCount, setLocalCount] = useState<number>(0)
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')

  // メッセージを親に送信
  const sendMessage = () => {
    if (inputValue.trim()) {
      onMessageChange(inputValue) // callback関数を呼び出し
      setInputValue('') // 入力フィールドをクリア
    }
  }

  // カウントを増加して親に送信
  const incrementAndSend = () => {
    const newCount = localCount + 1
    setLocalCount(newCount)
    onCountChange(newCount) // callback関数を呼び出し
  }

  // 複数の値を親に送信
  const sendMultipleValues = () => {
    if (name.trim() && age.trim()) {
      onMultipleValues(name, parseInt(age)) // callback関数を呼び出し
      setName('')
      setAge('')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">子コンポーネント</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2 text-gray-700">メッセージ送信</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="メッセージを入力"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            送信
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2 text-gray-700">カウント送信</h3>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">ローカルカウント: {localCount}</span>
          <button
            onClick={incrementAndSend}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            +1して送信
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2 text-gray-700">複数値送信</h3>
        <div className="space-y-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="名前を入力"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="年齢を入力"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMultipleValues}
            className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
          >
            データ送信
          </button>
        </div>
      </div>
    </div>
  )
} 