import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  components: {
    Steps,
  },
  textStyles: {
    score: {
      fontSize: ['72px', '72px'],
      fontWeight: 'bold',
      lineHeight: '100%',
    },
  },
})

export default theme
