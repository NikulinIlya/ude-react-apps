import React from "react";
import ItemList from "../item-list";
import {withData, withSwapiService} from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
};

const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const PersonList = withSwapiService(withData(
  withChildFunction(
    ItemList,
    renderName
  )));

const mapPersonMethodsToProps = () => {

}
const PlanetList = withSwapiService(withData(
  withChildFunction(
    ItemList,
    renderName
  )),
  mapPersonMethodsToProps);

const StarshipList = withSwapiService(withData(
  withChildFunction(
    ItemList,
    renderModelAndName
  )));

export {
  PersonList,
  PlanetList,
  StarshipList
};