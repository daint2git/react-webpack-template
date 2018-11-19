import reactAndwebpack from 'images/reactAndwebpack.png'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Root = () => (
  <div className={cssModules`root`}>
    <h1 className={cssModules`heading`}>React Webpack Template</h1>
    <img src={reactAndwebpack} alt="react-webpack" />
    <p className={cssModules`text`}>Try changing the source code</p>
  </div>
)

export default Root
