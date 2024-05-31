export const FrameWrapper = ({ html }) => {
  return (
    <div className="my-2">
      <iframe
        className="mx-auto w-[800px] overflow-x-scroll h-[210vh]"
        src={html}
        // seamless="seamless"
        scrolling="no"
      ></iframe>
    </div>
  );
};
