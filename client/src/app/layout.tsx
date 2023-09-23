import './globals.css';
import type { Metadata } from 'next';
import type { ChildrenType } from '@/types/global.types';
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
      <body>{children}</body>
    </html>
  );
};