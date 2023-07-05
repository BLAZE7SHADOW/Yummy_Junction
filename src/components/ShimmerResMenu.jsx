const ShimmerResMenu = () => {
    return (
        <div className='flex gap-3 flex-col flex-wrap w-full justify-center items-center'>
            {Array(4).fill("").map((e) =>
                <div key={e} className=' h-20 w-full bg-slate-200 shadow-2xl mt-5 rounded-xl gap-5' >
                    <div className='h-2 bg-slate-300 m-4'></div>
                    <h1 className='bg-slate-300 h-2 w-1/2 m-4'></h1>
                    <h1 className='bg-slate-300 h-2 w-1/2 m-4'></h1>

                </div>)}

        </div>)


}

export default ShimmerResMenu;