import React from 'react'
import Image from "next/image"
import HeaderIcon from './HeaderIcon'
import { HomeIcon, UserGroupIcon, ViewGridIcon, ChatIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/solid"
import { SearchIcon, FlagIcon, PlayIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import { signOut, useSession } from 'next-auth/client'

function Header() {
    const [session] = useSession(); 
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="flex items-center" >
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layouts="fixed"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2" >
                    <SearchIcon className="h-6 text-gray-600" />
                    <input
                        className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                        type="text"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>

            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            <div className="flex items-center sm:space-x justify-end ">
                {/* profile pic */}
                <Image
                onClick={signOut}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layouts="fixed"
                />

                <p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>
        </div>
    )
}

export default Header
