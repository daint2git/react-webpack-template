import BasicRouting from 'components/BasicRouting'
import CustomLink from 'components/CustomLink'
import NestedRouting from 'components/NestedRouting'
import URLParameters from 'components/URLParameters'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './Root.scss'

const cssModules = cssModuleNameTag(styles)

const Spacer = () => <div className={cssModules`spacer`} />

const Root = () => (
  <div className={cssModules`root`}>
    <BasicRouting />
    <Spacer />
    <CustomLink />
    <Spacer />
    <NestedRouting />
    <Spacer />
    <URLParameters />
  </div>
)

export default Root
