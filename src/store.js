import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
      API_URL: 'https://www.breakingbadapi.com/api/characters',
      characters: null,
      error: null,
      charactersLength: null,
      loader: 0,
      selectCategory: 'Seleziona la serie',
      callApi: (url) => {
            axios.get(url)
                  .then(response => {
                        /* console.log(response.data); */
                        store.characters = response.data
                        store.charactersLength = response.data.length
                        store.loader = 1

                  })
                  .catch(err => {
                        store.error = err.message
                  })
      }
})
