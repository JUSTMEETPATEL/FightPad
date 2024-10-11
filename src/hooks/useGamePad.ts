// src/hooks/useGamepad.ts
import { useState, useEffect } from 'react';

const useGamepad = () => {
  const [gamepadIndex, setGamepadIndex] = useState<number | null>(null);
  const [buttonsPressed, setButtonsPressed] = useState<number[]>([]);
  const [joystickAxes, setJoystickAxes] = useState<number[]>([]);

  useEffect(() => {
    const updateButtonStates = () => {
      const gamepads = navigator.getGamepads();
      const currentGamepad = gamepads[gamepadIndex!];

      if (currentGamepad) {
        const buttons = currentGamepad.buttons
          .map((btn, index) => (btn.pressed ? index : -1))
          .filter(index => index !== -1);

        // Store pressed buttons
        setButtonsPressed(buttons);

        // Store joystick axis values (0: left stick, 1: right stick)
        const axes = currentGamepad.axes.map(axis => axis.toFixed(2)); // Format to 2 decimal places
        setJoystickAxes(axes);
      }

      requestAnimationFrame(updateButtonStates);
    };

    const handleGamepadConnected = (e: GamepadEvent) => {
      setGamepadIndex(e.gamepad.index);
      console.log('Gamepad connected:', e.gamepad);
    };

    const handleGamepadDisconnected = () => {
      setGamepadIndex(null);
      console.log('Gamepad disconnected');
    };

    window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

    requestAnimationFrame(updateButtonStates);

    return () => {
      window.removeEventListener('gamepadconnected', handleGamepadConnected);
      window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
    };
  }, [gamepadIndex]);

  return { buttonsPressed, joystickAxes };
};

export default useGamepad;
