// import s from './style.module.css';
import MenuHeader from "../../componets/MenuHeader/MenuHeader"

const GamePage = ({ hendlerChange }) => {

  const hendlerClick = (page) => {
    hendlerChange('app')
  }

  return (
    <>
      <MenuHeader bgActive={true} />
      <br />
      <br />
      <br />
      <div>
        <h1>
          Game Page
        </h1>

        <button onClick={hendlerClick}>
          Home
        </button>
      </div>
    </>
  )
}

export default GamePage