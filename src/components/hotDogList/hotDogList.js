import React, { Component } from 'react';
import HotDogListItem from '../hotDogList-item';
import { connect } from 'react-redux';

import { withContext } from '../hoc';
import { HotDogsLoaded } from '../../actions';
import { compose } from '../../utils';



class HotDogList extends Component {

  componentDidMount() {
      console.log(this.props)

      const {hotdogstoreService } = this.props;
      const data = hotdogstoreService.getHotDog()

    
    this.props.HotDogsLoaded(data);
  }

  render() {
    const { hotDogs } = this.props;
    return (
      <ul>
        {
          hotDogs.map((hotDog) => {
            return (
              <li key={hotDog.id}><HotDogListItem hotDog={hotDog}/></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ hotDogs }) => {
  return { hotDogs };
};

const mapDispatchToProps = {
    HotDogsLoaded
};

export default compose(
    withContext(),
  connect(mapStateToProps, mapDispatchToProps)
)(HotDogList);
