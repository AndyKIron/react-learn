

export const flagService = {
  getFlags: async () => {
    const response = await fetch('http://localhost:3000/flags');
    return response.json();
  },
};
