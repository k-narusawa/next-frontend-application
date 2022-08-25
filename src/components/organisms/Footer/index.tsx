import classNames from 'classnames'
import styles from './index.module.scss'

const Footer = () => {

  return(
    <>
      <footer className={classNames(
        styles['footer-component']
      )}>
        <p>(c)copy right</p>
      </footer>
    </>
  ) 
}

export default Footer