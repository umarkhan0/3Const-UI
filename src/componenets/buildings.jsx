export default function BuildingsIntro() {
    return (
        <div className=' flex flex-col justify-center'>
            <div className=' h-[160px] flex flex-col justify-center'>
                <p className=' text-[40px] font-[400]  font-[Inter] text-center'>
                    Who do
                </p>
                <p className=' font-[Inter] text-center leading-4  text-[#F35925] text-[45px] font-[500]'>
                    We work  with
                </p>
            </div>
            <div className='bg-cover bg-top bg-no-repeat relative flex flex-wrap justify-around items-center w-full sm:min-h-[74vh] min-h-[90vh] containerImage'>
                <div className=" w-full sm:w-[25%] h-[150px] flex flex-col justify-center items-center mb-4 sm:mb-0 sm:mr-4">
                    <p className=" text-[#fff] text-center font-bold text-[26px] font-[Roboto]">Enterprise Organizations</p>
                    <p className=" text-[#fff] p-1 text-center text-[12px]">At 3Const, we thrive on forging strategic partnerships with industry leaders and global enterprises.</p>

                </div>
                <div className=" w-full sm:w-[25%] flex flex-col justify-center items-center h-[150px] mb-4 sm:mb-0 sm:mx-2">
                    <p className=" text-[#fff] text-center font-bold text-[26px] font-[Roboto]">Enterprise Organizations</p>
                    <p className=" text-[#fff] text-center p-1 text-[12px]">
                        Discover customized IT solutions designed to propel medium and small businesses to greater success.

                    </p>


                </div>
                <div className=" w-full sm:w-[25%] flex flex-col justify-center items-center h-[150px]">
                    <p className=" text-[#fff] text-center font-bold text-[26px] font-[Roboto]">Enterprise Organizations</p>
                    <p className=" text-[#fff] text-center p-1 text-[12px]">
                    Fuel your startup's journey with 3Const's innovative IT solutions. We specialize in providing agile, scalable, and cost-efficient technology solutions tailored for startups.

                    </p>
                </div>
            </div>


        </div>
    )
};