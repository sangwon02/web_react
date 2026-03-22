import { clsx } from 'clsx';
import { THEME, useTheme } from './context/ThemeProvider';

export default function ThemeContent(): JSX.Element {
  const { theme } = useTheme();
  const isLightMode = theme === THEME.LIGHT;

  return (
    <div
      className={clsx(
        'flex-1 flex flex-col items-center justify-center p-6 w-full transition-colors duration-500',
        isLightMode ? 'bg-zinc-50' : 'bg-zinc-900'
      )}
    >
      <div
        className={clsx(
          'w-full max-w-md p-10 rounded-3xl shadow-2xl border transition-all duration-500 transform hover:scale-[1.02]',
          isLightMode
            ? 'bg-white border-zinc-200 shadow-zinc-200/50'
            : 'bg-zinc-800 border-zinc-700 shadow-black/40'
        )}
      >
        <h1
          className={clsx(
            'text-4xl font-black mb-6 tracking-tighter',
            isLightMode ? 'text-zinc-900' : 'text-white'
          )}
        >
          다크모드 실습
        </h1>

        <div className="space-y-4">
          <p
            className={clsx(
              'text-xl font-medium leading-relaxed italic',
              isLightMode ? 'text-zinc-600' : 'text-zinc-400'
            )}
          >
            <span
              className={clsx(
                'px-2 py-1 rounded-lg font-bold mr-1',
                isLightMode 
                  ? 'bg-yellow-100 text-yellow-700' 
                  : 'bg-zinc-700 text-yellow-300'
              )}
            >
              "리액트 왤케 어려움?"
            </span>
          </p>
          
          <p
            className={clsx(
              'text-2xl font-bold animate-bounce mt-4',
              isLightMode ? 'text-zinc-900' : 'text-white'
            )}
          >
            드디어... 해냄 🎉
          </p>
        </div>
      </div>
    </div>
  );
}