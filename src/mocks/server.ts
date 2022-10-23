import { setupServer } from 'msw/node';
import { userDataHandler } from './user-data/user-data-handler';

export const server = setupServer(...userDataHandler);
