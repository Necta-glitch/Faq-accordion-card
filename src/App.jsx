import { useState,useEffect } from 'react'
import './App.css'
import arrow from './images/icon-arrow-down.svg'
function App() {
  
  const [isRotated, setIsRotated] = useState(false);
  const [selectedText, setSelectedText] = useState(null);
  const [isVisible, setIsVisible] = useState({
    cancelSubscription: false,
    additionalSupport: false,
    teamMember:false,
    maximusSize:false,
    resetPassword:false,
  });

  

  const handleToggleVisibility = (questionKey) => {
    setIsVisible((prevVisibility) => ({
      ...prevVisibility,
      [questionKey]: !prevVisibility[questionKey],
      
    }));
    setIsRotated(!isRotated);
  };

  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setAnchoPantalla(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imagenURL = anchoPantalla > 766.9 ? '/src/images/illustration-woman-online-desktop.svg' : '/src/images/illustration-woman-online-mobile.svg';

  
  const handleTextClick = (text) => {
    setSelectedText(text);
  };

  const handleVisible = (text) => {
    setSelectedText(text);
  };

  return (
    <>
    {/* Container of the page */}
      <div className='flex items-center justify-center md:pt-0 pt-[100px] h-screen bg-gradient-to-t from-Soft-blue to-Soft-violet'>
        {/* Container of the accordion */}
        <div className=' w-[320px] md:w-[900px] md:flex md:h-auto md:flex-row bg-white rounded-[15px]'>
          {/* Container of the Image */}
          <div className='  relative img-desktop  md:w-80 md:flex-1   pb-20  flex items-center justify-center'>
            <img className=' md:relative absolute md:top-12 image md:bg-cover md:h-[400px] md:w-[400px] md:right-[90px]  flex w-[250px]  ' src={imagenURL} alt="" />
            {anchoPantalla > 766.9  ? (
              <div>
                <img className='absolute right-[375px] bottom-[130px] w-[140px]  ' src="/src/images/illustration-box-desktop.svg" alt="" />
              </div>
            ): null}
          </div>
          {/* Container of the Text */}
          <div className='h-auto  md:flex-1 pt-[40px] pb-10'>
            <h1 className='pb-10 md:pl-3 md:text-left text-center md:text-[30px] text-[25px] font-bold'>FAQ</h1>
            <div className='text-[12px] mx-4 flex flex-col'>
            {/* Container of each question */}
              <div className='h-auto pb-3 border-b-[1px] '>
                <div onClick={() => handleToggleVisibility('teamMember')} className='flex justify-between align-middle'>
                  <h1 onClick={()=>handleTextClick('teamMember')} className={` cursor-pointer hover:text-Soft-red ${isVisible.teamMember ? 'text-Very-dark-grayish-blue font-semibold ' : ''} `}>How many team members can I invite?</h1>
                  <img className={`self-center ${isVisible.teamMember ? 'rotate-180' : 'rotate-0'}`} src={arrow} alt="" />
                </div>
                <div className={`pt-1 ${isVisible.teamMember ? 'block' : 'hidden'}`}>
                  <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
                </div>
              </div>
              {/* Container of each question */}
              <div className='h-auto mt-3 pb-3  border-b-[1px]'>
                <div onClick={() => handleToggleVisibility('maximusSize')} className='flex justify-between  align-middle'>
                  <h1 onClick={()=> handleTextClick('maximusSize') } className={` cursor-pointer hover:text-Soft-red ${isVisible.maximusSize ? 'text-Very-dark-grayish-blue font-semibold' : ''} `} >What is the maximum file upload size?</h1>
                  <img className={`self-center ${isVisible.maximusSize ? 'rotate-180' : 'rotate-0'}`} src={arrow} alt="" />
                </div>
                <div className={` ${isVisible.maximusSize ? 'block' : 'hidden'}`}>
                  <p> No more than 2GB. All files in your account must fit your allotted storage space.</p>
                </div>
              </div>
              {/* Container of each question */}
              <div className='h-auto mt-3  pb-3 border-b-[1px]'>
                <div onClick={() => handleToggleVisibility('resetPassword')} className='flex justify-between align-middle' >
                  <h1 onClick={() =>handleTextClick('resetPassword')} className={`cursor-pointer hover:text-Soft-red ${isVisible.resetPassword ? 'text-Very-dark-grayish-blue font-semibold' : ''} `}>How do I reset my password?</h1>
                  <img  className={`self-center cursor-pointer ${isVisible.resetPassword ? 'rotate-180':'rotate-0'}`} src={arrow} alt="" />
                </div>
                <div className={`pt-1 ${isVisible.resetPassword ? 'block' : 'hidden'}`}>
                  <p> Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
                </div>
              </div>
              {/* Container of each question */}
              <div className='h-auto mt-3 pb-3 border-b-[1px]'>
                <div  onClick={() => handleToggleVisibility('cancelSubscription')} className='flex justify-between align-middle'>
                  <h1 onClick={() => handleTextClick('cancel-subscription')} className={ ` cursor-pointer hover:text-Soft-red ${isVisible.cancelSubscription ? 'text-Very-dark-grayish-blue font-semibold' : ''} `}  >Can I cancel my subscription?</h1>
                  <img  className={`self-center cursor-pointer ${isVisible.cancelSubscription ? 'rotate-180' : 'rotate-0'}`} src={arrow} alt="" />
                </div>
                <div className={`pt-1 ${isVisible.cancelSubscription ? 'block' : 'hidden'}`}>
                  <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
                </div>
              </div>
              {/* Container of each question */}
              <div  className='h-auto mt-3 pb-3 border-b-[1px]' >
                <div onClick={() => handleToggleVisibility('additionalSupport')} className='flex justify-between align-middle' >
                  <h1 onClick={() => handleTextClick('additional-support')} className={`cursor-pointer hover:text-Soft-red ${isVisible.additionalSupport ? 'text-Very-dark-grayish-blue font-semibold' : ''} `}> Do you provide additional support? </h1>
                  <img  className={`self-center cursor-pointer ${isVisible.additionalSupport ? 'rotate-180' : 'rotate-0'}`} src={arrow} alt="" />
                </div>   
                <div className={` ${isVisible.additionalSupport ? 'block transition-transform' : 'hidden'}`}>
                  <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
