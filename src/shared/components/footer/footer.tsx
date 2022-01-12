import './footer.scss'
import image from '../../../assets/images/GitHubMark.png'

export const Footer = () => {

    const openGithub = () => {
        window.open('https://github.com/davidyero/holidays', '_blank')
    }

    return(
        <div className='footer'>
            <img onClick={openGithub} src={image} alt='github octocat'/>
        </div>
    );
}
