import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themes } from '../data';
import { setActiveTheme } from '../redux/themeSlice';

export default function ThemeSelector() {
   

  const {activeTheme} = useSelector((state) => state.theme) ;
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeTheme?.color) {
      document.documentElement.style.setProperty("--color-primary", activeTheme.color);
    }
  }, [activeTheme]);

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Choose a Theme</h2>
      <div className="flex gap-4 flex-wrap">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => dispatch(setActiveTheme(theme))}
            // style={{ backgroundColor: theme.color }}
            className={`w-12 h-12 rounded-full shadow-lg border-4 transition-transform duration-300 cursor-pointer ${
              activeTheme.id === theme.id ? `scale-110 border-primary border-[1px]` : 'border-transparent'
            }`}
            aria-label={`Select theme ${theme.id}`}
            
          >
            <img src={theme.img} alt="" />
          </button>
        ))}
      </div>

      {/* <div
        className="mt-8 p-6 rounded text-white"
        style={{ backgroundColor: activeTheme.color }}
      >
        This is the active theme color background.
      </div> */}
    </div>
  );
}
