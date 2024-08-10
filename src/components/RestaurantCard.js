const RestaurantCard = ({ restro }) => {
  return (
    <div className="card">
      <img src={restro.img} alt="logo" />
      <h2>{restro.name}</h2>
      <h3>{restro.cuisine.join(",")}</h3>
      <h4>{restro.rating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
