// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from "redux-mock-store";
// import PostWidget from '../scenes/widgets/PostWidget';
// import MyAudioPlayer from 'components/AudioPlayer';
// import { toBeInTheDocument } from '@testing-library/jest-dom';
// import { fireEvent } from '@testing-library/react';
// import { setPost } from '../state/index';

// // Import the mock functions
// import { mockGetPosts, mockGetUserPosts } from './mockServiceWorker'; // Update the file path

// const mockStore = configureStore([]);
// const store = mockStore({});

// // Define sample data for the post
// const post = {
//   postId: '64987aa8b4c479132a32874e',
//   postUserId: '6498785cb4c479132a328740',
//   name: 'Rutvik Patel',
//   description: 'Lend a hand with your donation',
//   location: 'India',
//   picturePath: 'post-image.jpg',
//   filePath: 'donation-ppt.pptx',
//   audioPath: 'audio-file.mp3',
//   userPicturePath: 'DP1.jpg',
//   likes: {
//     '649876bdb4c479132a3286f9': true
//   },
//   comments: []
// };

// test('renders PostWidget component with correct data', async () => {
//   // Mock the API calls by providing the mock data
//   jest.spyOn(window, 'fetch')
//     .mockImplementationOnce(() => Promise.resolve({ json: () => mockGetPosts() }))
//     .mockImplementationOnce(() => Promise.resolve({ json: () => mockGetUserPosts() }));
//   // Render the component with the sample data
//   render(
//     <Provider store={store}>
//       <PostWidget {...post} />
//     </Provider>
//   );
//   // Wait for the component to finish rendering and the API calls to complete
//   await screen.findByAltText('post');
//   // Assert that the rendered data is correct
//   expect(screen.getByAltText('post')).toHaveAttribute('src', 'http://localhost:3001/assets/post-image.jpg');
// });


// test('renders MyAudioPlayer component with correct data', async () => {
//   // Mock the API calls by providing the mock data
//   jest.spyOn(window, 'fetch')
//     .mockImplementationOnce(() => Promise.resolve({ json: () => mockGetPosts() }))
//     .mockImplementationOnce(() => Promise.resolve({ json: () => mockGetUserPosts() }));
//   // Render the component with the sample data
//   render(
//     <Provider store={store}>
//       <MyAudioPlayer {...post} />
//     </Provider>
//   );
//   // Wait for the component to finish rendering and the API calls to complete
//   await screen.findByTestId('audio-player');
//   // Assert that the rendered data is correct
//   const audioElement = screen.getByTestId('audio-player');
//   const unsupportedFormatElement = screen.queryByText('Unsupported file format');

//   if (audioElement) {
//     expect(audioElement).toBeInTheDocument();
//     expect(audioElement).toHaveAttribute('src', 'http://localhost:3001/assets/audio-file.mp3');
//   } else {
//     expect(unsupportedFormatElement).toBeInTheDocument();
//   }
// });



// const postId = '64987aa8b4c479132a32874e';
// const postUserId = '6498785cb4c479132a328740';
// const loggedInUserId = '649876bdb4c479132a3286f9';
// const initialPostData = {
//   postId,
//   postUserId,
//   name: 'Rutvik Patel',
//   description: 'Lend a hand with your donation',
//   location: 'India',
//   picturePath: 'post-image.jpg',
//   filePath: 'donation-ppt.pptx',
//   audioPath: 'audio-file.mp3',
//   userPicturePath: 'DP1.jpg',
//   likes: {
//     [loggedInUserId]: true,
//   },
//   comments: [],
// };

// test('should dispatch setPost action with updated post data on patchLike', async () => {
//   const store = mockStore({
//     token: 'your-token',
//     user: { _id: '64987aa8b4c479132a32874e' },
//   });
//   // Mock the fetch function to return a successful response
//   global.fetch = jest.fn().mockResolvedValueOnce({
//     json: jest.fn().mockResolvedValueOnce(initialPostData),
//   });

//   // Render the component with initial post data
//   render(
//     <Provider store={store}>
//       <PostWidget {...initialPostData} />
//     </Provider>
//   );

//   // Find and click the like button
//   const likeButton = screen.getByRole('button', { name: 'Like' });
//   fireEvent.click(likeButton);

//   // Wait for the dispatch to complete
//   await Promise.resolve();

//   // Check if the setPost action was dispatched with the updated post data
//   const actions = store.getActions();
//   expect(actions).toEqual([
//     {
//       type: setPost.type,
//       payload: { post: initialPostData },
//     },
//   ]);

//   // Verify that the fetch function was called with the correct arguments
//   expect(fetch).toHaveBeenCalledWith(`http://localhost:3001/posts/${postId}/like`, {
//     method: 'PATCH',
//     headers: {
//       Authorization: 'eyJhbGciOiJIUzM4NCJ9.e30.6E9ZPwwssfIOVQRPqZvsWXw0WmlgAasUGVNRlF0p1gJPMkA901XkOSxskAfefN1S',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userId: loggedInUserId }),
//   });
// });