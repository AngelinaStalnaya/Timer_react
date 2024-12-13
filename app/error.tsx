'use client'

import { FunctionComponent } from "react";

const Error: FunctionComponent = () => {
    return (
        <div className='flex flex-col row-start-2 gap-8 items-center sm:items-start'>
            Ooops, something went wrong. Please, try to eccess later.
        </div>
    )
}

export default Error;