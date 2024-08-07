import React from 'react'
import { LeaderCard } from './LeaderCard'

export const LeaderBoard = () => {
    return (
        <div className='mx-10 p-10'>
            <div className='flex gap-10 items-center'>
                <h1 className='text-black font-bold text-xl'>Leaderboard</h1>
                <div>
                    <div className='flex gap-4 pt-4 items-center'>
                        <div className='p-1.5 h-0 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 '></div>
                        <h1 className='text-black text-sm'>All Time Edits</h1>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className=' p-1.5 h-0 rounded-full' style={{ background: "rgba(222,80.101,1)" }}></div>
                        <h1 className='text-black  text-sm'>Edits This Week</h1>
                    </div>
                </div>
            </div>
            <div >
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    <LeaderCard bgcolor="PaleVioletRed" topProgress="40%" bottomProgress="70%" user="X" name="dev_sen" numberone="20,241" numbertwo="13,879" />
                    <LeaderCard bgcolor="DarkCyan" bottomProgress="80%" topProgress="40%" user="A" name="dev_sen" numberone="12,3441" numbertwo="5,636" />
                    <LeaderCard bgcolor="lightgreen" bottomProgress="60%" topProgress="30%" user="D" name="dev_sen" numberone="89,171" numbertwo="4,551" />
                    <LeaderCard bgcolor="lightgray" bottomProgress="50%" topProgress="80%" user="Z" name="dev_sen" numberone="2,233" numbertwo="8,327" />
                    <LeaderCard bgcolor="DarkSlateGrey" bottomProgress="70%" topProgress="70%" user="B" name="dev_sen" numberone="14,2341" numbertwo="10,053" />
                    <LeaderCard bgcolor="PaleVioletRed" bottomProgress="40%" topProgress="20%" user="Q" name="dev_sen" numberone="2,041" numbertwo="6,631" />
                    <LeaderCard bgcolor="lightblue" bottomProgress="40%" topProgress="40%" user="M" name="dev_sen" numberone="59,1301" numbertwo="5,250" />
                    <LeaderCard bgcolor="LawnGreen" bottomProgress="30%" topProgress="30%" user="P" name="dev_sen" numberone="130,230" numbertwo="3,798" />
                    <LeaderCard bgcolor="Darkcyan" bottomProgress="45%" topProgress="20%" user="P" name="dev_sen" numberone="71,452" numbertwo="13,879" />
                    <LeaderCard bgcolor="DarkSlateGrey" bottomProgress="40%" topProgress="20%" user="P" name="dev_sen" numberone="3,591,697" numbertwo="8,862" />


                </div>
            </div>
        </div>
    )
}
