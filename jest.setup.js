import '@testing-library/jest-native/extend-expect';

// Avoid relying on internal RN module paths; Expo preset handles most mocks.
// Provide lightweight mocks for Expo UI components used in the app.

// Mock expo-status-bar to avoid native calls
jest.mock('expo-status-bar', () => ({
  StatusBar: () => null,
}));

// Mock expo-linear-gradient
jest.mock('expo-linear-gradient', () => ({
  LinearGradient: ({ children }) => children || null,
}));
