import loader_animation from '../Assets/arrow_animation.gif';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src={loader_animation}
        alt="Loading animation"
        className="w-2/4 h-2/4 object-contain transform -rotate-45"
      />
    </div>
  );
};

export default Loader;
