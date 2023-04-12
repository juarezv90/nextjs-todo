import { Inter } from 'next/font/google'
import Login from '@/components/Login'
import { useAuth } from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {currentUser } = useAuth();
  console.log(currentUser);
  return (
    <>
    <Login />
    </>
  )
}
