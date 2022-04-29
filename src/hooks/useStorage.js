export const useStorage = () => {

    const saveStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
      }
    
      const getStorage = (key) => {
        return JSON.parse(localStorage.getItem(key));
      }

      const checkStorage = ()  =>{
        const storage = getStorage('cart')
        if (storage === null) {
          saveStorage('cart', [])
        }
      }

      return{
        saveStorage,
        getStorage,
        checkStorage,
      }

}
