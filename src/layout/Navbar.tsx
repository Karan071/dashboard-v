import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Search, Bell,Maximize,Moon  } from "lucide-react"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import logoPicture from "@/assets/logos/aimshala.png";
import AimshalaLogo from '@/assets/logos/aimshala.png';

export default function Navbar() {
    return (
        <header className="flex h-18 items-center justify-between  border-b bg-white xl:px-[72px] lg:px-[50px]  pl-[0px]  px-[24px]  dark:bg-gray-800 w-full overflow-hidden fixed top-0 left-0">
            <div className="flex items-left gap-2 lg:gap-6  md:gap-4">
                <div className="flex items-center lg:hidden pr-2">
                    <SidebarTrigger className="inline-flex justify-center items-center "/>
                </div>
                <img src={AimshalaLogo} alt="aimshalaLogo"  className="h-[34px] w-auto"/>
                <div className="relative hidden lg:block">
                    <Search className="absolute lg:left-2.5 lg:top-2.5 top-2 h-4 w-4 text-gray-600" />
                    <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[250px] bg-[#F3F3F8] rounded-[4px] h-[38px] border-0 "/>
                </div>
            </div>
            <div className="flex items-center lg:gap-6 gap-4">
                <Maximize className="h-5 w-5 border-0 text-gray-400 hidden xl:block"/>
                <Search className="h-5 w-5 border-0 text-gray-400 block lg:hidden" />
                <Moon className="h-5 w-5 border-0 text-gray-400  hidden md:block"/>
                <div className="relative ">
                    <div className="w-4 h-4 py-0.5 rounded-full bg-[#FF7F41] text-white text-[8px] text-center absolute -top-4 -right-1 ">3</div>
                    <Bell className="h-5 w-5 border-0 text-gray-400" />
                </div>



                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center h-full md:pt-4  md:pb-4  md:px-5 p-0 md:bg-[#F3F3F8] rounded-0">
                            <div className="md:h-8 md:w-8">
                                <img src={logoPicture} alt="Admin" className="md:h-8 md:w-8 h-9 w-9 rounded-full object-cover" />
                            </div>
                            <div>
                                <span className="hidden md:block text-[16px]">Anna Adame</span>
                                <span className="hidden md:block text-left text-gray-400 font-light">Founder</span>
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2" align="end">
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>


        </header>

    )
}