import Button from "./Button";

const ToolCard = ({ title, img, text, tags }) => {
  return (
    <div className="mt-10 bg-white p-6">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-6">
        <img
          src={img}
          alt="tool img"
          className="w-[250px] h-[250px] cursor-pointer"
        />
        <div className="flex flex-col justify-center max-lg:items-center">
          <h4 className="font-semibold text-xl lg:text-2xl">{title}</h4>
          <p className="font-medium lg:text-xl my-4 max-lg:max-w-lg text-center lg:text-left">
            <span className="text-primary">{title}</span>
            {text}
          </p>
          <div className="flex gap-4">
            {tags.map((tag, index) => {
              return <Button key={index} text={tag} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
