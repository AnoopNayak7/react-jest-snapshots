import {render, screen, cleanup} from '@testing-library/react'
import Todo from '../todo';
import renderer from 'react-test-renderer'

afterEach(() => {
    cleanup()
})
test('should render todo component that is not completed', () => {
    const todo =  { id: 1, title: "wash dishes", completed: false }
    render(<Todo todo={todo} />);
    const tododElement = screen.getByTestId('todo-1');
    expect(tododElement).toBeInTheDocument();
    expect(tododElement).toHaveTextContent("wash dishes")
    expect(tododElement).not.toContainHTML('<strike>')
})

test('should render todo component that is completed', () => {
    const todo =  { id: 2, title: "wash car", completed: true }
    render(<Todo todo={todo} />);
    const tododElement = screen.getByTestId('todo-2');
    expect(tododElement).toBeInTheDocument();
    expect(tododElement).toHaveTextContent("wash car");
    expect(tododElement).not.toContainHTML('<strike>')
});

test('match snapshots', () => {
    const todo =  { id: 2, title: "wash car", completed: false };
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot();
})