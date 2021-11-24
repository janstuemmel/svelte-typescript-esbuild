import {
  render,
  fireEvent,
} from '@testing-library/svelte';

import App from './App.svelte';

test('shows hello world', () => {
  const { getByText } = render(App);
  expect(getByText('Hello World!')).toBeInTheDocument();
});

test('shows button count', async () => {
  const { getByText } = render(App);
  const button = getByText('Clicked 0 times!');
  await fireEvent.click(button);
  expect(button).toHaveTextContent('Clicked 1 times!');
});
