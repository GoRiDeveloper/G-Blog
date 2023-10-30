import { NavClassName, Route } from '@/models';

/**
 * Model of the links of the main navigation bar.
 */
// Modelo de los links de la barra de navegación principal.
export const NavbarListLinks: Route[] = [
    { id: '1245', path: '/info', name: 'Publicaciones' },
    { id: '1246', path: '/info', name: 'Explorar' },
    { id: '1241', path: '/info', name: 'Información' },
];

/**
 * Model of the link classes of the main navigation bar.
 */
// Modelo de las clases de los links de la barra de navegación principal.
export const NavbarListLinksClassNames: NavClassName = {
    linkClass: 'hover:scale-110 transition-transform',
    anchorTagClass: 'hover:underline',
};
