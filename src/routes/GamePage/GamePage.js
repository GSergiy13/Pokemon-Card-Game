// import s from './style.module.css';

const GamePage = ({ hendlerChange }) => {

  const hendlerClick = (page) => {
    hendlerChange('app')
  }

  return (
    <>
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