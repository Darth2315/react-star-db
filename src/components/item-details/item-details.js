import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: true,
    error: false,
    img: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }
  
  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
    .then(item => {
      this.setState({
        item,
        loading: false,
        img: getImageUrl(item)
      })
    })
    .catch(this.onError)
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  render() {

    if (!this.state.item) {
      return <span>Select a person from a list</span>
    }

    const { item, error, loading, img } = this.state;
    const content = !loading && !error ? <ItemView item={item} image={img}/> : null;
    const spinner = loading ? <Spinner/> : null;
    const errorPerson = error ? <ErrorIndicator /> : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
        {errorPerson}
      </div>
    )
  }
}

const ItemView = ({item, image}) => {

  const {name, gender, birthYear, eyeColor} = item;

  return (
    <>
      <img className="person-image"
        src={image} alt="star wars person"/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  )
} 