import Cat from '../Cat/Cat'
const Listings = () => {
    return (
        <>
            <div className="bg-white md:mt-16 fixed px-4 mx-10 border-gray-200 border rounded-md p-4">
                <div className="flex justify-between font-semibold">
                    <div>
                        Listing
                    </div>
                    <div>
                        See all
                    </div>
                </div>
                <div className="mt-2">
                    This is just the copy of original original project. <strong>My original project use MYSQL, so I can&apos;t upload it here.</strong>
                    To access the project follow this link. <br />
                    <a href="https://github.com/GosuCode/WIRE." className='underline text-blue-500'>https://github.com/GosuCode/WIRE.</a> <br />
                    Loading will take some time. About 1 minute lol. <br />
                    <strong>I&apos;ll be changing API soon.</strong>
                </div>
                <div className='w-full h-[500px] grid place-items-center'>
                    <Cat />
                </div>
            </div>
        </>
    )
}

export default Listings
