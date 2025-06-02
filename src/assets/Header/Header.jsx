const Header = ({ icon, title, className }) => {
  return (
    <header>
      <div className={className}>
        <div>
          <img src={icon} alt="icone deliveroo" />
        </div>

        {title}
      </div>
    </header>
  );
};

export default Header;
