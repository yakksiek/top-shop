import AppLayout from './components/AppLayout';
import { ClerkProvider } from '@clerk/clerk-react';

function App() {
    return (
        <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
            <AppLayout />
        </ClerkProvider>
    );
}

export default App;
