import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  title: '유다현 | APR Product Engineer 포트폴리오',
  description: '에이피알 Product Engineer 지원을 위한 유다현의 개발 포트폴리오',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
