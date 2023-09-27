import './globals.css';
import type { Metadata } from 'next';
import type { ChildrenType } from '@/types/global.types';
import { Providers } from "../redux/provider";
import { AxiosInterceptor } from "@/interceptors";

export const metadata: Metadata = {
  title: 'G-Blog',
  description: 'Generated by create next app',
}

AxiosInterceptor();

export default function RootLayout({
  children,
}: ChildrenType) {
  return (
    <html lang="en">
      <body className='w-full h-full min-h-screen bg-cover bg-gradient-to-bl dark:from-sky-800 dark:via-purple-900 dark:to-sky-800'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};
