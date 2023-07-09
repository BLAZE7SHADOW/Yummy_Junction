
const ShimmerBody = () => {
    return (
        <div className='flex gap-5 flex-wrap w-4/5 justify-center items-center mt-4'>
            {Array(8).fill("").map((_, index) =>
                < div key={index} className=' h-72 w-72 bg-slate-200 shadow-2xl rounded-xl mt-5 gap-5' >
                    <div className='h-1/2 bg-slate-300 m-4'></div>
                    <h1 className='bg-slate-300 h-5 w-36 m-4'></h1>
                    <h1 className='bg-slate-300 h-5 w-44 m-4'></h1>
                    <h1 className='bg-slate-300 h-5  m-4'></h1>
                </div>)
            }

        </div>)


}

export default ShimmerBody;