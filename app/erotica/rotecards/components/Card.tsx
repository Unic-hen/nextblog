const Card = ({
  title,
  description,
  width,
  height,
  bgcolor,
  color,
}: {
  title: string;
  description: string;
  width: string;
  height: string;
  bgcolor: string;
  color?: string;
}) => {
  return (
    <div
      className="p-6 rounded-3xl"
      style={{
        width: width,
        height: height,
        backgroundColor: bgcolor,
        color: color,
      }}
    >
      <header className="py-2">
        {title ? <h1>{title}</h1> : <h1>Lorem ipsum dolor sit.</h1>}
      </header>
      <main className="py-6">
        {description ? (
          <p>{description}</p>
        ) : (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
        )}
      </main>
    </div>
  );
};
export default Card;
