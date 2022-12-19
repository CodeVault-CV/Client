// 프로젝트의 변동이 있을 때, 해당 파일에서 lint-staged를 수정하게 됩니다.
module.exports = {
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache', 'prettier --write'],
  'packages/common-domains/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/common-domains/tsconfig.json --noEmit'],
  'packages/extension/**/*.+(ts|tsx)': [() => 'yarn tsc -p packages/extension/tsconfig.json --noEmit'],
};
