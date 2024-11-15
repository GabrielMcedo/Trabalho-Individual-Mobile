export const authService = {
    login: async (username: string, password: string) => {
      return username === 'user' && password === 'pass';
    },
  };
  