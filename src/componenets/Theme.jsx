import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themes } from '../data';
import { setActiveTheme } from '../redux/themeSlice';

export default function ThemeSelector() {
  const activeTheme = useSelector((state) => state.theme.activeTheme) || themes[0];
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Choose a Theme</h2>
      <div className="flex gap-4 flex-wrap">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => dispatch(setActiveTheme(theme))}
            style={{ backgroundColor: theme.color }}
            className={`w-12 h-12 rounded-full shadow-lg border-4 transition-transform duration-300 ${
              activeTheme.id === theme.id ? 'scale-110 border-white' : 'border-transparent'
            }`}
            aria-label={`Select theme ${theme.id}`}
          />
        ))}
      </div>

      <div
        className="mt-8 p-6 rounded text-white"
        style={{ backgroundColor: activeTheme.color }}
      >
        This is the active theme color background.
      </div>
    </div>
  );
}
