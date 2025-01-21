import React from 'react';
import {
  Button,
  Input,
  Container,
  Label,
  ErrorMessage,
  Item,
  List,
} from '../lib';

const data = [
  {
    id: 1,
    name: 'iPhone 9',
    data: {
      color: 'black',
      capacity: '64GB',
      price: 549,
    },
  },
  {
    id: 2,
    name: 'iPhone X',
    data: {
      color: 'red',
      capacity: '256GB',
      price: 839,
    },
  },
  {
    id: 3,
    name: 'iPhone 12',
    data: {
      color: 'blue',
      capacity: '128GB',
      price: 1099,
    },
  },
];

function App() {
  return (
    <Container>
      <form noValidate>
        <div className="mb-5">
          <Label htmlFor="name">Username</Label>
          <Input aria-invalid={'false'} placeholder="Enter username" />
          <ErrorMessage>Username is required</ErrorMessage>
        </div>
        <div className="mb-5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            aria-invalid={'false'}
            placeholder="Enter email address"
          />
          <ErrorMessage>Email Address is required</ErrorMessage>
        </div>
        <Button as="input" type="submit" />
      </form>
      <List>{data?.map((item) => <Item {...item} key={item.id} />)}</List>
    </Container>
  );
}

export default App;
