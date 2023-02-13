import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Container, BackgroundImage, Wrapper, InputWrapper, Label, Input } from './styles';
import backgroundImage from './assets/images/bg-sidebar-mobile.svg';
import { Section } from './components/section';
import { Footer } from './components/footer';
import { FirstPage } from './pages/first-page';
import { SecondPage } from './pages/second-page';

function App() {

  return (
    <Container>
      <header>
        <BackgroundImage src={backgroundImage} alt="background-image" />
      </header>
      <Wrapper>
        <SecondPage />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default App;

/* 

  const [todos, setTodos] = useState<Array<string>>([]);
  const [task, setTask] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([...todos, task])
    setTask('');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.currentTarget.value);
  }

  const handleDelete = (name: string) => {
    setTodos(todos.filter(todo => todo !== name));
  }

      <p>Add task</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map(item => <li>{item}<button onClick={() => handleDelete(item)}>Delete</button></li>)}
      </ul>
*/