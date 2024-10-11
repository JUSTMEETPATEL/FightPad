"use client";
import React from "react";
import useGamepad from "@/hooks/useGamePad";

export default function InteractiveXboxController() {
  const { buttonsPressed, joystickAxes } = useGamepad();

  // Extract joystick axes values and ensure they are numbers
  const leftStickX = Number(joystickAxes[0]) || 0;
  const leftStickY = Number(joystickAxes[1]) || 0;


  const isButtonPressed = (buttonIndex: number) =>
    buttonsPressed.includes(buttonIndex);

  // D-Pad helper functions
  const isDPadUp = () => isButtonPressed(12);
  const isDPadDown = () => isButtonPressed(13);
  const isDPadLeft = () => isButtonPressed(14);
  const isDPadRight = () => isButtonPressed(15);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-[400px] h-[240px] bg-gray-300 rounded-[200px/120px] shadow-xl">
        {/* Left Analog Stick */}
        <div className="absolute top-[80px] left-[60px] w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center shadow-inner">
          <div
            className="w-14 h-14 bg-gray-700 rounded-full shadow transition-transform duration-50"
            style={{
              transform: `translate(${leftStickX * 10}px, ${
                leftStickY * 10
              }px)`,
            }}
          ></div>
        </div>

        {/* D-Pad */}
        <div className="absolute top-[120px] left-[120px] ml-10 mt-10 w-16 h-16 bg-gray-600 rounded-md shadow-md">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`w-4 h-12 bg-gray-700 ${
                isDPadUp() || isDPadDown() ? "bg-gray-400" : ""
              }`}
            ></div>
            <div
              className={`w-12 h-4 bg-gray-700 ${
                isDPadLeft() || isDPadRight() ? "bg-gray-400" : ""
              } absolute`}
            ></div>
          </div>
        </div>

        {/* Face Buttons */}
        <div className="absolute top-[80px] right-[60px] w-28 h-28">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 ${
              isButtonPressed(0) ? "bg-yellow-300" : "bg-yellow-400"
            } rounded-full flex items-center justify-center text-gray-800 font-bold text-xl shadow-md transition-colors duration-75`}
          >
            Y
          </div>
          <div
            className={`absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 ${
              isButtonPressed(3) ? "bg-green-400" : "bg-green-500"
            } rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md transition-colors duration-75`}
          >
            A
          </div>
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 ${
              isButtonPressed(2) ? "bg-red-400" : "bg-red-500"
            } rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md transition-colors duration-75`}
          >
            B
          </div>
          <div
            className={`absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 ${
              isButtonPressed(1) ? "bg-blue-400" : "bg-blue-500"
            } rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md transition-colors duration-75`}
          >
            X
          </div>
        </div>

        {/* Left Trigger */}
        <div
          className={`absolute top-[-20px] left-[60px] w-24 h-12 bg-gray-400 rounded-t-2xl shadow overflow-hidden`}
        >
          <div
            className={`absolute top-[10px] left-[40px] w-28 h-8 ${
              isButtonPressed(6) ? "bg-gray-500" : "bg-gray-400"
            } `}
          ></div>
        </div>

        {/* Right Trigger */}
        <div
          className={`absolute top-[-20px] right-[60px] w-24 h-12 bg-gray-400 rounded-t-2xl shadow overflow-hidden`}
        >
          <div
            className={`absolute top-[10px] left-[40px] w-28 h-8 ${
              isButtonPressed(7) ? "bg-gray-500" : "bg-gray-400"
            } `}
          ></div>
        </div>

        {/* Left Bumper */}
        <div
          className={`absolute top-[10px] left-[40px] w-28 h-8 ${
            isButtonPressed(4) ? "bg-gray-500" : "bg-gray-400"
          } rounded-full shadow transition-colors duration-75`}
        ></div>

        {/* Right Bumper */}
        <div
          className={`absolute top-[10px] right-[40px] w-28 h-8 ${
            isButtonPressed(5) ? "bg-gray-500" : "bg-gray-400"
          } rounded-full shadow transition-colors duration-75`}
        ></div>
      </div>
    </div>
  );
}
