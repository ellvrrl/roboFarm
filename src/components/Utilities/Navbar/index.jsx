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
                        <div className="flex flex-row justify-between items-center gap-4">
                            <div className="font-semibold text-base">
                                <Link href={'/'}>information</Link>
                            </div>
                            <div className='bg-black text-white hover:text-black rounded-full py-2 px-6 font-light hover:bg-white border-2 hover:border-black transition-all'>
                                <Link href={'/'}>roboFarm</Link>
                            </div>
                        </div>
                </div>
            </div>
         </header>
    )
}

export default Navbar;