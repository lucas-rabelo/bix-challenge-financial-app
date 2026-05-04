import { AuthProvider } from '@/presentation/contexts/auth';
import { AppThemeProvider } from '@/presentation/providers/app-theme-provider';
import StyledComponentsRegistry from '@/presentation/lib/styled-components-registry';
import { Inter } from 'next/font/google'

const interFont = Inter({
  subsets: ["latin"],
}) 

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interFont.className}`}>
      <body>
        <StyledComponentsRegistry>
          <AppThemeProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </AppThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}