import clsx from 'clsx';
import { THEME, useTheme } from './context/ThemeProvider';
import ThemeToggleButton from './ThemeToggleButton';

export default function Navbar(): JSX.Element {
    const { theme } = useTheme();
    const isLightMode = theme === THEME.LIGHT;

    return (
        <nav className={clsx(
            'sticky top-0 z-50 w-full p-4 flex justify-between items-center transition-all duration-300 border-b',
            isLightMode 
                ? 'bg-white/80 backdrop-blur-md border-zinc-200' 
                : 'bg-zinc-900/80 backdrop-blur-md border-zinc-800'
        )}>
            <span className={clsx(
                'font-bold text-xl ml-2',
                isLightMode ? 'text-zinc-800' : 'text-white'
            )}>
                My App
            </span>

            <ThemeToggleButton />
        </nav>
    );
}