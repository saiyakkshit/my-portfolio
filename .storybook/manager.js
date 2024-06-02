import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://yakkshitw.com/icon.svg',
    brandTitle: 'Yakkshit Reddy Components',
    brandUrl: 'https://yakkshitw.com',
  },
});
