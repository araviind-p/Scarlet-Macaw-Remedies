import React from 'react';
import Sidebar from './compnent/Sidebar';
import './index.css';
import Card from './compnent/Card';
import Footer from './compnent/Footer';
import About from './compnent/About';

const App = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <About/>
      <div className='grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16'>

        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IG5G4T7uNoezBW4L91PgCcrwvPIsytyCew&s"
          title="Card Title"
          description="This is a brief description of the card content. It provides a summary or context."
          buttonText="Learn More"
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
