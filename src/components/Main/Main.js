const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

function Main() {
  return (
    <main style={containerStyle}>
      <p>карточки</p>
      <p>доставка и оплата</p>
      <p>о нас</p>
      <p>блог</p>
      <p>отзывы</p>
    </main>
  );
}

export default Main;
