// src/components/ControllerLayout.tsx
interface ControllerLayoutProps {
    buttonsPressed: number[];
  }
  
  export default function ControllerLayout({ buttonsPressed }: ControllerLayoutProps) {
    return (
      <div className="controller-layout flex justify-center items-center">
        <div className={`button ${buttonsPressed.includes(0) ? 'bg-green-500' : 'bg-gray-500'} rounded-full w-12 h-12 m-2`}>
          Y
        </div>
        <div className={`button ${buttonsPressed.includes(1) ? 'bg-green-500' : 'bg-gray-500'} rounded-full w-12 h-12 m-2`}>
          B
        </div>
        <div className={`button ${buttonsPressed.includes(2) ? 'bg-green-500' : 'bg-gray-500'} rounded-full w-12 h-12 m-2`}>
          A
        </div>
        <div className={`button ${buttonsPressed.includes(3) ? 'bg-green-500' : 'bg-gray-500'} rounded-full w-12 h-12 m-2`}>
          X
        </div>
        {/* Add more buttons as needed */}
      </div>
    );
  }
  