export const storage = {
  get: (name: string) => {
    return localStorage.getItem(name);
  },

  save: (name: string, value: string) => {
    localStorage.setItem(name, value)
  },

  removeAll: () => {
    localStorage.clear()
  }
}