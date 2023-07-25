

const ClearButton = () => {

  const handleClick = () => {
    localStorage.clear();
  }

  return (
    <button onClick={handleClick}>очистить данные</button>
  )
}

export default ClearButton;