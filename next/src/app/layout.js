import Link from 'next/link'
import './globals.css'
import { Control } from './Control';

export const metadata = {
  title: 'Schedule',
  description: 'discord schedule',
}
export default async function RootLayout({ children }) {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'topics', { cache: 'no-store' });
    const topics = await resp.json();

  return (
    <html>
      <body>
        <h1><Link href='/'>WEB</Link></h1>
        <ol>
         {topics.map((topic)=>{
          return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
         })}
        </ol>
        {children}
        <Control></Control>
      </body>
    </html>
  )
}
