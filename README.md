# CodeVault 클라이언트 모노레포

CodeVault 클라이언트 모노레포입니다.

## 시작하기

0. **VisualStudio Code**에서 모노레포의 루트 디렉토리를 열어주세요.

1. yarn이 설치되어 있지 않다면 `npm install -g yarn`로 설치해주세요.

   > MacOS이며, brew가 설치되어 있다면 `brew install yarn`도 가능합니다

2. eslint의 정상적인 사용을 위해 `yarn`을 통해 core-js 모듈 빌드가 필요합니다.

3. **VisualStudio Code**에 'ESLint', 'Prettier', 'ZipFS' 익스텐션을 설치해주세요.

4. PnP를 정상적으로 적용하기 위해서 `yarn dlx @yarnpkg/sdks vscode`를 실행해주세요
   > 참고: <https://yarnpkg.com/getting-started/editor-sdks#vscode>

## 파일 구조

```markdown
- /packages
  프로젝트들이 위치하는 디렉토리 입니다.
  package.json의 workspaces를 통해 경로로 지정됩니다.
  - app
    메인 앱입니다.
  - common-domains
    공통으로 사용하는 도메인입니다.
  - extension
    크롬 익스텐션 프로그램입니다.
- .eslintrc.js
  따라서 lint 통합 설정 파일입니다.
- .prettierrc.json
  prettier 통합 설정 파일입니다.
- monorepo-template.code-workspace
  [multi-root workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces)를 위한 파일입니다.
- tsconfig.json
  공통적으로 적용되는 타입스크립트 세팅을 개별 프로젝트에서 import하여 사용합니다.
```

### 참고사항

1. 개별 프로젝트의 스크립트 실행
   프로젝트의 스크립트는 `yarn workspace {프로젝트명} {스크립트}`를 통해 실행하게 됩니다.

```js
"dependencies": {
  "@common/foo": "workspace:*",
  "@common/bar": "workspace:*",
  ...
}
```

2. 다른 프로젝트의 참조
   각 프로젝트는 package.json의 `name`으로 식별하며, 다른 프로젝트는 아래와 같은 방식으로 참조하게 됩니다.

```js
"dependencies": {
  "@common/foo": "workspace:*",
  "@common/bar": "workspace:*",
  ...
}
```

3. eslint 설정

각 프로젝트별 tsconfig.json 설정을 따르기 위해 setting/overriders에 프로젝트별 설정이 필요합니다.

```js
{
  files: [
    'packages/디렉토리명/**/*.ts?(x)',
    'packages/디렉토리명/**/*.js?(x)',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: path.resolve(
          // tsconfig.json 경로
        ),
      },
    },
  },
},
```

4. tsconfig 설정

(필요한 경우) 루트에 위치하는 tsconfig의 references에 경로를 추가합니다.
참조될 개별 프로젝트의 tsconfig에는 composite 및 declartion을 설정합니다.

> 참고: <https://www.typescriptlang.org/docs/handbook/project-references.html>

```js
"references": [
  {
    "path": "packages/common-domains"
  },
],
```

```js
"compilerOptions": {
  "composite": true,
  "declaration": true,
}
```
