import './Button.css'
 
function CustomButton({innerText}:{innerText: string}) {
  return (
    <>
      <button className="button-87" role="button">
        {innerText}
      </button>
    </>
  );
}

export default CustomButton;
