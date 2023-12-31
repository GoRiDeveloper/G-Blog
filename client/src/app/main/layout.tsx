import type { Metadata } from 'next';
import type { ChildrenType } from '@/models';
import { Header } from "./components"

// Metadata para las paginas principales de la aplicación.
export const metadata: Metadata = {
  title: 'G-Blog',
  description: 'Generated by create next app',
};

/**
 * Function to create the main component/layout of the application.
 * 
 * @param { ChildrenType } param0 - Default model of the properties of a component in React.
 * 
 * @returns { JSX.Element } Root component.
 */
// Función para crear el componente/layout principal de la aplicación.
export default function RootLayout(
  { children }: ChildrenType
): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};
