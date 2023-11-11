import {BsLinkedin} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import Avatar from '../../assets/Avatar_Image.png'
import Chat from '../../assets/Chat_alt.png'

const Account = () => {
  return (
    <section className='mt-24 max-w-[1100px] mx-auto min-h-screen'>
        <div className='flex items-center px-10'>
           <img src={Avatar} alt="Avatar" className='w-[250px] h-[250px] object-contain'/>
           <div className='ml-16'>
            <h4 className='font-semibold text-[25px]'>Eugene Veniaminovich Lutsenko</h4>
            <p className='max-w-lg mt-3 font-medium'>Kuban State Agricultural University · Department of Information Technology doctor of economic Sciences, candidate of technical Sciences, Professor</p>
           </div>
           <div className='flex flex-col gap-y-4 justify-between ml-36'>
              <BsLinkedin className='text-[40px]'/>
              <FiMail className='text-[40px]' />
              <img src={Chat} alt="Chat" className='w-[45px] h-[45px]' />
           </div>
        </div>
        <ul className='flex w-full justify-between items-center'>
            <li><a href="#">Overview</a></li>
            <li><a href="#contribution">Contribution</a></li>
            <li><a href="#research">Research Interest</a></li>
            <li><a href="#statistics">Statistics</a></li>
        </ul>
    </section>
  )
}

export default Account