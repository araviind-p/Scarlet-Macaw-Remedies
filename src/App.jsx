import React from 'react';
import Sidebar from './compnent/Sidebar';
import './index.css';
import Card from './compnent/Card';
import Footer from './compnent/Footer';

const App = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
