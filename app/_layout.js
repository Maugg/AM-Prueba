import React from 'react';
import { GlobalProvider } from '../components/globalProvider'; // Importar el contexto global
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <GlobalProvider>
      {/* Este Stack gestiona las rutas de tu aplicación */}
      <Stack screenOptions={ { headerShown: false } } />
    </GlobalProvider>
  );
}
