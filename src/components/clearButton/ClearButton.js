

const ClearButton = () => {

  const handleClick = () => {
    localStorage.clear();
  }

  return (
    <button className="btn" onClick={handleClick}>очистить данные</button>
  )
}

export default ClearButton;