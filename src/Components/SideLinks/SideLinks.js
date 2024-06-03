import './sidelinks.scss'
import {LinkLogoFacebook,ProjectsGithubIcon, LinkLogoInstagram, LinkLogoLinkedin, LinkLogoMedium, LinkLogoTwitter, LinkLogoYoutube, LinkLine} from '../../Images'


const SideLinks = ({fb, insta, linkedIn, medium, twitter, utube,github}) => {
  return (
    <div className='sidelinks_container'>
       
        <a className='sidelinks_item' target='_blank' href={github}><ProjectsGithubIcon/></a>
        <a className='sidelinks_item' target='_blank' href={linkedIn}><LinkLogoLinkedin/></a>
         
        <LinkLine/>
    </div>
  )
}


export default SideLinks