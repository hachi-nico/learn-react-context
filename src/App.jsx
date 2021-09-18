import React from 'react';
import { CardItem, Container, Header } from '@components';

function App() {
  return (
    <>
      <Header />
      <Container>
        <CardItem title="Pict 1" imageId="2" />
        <CardItem title="Pict 2" imageId="20" />
        <CardItem title="Pict 3" imageId="9" />
      </Container>
    </>
  );
}

export default App;
