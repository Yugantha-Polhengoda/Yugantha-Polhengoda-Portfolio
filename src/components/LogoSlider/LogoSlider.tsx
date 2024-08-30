import React from 'react';
import Image from 'next/image';
import './LogoSlider.css'

import Figma from '/public/Images/Figma.png';
import Canva from '/public/Images/Canva.png';
import VS2 from '/public/Images/VS2.png';
import IntelJ from '/public/Images/intelj.png';
import Android from '/public/Images/Android.png';
import Cinema4D from '/public/Images/cinema4d1.png';
import Max3DS from '/public/Images/3ds-max.png';
import Lumion from '/public/Images/lumion.png';
import AfterEffects from '/public/Images/AE.png';
import Blender from '/public/Images/blender.png';


const LogoSlider = () => {
  return (
    <div className="mb-14 text-center items-center justify-center lg:mb-20 2xl:mb-20">
      <h4 className="Slide-h4 text-custom-xs mb-6 text-white bg-[rgba(25,17,51,0.5)] border border-[rgba(248,246,254,0.2)] rounded-full px-4 py-1 inline-block relative hover:bg-[rgba(111,65,210,0.25)] hover:shadow-inner hover:shadow-[rgba(111,65,210,0.5)]">
      📱 SOFTWARE TOOLS
      </h4>
      <div className="logos overflow-hidden whitespace-nowrap">
        <div className="logos-slide inline-block">
          <h4 className="h4 inline-block">|</h4>
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Figma} alt="Figma" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Canva} alt="Canva" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={VS2} alt="VS2" width={75} height={70} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={IntelJ} alt="IntelliJ" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Android} alt="Android" width={55} height={50} />
          <h4 className="h4 inline-block">|</h4>
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Cinema4D} alt="Cinema 4D" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Max3DS} alt="3ds Max" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Lumion} alt="Lumion" width={45} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={AfterEffects} alt="After Effects" width={85} height={85} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Blender} alt="Blender" width={65} height={65} />
          <h4 className="h4 inline-block">|</h4>
        </div>
        <div className="logos-slide inline-block">
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Figma} alt="Figma" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Canva} alt="Canva" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={VS2} alt="VS2" width={75} height={70} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={IntelJ} alt="IntelliJ" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Android} alt="Android" width={55} height={50} />
          <h4 className="h4 inline-block">|</h4>
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Cinema4D} alt="Cinema 4D" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Max3DS} alt="3ds Max" width={50} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Lumion} alt="Lumion" width={45} height={50} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={AfterEffects} alt="After Effects" width={85} height={85} />
          <Image className="inline-block mx-10 lg:mx-5 2xl:mx-10 transition-transform duration-200 ease-in-out " src={Blender} alt="Blender" width={65} height={65} />
          <h4 className="h4 mb-20 inline-block">|</h4>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
