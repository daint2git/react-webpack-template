import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const App = () => (
  <div className={cssModules`root`}>
    <h1 className={cssModules`item`}>
      React Webpack Template
    </h1>
  </div>
)

export default App