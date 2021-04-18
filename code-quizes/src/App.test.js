import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('change background button color to either blue or red', () => {
  render(<App />);
  const buttonComponent = screen.getByRole('button', { name: 'Change to blue' });

  expect(buttonComponent).toHaveStyle({ background: 'red' });

  fireEvent.click(buttonComponent);

  expect(buttonComponent).toHaveStyle({ background: 'blue' });
});

test('checkbox should be disbaled onLoad', () => {
  render(<App />);

  const inputComponent = screen.getByRole('checkbox');

  expect(inputComponent).not.toBeChecked();
});

test('checkbox should be enabled after clicking and button should be disbaled with correct color', () => {
  render(<App />);

  const inputComponent = screen.getByRole('checkbox', { name: 'Disabled Button' });
  const buttonComponent = screen.getByRole('button', { name: 'Change to blue' });

  expect(inputComponent).not.toBeChecked();
  expect(buttonComponent).toBeEnabled();

  fireEvent.click(inputComponent);

  expect(buttonComponent).toHaveStyle({ backgroundColor: 'gray' });
  expect(inputComponent).toBeChecked();
  expect(buttonComponent).not.toBeEnabled();

  fireEvent.click(inputComponent);

  expect(buttonComponent).toHaveStyle({ backgroundColor: 'blue' });
});

test('<Button /> should have gray background color in disbaled state and then blue after enabling it again', () => {
  render(<App />);
  const buttonComponent = screen.getByRole('button', { name: 'Change to blue' });
  const inputComponent = screen.getByRole('checkbox', { name: 'Disabled Button' });

  expect(buttonComponent).toBeInTheDocument();
  expect(inputComponent).toBeInTheDocument();

  fireEvent.click(inputComponent);

  expect(buttonComponent).toHaveStyle({ backgroundColor: 'gray' });
  expect(buttonComponent).toHaveTextContent('Change to red');

  fireEvent.click(inputComponent);

  expect(buttonComponent).toHaveStyle({ backgroundColor: 'blue' });
});
