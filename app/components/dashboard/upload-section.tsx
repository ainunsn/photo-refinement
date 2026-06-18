'use client'

import { useState } from 'react'
import ComparisonSlider from './comparison-slider'

export default function UploadSection() {
  const [original, setOriginal] = useState<string | null>(null)
  const [enhanced, setEnhanced] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]

    if (!file) return

    setLoading(true)
    setEnhanced(null)

    const originalPreview = URL.createObjectURL(file)
    setOriginal(originalPreview)

    try {
      const formData = new FormData()

      formData.append('image', file, file.name)

      const response = await fetch(
        'http://localhost:3002/enhance-image',
        {
          method: 'POST',
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error('Failed to enhance image')
      }

      const result = await response.json()

      setEnhanced(result.output_path)
    } catch (error) {
      console.error(error)
      alert('Failed to enhance image')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setOriginal(null)
    setEnhanced(null)
    setLoading(false)
  }

  const handleDownload = () => {
    if (!enhanced) return
    window.open(enhanced, '_blank')
  }

  return (
    <div className='mt-10'>

      {original && enhanced && (
        <div className='mt-10'>
          <ComparisonSlider
            original={original}
            enhanced={enhanced}
          />
        </div>
      )}

      {
        loading && (
          <div className='mt-8 flex flex-col items-center justify-center rounded-2xl border bg-white p-10'>
            <div className='h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-violet-500' />

            <p className='mt-4 text-sm text-gray-500'>
              Enhancing your image...
            </p>
          </div>
        )
      }

      {
        !enhanced && !loading &&
        <label className='my-10 flex h-56 cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:bg-gray-100'>
          <div className='text-center'>
            <p className='text-lg font-medium'>
              Upload Image
            </p>

            <p className='mt-2 text-sm text-gray-500'>
              PNG, JPG, WEBP
            </p>
          </div>

          <input
            hidden
            type='file'
            accept='image/*'
            onChange={handleUpload}
          />
        </label>
      }

      {original && enhanced && (
        <div className='mt-6 flex justify-center gap-4'>
          <button
            onClick={handleReset}
            className='rounded-xl border px-5 py-3 font-medium transition hover:bg-gray-50'
          >
            Upload Another
          </button>

          <button
            onClick={handleDownload}
            className='rounded-xl bg-linear-to-r from-pink-500 to-violet-500 px-5 py-3 font-medium text-white shadow-md transition hover:opacity-90'
          >
            Download Result
          </button>
        </div>
      )}

    </div>
  )
}