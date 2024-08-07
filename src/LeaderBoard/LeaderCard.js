import React from 'react'

export const LeaderCard = ({name ,user, bgcolor , numberone ,numbertwo,bottomProgress,topProgress }) => {
  return (
    <div>
             <div>
                <div className='flex items-center gap-6'>
                    <div className="my-4 w-14 p-3 text-center rounded-full" style={{background:bgcolor}} >
                        <h1 className='text-xl font-bold text-white'> {user}</h1>
                    </div>
                    <div className=' w-full'>
                        <h1 className='text-xl font-bold '>{name}</h1>
                        <div className=' '>
                            <div className='flex items-center gap-4 '>
                            <div class=" rounded-full h-2 dark:bg-gray-700" style={{width:topProgress}}>
                                <div class=" bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                            </div>
                            <h1 className='font-bold text-sm'>{numberone}</h1>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center gap-4'>
                            <div class="rounded-full h-2 dark:bg-gray-700" style={{ width: bottomProgress  }}>
                                <div class="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: "100%",  }}> </div>
                            </div>
                            <h1 className='font-bold text-sm'> {numbertwo}</h1>
                            </div>
                        </div>


                    </div>
                </div>
                
                </div>
    </div>
  )
}
