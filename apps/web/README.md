# OpenYourPlan Frontend

이 프로젝트는 Turborepo와 pnpm으로 관리되는 Monorepo 구조입니다.

## 📦 Packages

- **packages/ui**: Button 컴포넌트와 전역 스타일을 포함합니다.
- **apps/storybook**: Button 컴포넌트에 대한 Storybook 설정이 있습니다. (pnpm storybook scripts로 실행)
- **apps/web**: 메인 웹 애플리케이션 경로
  - URL: https://openyourplan-frontend.vercel.app/

## 🔄 데이터 페칭

- **TanStack Query**와 **Axios**를 사용하여 서버로부터 데이터를 가져옵니다.

## 🚀 네비게이션 흐름

1. **다음 버튼** 클릭 시 데이터를 페칭하고, 결과를 **Zustand** 스토어에 저장합니다.
2. 데이터 조회 이력이 **없는** 상태에서 `/result` 경로에 직접 접근하면, **1초** 후에 `/` 경로로 자동 리다이렉트됩니다.
3. 데이터 조회 이력이 **있는** 상태에서 `/` 진입 시 `/result` 경로로 리다이렉트됩니다.
4. 데이터 조회 이력은 zustand 스토어의 값으로 판단 합니다.

## ⏱️ 버튼 디바운스

- 다음 버튼에는 **5초 디바운스**가 적용되어 있습니다. (`setTimeout`을 사용하여 간단히 구현)
- 디바운스 동안에는 버튼의 children으로 **로딩 컴포넌트**가 렌더링됩니다.

## 📝 결과 페이지

- `/result` 경로의 콘텐츠는 **Zustand** 스토어에 저장된 값을 기반으로 구성됩니다.
- 새로고침하거나 스토어 데이터가 준비되기 전에는 **Skeleton UI**가 표시됩니다.

## 🔧 코드 관리 & 린팅

- **Husky** 설정은 없지만, 수동으로 아래 스크립트를 실행하여 코드 린팅을 할 수 있습니다:
  ```bash
  pnpm run lint
  ```
