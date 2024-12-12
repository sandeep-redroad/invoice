import React, { useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { capitalizeFirstChar } from '@/utils/helper'

const MainBreadcrumb = () => {
    const [breadCrumb, setBreadCrumb] = useState([])
    const location = useLocation()

    useEffect(() => {
        const bradcrumb = location.pathname.split('/').filter((path) => path)
        let clickableBrad = []
        if (bradcrumb.length > 1) {
            for (let i = 0; i < bradcrumb.length - 1; i++) {
                clickableBrad.push(
                    <>
                        <BreadcrumbItem className="hidden md:block ">
                            <BreadcrumbLink
                                to="#"
                                className="hover:text-white cursor-pointer font-bold"
                            >
                                {capitalizeFirstChar(
                                    bradcrumb[i].replace('-', ' ')
                                )}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                    </>
                )
            }
            clickableBrad.push(
                <>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-white font-bold">
                            {capitalizeFirstChar(bradcrumb[bradcrumb.length-1].replace('-', ' '))}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            )
        }else if(bradcrumb.length == 1){
            clickableBrad.push(
                <>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-white font-bold">
                            {capitalizeFirstChar(bradcrumb[bradcrumb.length-1].replace('-', ' '))}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            )
        }else{
            clickableBrad.push(
                <>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-white font-bold">
                            Dashboard
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            )
        }

        setBreadCrumb(clickableBrad)
    }, [location])
    return (
        <Breadcrumb>
            <BreadcrumbList className="text-white">{breadCrumb}</BreadcrumbList>
        </Breadcrumb>
    )
}

export default MainBreadcrumb
