import * as React from "react"

import { RiGitRepositoryPrivateFill } from "react-icons/ri"

import { FaLockOpen } from "react-icons/fa"
import { HiOutlinePhotograph, HiOutlineScale } from "react-icons/hi"
import { CgInfo, CgRatio  } from "react-icons/cg"
import { FiCamera } from "react-icons/fi"


export function infomenu() {
  return (
<>

<div style={{display:'flex', margin:'2rem 0', fontSize:'60px', gap:'10px'}}>

<div style={{display:'flex', justifyContent:'center', padding:'10px', borderRadius:'12px', background:'#333', color:'#999'}}><CgInfo /></div>
<FiCamera />
<CgRatio />
<HiOutlineScale/>
<HiOutlinePhotograph/>
<FaLockOpen />
<RiGitRepositoryPrivateFill />

{/* <MdBrandingWatermark />
<RiGitRepositoryPrivateFill />
<GiRoyalLove />
<MdCropFree />
<FaLockOpen />
<HiBan />
<HiOutlineKey />
<HiOutlineMap />
<HiOutlinePhotograph/>
<HiOutlineScale/>

<FiCameraOff />
<FiCamera /> */}
</div>

</> 
  )
}
