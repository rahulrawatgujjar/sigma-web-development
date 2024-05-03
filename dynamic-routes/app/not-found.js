import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
      <h2 className='text-xl font-bold'>Not Found</h2>
      <p className='text-red-500 text-xl'>Could not find requested resource</p>
      <Link href="/" className='text-blue-500 hover:underline'>Return Home</Link>
    </div>
  )
}