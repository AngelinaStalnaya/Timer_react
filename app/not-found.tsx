import { FunctionComponent } from 'react';

const NotFoundPage: FunctionComponent = () => {
    return (
        <div className='flex flex-col row-start-2 gap-8 items-center sm:items-start'>
            404 | This page is not found.
        </div>
    )
}

export default NotFoundPage;