import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiSettings } from 'react-icons/fi';
import { themes } from '../data';
import { setActiveTheme, setDarkTheme } from '../redux/themeSlice'; 

export default function ThemeSelector() {
  const { activeTheme, darkTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [showThemes, setShowThemes] = useState(false);
  const [pos, setPos] = useState({ x: 20, y: 20 });

  const dragRef = useRef(null);
  const panelRef = useRef(null);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    dragging.current = true;
    dragStart.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    let newX = e.clientX - dragStart.current.x;
    let newY = e.clientY - dragStart.current.y;

    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const btnSize = 48;

    newX = Math.max(0, Math.min(newX, winWidth - btnSize));
    newY = Math.max(0, Math.min(newY, winHeight - btnSize));

    setPos({ x: newX, y: newY });
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  useEffect(() => {
    if (activeTheme?.color) {
      document.documentElement.style.setProperty('--color-primary', activeTheme.color);
    }
  }, [activeTheme]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dragRef.current &&
        !dragRef.current.contains(event.target) &&
        panelRef.current &&
        !panelRef.current.contains(event.target)
      ) {
        setShowThemes(false);
      }
    }
    if (showThemes) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showThemes]);

  return (
    <>
      {/* Settings Button */}
      <button
        ref={dragRef}
        onMouseDown={onMouseDown}
        onClick={() => setShowThemes((prev) => !prev)}
        style={{ top: pos.y, left: pos.x }}
        className="fixed z-50 p-3 bg-black rounded-full shadow-lg text-white cursor-move select-none"
        aria-label="Toggle theme selector"
      >
        <FiSettings size={24} />
      </button>

      {/* Theme Selector Panel */}
      {showThemes && (
        <div
          ref={panelRef}
          className="fixed top-24 left-4 z-40 p-6 bg-container rounded-lg shadow-lg max-w-xs w-full"
        >
          <h2 className="mb-4 text-xl font-semibold">Choose a Theme</h2>

          {/* Dark Mode Toggle */}
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Dark Mode</span>
            <button
              onClick={() => dispatch(setDarkTheme(!darkTheme))}
              className={`px-4 py-1 rounded-full text-white transition-colors duration-300 cursor-pointer ${
                darkTheme ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            >
              {darkTheme ? 'On' : 'Off'}
            </button>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => dispatch(setActiveTheme(theme))}
                className={`w-12 h-12 hover:scale-110 rounded-full shadow-lg border-4 transition-transform duration-300 cursor-pointer ${
                  activeTheme?.id === theme.id
                    ? ` border-primary border-[1px]`
                    : 'border-transparent'
                }`}
                style={activeTheme?.id === theme.id ? { borderColor: activeTheme.color } : {}}
                aria-label={`Select theme ${theme.id}`}
              >
                <img src={theme.img} alt={`Theme ${theme.id}`} />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
