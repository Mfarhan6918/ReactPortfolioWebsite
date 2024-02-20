import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../pageHeaderContent";
import ImageOne from "../images/image1.jpg";
import ImageTwo from "../images/image2.jpg";
import ImageThree from "../images/image3.jpg";
import ImageFour from "../images/image4.jpg";
import ImageFive from "../images/image5.jpg";
import "./style.scss";

const portfolioData = [
  {
    id: 2,
    Name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    Name: "Notes App",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    Name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    Name: "Todo App",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    Name: "Shopping cart design",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }
  const filteredItems = filteredValue === 1 ? portfolioData :
      portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div className="portfolio__content__cards__item"
              key={`cardItem${item.Name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.Name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
