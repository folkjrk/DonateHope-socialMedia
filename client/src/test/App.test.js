import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import PostWidget from '../scenes/widgets/PostWidget';
import { toBeInTheDocument , toHaveAttribute  } from '@testing-library/jest-dom';

const mockStore = configureStore([]);
const store = mockStore({});

// Define sample data for the post
const post = {
  postId: '64987aa8b4c479132a32874e',
  postUserId: '6498785cb4c479132a328740',
  name: 'jarmekorn',
  description: 'Lend a hand with your donation',
  location: 'Birmingham',
  picturePath: 'post-image.jpg',
  filePath: 'donation-ppt.pptx',
  audioPath: 'audio-file.mp3',
  userPicturePath: 'DP1.jpg',
  likes: {
    '649876bdb4c479132a3286f9': true
  },
  comments: []
};

test('renders PostWidget component with correct data', async () => {
  render(
    <Provider store={store}>
      <PostWidget {...post} />
    </Provider>
  );
  await screen.findByAltText('post');
  expect(screen.getByAltText('post')).toHaveAttribute('src', 'http://localhost:3001/assets/post-image.jpg');
});


test('renders MyAudioPlayer component with correct data', async () => {
  render(
    <Provider store={store}>
      <PostWidget {...post} />
    </Provider>
  );
  await screen.findByTestId('audio-player');
  const audioElement = screen.getByTestId('audio-player');
  const unsupportedFormatElement = screen.queryByText('Unsupported file format');

  if (audioElement) {
    expect(audioElement).toBeInTheDocument();
    expect(audioElement).toHaveAttribute('src', 'http://localhost:3001/assets/audio-file.mp3');
  } else {
    expect(unsupportedFormatElement).toBeInTheDocument();
  }
});

test('renders FileViewer component with correct data', () => {
  render(
    <Provider store={store}>
      <PostWidget {...post} />
    </Provider>
  );

  const filePathElement = screen.getByText('donation-ppt.pptx');
  const fileLinkElement = screen.getByRole('link');
  const unsupportedFormatElement = screen.queryByText('Unsupported file format');
  if(fileLinkElement){
    expect(filePathElement).toBeInTheDocument();
    expect(fileLinkElement).toHaveAttribute('href', 'http://localhost:3001/assets/donation-ppt.pptx');
  } else {
    expect(unsupportedFormatElement).toBeInTheDocument();
  }
});









