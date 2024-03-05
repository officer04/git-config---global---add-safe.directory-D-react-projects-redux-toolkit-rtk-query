import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites/favorites.slice';
import usersReducer from './user/userSlice';
import { api } from './api/api';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    users: usersReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(logger),
});
