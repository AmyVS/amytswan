import React from 'react';
import './menu.css';

const Menu = () => {
  const menuItems = [
    { title: 'Home' },
    { title: 'About' },
    { title: 'Portfolio' },
    { title: 'Résumé' },
    { title: 'Contact' },
  ];

  const link = (item, ndx)=>{
    return (
      <li key={ndx}>
        <a href={`/${item.title}`} className="menu__link">
          {item.title}
        </a>
      </li>
    );
  };


  return(
    <ul>
      {menuItems.map((item, ndx) => {
        return link(item, ndx);
      })}
    </ul>
  );
};

export default Menu;
