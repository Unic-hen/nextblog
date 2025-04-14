import Tag from "../(frontend)/components/Tag";
interface CardProps {
  title: string;
  tags: string[];
  description?: string;
  date: string; // 2025-01-10
}

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div
      className="
    w-full
    lg:rounded-lg lg:shadow-md hover:bg-gray-100 w-full
    dark:hover:bg-gray-800 
    sm:p-2 sm:border-b-2 sm:border-green-400 sm:rounded-none
    md:p-4 md:border-b-2 md:border-green-400 md:rounded-none"
    >
      <header>
        <h2 className="text-3xl font-bold mb-3">{card.title}</h2>
        {card.tags.map((tag, index) => (
          <span key={index}>
            <Tag tag={tag} />
          </span>
        ))}
      </header>
      <main className="my-2">
        {card.description && (
          <p className="">
            {card.description.length > 50
              ? `${card.description.substring(0, 50)}...`
              : card.description}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos. */}
          </p>
        )}
      </main>
      <footer>
        <span>
          {card.date.substring(5, 10)} {card.date.substring(0, 4)}
        </span>
      </footer>
    </div>
  );
};
export default Card;
