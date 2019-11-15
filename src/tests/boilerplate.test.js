import React from 'react';
import ReactDOM from 'react-dom';
import { LoadingPageWrapper } from '../components/wrappers';

test('LoadingPageWrapper renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<LoadingPageWrapper>children</LoadingPageWrapper>, div);
   ReactDOM.unmountComponentAtNode(div);
});
