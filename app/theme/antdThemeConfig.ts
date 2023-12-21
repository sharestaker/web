// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
      /* here is your global tokens */
      colorText: '#ffffff',
      colorBgContainer: '#13224f',
    },
    components: {
      Table: {
        /* here is your component tokens */
        headerBg: '#091945',
        footerBg: '#091945',
        borderColor: '#13224f',
        headerSplitColor: '#091945',
        cellFontSize: 20,

      },
    },
  };

export default theme;