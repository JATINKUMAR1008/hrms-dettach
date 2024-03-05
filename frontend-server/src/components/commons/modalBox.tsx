interface IProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export default function ModalBox({ children, className, onClose }: IProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 flex items-center justify-center">
      <div className={className}>
        {children}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-3 text-2xl text-white"
        >
          X
        </button>
      </div>
    </div>
  );
}
