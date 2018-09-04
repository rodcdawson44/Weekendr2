import React from 'react';
import { Card } from './Card';

const CardSection = (props) => (
  <Card style={styles.containerStyle}>
    {props.children}
  </Card>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export  {CardSection};
