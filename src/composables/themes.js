import { ref, computed } from 'vue'

const themes = {
  light: {
    background: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
    input: 'hsl(0, 0%, 52%)',
    element: 'hsl(0, 0%, 100%)',
    shadow: 'hsl(0, 0%, 0%, 0.1',
  },

  dark: {
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    input: 'hsl(0, 0%, 100%)',
    element: 'hsl(209, 23%, 22%)',
    shadow: 'hsl(0, 0%, 0%, 0.25)',
  },
}

const root = document.querySelector(':root')
const setVar = (key, value) => root.style.setProperty(key, value)

export default function () {
  const currentTheme = ref('light')

  const isDark = computed(() => {
    return currentTheme.value === 'dark'
  })

  const applyTheme = () => {
    const theme = themes[currentTheme.value]
    setVar('--theme-background', theme.background)
    setVar('--theme-text', theme.text)
    setVar('--theme-input', theme.input)
    setVar('--theme-element', theme.element)
    setVar('--theme-shadow', theme.shadow)
  }

  const toggleTheme = () => {
    currentTheme.value = isDark.value ? 'light' : 'dark'
    applyTheme()
  }

  applyTheme()

  return {
    isDark,
    toggleTheme,
  }
}
