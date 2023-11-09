import component from './src/radio.vue'
import componentGroup from './src/radioGroup'
import { withInstall } from '@vxx-ui/utils'
withInstall(componentGroup)
const Comp = withInstall(component)
export default Comp
