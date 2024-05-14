import { ReactNode, useEffect, useRef, useState } from "react";

interface ComponentChildrenProps {
  children: ReactNode;
  product: string;
}

const OverflowDetectionComponent = ({ children }: ComponentChildrenProps) => {
  const myDivRef = useRef<HTMLDivElement>(null);
  const [isOverflowingVertically, setIsOverflowingVertically] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const myDiv = myDivRef.current;

      if (myDiv) {
        const overflow = myDiv.scrollHeight > myDiv.clientHeight;
        setIsOverflowingVertically(overflow);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`overflow-container ${isOverflowingVertically ? 'overflowed' : ''}`} ref={myDivRef}>
      <div className="content">{children}</div>
    </div>
  );
};

export default OverflowDetectionComponent;
