import Image from "next/image"
import Link from "next/link"
import logo from '@/public/logo.svg'
import { CustomButton } from "."

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href={'/'} className="flex justify-center items-center">
<Image
src={logo}
alt="car hub logo"
width={118}
height={18}
className="object-contain"
/>
            </Link>



<CustomButton title="Sign In" containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"  />

        </nav>
    </header>
  )
}

export default Navbar
