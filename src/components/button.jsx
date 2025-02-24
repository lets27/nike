const Button = ({ label, iconUrl, word }) => {
  return (
    <div className="btnTwo">
      <spam className="text-white">{label || word}</spam>
      <img src={iconUrl} alt="img" className="ml-2 rounded-full w-5 h-5" />
    </div>
  );
};

export default Button;
