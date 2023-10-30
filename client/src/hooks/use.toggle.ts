import { useState, useCallback, useMemo } from 'react';

/**
 * Custom Hook to handle a generic state.
 */
// Custom Hook para manejar un estado génerico.
export const useToggle = () => {
    // Estado génerico.
    const [status, setStatus] = useState(false);

    /**
     * Function to manage the generic state.
     */
    // Función para manejar el estado génerico.
    const toggleStatus = useCallback(() => {
        setStatus((prevStatus) => !prevStatus);
    }, []);

    /**
     * Values a generic state.
     */
    // Valores del estado génerico.
    const values = useMemo(
        () => ({
            status,
            toggleStatus,
        }),
        [status, toggleStatus],
    );

    return values;
};
