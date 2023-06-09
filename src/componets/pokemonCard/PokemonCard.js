import s from './style.module.css';
import ImgBlack from '../../assets/card-back-side.jpeg'
import { useState } from 'react'

import cn from 'classnames';

const PokemonCard = ({ img, name, type, values, id }) => {

  const [isActive, setActive] = useState(false);

  const handlerClard = () => {
    setActive(!isActive)
  };


  return (
    <div className={s.root} onClick={handlerClard}>
      <div className={cn(s.pokemonCard, { [s.active]: isActive })}>
        <div className={s.cardFront}>
          <div className={cn(s.wrap, s.front)}>
            <div className={cn(s.pokemon, s[type])}>
              <div className={s.values}>
                <div className={cn(s.count, s.top)}>
                  {values.top}
                </div>
                <div className={cn(s.count, s.right)}>
                  {values.right}
                </div>

                <div className={cn(s.count, s.bottom)}>
                  {values.bottom}
                </div>
                <div className={cn(s.count, s.left)}>
                  {values.left}
                </div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={s.info}>
                <span className={s.number}>
                  {id}
                </span>
                <h3 className={s.name}>
                  {name}
                </h3>
                <small className={s.type}>Type: <span>{type}</span></small>
              </div>
            </div>
          </div>
        </div>
        <div className={s.cardBack}>
          <div className={cn(s.wrap, s.back)}>
            <img src={ImgBlack} alt={name} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default PokemonCard;