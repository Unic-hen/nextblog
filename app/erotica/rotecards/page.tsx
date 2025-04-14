"use client";
import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";

const cardsdata = [
  {
    key: 1,
    title: "Title 1",
    description: "Description 1",
    bgcolor: "#789FFE",
  },
  {
    key: 2,
    title: "Title 2",
    description: "Description 2",
    bgcolor: "#E77687",
  },
  {
    key: 3,
    title: "Title 3",
    description: "Description 3",
    bgcolor: "#CB9AF6",
  },
  {
    key: 4,
    title: "Title 4",
    description: "Description 4",
    bgcolor: "#F88ADC",
  },
];
const cardsize = {
  width: "300px",
  height: "400px",
};
export default function RoteCards() {
  let angle = 10;
  const windowRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState(cardsdata);
  //   windowRef.current?.addEventListener("scroll", () => {
  //     console.log(1);
  //   });

  useEffect(() => {
    windowRef.current
      ? (onclick = () => {
          if (cards.length > 1) {
            return setCards(cards.slice(1));
          }
          return setCards(cardsdata);
        })
      : null;
  }, [cards]);
  return (
    <div className="flex flex-row h-[80vh]" ref={windowRef}>
      <div className="w-1/2 flex justify-center items-center stick top-0">
        <div className="w-2/3">
          <h1 className="text-6xl font-bold mb-4">animi officia accusamus</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque amet
            nihil rerum iure? Nostrum doloribus placeat unde assumenda quasi
            facere,
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center relative">
        {cards.map((item, index) => {
          angle -= 10;
          return (
            <div
              key={index}
              className="
                absolute "
              style={{
                transform: `rotate(${angle}deg)`,
                zIndex: 4 - index,
                transition: "all 0.5s ease-in-out",
              }}
            >
              <Card
                title={item.title}
                description={item.description}
                width={cardsize.width}
                height={cardsize.height}
                bgcolor={item.bgcolor}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
