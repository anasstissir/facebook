import React from 'react'
import { UsersIcon, CalendarIcon, ClockIcon, DesktopComputerIcon } from "@heroicons/react/solid"
import {  UserGroupIcon, ChevronDownIcon, ShoppingBagIcon} from "@heroicons/react/outline"
import { useSession } from 'next-auth/client'
import SidebarRow from './SidebarRow'

function Sidebar() {

    const [session, loading] = useSession()
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow image={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Friends" />
            <SidebarRow Icon={DesktopComputerIcon} title="Marketplace" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar
