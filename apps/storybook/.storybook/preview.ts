import type { Preview } from '@storybook/react';
// import '../../packages/ui/src/styles/global.scss';
import '@repo/ui/styles/global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
