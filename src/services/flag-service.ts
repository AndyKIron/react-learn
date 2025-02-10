

export const flagService = {
  getFlags: async () => {
    const response = await fetch('http://localhost:3000/flags');
    if (!response.ok) throw new Error('Failed to fetch flags');
    return await response.json();
  },
};
