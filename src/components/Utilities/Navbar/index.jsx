import Link from "next/link";
import Image from "next/image";
import iconRobo from "../../../../public/sprout.png"

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full z-[99999] flex items-center justify-center">
            <div className="bg-white w-[96%] p-8 rounded-xl">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-4 justify-center items-center text-center">
                        <Image src={iconRobo} width={32} height={32} alt="img"></Image>
                        <h1 className="font-semibold text-base">roboFarm</h1>
                    </div>
                        <div className="flex flex-row justify-between items-center text-center md:gap-4 gap-2">
                            <div className="font-semibold md:text-base text-xs">
                                <Link href={'/'}>information</Link>
                            </div>
                            <div className='bg-black text-white hover:text-black rounded-full md:py-2 py-1 md:px-6 px-3 font-light hover:bg-white border-2 hover:border-black transition-all'>
                                <Link href={'/'} className="md:text-base text-xs">roboFarm</Link>
                            </div>
                        </div>
                </div>
            </div>
         </header>
    )
}

export default Navbar;