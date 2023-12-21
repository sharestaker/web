import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { ConfigProvider } from 'antd';
import theme from './theme/antdThemeConfig';

export const metadata = {
  title: 'Share Staker',
  description: 'Share Staker provides a platform for users to stake their tokens and earn points.',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  )
}
