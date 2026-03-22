import { THEME, useTheme } from './context/ThemeProvider';
import clsx from 'clsx';

export default function ThemeToggleButton(): JSX.Element {
    const { theme, toggleTheme } = useTheme();
    const isLightMode = theme === THEME.LIGHT;

    return (
        <button
            onClick={toggleTheme}
            className={clsx(
                'w-32 py-2 rounded-full font-medium transition-all duration-300 shadow-sm',
                'hover:scale-105 active:scale-95 active:shadow-inner',
                isLightMode 
                    ? 'bg-zinc-800 text-white hover:bg-zinc-700' 
                    : 'bg-white text-zinc-800 hover:bg-zinc-100'
            )}
        >
            <span className="flex items-center justify-center gap-2">
                {isLightMode ? '다크 모드 🌙' : '라이트 모드 ☀️'}
            </span>
        </button>
    );
}