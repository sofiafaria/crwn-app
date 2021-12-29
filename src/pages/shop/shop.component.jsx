import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  //react knows that if you are invoking a state property it is because you need to invoke it when instantiating the component (so it's the same of using it iinside a constructor)
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;
  
  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');


//if someday you ever need to use fetch method for something
    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-c43c6/databases/(default)/documents/collections')
    // .then(response =>response.json())
    // .then(collections =>console.log(collections))

    collectionRef.get().then( snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);

      this.setState({loading: false});
    });
    //this.unsubscribeFromSnapshot()
  }

  render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`}  render={(props) => <CollectionOverviewWithSpinner isLoading = {loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading = {loading} {...props} />}/>
      </div>
  );
  }
}

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);