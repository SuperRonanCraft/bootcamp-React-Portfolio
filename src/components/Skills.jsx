import images from '../../public/images/tech/index';

export const Skills = () => {
  return (
    <div className="flex flex-wrap m-6 place-content-center">
      {images.map((image, index) => (
        <Skill key={index} {...image} />
      ))}
    </div>
  );
};

export const Skill = ({ name, url, size = '100px', margin = 'm-2' }) => {
  return (
    <div className="has-tooltip flex justify-center bg-gray-100 dark:bg-gray-300 m-2 rounded-md hover:bg-gray-400 hover:dark:bg-gray-500 transition duration-300">
      <span className="tooltip rounded shadow-lg p-1 bg-gray-100 dark:bg-gray-700 text-red-500 -mt-10">
        {name}
      </span>

      <img
        src={`./images/tech/${url}`}
        alt={`image-${name}`}
        style={{ width: size, maxHeight: size }}
        className={margin}
      />
    </div>
  );
};
