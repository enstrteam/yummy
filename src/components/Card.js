import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.PromoList = this.PromoList.bind(this);
  }

  render() {
    return (
      <div
        className={`card ${!this.props.isHover && "hover"}`}
        onClick={(state) => {
          this.props.setSelected(this.props.item);
        }}
        onMouseEnter={() => {
          this.props.toggleHoverState();
        }}
        onMouseLeave={() => {
          if (!this.props.isHover) this.props.toggleHoverState();
        }}
      >
        <div className="text-wrapper">
          <p className="top-text">Сказочное заморское яство</p>
          <h1 className="food-name">{this.props.item.name}</h1>
          <h2 className="ingredients">{this.props.item.ingredient}</h2>
          {this.PromoList()}
          <div className="oval">
            <p className="weight">{this.props.item.weight}</p>
          </div>
        </div>
      </div>
    );
  }

  PromoList() {
    const promolist = this.props.item.promo.map((el) => <li>{el}</li>);
    return <ul className="promo">{promolist}</ul>;
  }
}

export default Card;