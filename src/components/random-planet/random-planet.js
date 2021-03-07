import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';

import './random-planet.css';

export default class RandomPlanet extends Component {

	// default props - new syntaxis
	static defaultProps = {
		updateInterval: 10000
	}

	static propTypes = {
		updateInterval: PropTypes.number
	}

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false
	}

	componentDidMount() {
		const {updateInterval} = this.props;
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, updateInterval);
	}

	componentWillUnmount() {
		console.log('unmount');
		clearInterval(this.interval);
	}

	onPlanetLoaded = (planet) => {
		this.setState({
		planet,
		loading: false
		});
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random()*18) + 2;
		this.swapiService.getPlanet(id)
		.then(this.onPlanetLoaded)
		.catch(this.onError);
	}

  	render() {

		const {planet, loading, error} = this.state;
		const content = !loading && !error ? <PlanetView planet={planet}/> : null;
		const spinner = loading ? <Spinner/> : null;
		const errorPlanet = error ? <ErrorIndicator/> : null;

		return (
			<div className="random-planet jumbotron rounded">
				{spinner}
				{content}
				{errorPlanet}
			</div>
		);
  	}
}

// default props - old syntaxis
// RandomPlanet.defaultProps = {
// 	updateInterval: 10000
// }

const PlanetView = ({planet}) => {

	const {id, name, population, rotationPeriod, diameter} = planet;

	return (
	<>
		<img className="planet-image"
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
		<div>
			<h4>{name}</h4>
			<ul className="list-group list-group-flush">
			<li className="list-group-item">
				<span className="term">Population</span>
				<span>{population}</span>
			</li>
			<li className="list-group-item">
				<span className="term">Rotation Period</span>
				<span>{rotationPeriod}</span>
			</li>
			<li className="list-group-item">
				<span className="term">Diameter</span>
				<span>{diameter}</span>
			</li>
			</ul>
		</div>
	</>
	)
}