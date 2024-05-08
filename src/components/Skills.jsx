import images from '../../public/images/tech/index';

function Skills() {
  return (
    <div className="flex flex-wrap m-6 place-content-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="has-tooltip flex justify-center bg-gray-100 dark:bg-gray-300 m-2 rounded-md hover:bg-gray-400 hover:dark:bg-gray-500 transition duration-300"
        >
          <span className="tooltip rounded shadow-lg p-1 bg-gray-100 dark:bg-gray-900 text-red-500 -mt-8">
            {image.name}
          </span>

          <img
            src={`./images/tech/${image.url}`}
            alt={`image-${index}`}
            style={{ width: '100px', maxHeight: '100px' }}
            className="m-2"
          />
        </div>
      ))}
    </div>
  );
}

export default Skills;
