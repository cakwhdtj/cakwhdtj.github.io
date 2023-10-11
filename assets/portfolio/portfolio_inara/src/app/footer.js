import donw from '../../public/next.svg'
import gnb from './Gnb.js'

export default function Footer() {
    return <footer id='footer'>
      {gnb()}
    </footer>
  }