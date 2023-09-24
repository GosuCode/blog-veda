import Cat from '../Cat/Cat'
const Listings = () => {
    return (
        <div className="bg-white md:mt-16 fixed px-4 mx-10 border-gray-200 border rounded-md p-4">
            <div className="flex justify-between">
                <div>
                    Listing
                </div>
                <div>
                    See all
                </div>
            </div>
            <div className="mt-2">
                List of paid advertisements on job or any other things. Need to pay for the ads while creating it.
            </div>
            <div className='w-full h-[500px] grid place-items-center'>
                <Cat />
            </div>
        </div>
    )
}

export default Listings
