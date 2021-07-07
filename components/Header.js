import React from 'react'
import Image from "next/image"
import HeaderIcon from './HeaderIcon'
import { SearchIcon, HomeIcon, FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon, ViewGridIcon, ChatIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/outline"

function Header() {
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
                <p className="whitespace-nowrap font-semibold pr-3">Anass Tissir</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>
        </div>
    )
}

export default Header
