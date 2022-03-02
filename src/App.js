import Form from './form';

const movies = [
  {
    name: 'Avengers',
    ticketsAvailables: 5,
  },
  {
    name: 'Cars',
    ticketsAvailables : 12,
  },
]

export default function App() {
  return (
    <div>
      <h2>Películas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
