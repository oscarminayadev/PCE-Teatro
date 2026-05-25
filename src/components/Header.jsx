function Header() {
  return (
    <header className="header-top">
      <img
        src="https://teatronacional.gob.do/assets/logo.png"
        alt="Logo"
        className="logo-main"
      />

      <input
        type="text"
        placeholder="Buscar eventos..."
      />
    </header>
  );
}

export default Header;