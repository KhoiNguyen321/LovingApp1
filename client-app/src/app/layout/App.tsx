import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import LoadingComponent from './LoadingComponent';
import {observer} from 'mobx-react-lite';
import ActivityStore from '../stores/activityStore';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

const App = () => {
  const activityStore = useContext(ActivityStore)

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities' />

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Route exact path='/' component={HomePage}/>
        <Route path='/activities' component={ActivityDashboard}/>
        <Route path='/activities/:id' component={ActivityDetails}/>
        <Route path='/createActivity' component={ActivityForm}/>
      </Container>
    </Fragment>
  );
};

export default observer(App);
