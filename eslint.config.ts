import eslint from '@eslint/js'
import tsConfig from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'

export default tsConfig.config(
  eslint.configs.recommended,
  ...tsConfig.configs.strict,
  prettierConfig,
  {
    ignores: ['dist'],
  },
)
